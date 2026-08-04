# Website blueprint

## Recommended scope

Build a fast, responsive single-page marketing site first. Keep content data-driven so store URLs, availability, screenshots, and legal links can be supplied later without restructuring the page.

## Page structure

1. **Skip link and header** — Numberfall mark/title, navigation links, and availability CTA.
2. **Hero** — approved headline and pitch, feature art or a layered tile composition, CTA, and a compact gameplay proof point.
3. **How it plays** — three steps with number/operator tile motifs.
4. **Gameplay showcase** — real portrait screenshots in a responsive carousel or static grid. A static grid is preferred when JavaScript is unnecessary.
5. **Features** — combo, difficulty/session choice, Daily Challenge, and accessibility cards.
6. **Daily Challenge band** — explain the shared offline 60-second challenge without suggesting online leaderboards.
7. **Accessibility/comfort** — high contrast, reduced motion, audio, haptics, and readable tile distinction.
8. **Final CTA** — configurable coming-soon/download state.
9. **Footer** — copyright owner placeholder, privacy/support placeholders, platform availability, and no fabricated social links.

## Hero composition

- Desktop: copy at left (40–45%), feature art/gameplay visual at right (55–60%).
- Mobile: copy first, art second; CTA visible without requiring interaction.
- Keep the primary heading as HTML text, not baked into an image.
- Use `assets/store_listing/numberfall_google_play_feature_graphic_1024x500.png` as a visual foundation or lower-page banner; its 2.048:1 crop may be too shallow as the sole mobile hero.
- Use the app icon as a supporting identity mark, not as a giant replacement for the wordmark.

## Responsive rules

- Content max width: 1,180–1,280 CSS px.
- Side padding: 20 px mobile, 32 px tablet, 48 px desktop.
- Breakpoints should follow content, approximately 720 px and 1,024 px; avoid device-specific logic.
- Feature-card layout: one column mobile, two tablet, four wide desktop.
- Screenshot gallery: horizontal snap scrolling on mobile with visible controls; three columns where space permits.
- Images must include width/height to prevent layout shift and use responsive `srcset` derivatives if generated.

## Component inventory

- `SiteHeader`
- `Hero`
- `StoreCta` with `comingSoon | available` state
- `TileGlyph` for decorative number/operator motifs
- `HowItWorksStep`
- `ScreenshotGallery`
- `FeatureCard`
- `DailyChallengeBanner`
- `AccessibilityPanel`
- `SiteFooter`

Components are suggested responsibilities, not mandatory framework names. Avoid one oversized page component.

## CTA configuration

Use one configuration object or content file:

```text
availability: "coming_soon"
google_play_url: null
ios_url: null
support_url: null
privacy_url: null
```

When `google_play_url` is absent, render **Coming soon on Google Play** as a labelled status/control with no dead link. Only render an official Google Play badge after a real listing URL is supplied, and follow Google’s current badge usage requirements.

## Performance targets

- Aim for Lighthouse scores of at least 90 in Performance, Accessibility, Best Practices, and SEO on a production build.
- Target LCP under 2.5 s and CLS under 0.1 on a representative mobile connection.
- Convert marketing imagery to responsive WebP/AVIF derivatives during the website build while retaining repository PNG/JPEG masters.
- Lazy-load below-the-fold screenshots, but not the hero’s principal image.
- Avoid a large animation or carousel library for effects achievable with CSS.

## SEO and sharing

- Page title suggestion: `Numberfall — A Fast, Vibrant Arithmetic Puzzle Game`
- Meta description suggestion: `Link numbers and operators, solve targets and chase high scores in Numberfall—a vibrant, offline-friendly arithmetic puzzle game.`
- Use the feature graphic as the starting point for a separate 1,200 × 630 Open Graph derivative; do not misuse the 1,024 × 500 Play asset without checking its crop.
- Add JSON-LD only when final platform URLs, publisher, release status, pricing, and ratings are known. Never use placeholder schema as production truth.

## Acceptance criteria

- All marketing claims match `docs/GAME_DESIGN.md` and implemented status.
- No invented store link, release state, reviews, metrics, pricing, or iOS availability.
- Visual tokens and tile shape distinction follow `VISUAL_STYLE_GUIDE.md`.
- Works at 320, 375, 768, 1,024, and 1,440 CSS px without clipping or horizontal scroll.
- Keyboard usable with visible focus; semantic heading order; meaningful alt text.
- Reduced-motion preference disables non-essential movement.
- Real screenshots are used without misleading compositing or fake gameplay.
- Production build has no broken links, console errors, or missing assets.
- Asset licensing/provenance remains limited to repository-owned/generated assets unless separately approved.

