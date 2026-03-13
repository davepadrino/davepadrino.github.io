# Render Experience And Education Sections

- Category: frontend
- Goal: Present experience and education in a structured, scan-friendly layout derived from the local profile data
- Scope: Build the experience timeline/cards and education section with tags, durations, and concise role summaries; exclude skills matrix, services, and contact actions
- Acceptance Criteria:
  - Experience entries render from the JSON model with role, company, duration, and impact summary
  - Education renders as a dedicated section with semantic headings and metadata
  - The layout stays readable on mobile and desktop without horizontal scrolling
  - `bun test` verifies at least one experience and one education item render correctly

## PLAN

- Design compact data-driven section components for experience and education
- Reuse the shared shell and prompt pattern for section headers
- Add tests for section rendering and responsive-safe content structure

## DEVELOP

- Create experience and education components
- Wire them into the main page using loaded profile data
- Add focused component tests for both sections

## TEST

- Run `bun test`
- Expected result: experience and education sections render correctly from JSON data
