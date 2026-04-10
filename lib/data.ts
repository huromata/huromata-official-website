export type ServiceGroup = {
  title: string;
  description: string;
  items: string[];
  icon: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Stat = {
  end: number;
  suffix: string;
  label: string;
};

export type CompanyValue = {
  title: string;
  description: string;
};

export type Differentiator = {
  number: string;
  title: string;
  description: string;
};

export type WorkCategory = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" }
];

export const stats: Stat[] = [
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 30, suffix: "+", label: "Clients Worldwide" },
  { end: 3, suffix: "+", label: "Years Engineering" },
  { end: 99, suffix: "%", label: "Client Satisfaction" }
];

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Software Engineering",
    icon: "⬛",
    description:
      "End-to-end product development for web platforms, SaaS systems, and automation tools that scale from day one.",
    items: [
      "SaaS Product Development",
      "Business Website Development",
      "Web Application Engineering",
      "Workflow Automation Systems",
      "API Design & Integration",
      "Data Pipeline Architecture"
    ]
  },
  {
    title: "Robotics & Hardware",
    icon: "◼",
    description:
      "Physical systems engineering from initial prototype through production-ready hardware deployment and field validation.",
    items: [
      "Robotics Prototyping",
      "Drone Systems Development",
      "3D Printing & Fabrication",
      "Hardware-Software Integration",
      "IoT System Design",
      "Field Testing & Validation"
    ]
  }
];

export const differentiators: Differentiator[] = [
  {
    number: "01",
    title: "Engineering First",
    description:
      "We architect before we code. Every engagement starts with a deep technical design phase — because systems built on weak foundations collapse at scale."
  },
  {
    number: "02",
    title: "Full Transparency",
    description:
      "Weekly deliverables, real progress updates, and zero scope surprises. You always know exactly where your project stands."
  },
  {
    number: "03",
    title: "Software + Hardware",
    description:
      "Few studios bridge digital systems and physical engineering. We do both — from SaaS platforms to robotics — under one roof."
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map your goals, constraints, and user needs to define a scope built for maximum impact."
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture planning, UX wireframes, and technical specifications agreed before a line of code is written."
  },
  {
    step: "03",
    title: "Build",
    description:
      "Agile sprints with weekly deliverables, transparent progress, and continuous testing throughout."
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Launch, monitor, optimise, and grow — with post-delivery support built into every engagement."
  }
];

export const workCategories: WorkCategory[] = [
  {
    title: "SaaS Platforms",
    description: "Multi-tenant web applications with billing, roles, and analytics.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop"
  },
  {
    title: "Automation Systems",
    description: "Workflow engines that replace manual operations at scale.",
    tags: ["Python", "APIs", "Scheduling", "Integrations"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=80&auto=format&fit=crop"
  },
  {
    title: "Robotics Projects",
    description: "Prototype-to-deployment robotics and drone systems.",
    tags: ["ROS2", "Embedded C", "Hardware", "Sensors"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&auto=format&fit=crop"
  },
  {
    title: "Business Websites",
    description: "High-performance marketing sites with CMS and edge delivery.",
    tags: ["Next.js", "Tailwind", "Vercel", "Sanity"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80&auto=format&fit=crop"
  },
  {
    title: "API & Integrations",
    description: "Real-time data pipelines connecting enterprise tools.",
    tags: ["REST", "GraphQL", "Webhooks", "ETL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop"
  },
  {
    title: "Hardware Engineering",
    description: "3D printing, PCB design, and hardware-software integration.",
    tags: ["CAD", "3D Print", "IoT", "Firmware"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&auto=format&fit=crop"
  }
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "GraphQL",
  "ROS2"
];

export const companyValues: CompanyValue[] = [
  {
    title: "Engineering First",
    description:
      "Every decision starts with the right technical foundation — never the fastest shortcut. We design for longevity, not deadlines."
  },
  {
    title: "Clarity Over Complexity",
    description:
      "We build systems that are maintainable, well-documented, and designed to outlast trends. If it's not clear, we haven't finished yet."
  },
  {
    title: "Delivery Matters",
    description:
      "Ideas are only as good as their execution. We ship, iterate, and improve continuously — because progress is the product."
  }
];

export const companyDescription =
  "Huromata is a product engineering company building scalable digital products, automation systems, and hardware solutions for ambitious teams.";

export const founder = {
  name: "Aswath. S",
  role: "Managing Director & Founder",
  year: "2019",
  discipline: "Diploma in Mechatronics",
  story: [
    "In 2019, while completing his Diploma in Mechatronics, Aswath. S founded Huromata — driven by a clear belief that the gap between hardware engineering and software development was too large to ignore.",
    "Building at the intersection of physical systems and digital platforms, he turned a student project into a full-service product engineering studio — long before graduation was a question.",
    "Today, as Managing Director, Aswath leads a multidisciplinary team delivering SaaS platforms, robotics systems, and automation tools for clients worldwide — grounded in the same principle that started it all: build things that actually work."
  ],
  quote:
    "I started Huromata during my diploma because I couldn't find a team that understood both software and hardware. So I built one."
};
