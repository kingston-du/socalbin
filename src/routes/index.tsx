import { createFileRoute } from "@tanstack/react-router";

const PHONE_DISPLAY = "(909) 276-8869";
const SMS_HREF = "sms:+19092768869";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trash Can Cleaning in Rancho Cucamonga | Kingston & Eliseo" },
      {
        name: "description",
        content:
          "Local student-run trash can cleaning in Rancho Cucamonga. $12 per can. Powerwashing, sanitizing, and deodorizing. Text us to schedule for Tuesday.",
      },
      { property: "og:title", content: "Trash Can Cleaning in Rancho Cucamonga | Kingston & Eliseo" },
      {
        property: "og:description",
        content:
          "Local student-run trash can cleaning in Rancho Cucamonga. $12 per can. Text us to schedule for Tuesday.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Kingston & Eliseo's Trash Can Cleaning",
          description:
            "Local student-run trash can cleaning service in Rancho Cucamonga. Powerwashing, sanitizing, and deodorizing for $12 per can.",
          telephone: "+1-909-276-8869",
          areaServed: "Rancho Cucamonga, CA",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rancho Cucamonga",
            addressRegion: "CA",
            addressCountry: "US",
          },
          priceRange: "$",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Tuesday",
              opens: "07:00",
              closes: "19:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function CanMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 16h44l-4 56a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4L10 16z" />
      <path d="M6 10h52" />
      <path d="M24 6h16l2 4H22z" />
      <path d="M22 28v36M32 28v36M42 28v36" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-ink font-sans antialiased pb-28 md:pb-0">
      {/* Top bar */}
      <header className="border-b border-rule">
        <div className="mx-auto max-w-3xl px-5 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <CanMark className="w-5 h-6 text-moss" />
            <span className="font-serif text-base sm:text-lg leading-tight">
              Kingston &amp; Eliseo&rsquo;s
              <span className="hidden sm:inline"> Trash Can Cleaning</span>
            </span>
          </div>
          <a
            href={SMS_HREF}
            className="text-sm font-medium text-moss-deep underline underline-offset-4 decoration-moss/40 hover:decoration-moss"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-rule">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
            <p className="text-xs tracking-[0.18em] uppercase text-moss-deep font-medium mb-5">
              Rancho Cucamonga, CA · Est. Summer 2026
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-ink">
              Clean trash cans,
              <br />
              <span className="italic text-moss-deep">done the easy way.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft max-w-xl">
              We&rsquo;re Kingston and Eliseo &mdash; two local students cleaning
              trash cans around Rancho Cucamonga this summer. Text us, leave
              your cans out, and we&rsquo;ll powerwash, sanitize, and deodorize
              them on Tuesday.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <a
                href={SMS_HREF}
                className="inline-flex items-center justify-center gap-2 bg-moss text-white px-6 py-3.5 text-base font-medium rounded-sm hover:bg-moss-deep transition-colors"
              >
                Text us to schedule
                <span aria-hidden="true">→</span>
              </a>
              <span className="text-sm text-ink-soft">
                or text {PHONE_DISPLAY}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-moss" />
                $12 per trash can
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-moss" />
                Tuesdays, 7 AM&ndash;7 PM
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-moss" />
                Rancho Cucamonga &amp; nearby
              </span>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-b border-rule bg-paper">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:py-16">
            <SectionHead eyebrow="01" title="How it works" />
            <ol className="mt-8 space-y-5">
              {[
                "Text us your address and how many cans you want cleaned.",
                "Leave your cans out on Tuesday.",
                "We powerwash, sanitize, and deodorize them.",
                "You get clean cans without dealing with the smell.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4 sm:gap-5">
                  <span className="font-serif text-2xl text-moss-deep leading-none w-8 shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base sm:text-lg text-ink leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Services */}
        <section className="border-b border-rule">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:py-16">
            <SectionHead eyebrow="02" title="What we do" />
            <div className="mt-8 grid sm:grid-cols-3 gap-px bg-rule border border-rule">
              {[
                { t: "Powerwashing", d: "We blast away grime, buildup, and old residue." },
                { t: "Sanitizing", d: "We help kill odor-causing bacteria and leave the can cleaner." },
                { t: "Deodorizing", d: "We finish with deodorizer so your cans smell noticeably better." },
              ].map((s) => (
                <div key={s.t} className="bg-background p-6">
                  <h3 className="font-serif text-xl text-ink mb-2">{s.t}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-ink-soft italic">
              We clean regular outdoor trash, recycling, and green waste cans.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-b border-rule bg-moss-soft/40">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:py-16">
            <SectionHead eyebrow="03" title="Simple pricing" />
            <div className="mt-8 border border-moss/30 bg-background p-7 sm:p-10">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-6xl sm:text-7xl text-moss-deep leading-none">
                  $12
                </span>
                <span className="text-ink-soft text-base">per trash can</span>
              </div>
              <p className="mt-5 text-base text-ink leading-relaxed">
                No subscription. No confusing packages. Just text us how many
                cans you have and we&rsquo;ll give you the total before we come by.
              </p>
              <dl className="mt-6 grid grid-cols-3 border-t border-rule pt-5 text-sm">
                {[
                  { c: "1 can", p: "$12" },
                  { c: "2 cans", p: "$24" },
                  { c: "3 cans", p: "$36" },
                ].map((r) => (
                  <div key={r.c} className="flex flex-col">
                    <dt className="text-ink-soft">{r.c}</dt>
                    <dd className="font-serif text-xl text-ink mt-1">{r.p}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="border-b border-rule">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:py-16">
            <SectionHead eyebrow="04" title="Who we are" />
            <div className="mt-8 grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-start">
              <div className="flex sm:flex-col gap-3 sm:gap-2 text-moss-deep">
                <CanMark className="w-10 h-12" />
                <CanMark className="w-10 h-12" />
              </div>
              <div className="space-y-4 text-base sm:text-lg text-ink leading-relaxed">
                <p>
                  We&rsquo;re Kingston and Eliseo, two recent high school
                  graduates and soon-to-be college students from the area. We
                  started this because trash cans get disgusting fast, and most
                  people do not want to clean them themselves.
                </p>
                <p>
                  We&rsquo;re trying to work hard this summer, help people in
                  the neighborhood, and build something of our own before
                  college.
                </p>
                <p className="font-serif italic text-moss-deep">
                  We&rsquo;ll show up, do the job right, and keep it simple.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="border-b border-rule bg-paper">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:py-16">
            <SectionHead eyebrow="05" title="Where we clean" />
            <p className="mt-7 text-base sm:text-lg text-ink leading-relaxed">
              We&rsquo;re based in Rancho Cucamonga and can clean cans in nearby
              areas too. If you&rsquo;re a little farther away, text us anyway
              &mdash; we may be able to fit you into the route.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-sm">
              {[
                "Rancho Cucamonga",
                "Alta Loma",
                "Etiwanda",
                "Upland",
                "Fontana",
                "Ontario",
                "& nearby",
              ].map((c) => (
                <li
                  key={c}
                  className="border border-rule bg-background px-3 py-1.5 text-ink-soft"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-rule">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:py-16">
            <SectionHead eyebrow="06" title="Frequently asked" />
            <dl className="mt-8 divide-y divide-rule border-t border-b border-rule">
              {[
                { q: "When do you clean cans?", a: "Tuesdays from 7:00 AM to 7:00 PM." },
                { q: "How much does it cost?", a: "$12 per trash can." },
                {
                  q: "Do I need to be home?",
                  a: "No. Just leave the cans somewhere accessible and text us any instructions.",
                },
                {
                  q: "How do I pay?",
                  a: "We can coordinate payment by text. We try to keep it simple and flexible.",
                },
                {
                  q: "Do you clean really dirty cans?",
                  a: "Yes, that\u2019s the point. If it\u2019s unusually bad, just send us a quick picture first.",
                },
              ].map((f) => (
                <div key={f.q} className="py-5 grid sm:grid-cols-[1fr_2fr] gap-2 sm:gap-8">
                  <dt className="font-serif text-lg text-ink">{f.q}</dt>
                  <dd className="text-ink-soft leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-moss text-white">
          <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
              Want your trash cans cleaned next Tuesday?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
              Text Kingston and Eliseo with your address, number of cans, and
              any instructions. We&rsquo;ll reply and confirm the plan.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <a
                href={SMS_HREF}
                className="inline-flex items-center justify-center gap-2 bg-white text-moss-deep px-6 py-3.5 text-base font-medium rounded-sm hover:bg-paper transition-colors"
              >
                Text us now
                <span aria-hidden="true">→</span>
              </a>
              <span className="text-sm text-white/80">{PHONE_DISPLAY}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule bg-background">
        <div className="mx-auto max-w-3xl px-5 py-10 text-sm text-ink-soft">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <CanMark className="w-5 h-6 text-moss" />
                <span className="font-serif text-base text-ink">
                  Kingston &amp; Eliseo&rsquo;s Trash Can Cleaning
                </span>
              </div>
              <p>Rancho Cucamonga, CA</p>
              <p>$12 per trash can · Tuesdays 7 AM&ndash;7 PM</p>
            </div>
            <div className="sm:text-right">
              <a
                href={SMS_HREF}
                className="text-moss-deep underline underline-offset-4 decoration-moss/40 hover:decoration-moss"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="mt-2 text-xs">
                &copy; {new Date().getFullYear()} Kingston &amp; Eliseo. A small
                local business.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <a
        href={SMS_HREF}
        className="md:hidden fixed left-3 right-3 bottom-3 bg-moss text-white text-center py-3.5 px-4 text-base font-medium rounded-sm shadow-lg z-50"
      >
        Text us · {PHONE_DISPLAY}
      </a>
    </div>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-rule pb-3">
      <span className="font-serif text-sm text-moss-deep tracking-wider">
        {eyebrow}
      </span>
      <h2 className="font-serif text-2xl sm:text-3xl text-ink">{title}</h2>
    </div>
  );
}
