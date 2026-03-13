---
name: plan-to-tasks
description: Convert a user-provided implementation plan into a strictly ordered sequence of small, vertically sliced Markdown task files in .codex/tasks/todo, creating .codex/tasks/(todo|in-progress|done) when missing, with required metadata and PLAN/DEVELOP/TEST sections.
---

# Plan To Tasks

Use this skill when the user asks to transform an implementation plan into executable task files.

## Core Rules

- Always create/ensure this structure exists before writing tasks:
  - `.codex/tasks/todo`
  - `.codex/tasks/in-progress`
  - `.codex/tasks/done`
- Write task files only to `.codex/tasks/todo`.
- Tasks must be small enough for one Codex run.
- Bias strongly toward smaller tasks.
- Slice work vertically, not horizontally.
- Prefer end-to-end increments with visible user progress.
- Maintain strict sequential execution order via numeric filename prefixes.
- Infer and assign a category for each task (for example: `frontend`, `backend`, `infra`, `docs`, `data`, `qa`).

## Task Sizing Heuristics

A task is acceptable only if it can be completed in one run, including implementation and basic verification.

Split tasks further when any of these are true:
- Multiple major files/components/services are introduced.
- Scope spans unrelated user-visible outcomes.
- Requires separate infrastructure and feature work in one task.
- Acceptance criteria cannot be validated quickly.

## Ordering Rules

- Use zero-padded numeric prefixes so lexical order equals execution order.
- Preferred format: `01-<slug>.md`, `02-<slug>.md`, `03-<slug>.md`.
- Use concise, action-oriented slugs.
- If tasks exceed 99, switch consistently to 3+ digit padding.

## Vertical Slicing Rules

Good vertical slice examples:
- `01-create-login-page-with-working-submit.md`
- `02-save-profile-form-to-api-and-show-success-state.md`

Avoid horizontal layer-only splits unless unavoidable:
- `create-all-database-models.md`
- `implement-all-api-routes.md`
- `build-all-frontend-screens.md`

## Required Task File Schema

Every task markdown file must include, in this order:

1. `# Title`
2. `- Category: <category>`
3. `- Goal: <single concrete outcome>`
4. `- Scope: <inclusions and explicit exclusions>`
5. `- Acceptance Criteria:` list with measurable checks
6. `## PLAN`
7. `## DEVELOP`
8. `## TEST`

## Task Template

```md
# <Task Title>

- Category: <frontend|backend|infra|docs|...>
- Goal: <single user-visible or system-visible outcome>
- Scope: <what is included; what is out of scope>
- Acceptance Criteria:
  - <criterion 1>
  - <criterion 2>
  - <criterion 3>

## PLAN

- <short implementation plan for this task only>

## DEVELOP

- <concrete coding steps>

## TEST

- <how to verify locally>
- <expected result>
```

## Execution Procedure

1. Parse the user-provided implementation plan.
2. Extract deliverables, constraints, dependencies, and implied categories.
3. Split into minimal vertical slices that each deliver visible progress.
4. Order slices by dependency and user value.
5. Create `.codex/tasks/(todo|in-progress|done)` if missing.
6. Generate sequentially numbered files in `.codex/tasks/todo`.
7. Populate each file with the required schema and concise, testable acceptance criteria.
8. Validate quality gates before finalizing.

## Quality Gates (Must Pass)

- Each task is one-run sized.
- Each task has exactly one primary outcome.
- Each task includes category, goal, scope, acceptance criteria, PLAN, DEVELOP, TEST.
- Filenames are uniquely numbered and lexically ordered.
- Task sequence supports incremental visible progress.
- No task mixes unrelated frontend/backend/infra work unless required for a vertical slice.

## Output Behavior

When done, report:
- Number of tasks created.
- Ordered list of created filenames.
- Any assumptions made while inferring categories or slicing.
