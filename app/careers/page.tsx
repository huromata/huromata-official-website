import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Button from "@/components/Button";

const posterImage = "/careers/ai-software-development-internship-coimbatore.jpeg";
const whatsappMessage = encodeURIComponent(
  "Hi Huromata, I want to know more about the AI & Software Development Internship in Coimbatore."
);
const whatsappHref = `https://wa.me/919944290013?text=${whatsappMessage}`;

const curriculumTracks = [
  {
    title: "Full Stack",
    description:
      "You will learn the basics of how a web application is built from frontend to deployment.",
    items: [
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "Deployment"
    ]
  },
  {
    title: "Software Development",
    description:
      "You will also practice the core software skills students are expected to know when starting projects and internships.",
    items: [
      "API Development",
      "Version Control (Git & GitHub)",
      "Web Application Development",
      "Problem Solving & Coding Skills"
    ]
  }
];

const facilities = [
  "12+ hands-on live projects",
  "Industry-recognized certificate",
  "Placement assistance",
  "Mentorship support"
];

const tools = [
  "UI/UX design tools (Figma)",
  "AI tools (ChatGPT, Copilot)",
  "Developer tools",
  "Deployment tools"
];

const searchIntentTerms = [
  "Frontend basics",
  "Backend basics",
  "Database basics",
  "Web app development",
  "Software development",
  "JavaScript",
  "React",
  "Node.js",
  "SQL",
  "Git / GitHub",
  "API development",
  "Deployment basics"
];

const audienceBlocks = [
  {
    eyebrow: "Students",
    title: "For college students who want practical software learning",
    description:
      "If you want more than classroom theory, this program gives you offline learning, guided practice, and project exposure in Coimbatore."
  },
  {
    eyebrow: "Beginners",
    title: "For beginners who want to build a strong foundation",
    description:
      "It is a good starting point for learners who want to understand software and full stack development step by step."
  },
  {
    eyebrow: "Career Starters",
    title: "For learners preparing for entry-level IT opportunities",
    description:
      "If you want to improve your practical skills and prepare for internship or fresher-level IT roles, this program is designed for you."
  }
];

const programHighlights = [
  { label: "Class format", value: "Daily 3 hours offline class" },
  { label: "Location", value: "Coimbatore, Tamil Nadu" },
  { label: "Demo class", value: "Free 3-day demo class" },
  { label: "Seats", value: "Only 7 seats" },
  { label: "Course fee", value: "Rs 17,499" }
];

const faqs = [
  {
    question: "Who can join this program?",
    answer:
      "Students, recent graduates, and beginners who want to learn software development can join. If you are interested in full stack and web development, this program is a good starting point."
  },
  {
    question: "Is it offline or online?",
    answer:
      "It is an offline class in Coimbatore. The daily class duration is 3 hours."
  },
  {
    question: "What will I learn here?",
    answer:
      "The program covers frontend development, backend development, database management, deployment, API development, Git and GitHub, and web application development. It also includes AI tools, UI/UX tools, and developer tools."
  },
  {
    question: "Is there a demo class?",
    answer:
      "Yes. A free 3-day demo class is part of the offer shown in the poster."
  },
  {
    question: "How much is the fee?",
    answer:
      "The fee shown in the poster is Rs 17,499."
  },
  {
    question: "Are there limited seats?",
    answer:
      "Yes. The current offer mentions only 7 seats."
  },
  {
    question: "Will I get a certificate and support?",
    answer:
      "Yes. The poster mentions an industry-recognized certificate, placement assistance, and mentorship support."
  },
  {
    question: "How do I contact Huromata?",
    answer:
      "You can contact Huromata on WhatsApp at +91 99442 90013 or use the contact page."
  }
];

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AI & Software Development Internship",
  description:
    "Offline AI and software development training program in Coimbatore with daily 3-hour classes, live projects, mentorship support, a free 3-day demo class, and limited seats.",
  provider: {
    "@type": "Organization",
    name: "Huromata",
    sameAs: "https://www.huromata.com"
  },
  offers: {
    "@type": "Offer",
    price: "17499",
    priceCurrency: "INR"
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Offline",
    location: {
      "@type": "Place",
      name: "Coimbatore, Tamil Nadu"
    }
  }
};

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Huromata's AI & Software Development Internship in Coimbatore. Daily 3-hour offline classes covering full stack basics, software development, live projects, and mentor support.",
  keywords: [
    "AI & Software Development Internship",
    "internship in Coimbatore",
    "full stack internship in Coimbatore",
    "software internship in Coimbatore",
    "IT training in Coimbatore",
    "web development internship",
    "programming internship",
    "full stack development training",
    "software training Tamil Nadu",
    "developer internship Tamil Nadu"
  ],
  alternates: {
    canonical: "https://www.huromata.com/careers"
  },
  openGraph: {
    title: "AI & Software Development Internship in Coimbatore | Huromata",
    description:
      "Daily 3-hour offline classes in Coimbatore with live projects, demo class, and software development training.",
    type: "website",
    url: "https://www.huromata.com/careers",
    images: [
      {
        url: posterImage,
        alt: "Huromata AI & Software Development Internship poster"
      }
    ]
  }
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <section className="overflow-hidden border-b border-zinc-200 bg-zinc-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <AnimateOnScroll from="left">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                  Careers / Internship
                </p>
                <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">
                  AI &amp; Software Development Internship in Coimbatore
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
                  Learn software development through daily offline classes, live projects,
                  and guided practice in Coimbatore.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Daily 3 hours offline class",
                    "Only 7 seats",
                    "12+ live projects",
                    "Placement assistance",
                    "ISO-certified company"
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-black px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-zinc-800"
                  >
                    Enquire on WhatsApp
                  </a>
                  <Button href="/contact" variant="secondary" size="lg">
                    Contact Huromata
                  </Button>
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-500">
                  Train with Huromata, an ISO-certified company that builds software,
                  automation systems, business websites, and robotics solutions.
                </p>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {programHighlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">
                        {highlight.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-zinc-900">
                        {highlight.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll from="right" delay={120}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-full border border-black/10 bg-white lg:block" />
                <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-3xl bg-black lg:block" />
                <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
                  <Image
                    src={posterImage}
                    alt="Huromata AI and Software Development Internship poster"
                    width={900}
                    height={1200}
                    priority
                    className="h-auto w-full rounded-[1.4rem] object-cover"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-200 py-20 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                What You Learn
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                What you will learn
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-600">
                The topics below are based on the program poster and are written in a
                simpler way so students can quickly understand what is included.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {curriculumTracks.map((track, index) => (
              <AnimateOnScroll key={track.title} delay={index * 100}>
                <article className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-zinc-400">
                    {track.title}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-zinc-600">
                    {track.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {track.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-black"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <AnimateOnScroll from="left">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                  Tools & Topics
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Extra tools and topics students will be exposed to
                </h2>
                <p className="mt-5 text-base leading-relaxed text-zinc-600">
                  Along with the core modules, students also get exposure to common tools
                  used while learning and building software projects.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {searchIntentTerms.map((term) => (
                    <span
                      key={term}
                      className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-6 sm:grid-cols-2">
              <AnimateOnScroll from="right" delay={80}>
                <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80&auto=format&fit=crop"
                    alt="Students working together during software training in Coimbatore"
                    width={900}
                    height={700}
                    className="h-72 w-full object-cover"
                  />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll from="right" delay={160}>
                <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format&fit=crop"
                    alt="Learners collaborating on laptop-based internship work"
                    width={900}
                    height={700}
                    className="h-72 w-full object-cover"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-200 py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <AnimateOnScroll from="left">
              <div className="rounded-[2rem] bg-black p-8 text-white sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
                  Offline Learning Format
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Daily 3 hours offline class in Coimbatore
                </h2>
                <p className="mt-5 text-base leading-relaxed text-zinc-300">
                  This is an offline class in Coimbatore. Students attend daily for
                  3 hours and learn through guided sessions, project work, and support.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {facilities.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-zinc-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-6">
              <AnimateOnScroll delay={80}>
                <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                    Tools & Technologies
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {tools.map((tool) => (
                      <li key={tool} className="flex items-start gap-3 text-sm text-zinc-700">
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-black"
                          aria-hidden="true"
                        />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={160}>
                <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                    Why Students Choose This
                  </p>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-black">
                    Practical learning to build the skills needed for IT companies
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-zinc-600">
                    This program is for students who want practical learning, project
                    exposure, and the basic software development skills expected in IT
                    companies. It gives students a chance to learn in person, practice
                    regularly, and build confidence step by step.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50 py-20 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <div className="relative overflow-hidden rounded-[2.25rem] bg-black p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:p-10 lg:p-12">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 bg-white/5"
                style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                aria-hidden="true"
              />
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div className="max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.32em] text-white/45">
                    Who This Is For
                  </p>
                  <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    Who this program is suitable for
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300">
                    This section is here to help students understand whether this program
                    matches what they are looking for before they enquire.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {[
                    "Coimbatore focused",
                    "Offline class format",
                    "Internship-ready skills"
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {audienceBlocks.map((block, index) => (
              <AnimateOnScroll key={block.title} delay={index * 90}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[0_22px_50px_rgba(0,0,0,0.12)]">
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-black transition-colors duration-300 group-hover:bg-zinc-700"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <p className="max-w-[11rem] text-[11px] font-bold uppercase tracking-[0.24em] text-zinc-400">
                      {block.eyebrow}
                    </p>
                    <span className="text-3xl font-black tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-zinc-200">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black">
                    {block.title}
                  </h3>
                  <p className="mt-5 flex-1 text-base leading-relaxed text-zinc-600">
                    {block.description}
                  </p>
                  <div className="mt-7">
                    <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600 transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                      Student fit
                    </span>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-200 py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <AnimateOnScroll from="left">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                  FAQs
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Questions students ask before joining
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
                  These are the simple questions most students and parents usually ask
                  before contacting us.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll from="right" delay={100}>
              <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&q=80&auto=format&fit=crop"
                  alt="Students learning software development in a classroom environment"
                  width={900}
                  height={700}
                  className="h-72 w-full object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <AnimateOnScroll key={faq.question} delay={index * 70}>
                <details
                  className="group overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition-colors duration-300 open:border-black/20"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 marker:hidden [&::-webkit-details-marker]:hidden sm:px-8 sm:py-6">
                    <h3 className="text-lg font-bold tracking-tight text-black sm:text-xl">
                      {faq.question}
                    </h3>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-black transition-all duration-300 group-open:rotate-45 group-open:border-black group-open:bg-black group-open:text-white"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                    </span>
                  </summary>
                  <div className="border-t border-zinc-100 bg-zinc-50 px-6 py-5 sm:px-8 sm:py-6">
                    <p className="max-w-5xl text-base leading-relaxed text-zinc-600">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black py-20 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
                    Limited Offer
                  </p>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Want to know more before joining?
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-zinc-300">
                    Message Huromata on WhatsApp if you want to ask about the demo class,
                    fee, seats, or anything else about the program.
                  </p>
                </div>

                <div className="rounded-[1.75rem] bg-white p-6 text-black">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
                    Offer details
                  </p>
                  <p className="mt-3 text-4xl font-extrabold tracking-tight">Rs 17,499</p>
                  <p className="mt-2 text-sm font-semibold text-red-600">
                    Limited offer. Only 7 seats.
                  </p>
                  <div className="mt-6 space-y-3">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
                    >
                      Book a demo on WhatsApp
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-50"
                    >
                      Talk to Huromata
                    </Link>
                    <a
                      href="tel:+919944290013"
                      className="block text-center text-sm font-medium text-zinc-500 underline underline-offset-4 hover:text-black"
                    >
                      Call +91 99442 90013
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
