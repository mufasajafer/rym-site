# How to make AI-vibecoded websites look Human-built

Paste this before any "build me a website" prompt to your AI coding agent:

---

Build this website, but actively avoid default "AI-generated" design patterns. Apply these rules:

## VISUAL DESIGN
- No purple-to-blue (or pink-to-orange) gradient backgrounds or gradient text unless I specifically ask for gradients.
- No glassmorphism (frosted-glass navbars/cards with backdrop-blur) as a default choice.
- Don't round every corner to `rounded-xl`/`rounded-2xl`. Mix sharp edges, small radii, and only round what needs it.
- Don't put a soft drop-shadow on every card, button, and image. Use shadow sparingly and only where it does real work.
- Avoid the generic "hero blob" — a large blurred colored circle/shape floating behind the headline.
- Pick a font pairing that isn't Inter/Poppins/Manrope + system-ui defaults. Choose something with actual character for the brand, or state clearly if using a system stack.
- Don't default to the stock Tailwind indigo/violet/emerald palette. Build a real palette (2–3 colors + neutrals) tied to the brand, not framework defaults.

## LAYOUT PATTERNS TO BREAK
- Skip the standard "AI hero": eyebrow badge + huge centered heading + gray subheading + two pill buttons + logo strip. Vary the composition — off-center content, asymmetry, a different opening move entirely.
- Don't force every section into a symmetric 3-column grid of icon-in-a-circle + bold title + one-sentence description. Vary column counts, break the grid occasionally, let some sections be asymmetric or text-only.
- Avoid a testimonials carousel with circular avatar + name + title + 2-line quote as the default social-proof pattern.
- Don't auto-add a "Trusted by" logo strip, a stats bar (counter animations), and a newsletter signup unless they're actually relevant to this site.
- Footer shouldn't default to a rigid 4-column link grid (Product / Company / Resources / Legal) — structure it to match what the site actually has.

## COPY & CONTENT
- Cut AI marketing-speak: "unlock," "elevate," "empower," "seamless," "robust," "cutting-edge," "revolutionize," "in today's fast-paced world," "game-changer," "supercharge."
- No emoji stuffed into headings or feature titles (🚀 ✨ 💡) unless the brand voice genuinely calls for it.
- Don't write feature copy as perfectly parallel triplets ("Fast. Reliable. Secure."). Let sentence rhythm vary like real copywriting.
- Avoid vague filler CTAs like "Get Started" / "Learn More" as the only two buttons on every section — write CTAs specific to what the button actually does.
- Real body copy, not lorem-ipsum-adjacent generic placeholder sentences that sound like they apply to any SaaS product.

## MOTION & INTERACTION
- Don't add fade-in-on-scroll animation to literally every element. Use motion purposefully, on 1–2 things, or not at all.
- Skip the particle/gradient-mesh animated background unless it's central to the concept.
- Hover states shouldn't all be the identical "scale up 5% + shadow grows" effect — vary or simplify.

## CODE STRUCTURE
- Don't over-abstract into a component for every tiny element on the first pass — some one-off markup is fine and more readable than premature reuse.
- Avoid naming everything `Hero`, `FeatureCard`, `CTASection`, `Footer` in the exact boilerplate way every generated site uses — name things based on what they actually are for this project.
- Don't leave commented-out placeholder sections ("{/* Add more features here */}") — either build it or leave it out.

## MAKE IT SPECIFIC
- Before generating, tell me: who is this for, what's the one thing it needs to do well, and what mood should it have (playful, austere, technical, warm, etc.). Design decisions should trace back to that, not to "what a SaaS landing page usually looks like."
- If you're unsure of a design decision, pick something specific and opinionated rather than the safest, most average option — the average option is exactly what makes it look AI-generated.

---

## A few notes on using it well

**The tells are pattern-level, not rule-level.** No single gradient or rounded card gives it away — it's the *combination* (gradient hero + glassmorphism + 3-col icon grid + Inter font + indigo palette + fade-in animations) that reads as templated. Break 3–4 of these and it already looks more intentional.

**Give it a real brief, not just "make it look human."** The single biggest lever is telling the agent who the site is for and what mood it should have. Generic prompts produce generic (AI-shaped) output regardless of styling rules.

**Two-step process works best here too.** Let it build a working version first, then run a design-pass with this list — asking it to build *and* be original simultaneously usually produces worse results than build-then-refine.

**Show, don't just tell, when possible.** If you have a reference site or two whose vibe you like, link or describe them. Concrete references beat abstract instructions like "make it distinctive."
