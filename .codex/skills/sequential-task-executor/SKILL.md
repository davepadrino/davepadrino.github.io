---
name: sequential-task-executor
description: Execute project tasks one at a time from .codex/tasks by reading done context first, resuming or selecting the next task in order, enforcing explicit user approval before marking done, and handling inconsistent queue states safely across sessions.
---

# Sequential Task Executor

Use this skill when the user asks to execute queued project tasks from:

- `.codex/tasks/todo`
- `.codex/tasks/in-progress`
- `.codex/tasks/done`

## Operating Rules (Mandatory)

- Work on exactly one task at a time.
- Never start a new task if any task exists in `.codex/tasks/in-progress`.
- Never mark a task done without explicit user approval in the current session.
- Stop after implementing only the scoped task currently selected.
- After approval and move to done, instruct the user to start a new session.

## Procedure

1. Validate task directories and state

- Ensure `.codex/tasks/todo`, `.codex/tasks/in-progress`, and `.codex/tasks/done` exist.
- If missing, create them before continuing.
- List files in all three directories.
- If more than one file exists in `.codex/tasks/in-progress`, flag inconsistent state and stop. Ask user to resolve which single task should remain in progress.

2. Read done context first

- Read files in `.codex/tasks/done` (filename/logical order) to gather prior decisions and constraints.
- Summarize only context relevant to the next task.

3. Check in-progress task

- If exactly one file exists in `.codex/tasks/in-progress`, present it and ask user whether to continue it.
- Do not start any task from todo while this file exists.
- If user says continue, execute only that task.
- If user says do not continue, keep file in `.codex/tasks/in-progress` and ask for explicit guidance (do not auto-move or replace).

4. Select next task when no task is in progress

- If `.codex/tasks/in-progress` is empty, pick the next task from `.codex/tasks/todo` using filename/logical order.
- Move that single task file from `.codex/tasks/todo` to `.codex/tasks/in-progress` before implementation.
- Announce which task is now active.

5. Execute scoped implementation only

- Implement only what the active task file specifies.
- Avoid opportunistic extra work, side quests, or bundling additional tasks.
- If scope is ambiguous, ask the user before proceeding beyond explicit task requirements.

6. Validation gate before completion state change

- When implementation is complete, stop and request explicit user validation/approval.
- Do not move files between states until user approval is explicit.

7. Completion decision

- If user approves: move active task file from `.codex/tasks/in-progress` to `.codex/tasks/done`.
- If user does not approve: keep task in `.codex/tasks/in-progress` and ask what changes are required.

8. Queue completion reporting

- If `.codex/tasks/todo` is empty and `.codex/tasks/in-progress` is empty, report queue completion clearly.

9. Session handoff rule

- After an approved task is moved to done, instruct the user to start a new session for the next task.

## Ordering Rules

- “Filename/logical order” means stable deterministic ordering.
- Default: lexicographic filename sort.
- If filenames include explicit numeric prefixes (for example `001-...`, `002-...`), respect that order.

## Failure / Inconsistency Handling

- Multiple files in `.codex/tasks/in-progress`: stop and escalate to user.
- Missing active task file after selection/move: stop and re-list directories, then ask user how to proceed.
- Conflicting duplicates across directories: stop and ask user which file is source of truth.

## Response Pattern

When running this workflow, always report:

- Current queue snapshot (`todo`, `in-progress`, `done`).
- Active task decision (resume vs select next).
- Whether waiting for user approval.
- Final state transition taken (or intentionally not taken).
