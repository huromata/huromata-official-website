import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { workCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Our case studies are in preparation. Reach out to discuss specific project types and outcomes."
};

export default function WorkPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-black py-24 sm:py-32">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full border-[60px] border-white" />
          <div className="absolute -bottom-16 left-[10%] h-[300px] w-[300px] rounded-full border-[40px] border-white" />
        </div>

        <Container className="relative">
          <div className="animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Our Work</p>
            <h1 className="animate-fade-up-1 mt-4 max-w-2xl text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl">
              Case studies<br />in progress.
            </h1>
            <p className="animate-fade-up-2 mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              We&apos;re building detailed documentation of our work. Reach out directly to hear
              about specific projects, outcomes, and how we approach delivery.
            </p>
            <div className="animate-fade-up-3 mt-10 flex flex-wrap gap-4">
              <Button href="/contact" size="lg" variant="inverted">
                Discuss a Project →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── What We've Built In ── */}
      <section className="py-20 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <header className="mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Domains
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What we&apos;ve built in
              </h2>
              <p className="mt-4 max-w-xl text-zinc-500">
                Across software and hardware, here are the domains we&apos;ve delivered projects in.
              </p>
            </header>
          </AnimateOnScroll>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workCategories.map((cat, i) => (
              <AnimateOnScroll key={cat.title} delay={i * 80}>
                <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-200 hover:border-black hover:shadow-lg">
                  {/* Cover image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Card content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold tracking-tight">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{cat.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 transition-colors group-hover:bg-zinc-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Availability notice ── */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-16">
        <Container>
          <AnimateOnScroll>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
                <span className="text-sm font-semibold text-zinc-700">
                  Currently accepting new projects
                </span>
              </div>
              <p className="max-w-md text-zinc-500">
                While our portfolio page is being built, we&apos;re happy to walk you through past
                work on a call.
              </p>
              <Button href="/contact" size="lg">
                Book a Discovery Call →
              </Button>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
