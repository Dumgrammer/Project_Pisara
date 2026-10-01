# Design — Pisara

A locked design system for this app. Every page redesign reads this file
and `design-direction.md` before emitting code. Do not regenerate per page —
extend or amend these files when the system needs to grow.

> **Source of truth for geometry**: the sharp staff home (`pisara-home-sharp`).
> App chrome and marketing share the same quiet, rectangular language.

## Genre
Warm Professional, restrained. Cream paper, cyan primary action, coral for
alerts, mint for success. Sharp corners, hairline borders, mono labels.
Not playful, not soft-pill SaaS, not cold enterprise. Data-dense and scannable.

## Macrostructure family

- App pages: Workbench — side rail (240px), top bar (56px), scrollable canvas.
  Nav N3 side-rail. Hairline-bordered panels (no soft blob shadows).
- Entry / home: left-aligned portal with live queue mock + three-stat strip.
- Marketing bento and pill chrome: out of scope.

## Theme
- `--color-paper`       oklch(97% 0.012 95) — warm cream canvas
- `--color-paper-2`     oklch(94% 0.016 95) — rail / panel wash
- `--color-ink`         oklch(20% 0.012 250) — never pure black
- `--color-muted`       oklch(44% 0.012 250)
- `--color-border`      oklch(20% 0.012 250 / 0.12)
- `--color-border-strong` oklch(20% 0.012 250 / 0.22)
- `--color-accent`      oklch(66% 0.18 235)  — sky-cyan primary
- `--color-accent-hover` oklch(60% 0.18 235)
- `--color-accent-2`    oklch(68% 0.24 18)   — coral alerts / critical
- `--color-mint`        oklch(80% 0.16 150)  — success
- `--color-lavender`    oklch(74% 0.16 305)  — occasional / review
- `--color-focus`       oklch(66% 0.18 235)

**Forbidden accents:** pear / yellow / amber as brand or highlight colour.
Do not use `oklch(… 95)` chroma accents, `#f6ce00`, `#E5A529`, or `#D4A843`.

## Typography
- Display: Plus Jakarta Sans, weight 600, style normal (never italic on headings)
- Body:    Plus Jakarta Sans, weight 400 / 500
- Mono:    JetBrains Mono — keys, stats, grid headers, status tags
- Display tracking: -0.025em
- No serif anywhere.

## Spacing
4-point named scale. Pages must use named tokens, never raw values.

## Radii
- Panels / cards: 8px (`--radius-panel`)
- Buttons: 6px (`--radius-btn`)
- Tags / chips: 3px (`--radius-tag`)
- Brand mark: 2px square
- Inputs: 6px
- **No 999px pills.** No 16–24px soft cards.

## Elevation
- Default panel: `1px solid var(--color-border)` + optional `0 1px 0 oklch(20% 0.012 250 / 0.03)`
- No multi-layer soft shadows, no card lift hover, no push-button 3D edges

## Motion
- Transitions: 120ms ease (colour / border only)
- No spring easing, no translateY lift on buttons or cards
- Reduced-motion: collapse transitions to none

## Microinteractions stance
- silent success; snackbar only for undo / failure
- one solid cyan primary CTA per view
- secondary = outline rectangular; tertiary = text link

## CTA voice
- Primary: solid cyan, 6px radius, ink text on cyan
- Secondary: outline, strong border, quiet hover wash
- Tertiary: underline on hover, optional mono arrow

## Status & priority colour map
| Token | Colour |
| --- | --- |
| Open / To do | lavender wash or ink tag |
| In progress | cyan |
| Review | lavender |
| Done | mint |
| Critical / SLA | coral |
| High | coral pip on ink label |
| Medium | lavender pip |
| Low | muted ink |

## What pages MUST share
- Wordmark "Pisara" in Plus Jakarta Sans 600
- 12×12 cyan square mark (2px radius) beside wordmark — home and app
- Cream paper + cyan / coral / mint / lavender only
- Plus Jakarta + JetBrains Mono
- 8px panels, 6px buttons, hairline borders

## What pages MAY differ on
- Home portal layout vs app workbench rail
- Decorative queue mock on home only

## Exports

### tokens.css
```css
:root {
  --color-paper: oklch(97% 0.012 95);
  --color-paper-2: oklch(94% 0.016 95);
  --color-ink: oklch(20% 0.012 250);
  --color-muted: oklch(44% 0.012 250);
  --color-accent: oklch(66% 0.18 235);
  --color-accent-2: oklch(68% 0.24 18);
  --color-mint: oklch(80% 0.16 150);
  --color-lavender: oklch(74% 0.16 305);
  --radius-panel: 8px;
  --radius-btn: 6px;
  --radius-tag: 3px;
}
```

### DTCG `tokens.json`
```json
{
  "color": {
    "paper": { "$value": "oklch(97% 0.012 95)", "$type": "color" },
    "ink": { "$value": "oklch(20% 0.012 250)", "$type": "color" },
    "accent": { "$value": "oklch(66% 0.18 235)", "$type": "color" },
    "accent-2": { "$value": "oklch(68% 0.24 18)", "$type": "color" },
    "mint": { "$value": "oklch(80% 0.16 150)", "$type": "color" },
    "lavender": { "$value": "oklch(74% 0.16 305)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Plus Jakarta Sans", "$type": "fontFamily" },
    "body": { "$value": "Plus Jakarta Sans", "$type": "fontFamily" },
    "data": { "$value": "JetBrains Mono", "$type": "fontFamily" }
  },
  "radius": {
    "panel": { "$value": "8px", "$type": "dimension" },
    "btn": { "$value": "6px", "$type": "dimension" }
  }
}
```
