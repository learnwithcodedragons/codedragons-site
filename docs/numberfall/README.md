# Numberfall marketing website handoff

This folder is the implementation brief for a marketing website that feels like Numberfall and describes the shipped game accurately. A coding agent should read these files in order:

1. `PRODUCT_AND_CONTENT.md` — product truth, audience, approved messages, and claims to avoid.
2. `VISUAL_STYLE_GUIDE.md` — colour, type, shape, imagery, motion, and accessibility direction.
3. `SITE_BLUEPRINT.md` — recommended information architecture, components, responsive behaviour, and acceptance criteria.
4. `ASSET_INVENTORY.md` — reusable repository assets and usage constraints.
5. `CODEX_BUILD_BRIEF.md` — an execution checklist and source-of-truth rules for the implementation agent.

## Source-of-truth order

When documents disagree, use this order:

1. `docs/GAME_DESIGN.md` for locked gameplay rules.
2. Current code and resources for implemented behaviour and styling.
3. `docs/STATUS.md` and `docs/KNOWN_ISSUES.md` for delivery state and limitations.
4. `docs/store_listing/GOOGLE_PLAY.md` for approved promotional copy.
5. This folder for website presentation guidance.

Never silently change a gameplay claim. Never invent reviews, awards, player counts, ratings, platform availability, prices, release dates, store links, privacy assurances, or device-support claims.

## Current launch constraint

The repository identity remains explicitly marked as a development placeholder. Until a final public store URL is supplied, use a truthful non-link CTA such as **Coming soon on Google Play** or a configurable placeholder. Do not infer a Google Play URL from `com.codedragons.numberfall`. The public Numberfall privacy policy is `/privacy/numberfall/`.
