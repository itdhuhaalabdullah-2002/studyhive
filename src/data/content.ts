export type Feature = {
  title: string;
  description: string;
  /** SVG path data (24×24, stroke icon) */
  icon: string;
};

export type Step = {
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    title: "Study rooms",
    description:
      "Jump into a room with your group and study together, with chat that stays next to your work.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM21 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    title: "Shared notes",
    description:
      "Write and organize notes together so nobody has to ask who has the lecture summary.",
    icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
  },
  {
    title: "Session scheduling",
    description:
      "Plan study sessions around everyone’s timetable and get reminders before they start.",
    icon: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  },
  {
    title: "Progress tracking",
    description:
      "See what your group has covered and what is left before the exam.",
    icon: "M3 3v18h18M19 9l-5 5-4-4-3 3",
  },
  {
    title: "Flashcards",
    description:
      "Turn notes into flashcards and quiz each other until the material sticks.",
    icon: "m12 2 10 5-10 5L2 7l10-5ZM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    title: "Focus timer",
    description:
      "Stay on track with a shared Pomodoro timer that keeps the whole group in sync.",
    icon: "M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 8v4l2 2M9 2h6",
  },
];

export const steps: Step[] = [
  {
    title: "Create a Hive",
    description:
      "Start a study group for your course in a few seconds and give it a name.",
  },
  {
    title: "Invite your classmates",
    description:
      "Share a link and bring your friends in. Everyone joins the same workspace.",
  },
  {
    title: "Study and track progress",
    description:
      "Study together, check off topics and watch your group’s progress grow.",
  },
];

export type Plan = {
  name: string;
  description: string;
  /** Price per month when billed monthly (USD) */
  monthly: number;
  /** Price per month when billed yearly (USD) */
  yearly: number;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Free",
    description: "For trying StudyHive with a small group.",
    monthly: 0,
    yearly: 0,
    features: [
      "Up to 3 study rooms",
      "Shared notes",
      "Basic progress tracking",
      "Focus timer",
    ],
    cta: "Start for free",
  },
  {
    name: "Pro",
    description: "For students who study together every week.",
    monthly: 8,
    yearly: 6,
    features: [
      "Everything in Free",
      "Unlimited study rooms",
      "Flashcards with spaced review",
      "Session scheduling and reminders",
      "Detailed progress insights",
    ],
    cta: "Get Early Access",
    highlighted: true,
  },
  {
    name: "Team",
    description: "For clubs, classes and study societies.",
    monthly: 20,
    yearly: 15,
    features: [
      "Everything in Pro",
      "Up to 50 members",
      "Shared resource library",
      "Admin controls",
      "Priority support",
    ],
    cta: "Get Early Access",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our group chat used to be chaos. Now notes, deadlines and revision plans all live in one Hive.",
    name: "Sara M.",
    role: "Computer Science, Year 3",
  },
  {
    quote:
      "The shared flashcards helped us revise for finals together, even when half of us were at home.",
    name: "Omar K.",
    role: "Pharmacy student",
  },
  {
    quote:
      "Seeing our group’s progress kept everyone motivated. We actually finished the syllabus on time.",
    name: "Noor A.",
    role: "Engineering, Year 2",
  },
];

export const faqs: Faq[] = [
  {
    question: "What is StudyHive?",
    answer:
      "StudyHive is a workspace for study groups. You can chat, share notes, schedule sessions, make flashcards and track progress together.",
  },
  {
    question: "Is StudyHive free to use?",
    answer:
      "Yes. The Free plan includes up to 3 study rooms, shared notes, basic progress tracking and a focus timer. Paid plans add more features.",
  },
  {
    question: "How many people can join a Hive?",
    answer:
      "Free and Pro plans are designed for study groups of friends and classmates. The Team plan supports up to 50 members for clubs and classes.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. StudyHive runs in your browser on a laptop, tablet or phone, so you can join a session from anywhere.",
  },
  {
    question: "When can I get access?",
    answer:
      "StudyHive is in early access. Add your email in the form at the top of the page and we will let you know when your spot is ready.",
  },
];
