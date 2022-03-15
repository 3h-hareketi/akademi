// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

const env = process.env.NODE_ENV;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://81f87bae6c0c4c2397bcc76461d16510@o1153095.ingest.sentry.io/6231850",
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: env === "production" ? 1.0 : 0.2,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
