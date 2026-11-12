import os
from PIL import Image

def split_heraldic():
    src_path = r'C:\BurntThumbWorks\Websites\BurntThumbWorks\assets\manuscript\heraldry\Heraldic beast collectiozn.png'
    out_dir = r'C:\BurntThumbWorks\Websites\BurntThumbWorks\assets\manuscript\split\heraldry'
    os.makedirs(out_dir, exist_ok=True)
    
    im = Image.open(src_path).convert('RGBA')
    w, h = im.size
    alpha = im.split()[-1]
    
    # Let's inspect downsampled
    factor = 6
    sw, sh = w // factor, h // factor
    sa = alpha.resize((sw, sh), Image.Resampling.BOX)
    
    # We want to identify distinct beasts. Let's ignore pixels within 80px of borders (often border lines)
    grid = [[False]*sw for _ in range(sh)]
    border_margin = int(80 / factor)
    for y in range(border_margin, sh - border_margin):
        for x in range(border_margin, sw - border_margin):
            if sa.getpixel((x, y)) > 40:
                grid[y][x] = True
                
    visited = [[False]*sw for _ in range(sh)]
    components = []
    
    for y in range(sh):
        for x in range(sw):
            if grid[y][x] and not visited[y][x]:
                q = [(x, y)]
                visited[y][x] = True
                min_x, max_x = x, x
                min_y, max_y = y, y
                pixels = []
                while q:
                    cx, cy = q.pop()
                    pixels.append((cx, cy))
                    if cx < min_x: min_x = cx
                    if cx > max_x: max_x = cx
                    if cy < min_y: min_y = cy
                    if cy > max_y: max_y = cy
                    for dx, dy in ((-1,0), (1,0), (0,-1), (0,1), (-1,-1), (1,-1), (-1,1), (1,1)):
                        nx, ny = cx + dx, cy + dy
                        if border_margin <= nx < sw - border_margin and border_margin <= ny < sh - border_margin:
                            if not visited[ny][nx] and grid[ny][nx]:
                                visited[ny][nx] = True
                                q.append((nx, ny))
                # Only keep substantial figures
                bw = (max_x - min_x) * factor
                bh = (max_y - min_y) * factor
                if len(pixels) > 200 and bw > 150 and bh > 150:
                    components.append((min_x * factor, min_y * factor, (max_x + 1) * factor, (max_y + 1) * factor, len(pixels)))
                    
    print(f"Heraldic collection: extracted {len(components)} figures")
    # Sort by size / position
    components.sort(key=lambda c: (c[1], c[0]))
    for i, (bx0, by0, bx1, by1, count) in enumerate(components):
        # Add padding
        pad = 20
        x0 = max(0, bx0 - pad)
        y0 = max(0, by0 - pad)
        x1 = min(w, bx1 + pad)
        y1 = min(h, by1 + pad)
        crop = im.crop((x0, y0, x1, y1))
        # Tight crop to alpha
        c_alpha = crop.split()[-1]
        tight_bbox = c_alpha.getbbox()
        if tight_bbox:
            crop = crop.crop(tight_bbox)
        # Only save if substantial dimensions
        if crop.size[0] >= 120 and crop.size[1] >= 120:
            out_file = os.path.join(out_dir, f"heraldic_beast_{i+1:02d}.png")
            crop.save(out_file, "PNG", optimize=True)
            print(f"  Saved {os.path.basename(out_file)}: {crop.size}")

split_heraldic()
