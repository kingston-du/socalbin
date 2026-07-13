import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeDollarSign,
  CircleCheck,
  Clock3,
  Droplets,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Sparkles,
  Trash2,
  type LucideIcon,
} from "lucide-react";

const PHONE_DISPLAY = "(909) 276-8869";
const SMS_HREF = "sms:+19092768869";
const SITE_URL = "https://kingston-du.github.io/socalbin/";
const HERO_IMAGE_SRC = `${import.meta.env.BASE_URL}hero-trash-can.png`;

const HOW_IT_WORKS: Array<{
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Send a text",
    description: "Text your address, number of cans, and anything we should know.",
  },
  {
    number: "02",
    icon: Clock3,
    title: "Leave them out",
    description: "Set your cans somewhere accessible on the day we confirm with you.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Enjoy the fresh",
    description: "We powerwash, sanitize, deodorize, and let you get back to your day.",
  },
];

const SERVICES: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Droplets,
    title: "Powerwash",
    description: "We rinse away grime, stuck-on residue, and the unpleasant stuff.",
  },
  {
    icon: CircleCheck,
    title: "Sanitize",
    description: "We give the inside a proper clean to help tackle odor-causing bacteria.",
  },
  {
    icon: Sparkles,
    title: "Deodorize",
    description: "We finish with a fresh scent, so opening the lid is less of an event.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SoCalBin | Trash Can Cleaning in Rancho Cucamonga" },
      {
        name: "description",
        content:
          "Student-run trash can cleaning in Rancho Cucamonga. $17 per can, Monday to Friday from 7 AM to 10 PM. Powerwashing, sanitizing, and deodorizing by two lifelong local friends.",
      },
      {
        property: "og:title",
        content: "SoCalBin | Fresh cans. Bigger dreams.",
      },
      {
        property: "og:description",
        content:
          "Two Rancho Cucamonga best friends, working toward college and learning to build a business. $17 per trash can.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}hero-trash-can.png` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "SoCalBin",
          description:
            "Student-run trash can cleaning service in Rancho Cucamonga. Powerwashing, sanitizing, and deodorizing for $17 per can.",
          image: `${SITE_URL}hero-trash-can.png`,
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
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:00",
              closes: "22:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-ink antialiased pb-24 md:pb-0">
      <div className="bg-ink px-5 py-2.5 text-center text-xs font-semibold text-white sm:text-sm">
        Rancho Cucamonga&apos;s clean-can crew <span className="mx-2 text-sun">&#8226;</span>
        Monday to Friday, 7 AM to 10 PM
      </div>

      <header className="border-b border-rule bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-7">
          <a href="#top" className="flex items-center gap-3" aria-label="Back to the top">
            <span className="grid size-10 place-items-center rounded-sm bg-moss text-white">
              <Trash2 className="size-5" strokeWidth={2.25} aria-hidden="true" />
            </span>
            <span className="font-serif text-base leading-[1.05] sm:text-lg">
              SoCalBin
              <span className="block text-xs text-ink-soft sm:text-base">
                by Kingston &amp; Eliseo
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-6 text-sm font-medium text-ink-soft md:flex"
            aria-label="Primary navigation"
          >
            <a className="transition-colors hover:text-moss-deep" href="#how-it-works">
              How it works
            </a>
            <a className="transition-colors hover:text-moss-deep" href="#our-story">
              Our story
            </a>
            <a className="transition-colors hover:text-moss-deep" href="#faq">
              FAQ
            </a>
          </nav>

          <a
            href={SMS_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-coral px-4 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-sun sm:px-5"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Text us</span>
            <span className="sm:hidden">Text</span>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-rule bg-sky">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-7 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(21rem,0.8fr)] lg:items-center lg:gap-14 lg:py-20">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 border-b-2 border-coral pb-2 text-xs font-bold uppercase tracking-[0.14em] text-moss-deep">
                <MapPin className="size-3.5" aria-hidden="true" />
                Raised in Rancho Cucamonga
              </p>
              <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] text-ink sm:text-6xl lg:text-7xl">
                Fresh cans.
                <span className="block italic text-moss-deep">Bigger dreams.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                We&apos;re Kingston and Eliseo, two best friends of 13 years, making our way to
                college one clean trash can at a time. We handle the grime so your curb feels a
                little more cared for.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={SMS_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-moss px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-moss-deep"
                >
                  Schedule by text
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={`tel:${PHONE_DISPLAY.replace(/\D/g, "")}`}
                  className="px-2 text-center text-sm font-semibold text-moss-deep underline decoration-moss/35 underline-offset-4 transition-colors hover:decoration-moss sm:text-left"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="mt-9 grid max-w-2xl gap-x-5 gap-y-3 border-t border-ink/15 pt-5 text-sm font-medium text-ink-soft sm:grid-cols-3">
                <Stat icon={BadgeDollarSign} text="$17 per can" />
                <Stat icon={Clock3} text="Mon to Fri, 7 AM to 10 PM" />
                <Stat icon={Sparkles} text="Powerwash, sanitize, deodorize" />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-sm border-4 border-background shadow-[10px_10px_0_var(--color-coral)]">
                <img
                  src={HERO_IMAGE_SRC}
                  alt="Freshly cleaned outdoor trash can on a sunny Rancho Cucamonga driveway"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 rounded-sm bg-sun px-4 py-3 text-ink shadow-sm">
                <p className="font-serif text-3xl leading-none">$17</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em]">per trash can</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-b border-rule bg-background">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
            <SectionIntro
              number="01"
              eyebrow="Simple from the start"
              title="You have better things to do than clean a trash can."
              description="A quick text is all it takes. We will confirm the plan, show up, and leave the can feeling properly fresh."
            />
            <ol className="mt-10 grid border-t border-rule md:grid-cols-3">
              {HOW_IT_WORKS.map(({ number, icon: Icon, title, description }) => (
                <li
                  key={number}
                  className="border-b border-rule py-7 md:border-b-0 md:px-7 md:first:pl-0 md:not(:last-child):border-r md:last:pr-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-serif text-2xl text-coral">{number}</span>
                    <Icon className="size-5 text-moss-deep" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-serif text-2xl leading-tight text-ink">{title}</h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-ink-soft">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-ink bg-coral text-ink">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-7 sm:py-16 lg:grid-cols-[1fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em]">One clear price</p>
              <h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">
                Fresh is worth
                <span className="block italic">$17.</span>
              </h2>
            </div>
            <div>
              <p className="max-w-xl text-lg leading-relaxed text-ink/80">
                There are no subscriptions, surprise add-ons, or confusing packages. Just a clean
                can for $17, plus two friends who are serious about doing a good job.
              </p>
              <dl className="mt-8 grid grid-cols-3 border-t border-ink/25 pt-5">
                {[
                  { count: "1 can", price: "$17" },
                  { count: "2 cans", price: "$34" },
                  { count: "3 cans", price: "$51" },
                ].map(({ count, price }) => (
                  <div key={count}>
                    <dt className="text-sm font-semibold text-ink/70">{count}</dt>
                    <dd className="mt-1 font-serif text-3xl leading-none">{price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="border-b border-rule bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
            <SectionIntro
              number="02"
              eyebrow="The clean-can treatment"
              title="Three steps. One much nicer bin."
              description="We clean regular outdoor trash, recycling, and green waste cans."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-0">
              {SERVICES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="border-l-2 border-moss px-5 py-3 md:px-8 md:first:pl-5 md:last:pr-0"
                >
                  <Icon className="size-6 text-coral" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-2xl text-ink">{title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="our-story" className="border-b border-rule bg-background">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-7 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-moss-deep">
                A little about us
              </p>
              <div className="mt-5 border-y-2 border-coral py-6">
                <p className="font-serif text-7xl leading-none text-moss-deep sm:text-8xl">13</p>
                <p className="mt-2 max-w-[14rem] font-serif text-2xl leading-tight text-ink">
                  years of friendship and counting.
                </p>
              </div>
              <div className="mt-7 flex items-center gap-3 text-sm leading-relaxed text-ink-soft">
                <HeartHandshake className="size-5 shrink-0 text-coral" aria-hidden="true" />
                <p>Best friends since childhood, both raised right here in Rancho Cucamonga.</p>
              </div>
            </div>

            <div>
              <h2 className="max-w-2xl font-serif text-4xl leading-[1.04] text-ink sm:text-5xl">
                This is our summer job, our college fund, and our first shot at building something
                together.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
                We are two recent high school graduates who wanted to earn tuition money while
                learning what it takes to run a real business. We care about showing up on time,
                being easy to reach, and leaving every home a little cleaner than we found it.
              </p>
              <div className="mt-9 grid border-t border-rule sm:grid-cols-2">
                <div className="border-b border-rule py-6 sm:border-b-0 sm:border-r sm:pr-7">
                  <div className="flex items-center gap-2 text-coral">
                    <GraduationCap className="size-5" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.14em]">Kingston</span>
                  </div>
                  <p className="mt-4 font-serif text-2xl leading-tight text-ink">
                    University of Washington
                  </p>
                  <p className="mt-2 text-ink-soft">Pre-Sciences</p>
                </div>
                <div className="border-b border-rule py-6 sm:border-b-0 sm:pl-7">
                  <div className="flex items-center gap-2 text-coral">
                    <GraduationCap className="size-5" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.14em]">Eliseo</span>
                  </div>
                  <p className="mt-4 font-serif text-2xl leading-tight text-ink">Cal Poly Pomona</p>
                  <p className="mt-2 text-ink-soft">Business</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-rule bg-sky">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-7 sm:py-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-moss-deep">
                Around town
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.04] text-ink sm:text-5xl">
                Local through and through.
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
                We are based in Rancho Cucamonga and can usually make nearby neighborhoods work too.
                A little outside the map? Text us anyway and we will see what we can do.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5 text-sm font-semibold text-ink">
                {["Rancho Cucamonga", "Alta Loma", "Etiwanda", "Upland", "Fontana", "Ontario"].map(
                  (city) => (
                    <li
                      key={city}
                      className="rounded-sm border border-rule bg-background px-3 py-2"
                    >
                      {city}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className="border-b border-rule bg-background">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
            <SectionIntro
              number="03"
              eyebrow="Helpful details"
              title="Questions, answered."
              description="We like keeping things simple. Here is the quick version."
            />
            <dl className="mt-10 divide-y divide-rule border-y border-rule">
              {[
                {
                  question: "When are you available?",
                  answer: "Monday to Friday from 7 AM to 10 PM, by appointment.",
                },
                {
                  question: "How much does it cost?",
                  answer: "It is $17 for each trash can we clean.",
                },
                {
                  question: "Do I need to be home?",
                  answer:
                    "No. Leave the cans somewhere accessible and text us any helpful instructions.",
                },
                {
                  question: "How do I pay?",
                  answer: "We will coordinate payment by text and keep it easy.",
                },
                {
                  question: "What if my can is really dirty?",
                  answer:
                    "That is exactly why we are here. If it is unusually rough, send us a quick picture first.",
                },
              ].map(({ question, answer }) => (
                <div
                  key={question}
                  className="grid gap-3 py-6 sm:grid-cols-[minmax(13rem,0.8fr)_minmax(0,1.2fr)] sm:gap-10"
                >
                  <dt className="font-serif text-xl text-ink">{question}</dt>
                  <dd className="leading-relaxed text-ink-soft">{answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-moss text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-7 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sun">
                Ready when you are
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.04] sm:text-5xl">
                Give your cans a clean start.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                Text us your address and number of cans. We will reply, confirm the details, and
                take it from there.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={SMS_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-sun px-6 py-3.5 text-base font-bold text-ink transition-colors hover:bg-coral"
              >
                Text Kingston &amp; Eliseo
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center rounded-sm border border-white/35 px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-9 text-sm text-ink-soft sm:flex-row sm:items-end sm:justify-between sm:px-7">
          <div>
            <div className="flex items-center gap-2 text-ink">
              <Trash2 className="size-4 text-moss" aria-hidden="true" />
              <span className="font-serif text-base">SoCalBin</span>
            </div>
            <p className="mt-2">Rancho Cucamonga, CA</p>
            <p>Kingston &amp; Eliseo&apos;s trash can cleaning service.</p>
            <p>$17 per trash can. Monday to Friday, 7 AM to 10 PM.</p>
          </div>
          <div className="sm:text-right">
            <a
              className="font-semibold text-moss-deep underline decoration-moss/35 underline-offset-4 hover:decoration-moss"
              href={SMS_HREF}
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-xs">
              &copy; {new Date().getFullYear()} Kingston &amp; Eliseo. Built with hometown pride.
            </p>
          </div>
        </div>
      </footer>

      <a
        href={SMS_HREF}
        className="fixed bottom-3 left-3 right-3 z-50 inline-flex items-center justify-center gap-2 rounded-sm bg-coral px-4 py-3.5 text-base font-bold text-ink shadow-lg md:hidden"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        Text us to schedule
      </a>
    </div>
  );
}

function Stat({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-start gap-2 leading-snug">
      <Icon className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}

function SectionIntro({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6">
      <span className="font-serif text-2xl text-coral">{number}</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-moss-deep">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.04] text-ink sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{description}</p>
      </div>
    </div>
  );
}
