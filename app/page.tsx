import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CountUp from "@/components/CountUp";
import BootScreen from "@/components/BootScreen";
import { differentiators, processSteps, serviceGroups, stats, technologies } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <BootScreen />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-zinc-200 hero-grid">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/80" />

        {/* Decorative geometric shapes */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 overflow-hidden opacity-[0.03]">
          <div className="absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full border-[40px] border-black" />
          <div className="absolute right-[20%] top-[40%] h-[200px] w-[200px] rounded-full border-[20px] border-black" />
          <div className="absolute right-[-5%] bottom-[10%] h-[300px] w-[300px] rotate-45 border-[30px] border-black" />
        </div>

        <Container className="relative py-20 sm:py-28 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: text */}
            <div>
              {/* Eyebrow badge */}
              <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-600 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                Product Engineering Studio · Est. 2019
              </div>

              {/* Headline */}
              <h1 className="animate-fade-up-1 text-balance text-5xl font-extrabold leading-[1.05] tracking-tighter text-black sm:text-6xl lg:text-7xl">
                We Build<br />
                What Scales.
              </h1>

              <p className="animate-fade-up-2 mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500 sm:text-xl">
                From SaaS platforms to robotics systems — Huromata engineers scalable digital
                products, automation tools, and hardware solutions for teams that move fast.
              </p>

              <div className="animate-fade-up-3 mt-10 flex flex-wrap gap-4">
                <Button href="/contact" size="lg">
                  Start a Project →
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Explore Services
                </Button>
              </div>

              <p className="animate-fade-up-4 mt-12 text-sm text-zinc-400">
                Trusted by startups and growing businesses worldwide
              </p>
            </div>

            {/* Right: hero image (desktop only) */}
            <div className="animate-fade-up-2 relative hidden lg:block">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=720&q=80&auto=format&fit=crop"
                  alt="Software engineer working on a laptop"
                  width={720}
                  height={500}
                  className="w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats ── */}
      <section className="bg-black py-16" aria-label="Company statistics">
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

      {/* ── Services ── */}
      <section className="border-b border-zinc-100 py-20 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <header className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  What We Do
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Two focused engineering tracks
                </h2>
              </div>
              <Link
                href="/services"
                className="text-sm font-semibold text-black underline underline-offset-4 hover:text-zinc-700 sm:shrink-0"
              >
                All Services →
              </Link>
            </header>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-2">
            <AnimateOnScroll from="left" delay={100}>
              <ServiceCard
                title={serviceGroups[0].title}
                description={serviceGroups[0].description}
                items={serviceGroups[0].items}
                variant="featured"
              />
            </AnimateOnScroll>
            <AnimateOnScroll from="right" delay={200}>
              <ServiceCard
                title={serviceGroups[1].title}
                description={serviceGroups[1].description}
                items={serviceGroups[1].items}
              />
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* ── Why Huromata ── */}
      <section className="bg-zinc-50 py-20 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <header className="mb-14">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Why Huromata
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What makes us different
              </h2>
            </header>
          </AnimateOnScroll>

          <div className="grid gap-px bg-zinc-200 md:grid-cols-3">
            {differentiators.map((item, i) => (
              <AnimateOnScroll key={item.number} delay={i * 120}>
                <div className="group bg-zinc-50 p-8 transition-colors duration-300 hover:bg-white">
                  <p className="text-5xl font-black text-zinc-100 transition-colors duration-300 group-hover:text-zinc-200">
                    {item.number}
                  </p>
                  <h3 className="mt-5 text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process ── */}
      <section className="border-y border-zinc-200 py-20 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <header className="mb-14">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                How We Work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                From idea to production
              </h2>
            </header>
          </AnimateOnScroll>

          <ol className="grid gap-8 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 100}>
                <li className="group">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-black text-sm font-bold text-white transition-all duration-200 group-hover:bg-white group-hover:text-black">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{step.description}</p>
                </li>
              </AnimateOnScroll>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Technology Stack ── */}
      <section className="py-16">
        <Container>
          <AnimateOnScroll>
            <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-zinc-400">
              Built with modern technology
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="cursor-default rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 transition-all duration-200 hover:scale-105 hover:border-black hover:bg-black hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-black py-24 sm:py-32" aria-labelledby="cta-heading">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <AnimateOnScroll>
              <h2
                id="cta-heading"
                className="text-balance text-4xl font-extrabold tracking-tighter text-white sm:text-5xl"
              >
                Have an idea?<br />
                Let&apos;s build it.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Tell us about your project and we&apos;ll map out a path from concept to production
                — no commitment required.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button
                  href="/contact"
                  size="lg"
                  variant="inverted"
                >
                  Start a Project →
                </Button>
                <Button href="/services" variant="ghost" size="lg">
                  Explore Services
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>
    </>
  );
}
