# AGENTS.md

## Purpose
This repository is a photography portfolio website for client-facing presentation of work and contact inquiries.

## Core Principles
- Visual consistency
- Simplicity
- Fast delivery

## Architecture Rules
- Preserve the existing architecture and project structure.
- Keep route-level pages in `src/pages/`.
- Keep reusable and page-section components in `src/components/`.
- Keep shared layout behavior in `src/components/Layout.jsx`.
- Keep route definitions in `src/App.jsx`.
- Do not introduce new architectural patterns unless explicitly instructed.

## Coding Standards
- Use JavaScript only for application code in this repository.
- Use functional React components.
- Use Tailwind utility classes following existing patterns.
- Keep edits minimal and strictly scoped to the requested task.
- Do not perform large refactors unless explicitly requested.

## Testing Expectations
- Run `npm run lint` for meaningful code changes.
- Resolve lint errors before marking work complete.
- Run `npm run build` and ensure successful compilation before marking work complete.
- If a check cannot be run, clearly state why.

## Security Rules
- API keys, secrets, and credentials must never appear in frontend code.
- Do not hardcode secrets anywhere in the repository.
- Store secrets only in environment variables.
- Never commit real credentials to version control.
- Frontend must only use public-safe environment variables when required (for example, `VITE_` or `NEXT_PUBLIC_` prefixes).
- Handle sensitive operations server-side only.

## Frontend Design Direction
- Preserve the existing dark cinematic visual direction.
- Preserve typography hierarchy and style.
- Preserve spacing rhythm and motion style.
- Treat functional correctness and visual consistency as equally mandatory.
- Do not introduce design changes unless explicitly requested.

## Accessibility Rules
- Accessibility compliance is mandatory for all UI changes.
- Ensure proper keyboard navigation.
- Ensure visible focus states.
- Ensure sufficient color contrast.
- Use semantic HTML structure.
- Provide meaningful alt text for images.
- Preserve or improve accessibility on every UI modification.

## Performance Rules
- Apply frontend performance best practices within the requested scope.
- Optimize images appropriately for web delivery.
- Lazy-load non-critical media.
- Avoid unnecessary re-renders on interactive views.
- Do not perform broad performance refactors unless explicitly approved.

## Asset Handling Rules
- Use provided assets exactly as delivered.
- Do not recreate, redraw, restyle, recolor, re-export, or reinterpret provided logos, images, or brand files.
- Only redesign provided assets when explicitly instructed.

## Agent Behavior Rules
- Execute only the requested work.
- Proceed directly with implementation when requests are clear.
- Ask clarifying questions only when requirements are ambiguous, incomplete, or technically conflicting.
- Keep changes minimal and strictly scoped to the task.
- Never revert or modify unrelated user changes.
- Request explicit confirmation before destructive operations or broad refactors.

## Prohibited Actions
- Do not add new dependencies unless explicitly instructed.
- Do not modify architectural patterns unless explicitly instructed.
- Do not alter deployment or configuration files unless explicitly instructed.
- Do not create commits unless explicitly instructed.

## Commit Policy
- By default, prepare changes and present diffs for review.
- When a commit is explicitly requested, use a short imperative commit message.
- Example commit message style: `Update hero copy and CTA spacing`.

## Definition of Done
- Requested scope is fully implemented.
- `npm run lint` passes with errors resolved.
- `npm run build` completes successfully.
- No secrets or sensitive data were introduced.
- Accessibility is preserved or improved.
- Visual consistency with the existing design system is preserved.
- A concise diff summary is provided.
