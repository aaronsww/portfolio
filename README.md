# Portfolio

Personal portfolio site — built with Next.js, Tailwind CSS, and Framer Motion.

Not a resume. A page about the things I actually build and do: software, video, and everything in between. Videography work lives at [Unprocessed Films](https://unprocessedfilms.com).

### Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals and cursor interactions
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scroll

### Development

```bash
npm install
npm run dev
```

### Deployment (Cloudflare Workers)

The site is a static export (`output: 'export'`) deployed to Cloudflare via GitHub Actions and Wrangler — same setup as [Unprocessed Films](https://unprocessedfilms.com).

**Before the first deploy**, add these to the `aaronsww/portfolio` GitHub repo:

| Type | Name | Value |
|------|------|-------|
| Actions variable | `NEXT_PUBLIC_SANITY_PROJECT_ID` | `hrrwy4r1` |
| Actions variable | `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| Actions variable | `NEXT_PUBLIC_SANITY_API_VERSION` | `2025-01-01` |
| Actions secret | `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Workers edit access |
| Actions secret | `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |

**Triggers:** push to `master`, manual workflow dispatch, or `repository_dispatch` (`sanity-publish` for a future Sanity webhook).

**Local static build:**

```bash
npm run build   # writes HTML to ./out
```

**Cutover from Netlify:** after a green Actions run, open the `*.workers.dev` URL, verify `/` and `/journal`, then disable the old Netlify site. The previous Gatsby version is preserved on `release/old-portfolio`.

**Sanity Studio** is hosted separately via `sanity deploy` (not part of the Cloudflare worker).
