# Marketing asset inventory

Paths are relative to the repository root. Copy assets into a separate website project only if that project’s ownership and licensing expectations are clear; otherwise reference them from this repository during implementation.

## Primary marketing assets

| Asset | Dimensions | Intended use |
|---|---:|---|
| `assets/store_listing/numberfall_google_play_feature_graphic_1024x500.png` | 1024 × 500 | Wide feature band, social/hero source, Play Store feature graphic |
| `assets/store_listing/numberfall_google_play_icon_512.png` | 512 × 512 | Store icon and compact brand mark |
| `assets/branding/numberfall_app_icon_v2.png` | 1254 × 1254 | Higher-resolution icon source where needed |
| `assets/ui/menu_background.png` | Inspect at build time | Atmospheric background aligned with the live menu |
| `assets/branding/numberfall_splash_generated.png` | Inspect at build time | Portrait brand-art reference; use cautiously in wide layouts |

## Gameplay screenshots

All current store screenshots are RGB portrait captures at 1080 × 2400:

- `assets/store_listing/screenshots/Screenshot_20260803_211505_Numberfall.jpg`
- `assets/store_listing/screenshots/Screenshot_20260803_211701_Numberfall.jpg`
- `assets/store_listing/screenshots/Screenshot_20260803_211753_Numberfall.jpg`
- `assets/store_listing/screenshots/Screenshot_20260803_213112_Numberfall.jpg`
- `assets/store_listing/screenshots/Screenshot_20260803_215251_Numberfall.jpg`
- `assets/store_listing/screenshots/screenshot1.png`
- `assets/store_listing/screenshots/screenshot2.png`
- `assets/store_listing/screenshots/screenshot3.png`

The website agent must visually inspect and classify each screenshot before choosing it. Do not infer its screen/state from the filename alone. Prefer captures without debug UI, personal data, system notifications, or obstructive device chrome.

## UI reference assets

- `assets/ui/dropdown_arrow.svg`
- `assets/ui/switch_off.svg`
- `assets/ui/switch_on.svg`
- `assets/branding/numberfall_adaptive_background_v2.svg`
- `assets/branding/numberfall_adaptive_monochrome_v2.svg`

These are reference material, not necessarily website icons. Prefer semantic HTML/CSS or a coherent website icon set for controls.

## Audio

- `assets/audio/math_blocks_menu_groove.mp3`
- `assets/audio/moss_garden_drift.mp3`

Do not autoplay either track on the website. Do not publish downloadable audio files unless the owner explicitly authorises it. A future trailer may use them only after confirming rights and providing user-controlled playback.

## Source/style references

- `resources/ui/numberfall_theme.tres`
- `ui/ui_constants.gd`
- `scenes/main/main_menu.tscn`
- `ui/tile_view.gd`
- `assets/ui/menu_background.png`

These contain the authoritative palette, spacing, panel, button, tile, and state treatments summarized by the website style guide.

