export type Service = {
  slug: string;
  title: string;
  short: string;
  eyebrow: string;
  description: string;
  image: string;
  bullets: string[];
  process: string[];
  waMessage: string;
};

export const SERVICES: Service[] = [
  {
    slug: "cafe-setup",
    title: "Cafe Setup Consulting",
    short: "Concept, space planning and operational readiness for new cafes.",
    eyebrow: "Cafe Consulting",
    description:
      "From the first concept sketch to a ready-to-open cafe, we help structure the offer, space and daily operations so the business runs smoothly from day one.",
    image: "/assets/hero-restaurant-consulting.jpeg",
    bullets: [
      "Cafe concept and positioning",
      "Space planning and seating flow",
      "Customer experience journey",
      "Menu structure and beverage programme",
      "Equipment planning and utilities",
      "Staffing requirements",
      "Operational preparation",
      "Pre-launch checklist",
    ],
    process: ["Discover", "Plan", "Design", "Prepare", "Launch", "Improve"],
    waMessage: "Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a new cafe setup project in Ahmedabad. Please contact me.",
  },
  {
    slug: "restaurant-setup",
    title: "Restaurant Setup Consulting",
    short: "End-to-end setup planning for new restaurant projects.",
    eyebrow: "Restaurant Consulting",
    description:
      "We structure new restaurant projects across concept, operations, kitchen and service so founders and owners open with clarity rather than guesswork.",
    image: "/assets/why-prasad-operations.jpeg",
    bullets: [
      "Concept and positioning",
      "Operational planning",
      "Space and workflow planning",
      "Kitchen and service coordination",
      "Equipment requirements",
      "Staff structure",
      "Menu planning",
      "Opening preparation",
    ],
    process: ["Discover", "Plan", "Design", "Prepare", "Launch", "Improve"],
    waMessage: "Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a new restaurant setup project. Please contact me.",
  },
  {
    slug: "bar-consulting",
    title: "Bar Consulting",
    short: "Bar concept, counter workflow and beverage programme planning.",
    eyebrow: "Bar Setup",
    description:
      "We plan bar concepts, counter workflows and beverage structures that are efficient to run and consistent to serve.",
    image: "/assets/brand-mark.jpeg",
    bullets: [
      "Bar concept planning",
      "Counter and workflow planning",
      "Beverage menu structure",
      "Equipment and storage requirements",
      "Staffing and service workflows",
      "Operational planning",
    ],
    process: ["Discover", "Plan", "Design", "Prepare", "Launch", "Improve"],
    waMessage: "Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a bar setup consulting project. Please contact me.",
  },
  {
    slug: "staff-setup",
    title: "Hospitality Staff Setup",
    short: "Staffing structure and role planning for hospitality projects.",
    eyebrow: "Staffing",
    description:
      "We help define the right staffing structure and role requirements for your project, aligned to location, experience and operating style.",
    image: "/assets/staffing-team.jpeg",
    bullets: [
      "Chef, CDP, Commis, Steward, Captain, Helper, Barista",
      "Role definitions and responsibilities",
      "Staff structure by service format",
      "Training and onboarding outline",
      "Scheduling and shift planning",
      "Operational readiness",
    ],
    process: ["Discover", "Plan", "Prepare", "Launch", "Improve"],
    waMessage: "Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss hospitality staffing requirements. Please contact me.",
  },
  {
    slug: "menu-planning",
    title: "Menu Planning",
    short: "Menu structure, balance and operational suitability.",
    eyebrow: "Menu",
    description:
      "We design menu structures that are appealing to guests and practical for the kitchen to deliver consistently.",
    image: "/assets/hero-brand-overlay.jpeg",
    bullets: [
      "Menu structure and categorisation",
      "Product selection",
      "Menu balance",
      "Recipe standardisation",
      "Ingredient planning",
      "Portion consistency",
      "Menu engineering concepts",
      "Operational suitability",
    ],
    process: ["Discover", "Plan", "Design", "Prepare", "Improve"],
    waMessage: "Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss menu planning for my cafe or restaurant. Please contact me.",
  },
  {
    slug: "kitchen-design",
    title: "Commercial Kitchen Design",
    short: "Workflow-led kitchen layout and equipment placement planning.",
    eyebrow: "Kitchen",
    description:
      "We plan commercial kitchen layouts around workflow, hygiene and service efficiency, using available kitchen photography as reference.",
    image: "/assets/kitchen-professional.jpeg",
    bullets: [
      "Kitchen workflow planning",
      "Preparation, cooking and plating zones",
      "Equipment placement",
      "Storage planning",
      "Hygiene-conscious layouts",
      "Staff movement",
      "Space utilisation",
      "Service efficiency",
    ],
    process: ["Discover", "Plan", "Design", "Prepare", "Improve"],
    waMessage: "Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss commercial kitchen design planning. Please contact me.",
  },
  {
    slug: "food-recipes",
    title: "Food Recipe Development",
    short: "Recipe development and standardisation for consistent service.",
    eyebrow: "Recipes",
    description:
      "We develop and standardise recipes so dishes are reproduced consistently across shifts and service teams.",
    image: "/assets/chef-cooking.jpeg",
    bullets: [
      "Recipe development",
      "Recipe standardisation",
      "Ingredient specifications",
      "Portion control",
      "Preparation procedures",
      "Consistency across service",
      "Menu-specific recipe planning",
    ],
    process: ["Discover", "Plan", "Design", "Prepare", "Improve"],
    waMessage: "Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss food recipe development. Please contact me.",
  },
  {
    slug: "management-consulting",
    title: "Restaurant Management Consulting",
    short: "Operational procedures, roles and daily service discipline.",
    eyebrow: "Management",
    description:
      "We help hospitality businesses build clear operational procedures, defined roles and daily disciplines that protect quality.",
    image: "/assets/cafe-restaurant-bar.jpeg",
    bullets: [
      "Operational procedures",
      "Staff roles and responsibilities",
      "Service workflow",
      "Inventory processes",
      "Cost-awareness practices",
      "Quality consistency",
      "Daily operational checklists",
      "Opening and closing procedures",
    ],
    process: ["Discover", "Plan", "Prepare", "Launch", "Improve"],
    waMessage: "Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss restaurant management consulting. Please contact me.",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
export function getService(slug: string) { return SERVICES.find((s) => s.slug === slug); }
