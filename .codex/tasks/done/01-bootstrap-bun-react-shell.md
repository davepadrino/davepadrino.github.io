# Bootstrap Bun React Shell

- Category: frontend
- Goal: Create a runnable Bun + React + TypeScript application shell with Tailwind, strict typing, and a passing baseline test setup
- Scope: Initialize the application outside `.codex`, configure Bun scripts, TypeScript strict mode, Tailwind entry styles, and a minimal tested app shell; exclude portfolio content, JSON data modeling, and final visual language
- Acceptance Criteria:
  - `bun install` succeeds with a React + TypeScript app dependency set
  - `bun test` runs at least one passing component test
  - The app renders a minimal shell through the main entrypoint without runtime errors
  - TypeScript strict mode is enabled and source files follow the repository style constraints

## PLAN

- Create the Bun project structure and dependency manifests
- Configure TypeScript, Bun scripts, Tailwind, and test tooling
- Add a minimal `App` shell plus one unit test to verify rendering

## DEVELOP

- Add `package.json`, `tsconfig.json`, `index.html`, and Bun scripts
- Create `src/` entry files and baseline Tailwind CSS wiring
- Add test setup and a simple rendering test for the app shell

## TEST

- Run `bun test`
- Run a production-oriented build command if available
- Expected result: tests pass and the app compiles with the baseline shell
