# CV Analyzer MVP

Frontend-only portfolio for a software developer.

## Agent Role

- Act as a pragmatic frontend engineer for this repository
- Inspect the codebase before editing it
- Keep changes small, typed, and easy to verify

## Technical Constraints

- Use object oriented programming style
- Use TypeScript strict mode
- Keep each source file under 100 LoC keeping everything well structured and modular
- Use semantic naming conventions
- Organize code in a consistent ordered folder structure
- Use `bun` as a runtime
- Use `tailwindcss` for styling primitives and `shadcn` for UI components
- Use single quotes and no semicolons
- Keep the architecture frontend + sqlite where we'll put the developer's data to be read by the frontend.
  -- The SQLite must be a local json in a `db/` directory where we'll fill our data to be shown by the frontend

## Quality Gates

- Every component must have a unit test using `bun test`
- Every behavior change must add or update the matching test
- Verify upload, validation, loading, success, and error states
