# Four Pillars production website

## Goal
Replace the current starter screen with a production-ready, single-page Four Pillars Business Advisory website for `https://fourpillars.ae`, preserving the supplied walkthrough video and using only verified project information.

## Build
- Create a premium editorial design system using the supplied bottle-green, champagne-gold, ivory and beige palette, with Cormorant Garamond headings and Manrope body text.
- Build the complete page rhythm: cinematic hero, About, Positioning, Services, Approach, Sectors, Markets, Meraki collaboration, Nirvana project feature, Why Four Pillars, closing contact area and footer.
- Keep content typography-led and asymmetrical, with thin rules, deliberate whitespace, alternating light/dark bands and restrained reveal motion.
- Implement a desktop header and an accessible mobile menu. All navigation and calls-to-action will link to real sections; no unverified phone, email or form destination will be invented.

## Supplied media
- Use the supplied Meraki walkthrough once, as the hero video, with autoplay, loop, inline playback, dark-green overlay and working pause/play and sound controls.
- Derive the official Four Pillars mark and favicon from the supplied brand artwork; use the complete Meraki × Four Pillars artwork only in the collaboration section.
- Use verified Nirvana imagery extracted from the supplied brochure/presentation for the project feature, with responsive dimensions and deferred loading outside the hero.
- Store production media through the project asset delivery system rather than committing large binaries.

## Verified project content
- Present Nirvana Residences I as a residential project in Me'aisem, Dubai Production City.
- Include brochure-supported facts only: 22 storeys, 392 residences, 52,085.92 sq ft plot, building composition, and the verified studio/one-/two-/three-bedroom unit mix.
- Exclude prices, returns, yields, guarantees, payment plans and completion claims from the website.

## Production readiness
- Add route-specific title, description, Open Graph data, Twitter card data, canonical URL and organization/project structured data.
- Remove all starter and old-brand references; retain only “Four Pillars Business Advisory.”
- Add a domain-specific sitemap and crawler configuration.
- Keep the existing TanStack Start architecture and deployment entry intact; verify the current Vercel-compatible deployment path before adding any platform configuration.
- No environment variables are currently required; no secrets will be added.

## Quality checks
- Verify desktop and mobile layouts at 375, 390, 768, 1024, 1440 and 1920 pixels with no horizontal overflow.
- Test menu navigation, every anchor/CTA, hero visibility, continuous playback, pause/play, mute/unmute and volume behavior.
- Check semantic structure, keyboard access, focus states, labels, reduced motion, image alternatives and contrast.
- Run focused checks, the Bun production build, and browser QA for console/runtime errors.

## Completion report
Report implemented changes, fixes, verified sections, video status, build command/result, remaining issues and Vercel readiness.
