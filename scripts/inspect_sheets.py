import os
from PIL import Image

manuscript_dir = r'C:\BurntThumbWorks\Websites\BurntThumbWorks\assets\manuscript'

def analyze_image(path):
    im = Image.open(path)
    print(f"\n=== Analyzing {os.path.basename(path)} (Size: {im.size}, Mode: {im.mode}) ===")
    if im.mode != 'RGBA':
        im = im.convert('RGBA')
    
    alpha = im.split()[-1]
    
    # Scale down by 10x for fast connected component analysis
    factor = 10
    small_w = im.size[0] // factor
    small_h = im.size[1] // factor
    small_alpha = alpha.resize((small_w, small_h), Image.Resampling.BOX)
    
    # Grid of non-empty pixels (alpha > 30)
    grid = [[small_alpha.getpixel((x, y)) > 30 for x in range(small_w)] for y in range(small_h)]
    visited = [[False]*small_w for _ in range(small_h)]
    
    components = []
    
    for y in range(small_h):
        for x in range(small_w):
            if grid[y][x] and not visited[y][x]:
                q = [(x, y)]
                visited[y][x] = True
                min_x, max_x = x, x
                min_y, max_y = y, y
                count = 0
                while q:
                    cx, cy = q.pop()
                    count += 1
                    if cx < min_x: min_x = cx
                    if cx > max_x: max_x = cx
                    if cy < min_y: min_y = cy
                    if cy > max_y: max_y = cy
                    for dx, dy in ((-1,0), (1,0), (0,-1), (0,1), (-1,-1), (1,-1), (-1,1), (1,1)):
                        nx, ny = cx + dx, cy + dy
                        if 0 <= nx < small_w and 0 <= ny < small_h:
                            if not visited[ny][nx] and grid[ny][nx]:
                                visited[ny][nx] = True
                                q.append((nx, ny))
                # Only keep significant components (> 300 pixels in downscaled space)
                if count > 200:
                    orig_bbox = (min_x * factor, min_y * factor, min(im.size[0], (max_x + 1) * factor), min(im.size[1], (max_y + 1) * factor))
                    components.append((orig_bbox, count))
                    
    print(f"Found {len(components)} significant components:")
    for idx, (bbox, count) in enumerate(components):
        bw = bbox[2] - bbox[0]
        bh = bbox[3] - bbox[1]
        print(f"  Fig {idx+1}: bbox=({bbox[0]}, {bbox[1]}, {bbox[2]}, {bbox[3]}) size={bw}x{bh} (weight={count})")
    return components

# Test heraldry
analyze_image(os.path.join(manuscript_dir, 'heraldry', 'Heraldic beast collectiozn.png'))

# Test pngs
png_dir = os.path.join(manuscript_dir, 'pngs')
for fname in sorted(os.listdir(png_dir)):
    if fname.endswith('.png'):
        analyze_image(os.path.join(png_dir, fname))
