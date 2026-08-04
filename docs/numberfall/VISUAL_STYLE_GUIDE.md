# Visual style guide

## Creative direction

The website should feel like the game has expanded beyond the phone: a calm midnight playfield energized by luminous cyan number tiles, violet operator tiles, gold success moments, falling motion, and soft geometric sparks. It should be vibrant and polished without becoming noisy, childish, or casino-like.

Use the generated store feature graphic and screenshots as visual references. Do not redraw the identity from memory when a repository asset already exists.

## Colour tokens

These values are derived from the authored Godot theme and UI constants.

| Token | Hex | Use |
|---|---:|---|
| `--nf-bg-deep` | `#091013` | Primary page background |
| `--nf-bg-navy` | `#090C13` | Menu-like deep background |
| `--nf-surface` | `#0E121C` | Translucent cards and panels |
| `--nf-surface-raised` | `#212B40` | Controls and raised surfaces |
| `--nf-text` | `#E0EBFA` | Primary text |
| `--nf-text-muted` | `#C9D6F0` | Supporting text |
| `--nf-cyan` | `#44C7D4` | Number tiles and primary actions |
| `--nf-cyan-light` | `#9FF7F0` | Number borders, focus, highlights |
| `--nf-violet` | `#7357D9` | Operator tiles and secondary accents |
| `--nf-violet-light` | `#D7C8FF` | Operator borders and soft accents |
| `--nf-gold` | `#FFD166` | Success, exact target, featured emphasis |
| `--nf-danger` | `#EF6F6C` | Invalid/failure states only |
| `--nf-ink` | `#08131D` | Text on bright cyan/gold controls |

Recommended web gradients may interpolate only between these families. Keep body-copy contrast at WCAG AA or better. Gold and cyan should be accents, not large text-on-white treatments.

## Typography

The game currently uses Godot’s built-in font rather than a licensed external family. For the website, use a fast system sans-serif stack unless the owner approves a webfont:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", sans-serif;
```

`Inter` is an optional preference, not a bundled asset; do not fetch it without project approval. A system fallback must remain visually sound.

- Display headings: uppercase, bold/extra-bold, tight but readable tracking.
- Body: sentence case, comfortable width of approximately 55–70 characters.
- Numerals and arithmetic symbols: large, heavy, highly legible.
- Suggested scale: 64–88 px hero heading desktop, 42–56 px mobile; 36–48 px section headings; 18–21 px body.
- Never use a decorative “school” or handwriting font.

## Shape language

- Large marketing panels: 24–38 px radius with a thin cyan/violet border and soft navy shadow.
- Buttons: 18–22 px radius, generous horizontal padding, minimum 48 CSS px touch height.
- Number tiles: rounded squares with approximately 20% corner-radius ratio and a cyan fill/light border.
- Operator tiles: visibly different from number tiles—violet fill, stronger inset, smaller radius—so type is not communicated by colour alone.
- Use translucent navy cards (`rgba(6, 10, 23, 0.82–0.92)`) over artwork, with restraint.

## Buttons and focus

- Primary: cyan background, very dark text, pale cyan border. Hover may shift toward gold with dark text.
- Secondary: translucent navy/violet surface, light text, violet border.
- Focus: visible 3 px pale-cyan outline with at least 3 px offset; do not rely on hover styling.
- Disabled/coming soon: preserve readable contrast and label the state explicitly; do not make it look like a broken active link.

## Imagery

- Prefer real gameplay screenshots for proof and generated brand art for atmosphere.
- Present portrait screenshots in a restrained device frame or rounded crop; do not imply a specific handset model.
- Use the 9 tile, plus tile, falling arrow, curved selection trail, and small geometric sparks as recurring motifs.
- Keep tile glyphs mathematically correct and upright. Avoid dense fake equations.
- Do not place critical copy directly over busy tile art without a dark overlay.
- Do not add stock photography, classrooms, human models, trophies, coins, gambling cues, or unrelated mascots.

## Motion

Normal motion should echo the game: short downward entrances, subtle tile lift, selection-trail drawing, and small success sparkle. Suggested ranges:

- Hover/lift: 120–180 ms.
- Section/tile entrance: 240–360 ms with ease-out.
- Ambient motion: slow and low-amplitude; never move body copy.
- Avoid continuous parallax on touch devices and avoid motion that blocks reading.

Respect `prefers-reduced-motion: reduce`: remove parallax and looping falls, replace transforms with brief opacity changes, and keep all content immediately available.

## Accessibility

- Meet WCAG 2.2 AA contrast for text and controls.
- Preserve number/operator distinction through shape and label, not colour alone.
- Use semantic headings, landmarks, buttons, and links.
- Provide descriptive image alt text; decorative sparks and trails should use empty alt text.
- Keyboard navigation must follow the visual order and show focus.
- Do not autoplay audio or video. If video is later added, provide controls, captions, and a poster.
- Prevent horizontal scrolling at 320 CSS px and support zoom to 200%.

