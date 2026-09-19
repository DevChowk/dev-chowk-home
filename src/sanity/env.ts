/**
 * Sanity connection details, named to match the deployment's variables.
 *
 * Each falls back to a literal because the Studio at /studio runs in the
 * browser, and a browser bundle can only read variables prefixed
 * `NEXT_PUBLIC_` — every other `process.env` lookup compiles to undefined.
 * So the server reads the variable and the Studio uses the fallback.
 *
 * These are identifiers, not secrets: the Studio sends them with every
 * request from the browser. Point the variables at a different project or
 * dataset and the fallbacks must be changed to match, or the site would read
 * one dataset while the Studio edited another.
 *
 * The secrets — the API tokens — stay in .env.local and are never imported here.
 */
export const projectId = process.env.NEXT_SANITY_PROJECT_ID ?? 'sgoc48kq'
export const dataset = process.env.NEXT_SANITY_DATASET ?? 'production'

/** Hard-coded date, never `new Date()` — the API version must be stable. */
export const apiVersion = process.env.NEXT_SANITY_API_VERSION ?? '2026-09-18'

export const studioUrl = '/studio'
