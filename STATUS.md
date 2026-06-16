# Status

> Current state of the project. First file any Claude session reads after running `git fetch && git log --since="2 weeks ago" --oneline`. Update at the start of every working session. Stale items get removed, not archived (history lives in `SESSION_LOG.md` and the git log).

**Last updated:** 2026-06-16 (after UTF-8 build fix + YouTube blog series shipped)
**Production:** `burienbestcarehome.site` - auto-deploys on push to `master`. Build is GREEN as of commit e27941b.
**Note:** `.com` domain is owned but NOT live yet. Site stays on `.site` until canonical switch is intentional.
**Email:** `info@burienbestcarehome.com` (Workspace Group), `becca@burienbestcarehome.com` (primary user). DNS fully propagated; DKIM active.

---

## In flight

- 7 YouTube "Your Best Season" blog articles queued for publishing (June 23 - July 14, 2x/week cadence). Content is committed in `posts-youtube-series.ts`; dates are future-dated so they will appear as each publish date arrives.
- Family Guide PDF created but needs to be committed to `nextjs-site/public/family-guide.pdf`.
- Assessment page rename from `/assessment` to `/is-it-time` - plan exists, not yet executed.

## Open launch blockers

In rough priority order. Verified against actual code in HEAD.

1. **Form backends.** ContactForm and OpenHouseForm still use `mailto:` handlers. Need Apps Script web app inside the BBCH Workspace that accepts POSTs, writes to a Sheet in the Shared Drive, and emails the right recipient. ContactForm routes to `becca@burienbestcarehome.com`; OpenHouseForm routes to `info@burienbestcarehome.com`. Assessment form POSTs `formType: 'assessment'` to the same webhook.
2. **Google Group members.** Add `daniela@afhmanagement.com` (owner) and `abelina@afhmanagement.com` (member) to the `info@burienbestcarehome.com` Group.
3. **Family Guide PDF.** Asset created; needs to be added to repo at `/public/family-guide.pdf`. Button on contact page + assessment results card already wired to that path.
4. **Accessibility audit.** No end-to-end WCAG AA pass yet.
5. **CTA functional QA.** Click-through testing of every button and form on every page.

## Recently shipped

### June 16, 2026 (Becca's Claude)
- **UTF-8 build fix:** Replaced invalid Windows-1252 byte 0x92 in `next-steps/page.tsx` with proper UTF-8 right single quote. This had been blocking ALL Vercel deployments since Brett's next-steps rewrites. Build is now green.
- **YouTube blog series:** 7 SEO-optimized articles based on Becca's "Your Best Season" YouTube playlist, committed as `posts-youtube-series.ts` (future-dated June 23 - July 14).
- **Blog imports:** Wired YouTube series into main posts registry via spread in `posts.ts`.
- **Spring Planting Party blog post** + gallery cross-link.
- **AFH vs Assisted Living blog post.**
- **Family Guide PDF** created (not yet in repo).

### June 5, 2026 (Brett's Claude)
- Photo gallery page (`/gallery`) with lightbox.
- 15 long-form blog articles wired into the blog system.

### May 22, 2026
- Interactive care assessment questionnaire (`/assessment`).

## Decisions waiting on Becca / Brett

- Assessment page rename to `/is-it-time` - ready to execute, needs green light.
- Geo landing pages (7 cities) - content needs to be written + pages built.
- Apps Script form backend - Becca needs to create the Google Sheet + Apps Script project in Workspace.

## Notes for the next session

- **Never work in** the mounted Windows folder directly from a Claude session. Windows ACLs block sandbox git ops. Clone fresh in the sandbox, work there, push to GitHub.
- **Curly quotes in TSX:** The `next-steps/page.tsx` file intentionally uses UTF-8 curly quotes (U+2019) inside single-quoted JS strings to avoid breaking the string delimiter. Do NOT blanket-replace curly quotes with straight quotes in TSX files.
- **Domain split is intentional:** website on `.site`, email on `.com`.
- **GitHub upload is the reliable push method** when sandbox git is unavailable. Navigate to `/upload/master/<path>`, use JS drag-and-drop to queue the file, set commit message via JS, click Commit.