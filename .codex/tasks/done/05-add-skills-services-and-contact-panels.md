# Add Skills Services And Contact Panels

- Category: frontend
- Goal: Complete the portfolio content with skills, services, and contact panels that communicate offerings clearly
- Scope: Render grouped skills, service offerings, contact links, and supporting badges from local data with accessible interactions; exclude final copy polish and deployment documentation
- Acceptance Criteria:
  - Skills and services are grouped into clear, scannable panels sourced from the JSON model.
  - Contact actions are keyboard accessible and visually aligned with the terminal style
  - The page communicates what services the developer offers, not just employment history
  - `bun test` verifies the panels and contact actions render expected content

## PLAN

- Extend the data model only if needed for services/contact content
- Build modular panels for skills, offerings, and contact actions
- Add tests for grouped rendering and accessible links/buttons

## DEVELOP

- Add or refine JSON data for services and contact details
- Implement the three content panels and integrate them into the page
- Write component tests for panel content and contact affordances

## TEST

- Run `bun test`
- Expected result: skills, services, and contact panels render typed data and tests pass
