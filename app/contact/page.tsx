import type { Metadata } from "next";
import Container from "@/components/Container";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project — SaaS, automation, robotics, or web — and we'll respond within one business day."
};

const projectTypes = [
  "SaaS Product",
  "Business Website",
  "Automation System",
  "Robotics Project",
  "API / Integration",
  "Other"
];

export default function ContactPage() {

  return (
    <>
      {/* ── Page Header ── */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-20 sm:py-28">
        <Container>
          <div className="animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Contact</p>
          </div>
          <h1 className="animate-fade-up-1 mt-4 max-w-2xl text-4xl font-extrabold tracking-tighter text-black sm:text-5xl lg:text-6xl">
            Let&apos;s talk about<br />your project.
          </h1>
          <p className="animate-fade-up-2 mt-6 max-w-xl text-lg leading-relaxed text-zinc-500">
            Share what you&apos;re building and we&apos;ll respond within one business day with
            thoughts on scope, timeline, and approach.
          </p>
        </Container>
      </section>

      {/* ── Contact split ── */}
      <section className="bg-zinc-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            {/* Left: Info card */}
            <AnimateOnScroll from="left" className="lg:col-span-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold tracking-tight">Before you reach out</h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                  The more detail you can share about your goals, constraints, and timeline, the more
                  useful our first conversation will be.
                </p>

                <div className="mt-10 space-y-8">
                  <AnimateOnScroll delay={100} from="none">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        Email
                      </p>
                      <a
                        href="mailto:team@huromata.com"
                        className="mt-2 block text-base font-semibold text-black underline underline-offset-4 hover:text-zinc-700"
                      >
                        team@huromata.com
                      </a>
                    </div>
                  </AnimateOnScroll>

                  <AnimateOnScroll delay={180} from="none">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/919944290013"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block text-base font-semibold text-black underline underline-offset-4 hover:text-zinc-700"
                      >
                        +91 99442 90013
                      </a>
                    </div>
                  </AnimateOnScroll>

                  <AnimateOnScroll delay={260} from="none">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        Response Time
                      </p>
                      <p className="mt-2 text-base font-semibold text-black">
                        Within 1 business day
                      </p>
                    </div>
                  </AnimateOnScroll>

                  <AnimateOnScroll delay={340} from="none">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        We Work On
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {projectTypes.slice(0, 5).map((type) => (
                          <li key={type} className="flex items-center gap-2.5 text-sm text-zinc-600">
                            <span
                              className="h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                              aria-hidden="true"
                            />
                            {type}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimateOnScroll>

                  <AnimateOnScroll delay={420} from="none">
                    <div className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" aria-hidden="true" />
                      <p className="text-sm font-medium text-zinc-600">
                        Currently available for new projects
                      </p>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right: Form */}
            <AnimateOnScroll from="right" delay={150} className="lg:col-span-3">
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </Container>
      </section>
    </>
  );
}
