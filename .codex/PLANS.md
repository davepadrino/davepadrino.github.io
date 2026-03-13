# Profile web

## Summary

Build a frontend + SQLite single page application where a developer can show his capabilities (name, headline, experience, education, skills), a short bio / long bio, CV bullets and tags (industries, seniority, keywords)

## Scope and Constraints

- In scope: client-side validations, show text and images for a github.io repository, this won't be deployed anywhere else, DB model in a json for previously mentioned software developer capabilities.
- Out of scope: backend
- Stack: React, TypeScript, Tailwind CSS, `shadcn` and `bun`
- Quality bar: typed boundaries, predictable UI states, unit tests with `bun test`

## Assumptions to Validate Early

- Prepare an index file to be loaded by github.io subdomain.
- A basic file size limit
- In case of allowing images, let's compress them for the final file to be loaded

## Acceptance Criteria

- The UI never depends on untyped AI or parser output
- The interface comunicates effectively with the DB directly in a JSON since all the data can be updated.
- 100% responsive to all devices.
- Enforce frontend visual language, use the frontend-style skill
- Fill the DB with the data from `.codex/Profile.pdf`. Analize the CV and please choose the best way to display the data; remember, we don't want a copy from linkedin, we want a more visual and structured way to show my experience, skills and services I can offer.
  -- Example of the JSON not fixed structure,

```json
{
    "name": "David Padrino",
    "bio": "A short bio",
    "email": "david@test.com",
    "education": [
        "college": "ABC",
        "university": "ABC"
    ],
    "working_experience": [{
        "xing" {
            "duration": "7 years",
            "role": "Software Engineer",
            "tags": ["agile", "ruby on rails", "kubernetes"],
            "description": "brief description on the role"
        }
    }],
    "skills": ["HTML", "React"]
}

```

## Verification

- Create everything outside the `.codex` directory
- Run unit tests with `bun test`
