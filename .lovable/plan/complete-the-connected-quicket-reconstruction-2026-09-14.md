# Complete the connected Quicket reconstruction

## Goal
Extend the recovered KOMPLEX NYE page into a connected multi-page demo that closely follows the supplied Quicket event, discovery, login, account, and Help Centre references. Keep the existing reconstruction visual language; do not redesign it.

## Shared application shell
- Extract reusable desktop/mobile headers, account dropdown, navigation, and footers from the current event page.
- Match the reference dropdown’s placement, width, white surface, separators, typography, arrow, shadow, hover states, outside-click close, and Escape close.
- Make every menu item navigate to a real application route.
- Add a lightweight local demo session with no profile database. Protected links preserve their intended destination through login; logout clears the demo session.
- Preserve the compact event-page footer and use the fuller multi-column Quicket footer on login, discovery, and account-style pages where shown.

## Routes and user flows
- Keep `/` as the reconstructed event page and add `/events/395332-komplex-nye-2027` as the canonical event route.
- Add `/events/kenya` with the observed discovery header, search, sidebar filters, responsive event-card grid, and load-more behavior.
- Add `/login` with the observed centered form, validation, loading/error/success states, forgot-password and signup demo states, and destination-aware redirects.
- Add protected `/account`, `/account/my-tickets`, `/account/my-saved-events`, `/account/event/new`, and `/account/earn-commission/referrals` pages.
- Add `/help`, `/help/ticket-buyers`, and `/help/articles/$articleSlug` with the observed Help Centre header, search, category list, side navigation, breadcrumbs, and original demo article copy.
- Add corresponding internal routes for visible footer destinations so no page-like footer link is dead.

## Page functionality
- My Tickets: demo order list, statuses, expandable/viewable ticket details, and empty-state control.
- Saved Events: event cards, save/remove state, and empty state; saving the reconstructed event updates this list.
- Create Event: functional demo form for details, image preview, ticket setup, validation, and save/continue confirmation without publishing.
- Referrals: referral link, copy action, commission summary, statistics, and empty activity state.
- Event page: connect follow, save, share, reminder, calendar download, directions, ticket selection, checkout, confirmation, and related-event links.

## Data and component structure
- Add shared models and demo datasets for events, orders, saved items, referral statistics, help categories, and help articles.
- Split the current event page into focused reusable pieces while retaining the already recovered artwork, ticket tiers, copy, map, and checkout behavior.
- Keep all demo session and mutable demo data local to the browser; no database, real authentication, publishing, or payment processing.

## Visual and responsive fidelity
- Reproduce the reference’s white surfaces, Quicket green, slate text, thin dividers, compact controls, subtle shadows, restrained radii, and wide whitespace.
- Match the distinct event, discovery, authentication/account, and Help Centre layouts instead of forcing one generic template.
- Reflow navigation, filters, sidebars, cards, forms, footer content, and ticket controls for 1440, 1280, 1024, 768, 480, and 375 pixel widths.
- Treat the uploaded screenshots as visual references only; retain replaceable project assets rather than embedding screenshots.

## Validation
- Browser-test every account dropdown item from the event page, including unauthenticated redirects and successful demo login redirects.
- Test login validation, logout, saved-event synchronization, ticket viewing, event creation, referral copy, help search/articles, discovery filtering/load-more, and checkout.
- Verify every route renders, every visible command works, footers are present, mobile navigation works, no horizontal overflow appears, and no console errors remain at all requested widths.
