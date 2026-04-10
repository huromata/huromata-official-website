import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CountUp from "@/components/CountUp";
import { companyValues, founder, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2019 by Aswath. S during his Diploma in Mechatronics — Huromata builds scalable software and robotics systems."
};

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-20 sm:py-28">
        <Container>
          <div className="animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">About</p>
          </div>
          <h1 className="animate-fade-up-1 mt-4 max-w-3xl text-4xl font-extrabold tracking-tighter text-black sm:text-5xl lg:text-6xl">
            Engineering that<br />outlasts the trend.
          </h1>
          <p className="animate-fade-up-2 mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
            Huromata is a product engineering studio founded in 2019. We build scalable digital
            products, automation systems, and robotics solutions for teams that move fast and build
            for the long run.
          </p>
        </Container>
      </section>

      {/* ── Stats ── */}
      <section className="bg-black py-14" aria-label="Company statistics">
        <Container>
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map(({ end, suffix, label }) => (
              <div key={label} className="text-center">
                <dt className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  <CountUp end={end} suffix={suffix} />
                </dt>
                <dd className="mt-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Founder / Origin Story ── */}
      <section className="border-b border-zinc-200 py-20 sm:py-28">
        <Container>
          <AnimateOnScroll>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Origin Story
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Built by a student who refused to wait.
            </h2>
          </AnimateOnScroll>

          <div className="mt-14 grid gap-12 lg:grid-cols-5 lg:gap-20">
            {/* Left: Founder card */}
            <AnimateOnScroll from="left" className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                {/* TODO: Replace with real founder photo at /images/founder.jpg */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format&fit=crop"
                    alt="Huromata engineering team at work"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <div>
                    <p className="text-xl font-bold tracking-tight">{founder.name}</p>
                    <p className="mt-1 text-sm font-medium text-zinc-500">{founder.role}</p>
                  </div>

                <blockquote className="mt-6 border-l-2 border-black pl-4">
                  <p className="text-sm leading-relaxed text-zinc-600 italic">
                    &ldquo;{founder.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Timeline markers */}
                <div className="mt-8 space-y-3 border-t border-zinc-100 pt-6">
                  {[
                    { label: "Founded", value: founder.year },
                    { label: "Background", value: founder.discipline },
                    { label: "Role", value: "Managing Director" }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-black">{item.value}</span>
                    </div>
                  ))}
                </div>
                </div>{/* end p-8 */}
              </div>{/* end card */}
            </AnimateOnScroll>

            {/* Right: Story */}
            <div className="lg:col-span-3">
              {founder.story.map((paragraph, i) => (
                <AnimateOnScroll key={i} delay={i * 120} from="right">
                  <p
                    className={`text-lg leading-relaxed text-zinc-600 ${i > 0 ? "mt-6" : ""} ${
                      i === 0 ? "font-medium text-zinc-800" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                </AnimateOnScroll>
              ))}

              {/* Year stamp */}
              <AnimateOnScroll delay={400}>
                <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5">
                  <span className="text-2xl font-black text-black">{founder.year}</span>
                  <span className="h-6 w-px bg-zinc-300" aria-hidden="true" />
                  <span className="text-sm font-medium text-zinc-500">
                    The year Huromata began
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Mission ── */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimateOnScroll from="left">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Our Mission
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Build systems that hold.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-zinc-500">
                  Most software projects fail not from bad ideas, but from poor engineering
                  foundations. We exist to change that — delivering systems architected for
                  maintainability, scale, and operational clarity from day one.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-zinc-500">
                  Whether it&apos;s a SaaS product, an automation layer, or a robotics prototype,
                  every engagement is treated with the same rigour: understand the problem deeply,
                  design for the real constraints, then build with full transparency.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll from="right" delay={150}>
              <blockquote className="flex h-full flex-col justify-center rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                <p className="text-xl font-semibold leading-relaxed tracking-tight text-black">
                  &ldquo;We believe the best engineering is invisible — it just works, scales when
                  it needs to, and costs nothing in maintenance.&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="text-sm font-bold text-black">Huromata Engineering</p>
                  <p className="text-sm text-zinc-500">Product Engineering Studio · Est. 2019</p>
                </footer>
              </blockquote>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* ── Values ── */}
      <section className="py-20 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <header className="mb-14">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                What We Stand For
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Three principles behind every project
              </h2>
            </header>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-3">
            {companyValues.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 120}>
                <div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-200 hover:border-black hover:shadow-md">
                  <p className="text-5xl font-black text-zinc-100 transition-colors duration-200 group-hover:text-zinc-200">
                    0{i + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-bold tracking-tight">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Focus Areas ── */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-20 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <header className="mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Focus Areas
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Where we spend our energy
              </h2>
            </header>
          </AnimateOnScroll>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Product Development",
                description:
                  "End-to-end delivery from idea validation through architecture, build, and production launch with clear handoff documentation."
              },
              {
                title: "SaaS Systems",
                description:
                  "Multi-tenant platforms with secure auth, role management, billing integration, and scalable cloud infrastructure."
              },
              {
                title: "Automation Engineering",
                description:
                  "Workflow automation, data pipeline design, and system integration that eliminates manual operations and friction."
              }
            ].map((area, i) => (
              <AnimateOnScroll key={area.title} delay={i * 100}>
                <article className="rounded-2xl border border-zinc-200 bg-white p-7 transition-all duration-200 hover:border-black hover:shadow-sm">
                  <h3 className="text-lg font-bold tracking-tight">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">{area.description}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black py-20 sm:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
                Work with us
              </h2>
              <p className="mt-5 text-lg text-zinc-400">
                Tell us about what you&apos;re building and we&apos;ll show you how we&apos;d
                approach it.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  href="/contact"
                  size="lg"
                  variant="inverted"
                >
                  Start a Conversation →
                </Button>
                <Button href="/work" variant="ghost" size="lg">
                  See Our Work
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
