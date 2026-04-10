import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { processSteps, serviceGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software engineering and robotics solutions built for scale — SaaS, automation, drones, and hardware integration."
};

export default function ServicesPage() {
  const [software, robotics] = serviceGroups;

  return (
    <>
      {/* ── Page Header ── */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-20 sm:py-28">
        <Container>
          <div className="animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Services</p>
          </div>
          <h1 className="animate-fade-up-1 mt-4 max-w-3xl text-4xl font-extrabold tracking-tighter text-black sm:text-5xl lg:text-6xl">
            Engineering built<br />for the long run.
          </h1>
          <p className="animate-fade-up-2 mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
            Two focused engineering tracks — software and robotics — designed for teams that need
            fast execution and systems built to last.
          </p>
        </Container>
      </section>

      {/* ── Software Engineering ── */}
      <section className="border-b border-zinc-200 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: Description */}
            <AnimateOnScroll from="left">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Track 01</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  {software.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-zinc-500">{software.description}</p>

                <div className="mt-8 space-y-3">
                  {[
                    "Scoped requirements and architecture planning before any code is written.",
                    "Weekly deliverables with full visibility into progress and blockers.",
                    "Production-ready code with CI/CD pipelines, tests, and documentation.",
                    "Post-launch support, monitoring, and iterative improvement."
                  ].map((point, i) => (
                    <AnimateOnScroll key={point} delay={i * 80} from="none">
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                          aria-hidden="true"
                        />
                        <p className="text-sm leading-relaxed text-zinc-600">{point}</p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>

                <AnimateOnScroll delay={400} from="none">
                  <div className="mt-10">
                    <Button href="/contact" size="lg">
                      Start a Software Project →
                    </Button>
                  </div>
                </AnimateOnScroll>
              </div>
            </AnimateOnScroll>

            {/* Right: Image + Service card */}
            <AnimateOnScroll from="right" delay={150}>
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80&auto=format&fit=crop"
                    alt="Software developer writing code on a laptop"
                    width={600}
                    height={220}
                    className="h-52 w-full object-cover"
                  />
                </div>
                <ServiceCard
                  title={software.title}
                  description="Everything we deliver under this track:"
                  items={software.items}
                  variant="featured"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* ── Robotics & Hardware ── */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: Image + Service card */}
            <AnimateOnScroll from="left">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop"
                    alt="Electronic circuit board and hardware components"
                    width={600}
                    height={220}
                    className="h-52 w-full object-cover"
                  />
                </div>
                <ServiceCard
                  title={robotics.title}
                  description="Everything we deliver under this track:"
                  items={robotics.items}
                />
              </div>
            </AnimateOnScroll>

            {/* Right: Description */}
            <AnimateOnScroll from="right" delay={150}>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Track 02</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  {robotics.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-zinc-500">{robotics.description}</p>

                <div className="mt-8 space-y-3">
                  {[
                    "Prototype design and rapid iteration with real hardware constraints.",
                    "Integration of sensors, actuators, and control systems.",
                    "Field testing and validation in operational environments.",
                    "Full documentation and handoff for ongoing maintenance."
                  ].map((point, i) => (
                    <AnimateOnScroll key={point} delay={i * 80} from="none">
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                          aria-hidden="true"
                        />
                        <p className="text-sm leading-relaxed text-zinc-600">{point}</p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>

                <AnimateOnScroll delay={400} from="none">
                  <div className="mt-10">
                    <Button href="/contact" size="lg">
                      Start a Robotics Project →
                    </Button>
                  </div>
                </AnimateOnScroll>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* ── Process ── */}
      <section className="py-20 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <header className="mb-14">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Our Process</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                How every engagement runs
              </h2>
            </header>
          </AnimateOnScroll>

          <ol className="grid gap-8 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 100}>
                <li className="border-t-2 border-black pt-6">
                  <p className="text-3xl font-black text-zinc-100">{step.step}</p>
                  <h3 className="mt-3 text-lg font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{step.description}</p>
                </li>
              </AnimateOnScroll>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black py-20 sm:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-5 text-lg text-zinc-400">
                Tell us what you need to build and we&apos;ll respond within one business day.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/contact" size="lg" variant="inverted">
                  Contact Us →
                </Button>
                <Link
                  href="/work"
                  className="inline-flex items-center text-sm font-semibold text-zinc-400 underline underline-offset-4 hover:text-white"
                >
                  See our work first
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
