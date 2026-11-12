import os
from PIL import Image

def build_web_assets():
    base_dir = r'C:\BurntThumbWorks\Websites\BurntThumbWorks\assets\manuscript'
    games_dir = os.path.join(base_dir, 'games')
    apps_dir = os.path.join(base_dir, 'apps')
    ornaments_dir = os.path.join(base_dir, 'ornaments')
    
    os.makedirs(games_dir, exist_ok=True)
    os.makedirs(apps_dir, exist_ok=True)
    os.makedirs(ornaments_dir, exist_ok=True)
    
    # Let's inspect figures and create web-ready versions
    # For web display, 400-500px max dimension is crisp even on retina screens at 130-170px display size,
    # and keeps file size down to ~25-60 KB per asset!
    
    def export_web(src, dst_dir, name, max_dim=480):
        im = Image.open(src).convert('RGBA')
        w, h = im.size
        scale = min(max_dim / max(w, h), 1.0)
        nw, nh = int(w * scale), int(h * scale)
        res = im.resize((nw, nh), Image.Resampling.LANCZOS)
        out_path = os.path.join(dst_dir, name)
        res.save(out_path, "PNG", optimize=True)
        print(f"Exported {name}: {nw}x{nh} ({os.path.getsize(out_path)//1024} KB)")
        return nw, nh
        
    split_tat = os.path.join(base_dir, 'split', 'japanese_tattoo')
    split_her = os.path.join(base_dir, 'split', 'heraldry')
    
    # Games:
    # 1. GrimmKart: folklore cart/beast racer -> heraldic lion / dragon / folkloric racer beast
    # Let's look at fig_-06_01 (folklore warrior/demon mask), heraldic_beast_03, heraldic_beast_04
    export_web(os.path.join(split_tat, 'fig_-06_01.png'), games_dir, 'grimmkart-folklore-beast.png')
    export_web(os.path.join(split_tat, 'fig_-06_02.png'), games_dir, 'grimmkart-mask.png')
    export_web(os.path.join(split_her, 'heraldic_beast_04.png'), games_dir, 'grimmkart-steed.png')
    
    # 2. The Hook and the Skein: narrative dark fantasy Low Vale traveler / skein thread / loom
    # fig_-08 is the dramatic traveler/weaver figure; fig_-03 is dramatic figure
    export_web(os.path.join(split_tat, 'fig_-08.png'), games_dir, 'hook-and-skein-traveler.png')
    export_web(os.path.join(split_tat, 'fig_-03.png'), games_dir, 'hook-and-skein-weaver.png')
    export_web(os.path.join(split_her, 'heraldic_beast_09.png'), games_dir, 'hook-and-skein-gryphon.png')
    
    # 3. Scarward: containment circle / tension & spool / rust dial / vrakoni beasts
    # fig_-12_01 is long winding dragon/spool banner, heraldic_beast_20 is rampant dragon/beast
    export_web(os.path.join(split_tat, 'fig_-12_02.png'), games_dir, 'scarward-containment-warden.png')
    export_web(os.path.join(split_her, 'heraldic_beast_20.png'), games_dir, 'scarward-vrakoni-beast.png')
    export_web(os.path.join(split_tat, 'fig_-11_02.png'), games_dir, 'scarward-sentinel.png')

    # Apps:
    # 1. Garden Sage: horticulture / flora / botanical root / crop wisdom
    # fig_-02 is intricate botanical flora/foliage! fig_-07_01 is floral branch
    export_web(os.path.join(split_tat, 'fig_-02.png'), apps_dir, 'garden-sage-botanical.png')
    export_web(os.path.join(split_tat, 'fig_-07_01.png'), apps_dir, 'garden-sage-flora.png')
    export_web(os.path.join(split_tat, 'fig_-07_03.png'), apps_dir, 'garden-sage-seedling.png')
    
    # 2. Pantry Panda: pantry / cellar harvest / provisions / balance
    # fig_-09 is coiled guardian of stores; fig_-07_04 is provisions basket / gourd
    export_web(os.path.join(split_tat, 'fig_-09.png'), apps_dir, 'pantry-panda-guardian.png')
    export_web(os.path.join(split_tat, 'fig_-07_04.png'), apps_dir, 'pantry-panda-harvest.png')
    export_web(os.path.join(split_tat, 'fig_-05_01.png'), apps_dir, 'pantry-panda-provisions.png')

    # Ornaments / Marginalia for heroes, headers, dividers:
    # Frontispiece hero left & right
    export_web(os.path.join(split_tat, 'fig_-01.png'), ornaments_dir, 'frontispiece-beast-left.png')
    export_web(os.path.join(split_tat, 'fig_-04_02.png'), ornaments_dir, 'frontispiece-dragon-right.png')
    # Small crests / seals / heraldic beasts
    export_web(os.path.join(split_her, 'heraldic_beast_02.png'), ornaments_dir, 'heraldic-lion-rampant.png')
    export_web(os.path.join(split_her, 'heraldic_beast_05.png'), ornaments_dir, 'heraldic-griffin.png')
    export_web(os.path.join(split_her, 'heraldic_beast_10.png'), ornaments_dir, 'heraldic-stag.png')
    export_web(os.path.join(split_her, 'heraldic_beast_15.png'), ornaments_dir, 'heraldic-falcon.png')
    export_web(os.path.join(split_tat, 'fig_-12_01.png'), ornaments_dir, 'manuscript-border-ribbon.png')
    export_web(os.path.join(split_tat, 'fig_-13.png'), ornaments_dir, 'manuscript-great-wyrm.png')

build_web_assets()
