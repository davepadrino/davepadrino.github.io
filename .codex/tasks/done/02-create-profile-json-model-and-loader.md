# Create Profile JSON Model And Loader

- Category: data
- Goal: Add a typed local JSON data source in `db/` plus a loader layer the UI can consume safely
- Scope: Define the portfolio data shape, seed `db/profile.json`, add typed loader utilities, and cover the loader with tests; exclude UI rendering beyond proving data access
- Acceptance Criteria:
  - A `db/profile.json` file exists with realistic structured portfolio data
  - TypeScript types or classes validate the JSON shape at the application boundary
  - The app can import profile data through a dedicated loader module rather than reading JSON inline
  - `bun test` includes coverage for the loader success path

## PLAN

- Define a compact typed domain model for the portfolio data
- Seed the JSON file with initial content sourced from the CV
- Add a loader abstraction and tests for safe consumption

## DEVELOP

- Create `db/profile.json`
- Add domain classes/types and a loader utility in `src/`
- Write tests that verify the loader returns the expected typed structure

## TEST

- Run `bun test`
- Expected result: loader tests pass and malformed access is prevented by typed boundaries
