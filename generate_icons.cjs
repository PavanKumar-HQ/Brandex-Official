const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImagePath = path.join(__dirname, 'public/logo_nobg.webp');
const publicDir = path.join(__dirname, 'public');

async function generateIcons() {
  try {
    // Generate android-chrome-192x192.png
    await sharp(inputImagePath)
      .resize(192, 192)
      .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
    console.log('Generated android-chrome-192x192.png');

    // Generate android-chrome-512x512.png
    await sharp(inputImagePath)
      .resize(512, 512)
      .toFile(path.join(publicDir, 'android-chrome-512x512.png'));
    console.log('Generated android-chrome-512x512.png');

    // Generate apple-touch-icon.png (180x180)
    await sharp(inputImagePath)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('Generated apple-touch-icon.png');

    // Generate favicon.png
    await sharp(inputImagePath)
      .resize(32, 32)
      .toFile(path.join(publicDir, 'favicon.png'));
    console.log('Generated favicon.png');

    // Generate mstile-150x150.png
    await sharp(inputImagePath)
      .resize(150, 150)
      .toFile(path.join(publicDir, 'mstile-150x150.png'));
    console.log('Generated mstile-150x150.png');

  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
