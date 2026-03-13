---
name: frontend-style
description: Enforce a strict terminal-style backend portfolio visual system (based on devportfoliotemplates backend-developer) in React + Tailwind + shadcn/ui, including tokens, typography, spacing, variants, accessibility, responsive behavior, migration, and PR validation.
---

# Frontend Style Skill

Use this skill when building, refactoring, or reviewing UI that must match the visual language of:
`https://www.devportfoliotemplates.com/portfolio-templates/backend-developer`

## Style Intent (Non-Negotiable)

This style is a command-line inspired, high-contrast, engineering-first interface:

- Dark terminal canvas.
- Monospace-led typography.
- Prompt-like labels (`$ command`) before sections and form fields.
- Minimal ornamentation, strong information hierarchy, compact rhythm.
- Green accent semantics for interactive and status-positive signals.

If a proposed UI drifts toward generic SaaS cards, rounded pastel UI, glassmorphism, or marketing hero aesthetics, reject it.

## Tech Stack Contract

- Framework: React (or Next.js React pages/components).
- Styling: Tailwind CSS.
- Components: shadcn/ui primitives only after token alignment.
- Icons: simple line icons; avoid decorative or filled icon-heavy style.

## Token System

Implement these tokens in global CSS and map to Tailwind/shadcn variables.

```css
/* app/globals.css (or src/index.css) */
:root {
  --bg: 220 15% 8%; /* terminal background */
  --bg-elevated: 220 14% 11%; /* cards / panels */
  --fg: 120 20% 92%; /* primary text */
  --muted: 120 8% 65%; /* secondary text */
  --line: 120 10% 24%; /* borders/dividers */
  --accent: 142 72% 45%; /* terminal green */
  --accent-strong: 142 78% 36%;
  --danger: 0 72% 52%;
  --warning: 40 90% 52%;
  --focus: 142 85% 55%;

  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 8px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
}

.dark {
  --background: var(--bg);
  --foreground: var(--fg);
  --card: var(--bg-elevated);
  --card-foreground: var(--fg);
  --muted-foreground: var(--muted);
  --border: var(--line);
  --input: var(--line);
  --primary: var(--accent);
  --primary-foreground: 120 20% 8%;
  --ring: var(--focus);
  --destructive: var(--danger);
}
```

### Color Semantics Rules

- `accent` is used for prompts, links, focus rings, active states, and key CTA.
- Never use blue/purple as primary action color in this style.
- Warning and error are rare and must remain semantic, not decorative.
- Borders stay subtle and low-contrast; do not use heavy drop shadows.

## Typography Rules

- Primary font: monospace stack (`JetBrains Mono`, `IBM Plex Mono`, `ui-monospace`, `SFMono-Regular`, `Menlo`, `monospace`).
- Optional secondary sans for long paragraphs only; headings remain monospace.
- Preferred sizing scale:
  - Hero name: `text-3xl md:text-5xl font-semibold tracking-tight`
  - Section title: `text-xl md:text-2xl font-semibold`
  - Command label: `text-sm md:text-base font-medium`
  - Body copy: `text-sm md:text-base leading-relaxed`
  - Meta/muted: `text-xs md:text-sm`
- Keep line length within `max-w-3xl` for prose.
- Avoid wide letter spacing except for micro labels.

## Spacing and Rhythm

- Base spacing follows 4px increments.
- Section vertical rhythm:
  - Mobile: `py-10` to `py-12`
  - Desktop: `py-16` to `py-20`
- Stack gaps:
  - Tight: `gap-2` / `gap-3`
  - Default: `gap-4` / `gap-6`
  - Loose groups: `gap-8`
- Never mix arbitrary spacing values unless matching a documented token.

## Layout Patterns

Use these patterns consistently:

1. Shell

- `min-h-screen bg-background text-foreground`
- Main container: `mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8`

2. Command Header Pattern

- A small prompt line (`$ whoami`, `$ skills`, `$ contact --info`) above each major block.
- Prompt style: `text-primary font-medium`.

3. Content Blocks

- Flat or softly elevated surfaces:
  - `rounded-md border border-border bg-card`
- Padding:
  - Mobile `p-4`, desktop `p-6`

4. Data-Heavy Sections

- Prefer grid/list with clear labels and metrics.
- Keep card count and density moderate; prioritize scanning.

## shadcn/ui Variant Rules

### Button

- `default`: primary CTA only.
- `outline`: secondary actions.
- `ghost`: inline utility actions.
- Shape: `rounded-md` only.
- Height: `h-9` or `h-10`; avoid oversized hero buttons.

```tsx
<Button className="h-9 rounded-md font-medium">SendMessage()</Button>
<Button variant="outline" className="h-9 rounded-md">Download Resume</Button>
```

### Card

- Base class: `rounded-md border bg-card text-card-foreground`.
- No glossy gradients, no floating neon shadows.

### Badge (skills/tags)

- Compact, low-noise chips:
- `rounded-sm border px-2 py-1 text-xs`
- Active/accent badges only when meaningful.

### Input / Textarea

- Prompt label appears before field.
- Monospace input text.
- Strong visible focus ring.

```tsx
<Label className="font-mono text-primary">$ email:</Label>
<Input className="font-mono" />
```

## Interaction and Motion

- Motion is minimal and purposeful:
  - `transition-colors duration-150`
  - Small upward hover translate max `-translate-y-0.5` on interactive cards/buttons.
- No parallax, no long chained entrance animations.
- Respect reduced motion:
  - Disable non-essential transforms when `prefers-reduced-motion`.

## States Checklist

Every interactive element must define:

- Default
- Hover
- Focus-visible (2px+ ring using `--focus`)
- Active/pressed
- Disabled
- Error (forms only where applicable)

For forms:

- Inline error text plus ARIA association.
- Preserve label visibility; no placeholder-only labeling.

## Accessibility Rules

- WCAG contrast target:
  - Body text >= 4.5:1
  - Large text >= 3:1
  - Focus indicator clearly visible on dark backgrounds
- Semantic structure:
  - One `h1` only
  - Logical heading order
  - `main`, `section`, `nav`, `footer` landmarks
- Keyboard:
  - Full keyboard operability
  - No keyboard traps
- Links and buttons:
  - Distinct visual style from plain text
  - Clear focus states

## Responsive Rules

- Mobile-first required.
- At `<640px`:
  - Single column layout
  - Reduce panel padding to `p-4`
  - Keep prompt labels and content aligned, no horizontal scrolling
- At `>=768px`:
  - Multi-column metric/project grids (`grid-cols-2`)
- At `>=1024px`:
  - Wider shells, no more than `max-w-5xl` for readability

## Do / Don’t

### Do

- Use monospace prompt prefixes consistently (`$ command`).
- Keep visuals quiet and technical.
- Use one accent hue (green family) for interactions.
- Prefer real metrics and impact bullets over marketing prose.

### Don’t

- Do not introduce gradient hero blobs or colorful illustrations.
- Do not use pill radii (`rounded-full`) for primary controls.
- Do not mix multiple accent colors.
- Do not hide contrast behind low-opacity text.
- Do not ship with inconsistent prompt syntax across sections.

## Implementation Snippets

### Terminal Section Wrapper

```tsx
type TerminalSectionProps = {
  command: string;
  title?: string;
  children: React.ReactNode;
};

export function TerminalSection({
  command,
  title,
  children,
}: TerminalSectionProps) {
  return (
    <section className="space-y-3">
      <p className="font-mono text-sm text-primary">$ {command}</p>
      {title ? (
        <h2 className="font-mono text-xl font-semibold md:text-2xl">{title}</h2>
      ) : null}
      <div className="rounded-md border border-border bg-card p-4 md:p-6">
        {children}
      </div>
    </section>
  );
}
```

### Skill Badge

```tsx
import { Badge } from "@/components/ui/badge";

export function SkillBadge({ label }: { label: string }) {
  return (
    <Badge variant="outline" className="rounded-sm px-2 py-1 font-mono text-xs">
      {label}
    </Badge>
  );
}
```

### Contact Form Prompt Pattern

```tsx
<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="name" className="font-mono text-primary">
      $ name:
    </Label>
    <Input id="name" className="font-mono" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="email" className="font-mono text-primary">
      $ email:
    </Label>
    <Input id="email" type="email" className="font-mono" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="message" className="font-mono text-primary">
      $ message:
    </Label>
    <Textarea id="message" className="min-h-32 font-mono" />
  </div>
  <Button type="submit" className="h-9 rounded-md font-mono">
    SendMessage()
  </Button>
</form>
```

## Migration Guide (Existing Pages)

Apply in order, page by page.

1. Inventory

- List current colors, font families, spacing utilities, and components in use.
- Flag violations: non-mono headings, multiple accent colors, oversized radii, decorative effects.

2. Tokenize

- Add global CSS variables from this skill.
- Map shadcn semantic tokens (`--background`, `--primary`, `--border`, etc.) to terminal tokens.

3. Typography Pass

- Replace heading/body utility classes with approved scale.
- Introduce prompt-label pattern for major sections and form labels.

4. Component Pass

- Normalize buttons/cards/badges/inputs to approved variants.
- Remove ad hoc button styles and custom shadows not in this skill.

5. Layout Pass

- Constrain width to `max-w-5xl`.
- Standardize section spacing and stack gaps.
- Convert noisy card mosaics into scannable metric/project blocks.

6. State and A11y Pass

- Ensure hover/focus/disabled/error states on all interactive elements.
- Verify heading order, labels, landmarks, and contrast.

7. Responsive Pass

- Confirm mobile-first single column.
- Add explicit breakpoint behaviors (`md`, `lg`) only where needed.

8. Cleanup

- Remove dead classes and unused color tokens.
- Update docs/screenshots to match the new style baseline.

## PR Validation Checklist (Pass/Fail)

A PR is valid only if all checks pass.

- [ ] Uses terminal dark token mapping with green accent semantics.
- [ ] Monospace-first typography is applied to headings and command labels.
- [ ] Section command prefix pattern is consistent and intentional.
- [ ] Spacing aligns to the 4px token rhythm.
- [ ] Buttons/cards/inputs follow allowed shadcn variants and radii.
- [ ] Interactive states (hover/focus/active/disabled/error) are implemented.
- [ ] Accessibility checks completed (contrast, labels, keyboard, heading order).
- [ ] Responsive behavior verified at mobile (`<640`), tablet (`>=768`), desktop (`>=1024`).
- [ ] No forbidden visual patterns (multi-accent palette, heavy gradients, glossy effects).
- [ ] Migration notes included for touched legacy sections.

## Quick Review Commands (Optional)

Use these checks during review:

```bash
rg "rounded-full|from-|to-|via-|shadow-2xl|font-sans" src app
rg "text-(blue|indigo|violet|purple)-" src app
rg "\\$\\s[a-zA-Z]" src app
```

If violations are found, block merge until resolved or explicitly waived with rationale.
