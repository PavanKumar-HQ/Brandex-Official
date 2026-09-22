import os
import subprocess
import time
from PIL import Image

PROJECTS = [
    {
        "id": "vignan-public-school",
        "url": "https://www.vignanschool.com",
        "output_webp": "public/Clients/vignan-public-school-preview.webp",
    },
    {
        "id": "vignan-tutorials",
        "url": "https://www.vignantutorials.in",
        "output_webp": "public/Clients/vignan-tutorials-preview.webp",
    },
    {
        "id": "srushti-publications",
        "url": "https://srushtipublications.com",
        "output_webp": "public/Clients/srushti-preview.webp",
    },
    {
        "id": "geniusphere",
        "url": "https://www.geniusphere.tech",
        "output_webp": "public/Clients/geniusphere-preview.webp",
    },
    {
        "id": "propquant-ai",
        "url": "https://www.propquant.ai",
        "output_webp": "public/Clients/propquant-ai-preview.webp",
    },
]

BRAVE_PATH = "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"

def capture_and_convert(proj):
    url = proj["url"]
    out_webp = proj["output_webp"]
    tmp_png = f"/tmp/{proj['id']}_raw.png"
    
    print(f"\n[Capture] Fetching real screenshot from {url}...")
    
    cmd = [
        BRAVE_PATH,
        "--headless",
        f"--screenshot={tmp_png}",
        "--window-size=1280,800",
        "--virtual-time-budget=6000",
        "--hide-scrollbars",
        "--disable-gpu",
        url
    ]
    
    try:
        subprocess.run(cmd, check=True, timeout=25, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if os.path.exists(tmp_png) and os.path.getsize(tmp_png) > 1000:
            im = Image.open(tmp_png)
            # Resize slightly to standard crisp card dimensions (1200x750) if needed
            im.thumbnail((1280, 800), Image.Resampling.LANCZOS)
            os.makedirs(os.path.dirname(out_webp), exist_ok=True)
            im.save(out_webp, "WEBP", quality=82, method=6)
            size_kb = os.path.getsize(out_webp) / 1024
            print(f"✔ Saved real screenshot to {out_webp} ({size_kb:.1f} KB)")
        else:
            print(f"✖ Failed or empty screenshot for {url}")
    except Exception as e:
        print(f"✖ Error capturing {url}: {e}")

if __name__ == "__main__":
    for proj in PROJECTS:
        capture_and_convert(proj)
        time.sleep(1)
    print("\n[Done] All real screenshots captured and converted to local WebP assets.")
