# Codex website build brief

## Objective

Build a production-quality, responsive Numberfall marketing website that quickly explains the game, demonstrates real gameplay, reflects the game’s luminous puzzle aesthetic, and is ready to accept final store/legal URLs without fabricating them.

## Required reading before implementation

1. `AGENTS.md`
2. `docs/GAME_DESIGN.md`
3. `docs/STATUS.md`
4. `docs/KNOWN_ISSUES.md`
5. Every file in `docs/marketing_website/`
6. `docs/store_listing/GOOGLE_PLAY.md`

Inspect the destination website repository before choosing or changing its framework. Preserve useful existing work. If no website repository or target directory has been supplied, ask for its location rather than adding a web toolchain to the Godot project by assumption.

## Implementation principles

- Separate content/configuration from visual components.
- Prefer small components and ordinary semantic HTML.
- Keep the primary gameplay explanation understandable without animation or audio.
- Use CSS custom properties for the documented Numberfall tokens.
- Optimise generated image derivatives; keep original source assets unchanged.
- Treat mobile as the primary design case, then enhance wider layouts.
- Implement reduced motion and keyboard focus from the beginning.
- Do not add analytics, tracking, cookies, newsletter forms, accounts, payments, or third-party embeds without explicit approval.
- Do not download fonts, icon packs, stock imagery, or UI libraries merely for decoration.

## Content invariants

- The player links adjacent number/operator tiles to equal a target.
- Paths alternate number and operator and evaluate strictly left to right.
- Standard game defaults to three minutes; available lengths are 1, 2, 3, and 5 minutes.
- Daily Challenge is fixed at 60 seconds and works offline.
- Difficulty changes target selection, never arithmetic rules.
- The solution hint exists in standard games and is unavailable in Daily Challenge.
- No online leaderboard, account, multiplayer, monetisation, ads, or analytics may be implied.

## Required configurable placeholders

- Final Google Play URL and availability state.
- Optional future iOS URL and availability state.
- Publisher/copyright owner.
- Support contact or URL.
- Privacy policy URL.
- Canonical production domain and Open Graph URL.

Render missing values honestly; never insert `#`, fake URLs, or guessed identities into production links.

## Verification checklist

- Validate all routes and internal anchors.
- Run the framework’s formatter, linter, type checks, tests, and production build.
- Run an accessibility scan and manually keyboard-test all interactive elements.
- Inspect at 320, 375, 768, 1,024, and 1,440 CSS px.
- Test `prefers-reduced-motion` and high-contrast/forced-colour behaviour.
- Verify image dimensions, responsive sizing, loading priority, and alt text.
- Confirm no claim conflicts with `docs/GAME_DESIGN.md` or `docs/STATUS.md`.
- Confirm there are no secrets, debug copy, dead CTAs, console errors, external trackers, or unapproved dependencies.
- Record exact checks and remaining manual steps in the website project’s status documentation.

