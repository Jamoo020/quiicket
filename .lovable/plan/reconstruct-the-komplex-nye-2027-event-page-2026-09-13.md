# Reconstruct the KOMPLEX NYE 2027 event page

## Goal
Rebuild the deployed Quicket event page as closely as observable, preserving its original layout, typography, branding, assets, content, responsive behavior, and ticket-purchase interactions. This is a reconstruction, not a redesign.

## Page structure
- Recreate the white Quicket header with the recovered original logo, desktop account menu, and mobile hamburger drawer.
- Use the original 1239×690 event artwork in the same full-width cropped banner treatment.
- Rebuild the About and Directions tab bar with matching scrolling behavior.
- Recreate the desktop two-column event layout:
  - Left: event title, organizer/follow area, social controls, full About copy, directions map/address, and discover tags.
  - Right: sticky price and event-details card with calendar and map actions plus the Tickets button.
- Recreate the mobile information hierarchy: age badge, title and organizer, date/location rows, tabs, content, map, tags, and bottom purchase action where applicable.
- Rebuild the Quicket footer with the observed Kenya contact and policy links.
- Reproduce the visible cookie-consent banner and preference controls locally.

## Ticket and checkout interactions
- Recreate the desktop centered ticket modal with dimmed page overlay, two-step progress, ticket list, event summary, order summary, totals, close behavior, and validation.
- Recreate the mobile ticket selector as the observed full-screen flow with its compact header, order summary row, progress labels, expandable ticket groups, and fixed footer actions.
- Include all observed tiers as structured data:
  - Single Day: General Access Ksh 3,600; Backstage Ksh 7,200; VIP Table – 5 Pax Ksh 60,000.
  - Two Days: General Access Ksh 5,600 sold out; General Access Phase 2 Ksh 7,200; Backstage Ksh 12,200; VIP Table – 5 Pax Ksh 100,000.
- Add working quantity controls, sold-out state, price/quantity calculations, order summary, required buyer details, field validation, confirmation state, and a local/mock ticket confirmation flow.
- Keep external directions, organizer website, Facebook, search tags, legal links, and calendar actions functional.

## Data and reusable pieces
- Separate event, organizer, venue, ticket groups, policy content, discover tags, and order models from presentation code.
- Split the interface into focused reusable pieces for the header, event artwork, metadata, tabs, event details card, ticket selector, checkout form, directions, cookie controls, and footer.
- Keep all recovery-only purchase state in memory; no backend or real payment processing will be introduced.

## Visual system and responsive fidelity
- Match the recovered Heebo/Inter typography, Quicket green accent, slate text, thin gray rules, compact radii, subtle shadows, and measured spacing through semantic design tokens.
- Match the observed 1440, 1280, 1024, 768, 480, and 375 layouts, including the breakpoint where the sidebar becomes mobile inline content and the ticket dialog becomes full screen.
- Preserve the reference’s restrained motion and scrolling behavior; do not add decorative effects or sections.

## Assets and metadata
- Store the recovered Quicket logo and original event artwork through the project asset system rather than hotlinking them.
- Reuse the observable static venue map and accessible icon equivalents at the same sizes and positions.
- Add page-specific title, description, Open Graph, and Twitter metadata matching the event.

## Validation
- Verify the page and ticket flow in a browser at all requested widths.
- Compare screenshots against the captured reference for header, artwork crop, columns, typography, spacing, ticket modal, mobile flow, map, tags, cookie banner, and footer.
- Correct visible discrepancies and confirm no console errors or horizontal overflow remain.
