# Build Terminal Style Page Shell

- Category: frontend
- Goal: Replace the placeholder app shell with a responsive terminal-inspired portfolio layout foundation
- Scope: Apply the `frontend-style` skill, define design tokens, page layout, section wrappers, and hero/header structure using seeded profile data; exclude detailed experience timelines and secondary sections
- Acceptance Criteria:
  - Global styles implement the dark terminal visual system with green-accent tokens
  - The page has a responsive shell with semantic landmarks and a clear hero section
  - The hero uses typed profile data and not hardcoded duplicate content
  - A component test verifies the hero shell renders the expected primary content

## PLAN

- Introduce visual tokens and reusable shell primitives
- Build the semantic page frame and hero section
- Connect the hero to the typed profile loader and add tests

## DEVELOP

- Update global CSS and Tailwind-facing tokens
- Add shell and hero components
- Render the hero from profile data and test the output

## TEST

- Run `bun test`
- Expected result: hero rendering tests pass and the page remains responsive in the base layout
