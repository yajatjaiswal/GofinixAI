export const siteConfig = {
  name: "GOFINIX AI",
  description:
    "AI-powered services designed to automate repetitive tasks, boost efficiency, and drive growth for businesses.",
  url: "https://gofinix.ai",
  ogImage: "https://gofinix.ai/og.jpg",
  links: {
    twitter: "https://twitter.com/gofinix",
    github: "https://github.com/gofinix",
  },
};

export const services = [
  {
    id: "ai-calling-agents",
    title: "AI Calling Agents",
    subtitle: "Automated Sales & Lead Generation",
    description:
      "Transform your outbound calling with AI-powered sales agents that handle cold calling, follow-ups, and lead nurturing with human-like conversations.",
    icon: "Phone",
    features: [
      "Outbound Calls & Follow-ups",
      "Lead Nurturing & Qualification",
      "Sentiment Analysis",
      "Voice Customization",
      "Appointment Booking",
      "Calendar Sync",
    ],
    targetAudience: ["Real Estate", "High-Ticket Coaching"],
    pricing: [
      {
        name: "Basic",
        price: 400,
        features: [
          "500 outbound calls",
          "Basic lead scoring",
          "Email/SMS follow-ups",
          "1 voice option",
        ],
      },
      {
        name: "Pro",
        price: 649,
        features: [
          "1,200 outbound calls",
          "Sentiment analysis",
          "Multi-channel drip campaigns",
          "3 voice customizations",
        ],
      },
      {
        name: "Elite",
        price: 999,
        features: [
          "Unlimited calls",
          "Full lead nurturing",
          "Advanced analytics",
          "Unlimited voice tweaks",
        ],
      },
    ],
  },
  {
    id: "ai-personal-assistant",
    title: "AI Personal Assistant",
    subtitle: "Your 24/7 Executive Assistant",
    description:
      "Streamline your workflow with an AI assistant that handles emails, meetings, tasks, and document management.",
    icon: "UserCog",
    features: [
      "Email Management",
      "Meeting Scheduling",
      "Task & Reminders",
      "Document Management",
      "Report Summarization",
      "Voice Commands",
    ],
    targetAudience: ["CEOs", "Startup Founders", "Consultants"],
    pricing: [
      {
        name: "Basic",
        price: 400,
        features: [
          "Email management",
          "Task tracking",
          "100 meeting schedules/month",
        ],
      },
      {
        name: "Pro",
        price: 649,
        features: [
          "Full email + document management",
          "Unlimited scheduling",
          "Expense tracking",
        ],
      },
      {
        name: "Elite",
        price: 899,
        features: [
          "All features",
          "Decision support",
          "Report summarization",
          "24/7 priority support",
        ],
      },
    ],
  },
  {
    id: "ai-receptionist",
    title: "AI Receptionist",
    subtitle: "24/7 Call Handling & Management",
    description:
      "Never miss a call with our AI receptionist that handles inquiries, appointments, and customer support around the clock.",
    icon: "HeadSet",
    features: [
      "Call Answering & Routing",
      "Appointment Management",
      "Speech-to-Text Notes",
      "Multi-Language Support",
      "Payment Processing",
      "Emotion Detection",
    ],
    targetAudience: ["Law Firms", "Medical Clinics", "Hotels"],
    pricing: [
      {
        name: "Basic",
        price: 400,
        features: [
          "300 inbound calls",
          "Basic routing",
          "Appointment booking",
          "1 language",
        ],
      },
      {
        name: "Pro",
        price: 649,
        features: [
          "800 calls",
          "Multi-language support",
          "Payment processing",
          "Speech-to-text",
        ],
      },
      {
        name: "Elite",
        price: 999,
        features: [
          "Unlimited calls",
          "Emotion detection",
          "Custom greetings",
          "24/7 support",
        ],
      },
    ],
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support",
    subtitle: "Automated Help Desk Solutions",
    description:
      "Provide instant, 24/7 customer support across all channels with our AI-powered help desk solution.",
    icon: "MessagesSquare",
    features: [
      "24/7 Automated Support",
      "Multi-Channel Support",
      "AI Ticketing System",
      "CRM Integration",
      "Refund Processing",
      "Proactive Support",
    ],
    targetAudience: ["D2C Brands", "SaaS Companies"],
    pricing: [
      {
        name: "Basic",
        price: 400,
        features: [
          "200 tickets/month",
          "Chat + email support",
          "Basic CRM sync",
        ],
      },
      {
        name: "Pro",
        price: 649,
        features: ["500 tickets", "Multi-channel support", "Refund processing"],
      },
      {
        name: "Elite",
        price: 899,
        features: [
          "Unlimited tickets",
          "Self-learning FAQs",
          "Advanced analytics",
        ],
      },
    ],
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Agent",
    company: "Premium Properties",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content:
      "GOFINIX AI's calling agents have transformed our lead generation. We've seen a 300% increase in qualified leads with significantly less effort.",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "TechStart Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content:
      "The AI Personal Assistant has become indispensable. It's like having a full-time executive assistant at a fraction of the cost.",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Medical Director",
    company: "Wellness Clinic",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    content:
      "Our patients love the 24/7 availability of the AI Receptionist. It's streamlined our appointment scheduling and reduced no-shows by 50%.",
  },
];

export const stats = [
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "24/7",
    label: "Support",
  },
  {
    value: "50+",
    label: "Integrations",
  },
  {
    value: "10x",
    label: "ROI",
  },
];

export const partnersContent = {
  title: "Trusted by Industry Leaders",
  description:
    "Join the growing network of companies transforming their customer service with our AI solutions",
};


export const partners = [
  {
    name: "TechStart Inc",
    logo: "https://example.com/logos/techstart.png",
    website: "https://techstart.com",
  },
  {
    name: "Premium Properties",
    logo: "https://example.com/logos/premiumproperties.png",
    website: "https://premiumproperties.com",
  },
  {
    name: "Wellness Clinic",
    logo: "https://example.com/logos/wellnessclinic.png",
    website: "https://wellnessclinic.com",
  },
  {
    name: "InnovateX",
    logo: "https://example.com/logos/innovatex.png",
    website: "https://innovatex.com",
  },
];