# Deployment Guide

Deployment should be practical, honest, and project-specific. Do not claim successful deployment before checking the deployed site.

## Production Builds

Before deployment:

- Run the project's production build command.
- Fix build errors.
- Check the built application locally when practical.
- Confirm relative paths work for the chosen host.

## Static Hosting

Most projects can deploy to static hosting because they are frontend-only. Suitable hosts may include GitHub Pages, Netlify, Vercel, Cloudflare Pages, or similar services.

Use the host that best fits the project and document any limitations.

## GitHub Pages Limitations

GitHub Pages is static hosting. It does not provide a backend, secret storage for browser code, or real authentication. For Vite projects, configure base paths when deploying from a subpath.

## SPA Routing

React Router projects may need host-specific fallback configuration so direct visits to nested routes work. Document the chosen routing approach and any deployment limitations.

## Environment Variables

- Use `.env.example` for documented variables.
- Never commit real `.env` files.
- Do not expose secret keys to frontend bundles.
- Check whether an API permits browser usage.

## API Restrictions

Some APIs restrict origins, require keys, enforce rate limits, or disallow client-side calls. Document these restrictions before deployment and verify the deployed site still works.

## Preview Verification

After deployment, verify:

- The live URL loads.
- Main workflows work.
- No obvious console errors appear.
- Responsive layouts work at narrow widths.
- Keyboard navigation works.
- Reduced-motion behavior works where relevant.
- API calls succeed or documented fallback/error states appear.

## Recording Verified Demo URLs

Add live demo links only after verification. If a deployment fails or is removed, update docs instead of leaving stale claims.

## Screenshots And Previews

Preview images must be real screenshots of current solutions. Do not use placeholders or mockups as if they were actual project previews.
