import os
from PIL import Image, ImageDraw

def generate_icons():
    im2_path = '/Users/pavankumars/.gemini/antigravity-ide/brain/2fc62024-3bfb-455a-960c-1ed14339f7e2/.user_uploaded/media_1790092893620.png'
    im3_path = '/Users/pavankumars/.gemini/antigravity-ide/brain/2fc62024-3bfb-455a-960c-1ed14339f7e2/.user_uploaded/media_1790092949833.png'
    public_dir = '/Users/pavankumars/Downloads/Brandex-Official/public'

    im2 = Image.open(im2_path)
    im3 = Image.open(im3_path)

    # -------------------------------------------------------------
    # 1. IMAGE 2: Colored Geometric Logo for Google Search Results
    # -------------------------------------------------------------
    crop2 = im2.crop(im2.getbbox())
    w2, h2 = crop2.size

    # Base 512x512 square canvas with ~12% breathing room
    base2 = Image.new('RGBA', (512, 512), (0, 0, 0, 0))
    ratio2 = min(420 / w2, 420 / h2)
    nw2, nh2 = int(w2 * ratio2), int(h2 * ratio2)
    r2 = crop2.resize((nw2, nh2), Image.Resampling.LANCZOS)
    x2 = (512 - nw2) // 2
    y2 = (512 - nh2) // 2
    base2.paste(r2, (x2, y2), r2)

    # Google Search favicon sizes (Google specifies multiples of 48px: 48x48, 96x96, 192x192)
    base2.resize((48, 48), Image.Resampling.LANCZOS).save(os.path.join(public_dir, 'favicon-48x48.png'))
    base2.resize((96, 96), Image.Resampling.LANCZOS).save(os.path.join(public_dir, 'favicon-96x96.png'))
    base2.resize((192, 192), Image.Resampling.LANCZOS).save(os.path.join(public_dir, 'android-chrome-192x192.png'))
    base2.resize((512, 512), Image.Resampling.LANCZOS).save(os.path.join(public_dir, 'android-chrome-512x512.png'))
    base2.save(os.path.join(public_dir, 'brandex-search-logo.png'))

    # Apple touch icon with sleek subtle dark badge so it pops on iOS home screen
    ios_base = Image.new('RGBA', (180, 180), (11, 15, 25, 255))
    ios_ratio = min(140 / w2, 140 / h2)
    iw2, ih2 = int(w2 * ios_ratio), int(h2 * ios_ratio)
    ios_r2 = crop2.resize((iw2, ih2), Image.Resampling.LANCZOS)
    ios_base.paste(ios_r2, ((180 - iw2) // 2, (180 - ih2) // 2), ios_r2)
    ios_base.save(os.path.join(public_dir, 'apple-touch-icon.png'))

    print("✔ Successfully generated Google Search result favicons from Image 2 (Colored Logo)")

    # -------------------------------------------------------------
    # 2. IMAGE 3: White Geometric Emblem for Browser Tab Favicon
    # -------------------------------------------------------------
    crop3 = im3.crop(im3.getbbox())
    w3, h3 = crop3.size

    # A) Dark mode browser tab: Pure white emblem on transparent
    base3_dark = Image.new('RGBA', (512, 512), (0, 0, 0, 0))
    ratio3 = min(420 / w3, 420 / h3)
    nw3, nh3 = int(w3 * ratio3), int(h3 * ratio3)
    r3 = crop3.resize((nw3, nh3), Image.Resampling.LANCZOS)
    x3 = (512 - nw3) // 2
    y3 = (512 - nh3) // 2
    base3_dark.paste(r3, (x3, y3), r3)
    base3_dark.save(os.path.join(public_dir, 'favicon-tab-dark.png'))

    # B) Light mode browser tab & Universal ICO: White emblem inside sleek dark badge (#0b0f19)
    # This prevents white-on-white invisibility on light browser tabs
    base3_light = Image.new('RGBA', (512, 512), (0, 0, 0, 0))
    draw = ImageDraw.Draw(base3_light)
    draw.rounded_rectangle([18, 18, 512 - 18, 512 - 18], radius=110, fill=(11, 15, 25, 255))
    
    badge_ratio3 = min(360 / w3, 360 / h3)
    bw3, bh3 = int(w3 * badge_ratio3), int(h3 * badge_ratio3)
    br3 = crop3.resize((bw3, bh3), Image.Resampling.LANCZOS)
    base3_light.paste(br3, ((512 - bw3) // 2, (512 - bh3) // 2), br3)
    base3_light.save(os.path.join(public_dir, 'favicon-tab-light.png'))

    # Standard browser tab PNG favicons
    base3_light.resize((32, 32), Image.Resampling.LANCZOS).save(os.path.join(public_dir, 'favicon-32x32.png'))
    base3_light.resize((16, 16), Image.Resampling.LANCZOS).save(os.path.join(public_dir, 'favicon-16x16.png'))
    base3_light.resize((32, 32), Image.Resampling.LANCZOS).save(os.path.join(public_dir, 'favicon-tab-32x32.png'))

    # Multi-resolution ICO (16, 32, 48) containing Image 3
    ico16 = base3_light.resize((16, 16), Image.Resampling.LANCZOS)
    ico32 = base3_light.resize((32, 32), Image.Resampling.LANCZOS)
    ico48 = base3_light.resize((48, 48), Image.Resampling.LANCZOS)
    ico16.save(os.path.join(public_dir, 'favicon.ico'), format='ICO', sizes=[(16, 16), (32, 32), (48, 48)], append_images=[ico32, ico48])

    print("✔ Successfully generated Browser Tab favicons from Image 3 (White Emblem)")

if __name__ == '__main__':
    generate_icons()
