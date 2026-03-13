---
name: update-profile
description: Update the portfolio data from a new CV PDF at .codex/Profile.pdf by extracting text, generating .codex/new_profile.json in the existing schema, diffing it against db/profile.json, and then applying only the verified changes back to db/profile.json.
---

# Update Profile

Use this skill when the user wants to refresh the local portfolio data from a newer CV or resume PDF.

## Inputs And Outputs

- Input PDF: `.codex/Profile.pdf`
- Extracted text: `.codex/profile-text.txt`
- Candidate profile: `.codex/new_profile.json`
- Diff report: `.codex/profile-diff.txt`
- Updated source of truth: `db/profile.json`

## Files To Read First

- `db/profile.json`
- `src/profile/profile.types.ts`
- `src/profile/profile.loader.ts`

## Workflow

1. Verify `.codex/Profile.pdf` exists. If it does not, stop and ask the user to add it.
2. Extract text with:

```bash
python3 .codex/skills/update-profile/scripts/extract_profile_text.py \
  .codex/Profile.pdf \
  .codex/profile-text.txt
```

3. Read `.codex/profile-text.txt` and the current `db/profile.json`.
4. Create `.codex/new_profile.json` in the exact existing schema and key order.
5. Compare the current and candidate profiles with:

```bash
python3 .codex/skills/update-profile/scripts/profile_diff.py \
  db/profile.json \
  .codex/new_profile.json \
  > .codex/profile-diff.txt
```

6. Review `.codex/profile-diff.txt`. If the changes match the new PDF, update `db/profile.json` from the candidate file.
7. Validate with `bun test` and `bun run check`.
8. Report:
   - which fields changed
   - which fields were preserved because the PDF was silent
   - any ambiguous items that still need user confirmation

## Merge Rules

- Treat the PDF as the source of truth for factual resume data:
  - `basics.fullName`
  - `basics.headline`
  - `basics.location`
  - `basics.email`
  - `basics.links`
  - `skills`
  - `experience`
  - `education`
  - `languages`
  - `publications`
- Preserve existing portfolio-specific copy when the PDF does not provide enough evidence to replace it safely:
  - `basics.tagline`
  - `basics.summary`
  - `services`
- If the PDF clearly contradicts preserved copy, update that copy instead of keeping stale content.
- Keep list ordering intentional:
  - newest experience first
  - newest role first within each company
  - links in the most useful public order
- Keep date formats aligned with the current schema:
  - `startDate` and `endDate` use `YYYY-MM` when known
  - active roles use `Present`
  - `durationLabel` should be refreshed when dates change
- Do not invent employers, dates, links, or technologies that are not supported by the PDF or already present in the current JSON.

## Quality Checks

- `new_profile.json` must stay compatible with `src/profile/profile.types.ts`
- every changed field in `db/profile.json` should be explainable by the PDF diff
- if extraction looks incomplete or garbled, stop and tell the user instead of forcing an update

## Notes

- The extraction script prefers `pdftotext` when available, then falls back to macOS `mdls`, then `strings`.
- The diff script is for review only. Do not overwrite `db/profile.json` blindly without reading the diff.
