import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");
const geojsonPath = path.resolve(publicDir, "world-land.json");
const texturesDir = path.resolve(publicDir, "textures");

if (!fs.existsSync(texturesDir)) {
  fs.mkdirSync(texturesDir, { recursive: true });
}

const geojson = JSON.parse(fs.readFileSync(geojsonPath, "utf-8"));

async function generate() {
  console.log("Launching headless browser to render textures...");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  const results = await page.evaluate((geo) => {
    const width = 1024;
    const height = 512;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    const bumpCanvas = document.createElement("canvas");
    bumpCanvas.width = width;
    bumpCanvas.height = height;
    const bCtx = bumpCanvas.getContext("2d");

    // 1. Fill Deep Cosmic Purple-Indigo Oceanic Base
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
    oceanGrad.addColorStop(0, "#070314");
    oceanGrad.addColorStop(0.25, "#0d0628");
    oceanGrad.addColorStop(0.5, "#14083a");
    oceanGrad.addColorStop(0.75, "#0d0628");
    oceanGrad.addColorStop(1, "#070314");
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, width, height);

    bCtx.fillStyle = "#000000";
    bCtx.fillRect(0, 0, width, height);

    const toCanvas = (lng, lat) => {
      const x = ((lng + 180) / 360) * width;
      const y = ((90 - lat) / 180) * height;
      return [x, y];
    };

    if (geo && geo.features) {
      const drawGeoPolygon = (coords, isBump = false) => {
        const targetCtx = isBump ? bCtx : ctx;
        targetCtx.save();
        targetCtx.beginPath();
        for (let r = 0; r < coords.length; r++) {
          const ring = coords[r];
          if (!ring || ring.length === 0) continue;
          const [startX, startY] = toCanvas(ring[0][0], ring[0][1]);
          targetCtx.moveTo(startX, startY);
          for (let i = 1; i < ring.length; i++) {
            const [x, y] = toCanvas(ring[i][0], ring[i][1]);
            targetCtx.lineTo(x, y);
          }
        }
        targetCtx.closePath();

        if (!isBump) {
          targetCtx.fillStyle = "#3c2182";
          targetCtx.fill();
          targetCtx.strokeStyle = "#818cf8";
          targetCtx.lineWidth = 1.2;
          targetCtx.stroke();
        } else {
          targetCtx.fillStyle = "#ffffff";
          targetCtx.fill();
        }
        targetCtx.restore();
      };

      geo.features.forEach((feature) => {
        const geom = feature.geometry;
        if (!geom) return;
        if (geom.type === "Polygon") {
          drawGeoPolygon(geom.coordinates, false);
          drawGeoPolygon(geom.coordinates, true);
        } else if (geom.type === "MultiPolygon") {
          geom.coordinates.forEach((poly) => {
            drawGeoPolygon(poly, false);
            drawGeoPolygon(poly, true);
          });
        }
      });
    }

    // High-Tech Dotted Matrix Rasterization
    const dotCanvas = document.createElement("canvas");
    dotCanvas.width = 8;
    dotCanvas.height = 8;
    const dCtx = dotCanvas.getContext("2d");
    dCtx.fillStyle = "rgba(192, 132, 252, 0.55)";
    dCtx.beginPath();
    dCtx.arc(4, 4, 1.2, 0, Math.PI * 2);
    dCtx.fill();
    const pattern = ctx.createPattern(dotCanvas, "repeat");
    if (pattern) {
      ctx.save();
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }

    // Subtle Global Coordinate Matrix Lines
    ctx.strokeStyle = "rgba(129, 140, 248, 0.12)";
    ctx.lineWidth = 1;
    for (let lat = -80; lat <= 80; lat += 20) {
      const y = ((90 - lat) / 180) * height;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    for (let lng = -180; lng <= 180; lng += 30) {
      const x = ((lng + 180) / 360) * width;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    return {
      earth: canvas.toDataURL("image/webp", 0.9),
      bump: bumpCanvas.toDataURL("image/webp", 0.85),
    };
  }, geojson);

  await browser.close();

  const earthData = Buffer.from(results.earth.split(",")[1], "base64");
  const bumpData = Buffer.from(results.bump.split(",")[1], "base64");

  fs.writeFileSync(path.resolve(texturesDir, "purple-earth.webp"), earthData);
  fs.writeFileSync(path.resolve(texturesDir, "purple-bump.webp"), bumpData);

  console.log(`Generated purple-earth.webp: ${(earthData.length / 1024).toFixed(1)} KB`);
  console.log(`Generated purple-bump.webp: ${(bumpData.length / 1024).toFixed(1)} KB`);
}

generate().catch(console.error);
