Replace the placeholder homepage in `src/routes/index.tsx` with a single-page landing page for Kingston & Eliseo’s Trash Can Cleaning.

Build plan:
1. **Structure**: One long page with clear sections — Hero, How It Works, What We Do, Pricing, Who We Are, Where We Clean, FAQ, Final CTA, and Footer.
2. **Copy**: Use the exact wording provided in the brief (headline, subheadline, steps, service descriptions, FAQ answers, etc.).
3. **CTAs**: Primary hero button and sticky mobile bottom bar both link to `sms:909-276-8869`. Add a final CTA section with the same SMS link.
4. **Design**: White/off-white background, dark gray/black text, dark green accent color, system fonts, simple rectangular sections, generous spacing, clear buttons, no gradients, no animations, no glassmorphism, no stock photos, no fake reviews or badges.
5. **Mobile-first layout**: Stacked sections, readable text, sticky “Text us” button fixed to the bottom on small screens.
6. **SEO meta**: Update `src/routes/index.tsx` `head()` with title, description, Open Graph tags, and canonical. Update `src/routes/__root.tsx` only if needed for sitewide defaults.
7. **Semantic HTML**: Use `<main>`, `<section>`, `<h1>` through `<h3>`, and proper heading hierarchy.
8. **Verification**: Run the dev build and check the mobile viewport to confirm the sticky button and layout behave correctly.

No backend, no Lovable Cloud features, no external dependencies needed.