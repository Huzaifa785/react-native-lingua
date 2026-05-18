<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Lingua language learning app. Here is a summary of every change made:

- **`app.config.js`** (new) — Replaces `app.json` as the Expo config entry point, adding an `extra` block that passes `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` from environment variables into the app bundle via `expo-constants`.
- **`lib/posthog.ts`** (new) — Singleton PostHog client configured from `Constants.expoConfig.extra`. Gracefully disables itself if the token is not set.
- **`app/_layout.tsx`** — Wraps the app in `PostHogProvider` with autocapture (touches enabled, manual screen tracking). Adds a `ScreenTracker` component that calls `posthog.screen()` on every route change using `usePathname` + `useGlobalSearchParams`.
- **`app/onboarding.tsx`** — Captures `onboarding_get_started_clicked` when the CTA is tapped.
- **`app/(auth)/sign-up.tsx`** — Captures `sign_up_email_submitted`, `sign_up_failed`, `sso_auth_completed`, `sso_auth_failed`. On successful verification, calls `posthog.identify()` then captures `sign_up_completed`.
- **`app/(auth)/sign-in.tsx`** — Captures `sign_in_email_submitted`, `sign_in_failed`, `sso_auth_completed`, `sso_auth_failed`. On successful OTP verification, calls `posthog.identify()` then captures `sign_in_completed`.
- **`app/language-selection.tsx`** — Captures `language_selected` with `language_code` and `language_name` properties when the user confirms their choice.
- **`app/(tabs)/index.tsx`** — Captures `continue_learning_tapped` with `language_code` and `language_name` when the Continue button is pressed.
- **`.env`** — `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` written (gitignore-covered).

| Event | Description | File |
|---|---|---|
| `onboarding_get_started_clicked` | User taps Get Started on the onboarding screen | `app/onboarding.tsx` |
| `sign_up_email_submitted` | User submits email + password to begin sign-up | `app/(auth)/sign-up.tsx` |
| `sign_up_completed` | User verifies email and completes account creation | `app/(auth)/sign-up.tsx` |
| `sign_up_failed` | Sign-up attempt failed (any step) | `app/(auth)/sign-up.tsx` |
| `sign_in_email_submitted` | User submits email to request OTP | `app/(auth)/sign-in.tsx` |
| `sign_in_completed` | User verifies OTP and signs in successfully | `app/(auth)/sign-in.tsx` |
| `sign_in_failed` | Sign-in attempt failed (any step) | `app/(auth)/sign-in.tsx` |
| `sso_auth_completed` | User completes SSO (Google/Apple/Facebook) auth | `app/(auth)/sign-in.tsx`, `app/(auth)/sign-up.tsx` |
| `sso_auth_failed` | SSO authentication failed | `app/(auth)/sign-in.tsx`, `app/(auth)/sign-up.tsx` |
| `language_selected` | User confirms a language selection | `app/language-selection.tsx` |
| `continue_learning_tapped` | User taps Continue on the home screen | `app/(tabs)/index.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1598726)
- [Sign-up conversion funnel](/insights/KFEYJKp4) — Drop-off from Get Started → email submitted → account created
- [Sign-in conversion funnel](/insights/aAz1DKYL) — OTP request to successful sign-in
- [Daily sign-ups and sign-ins](/insights/S6XchiDQ) — New account creations and sign-ins over time
- [Language selection rate](/insights/Q8YsH7Pm) — Daily unique users who confirm a language
- [Continue learning taps](/insights/CNmjTSJU) — Engagement signal: how often users resume their course

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
