import os
from PIL import Image

def split_japanese_tattoos():
    src_dir = r'C:\BurntThumbWorks\Websites\BurntThumbWorks\assets\manuscript\pngs'
    out_dir = r'C:\BurntThumbWorks\Websites\BurntThumbWorks\assets\manuscript\split\japanese_tattoo'
    os.makedirs(out_dir, exist_ok=True)
    
    # We remove heraldic_beast_01.png which was the outer border
    h01 = r'C:\BurntThumbWorks\Websites\BurntThumbWorks\assets\manuscript\split\heraldry\heraldic_beast_01.png'
    if os.path.exists(h01):
        os.remove(h01)
        print("Removed full-frame heraldic_beast_01.png")
        
    for fname in sorted(os.listdir(src_dir)):
        if not fname.endswith('.png'): continue
        im_path = os.path.join(src_dir, fname)
        im = Image.open(im_path).convert('RGBA')
        w, h = im.size
        alpha = im.split()[-1]
        
        factor = 6
        sw, sh = w // factor, h // factor
        sa = alpha.resize((sw, sh), Image.Resampling.BOX)
        
        grid = [[sa.getpixel((x, y)) > 30 for x in range(sw)] for y in range(sh)]
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
                            if 0 <= nx < sw and 0 <= ny < sh:
                                if not visited[ny][nx] and grid[ny][nx]:
                                    visited[ny][nx] = True
                                    q.append((nx, ny))
                    bw = (max_x - min_x) * factor
                    bh = (max_y - min_y) * factor
                    # Substantial figure: at least 400 pixels at 1/6 scale and 250px real dimension
                    if len(pixels) > 400 and bw > 250 and bh > 250:
                        components.append((min_x * factor, min_y * factor, (max_x + 1) * factor, (max_y + 1) * factor, len(pixels)))
        
        # Sort components top to bottom, left to right
        components.sort(key=lambda c: (c[1], c[0]))
        base_name = os.path.splitext(fname)[0].replace('JapaneseTattoo_', 'fig_')
        
        print(f"{fname}: {len(components)} figures extracted")
        for idx, (bx0, by0, bx1, by1, count) in enumerate(components):
            pad = 20
            x0 = max(0, bx0 - pad)
            y0 = max(0, by0 - pad)
            x1 = min(w, bx1 + pad)
            y1 = min(h, by1 + pad)
            crop = im.crop((x0, y0, x1, y1))
            c_alpha = crop.split()[-1]
            tight = c_alpha.getbbox()
            if tight:
                crop = crop.crop(tight)
            if crop.size[0] >= 150 and crop.size[1] >= 150:
                out_name = f"{base_name}_{idx+1:02d}.png" if len(components) > 1 else f"{base_name}.png"
                out_path = os.path.join(out_dir, out_name)
                crop.save(out_path, "PNG", optimize=True)
                print(f"  Saved {out_name}: {crop.size}")

split_japanese_tattoos()
