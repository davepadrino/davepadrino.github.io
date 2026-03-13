# Profile Web

Terminal-style personal portfolio built with Bun, React, TypeScript, Vite, and Tailwind CSS. All page content is loaded from the local JSON document in [`db/profile.json`](/Users/david.padrino/Desktop/profile-web/db/profile.json) and validated through the typed loader in [`src/profile/profile.loader.ts`](/Users/david.padrino/Desktop/profile-web/src/profile/profile.loader.ts).

## Requirements

- Bun 1.3 or newer

## Local Development

```bash
bun install
bun run dev
```

The dev server starts through Vite. Use `bun run check` for a TypeScript-only validation pass.

## Verification

```bash
bun test
bun run build
```

`bun test` covers the typed profile loader plus the main application rendering path. `bun run build` creates the production bundle in `dist/`.

## Editing Portfolio Data

Update [`db/profile.json`](/Users/david.padrino/Desktop/profile-web/db/profile.json) to change profile copy, experience, education, services, skills, languages, or contact links. The app reads that file through a validation boundary, so malformed shapes will fail tests instead of silently rendering broken UI.

## GitHub Pages

The Vite base path is configurable through `VITE_PUBLIC_BASE_PATH`.

- User or custom-domain Pages site: leave the variable unset so the build uses `/`
- Project Pages site for this repository: build with `VITE_PUBLIC_BASE_PATH=/profile-web/ bun run build`

Publish the generated `dist/` directory with your preferred Pages workflow. If the repository name changes, update the base path value to match the new published subpath.
