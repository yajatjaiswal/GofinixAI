"use client";

import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  services,
  testimonials,
  stats,
  partners,
  partnersContent,
} from "@/lib/constants";
import { content, illustrations } from "@/lib/content";
import Image from "next/image";
import AiImage from "./AiImage.jpg";
// import DemoImage from "./DemoImage.jpg";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import {
  Phone,
  UserCog,
  Headset,
  MessagesSquare,
  ArrowRight,
  CheckCircle,
  Play,
  Shield,
  Zap,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const useMouseTilt = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });

  return { rotation, handleMouseMove, handleMouseLeave };
};

const icons = {
  "ai-calling-agents": Phone,
  "ai-personal-assistant": UserCog,
  "ai-receptionist": Headset,
  "ai-customer-support": MessagesSquare,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const textRevealVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

// Add these variants near your existing animation variants

const buttonHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const cardHoverVariants = {
  initial: {
    y: 0,
    rotateX: 0,
    rotateY: 0,
  },
  hover: {
    y: -10,
    rotateX: 5,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// Custom cursor component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(var(--primary-rgb), 0.3)",
    },
    button: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(var(--primary-rgb), 0.2)",
      mixBlendMode: "difference",
    },
    text: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(var(--primary-rgb), 0.1)",
      mixBlendMode: "difference",
    },
  };

  useEffect(() => {
    const handleButtonHover = () => setCursorVariant("button");
    const handleTextHover = () => setCursorVariant("text");
    const handleDefaultCursor = () => setCursorVariant("default");

    // Add event listeners
    const buttons = document.querySelectorAll("button, a, .interactive");
    const textElements = document.querySelectorAll("h1, h2, h3, p");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleButtonHover);
      button.addEventListener("mouseleave", handleDefaultCursor);
    });

    textElements.forEach((element) => {
      element.addEventListener("mouseenter", handleTextHover);
      element.addEventListener("mouseleave", handleDefaultCursor);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleButtonHover);
        button.removeEventListener("mouseleave", handleDefaultCursor);
      });

      textElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleTextHover);
        element.removeEventListener("mouseleave", handleDefaultCursor);
      });
    };
  }, []);

  return (
    <motion.div
      className="cursor-dot fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 400,
        mass: 0.8,
      }}
    >
      <motion.div
        className="w-2 h-2 bg-primary absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
};

// Add after the CustomCursor component

const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-primary/20"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-32 h-32 rotate-45 border border-primary/30"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-lg border border-primary/20"
        animate={{
          rotate: [-45, 45, -45],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Add this component after GeometricShapes

const ShimmerText = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative z-10">{children}</div>
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{
          translateX: ["100%", "-100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

// Add this component after ShimmerText

const ParticleEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [animateStats, setAnimateStats] = useState(false);
  const [cursorHidden, setCursorHidden] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });

  const demoRef = useRef(null);
  const demoInView = useInView(demoRef, { once: true, amount: 0.4 });

  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.2,
  });

  const partnersRef = useRef(null);
  const partnersInView = useInView(partnersRef, { once: true, amount: 0.3 });

  const pricingRef = useRef(null);
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.3 });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (statsInView) {
      setAnimateStats(true);
    }
  }, [statsInView]);

  // Enable custom cursor for non-touch devices
  useEffect(() => {
    // Check if we're on a touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
      document.body.style.cursor = "none";
      setCursorHidden(true);
    }

    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  // Demo carousel auto-rotation
  useEffect(() => {
    if (!isVideoPlaying) {
      const interval = setInterval(() => {
        setActiveDemo((prev) => (prev + 1) % 3);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVideoPlaying]);

  const { rotation, handleMouseMove, handleMouseLeave } = useMouseTilt();

  return (
    <>
      {cursorHidden && <CustomCursor />}
      <GeometricShapes />
      <ParticleEffect />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-8 pb-16 overflow-hidden px-4">
          <div className="inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
            <div className="inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="container relative"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-left pl-4">
                    <div className="overflow-hidden">
                      <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 interactive"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                      >
                        {content.hero.title}
                      </motion.h1>
                    </div>
                    <motion.p
                      className="text-xl text-muted-foreground mb-8"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.4,
                        duration: 0.6,
                      }}
                    >
                      {content.hero.description}
                    </motion.p>
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4"
                      variants={staggerContainerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div variants={fadeInUpVariant} custom={0}>
                        <motion.button
                          variants={buttonHoverVariants}
                          initial="initial"
                          whileHover="hover"
                          className="text-lg hover:scale-105 transition-transform relative overflow-hidden group interactive"
                        >
                          <Link href="/contact">
                            <motion.span
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6, duration: 0.3 }}
                            >
                              {content.hero.cta.primary}
                            </motion.span>
                            <motion.span
                              className="absolute bottom-0 left-0 h-1 bg-white/30"
                              initial={{ width: 0 }}
                              whileHover={{ width: "100%" }}
                              transition={{ duration: 0.3 }}
                            />
                          </Link>
                        </motion.button>
                      </motion.div>
                      <motion.div variants={fadeInUpVariant} custom={1}>
                        <motion.button
                          variants={buttonHoverVariants}
                          initial="initial"
                          whileHover="hover"
                          className="text-lg hover:scale-105 transition-transform interactive"
                        >
                          <Link href="/demo">Try Demo</Link>
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </div>
                  <motion.div
                    variants={floatAnimation}
                    initial="initial"
                    animate="animate"
                    className="hidden lg:block relative"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.5,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="interactive"
                      whileHover={{ scale: 1.03, rotate: 2 }}
                    >
                      <Image
                        // width={50}
                        // height={50}
                        src={AiImage}
                        alt="AI Assistant"
                        className="w-full h-auto max-w-[600px] mx-auto rounded-lg shadow-lg"
                      />
                      <motion.div
                        className="absolute -z-10 inset-0 bg-primary/20 rounded-lg blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mouse Trailer Effect */}
        <motion.div
          className="fixed hidden lg:block pointer-events-none h-96 w-96 rounded-full bg-primary/5 blur-3xl z-0"
          animate={{
            x: (mousePosition) => mousePosition.x - 192,
            y: (mousePosition) => mousePosition.y - 192,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 100,
            mass: 2,
          }}
        />

        {/* Stats Section */}
        <section
          ref={statsRef}
          className="py-16 bg-primary/5 backdrop-blur-xl relative overflow-hidden px-4"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: statsInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
          <div className="container relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  initial="hidden"
                  animate={statsInView ? "visible" : "hidden"}
                  custom={index}
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border shadow-lg relative interactive"
                >
                  {animateStats && (
                    <motion.div
                      className="text-3xl font-bold mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      <CountUp end={parseInt(stat.value)} />
                      {stat.value.toString().includes("%") && "%"}
                    </motion.div>
                  )}
                  {!animateStats && (
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  )}
                  <motion.div
                    className="text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {stat.label}
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 border border-primary/30 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      delay: index * 0.2,
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={servicesRef}
          className="py-24 relative overflow-hidden px-4"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: servicesInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 interactive">
                {content.services.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {content.services.description}
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainerVariants}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
            >
              {services.map((service, index) => {
                const Icon = icons[service.id];
                return (
                  <motion.div
                    key={service.id}
                    custom={index}
                    variants={fadeInUpVariant}
                    whileHover="hover"
                    className="group relative"
                  >
                    <motion.div
                      style={{
                        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                      }}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      className="rounded-lg border bg-card/80 p-6 shadow-lg backdrop-blur-lg transition-all duration-300 interactive"
                      whileHover={{
                        y: -10,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <div className="mb-4 relative">
                        <motion.div
                          className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1, scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          initial={{ scale: 0.8, rotate: 0 }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.2 },
                          }}
                          className="interactive"
                        >
                          <Icon className="h-12 w-12 text-primary relative" />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 interactive">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <Button
                        asChild
                        variant="ghost"
                        className="group-hover:translate-x-2 transition-transform interactive"
                      >
                        <Link href={`/services/${service.id}`}>
                          <motion.span className="flex items-center">
                            Learn More
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                              }}
                            >
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.span>
                          </motion.span>
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Demo Section - New */}
        <section
          ref={demoRef}
          className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background px-4"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(255,255,255,0.1)_0%,transparent_70%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: demoInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                demoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 interactive">
                See Our AI in Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience how our AI solutions transform business communication
                and customer engagement
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-2xl border border-primary/30"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  demoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative aspect-video bg-black/50 interactive">
                  <Image
                    // src={DemoImage}
                    alt="AI Demo"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      size="icon"
                      className="h-16 w-16 rounded-full bg-primary/80 hover:bg-primary text-white shadow-lg"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-xl font-semibold">
                    {
                      [
                        "AI Customer Service Demo",
                        "Intelligent Voice Assistant",
                        "AI Receptionist Solution",
                      ][activeDemo]
                    }
                  </h3>
                </motion.div>
              </motion.div>

              <motion.div
                className="space-y-6"
                variants={staggerContainerVariants}
                initial="hidden"
                animate={demoInView ? "visible" : "hidden"}
              >
                <motion.div
                  variants={fadeInUpVariant}
                  custom={0}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border shadow-md transition-all duration-300 interactive"
                  whileHover={{
                    y: -5,
                    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Faster Response Times
                    </h3>
                    <p className="text-muted-foreground">
                      Our AI responds in milliseconds, reducing wait times by up
                      to 80% compared to human agents.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUpVariant}
                  custom={1}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border shadow-md transition-all duration-300 interactive"
                  whileHover={{
                    y: -5,
                    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Natural Conversations
                    </h3>
                    <p className="text-muted-foreground">
                      Advanced language understanding enables human-like
                      interactions that delight customers.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUpVariant}
                  custom={2}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border shadow-md transition-all duration-300 interactive"
                  whileHover={{
                    y: -5,
                    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">24/7 Availability</h3>
                    <p className="text-muted-foreground">
                      Round-the-clock service ensures your customers get support
                      whenever they need it.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUpVariant}
                  custom={3}
                  className="mt-8"
                >
                  <Button asChild size="lg" className="text-lg interactive">
                    <Link href="/demo">
                      Try Interactive Demo{" "}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          ref={testimonialsRef}
          className="py-24 bg-primary/5 backdrop-blur-xl relative overflow-hidden px-4"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1)_0%,transparent_70%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: testimonialsInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                testimonialsInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 interactive">
                {content.testimonials.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {content.testimonials.description}
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainerVariants}
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  variants={fadeInUpVariant}
                  custom={index}
                  className="relative"
                >
                  <motion.div
                    className="rounded-lg border bg-card/80 p-6 shadow-lg backdrop-blur-lg transition-all duration-300 interactive"
                    whileHover={{
                      y: -10,
                      boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.1)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary/20"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                    />
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/30 interactive"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <div className="font-semibold interactive">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </motion.div>
                    </div>
                    <motion.p
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                    >
                      {testimonial.content}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Partners Section */}
        <section
          ref={partnersRef}
          className="py-24 bg-primary/5 backdrop-blur-xl relative overflow-hidden px-4"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: partnersInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                partnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 interactive">
                {partnersContent.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {partnersContent.description}
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={staggerContainerVariants}
              initial="hidden"
              animate={partnersInView ? "visible" : "hidden"}
            >
              {partners.map((partner: any, index: number) => (
                <motion.div
                  key={partner.name}
                  variants={fadeInUpVariant}
                  custom={index}
                  className="relative"
                >
                  <motion.div
                    className="rounded-lg border bg-card/80 p-6 shadow-lg backdrop-blur-lg transition-all duration-300 interactive"
                    whileHover={{
                      y: -10,
                      boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.1)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary/20"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                    />
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-full overflow-hidden mr
                        -4 border-2 border-primary/30 interactive"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <div className="font-semibold interactive">
                          {partner.name}
                        </div>
                      </motion.div>
                    </div>
                    <motion.p
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                    >
                      {partner.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section
          ref={pricingRef}
          className="py-24 bg-primary/5 backdrop-blur-xl relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(255,255,255,0.1)_0%,transparent_70%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: pricingInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 interactive">
                {content.pricing.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {content.pricing.description}
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainerVariants}
              initial="hidden"
              animate={pricingInView ? "visible" : "hidden"}
            >
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  variants={fadeInUpVariant}
                  custom={index}
                  className="relative"
                >
                  <motion.div
                    className="rounded-lg border bg-card/80 p-6 shadow-lg backdrop-blur-lg transition-all duration-300 interactive"
                    whileHover={{
                      y: -10,
                      boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.1)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary/20"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                    />
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-full overflow-hidden mr-4 border
                        -2 border-primary/30 interactive"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <img
                          src={plan.icon}
                          alt={plan.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <div className="font-semibold interactive">
                          {plan.name}
                        </div>
                      </motion.div>
                    </div>
                    <motion.p
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                    >
                      {plan.description}
                    </motion.p>
                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <Button asChild size="lg" className="interactive">
                        {plan.price}
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="py-24 bg-primary/5 backdrop-blur-xl relative overflow-hidden px-4"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(255,255,255,0.1)_0%,transparent_70%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: ctaInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 interactive">
                {content.cta.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {content.cta.description}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-4"
              variants={staggerContainerVariants}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <motion.div variants={fadeInUpVariant} custom={0}>
                <motion.button
                  variants={buttonHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  className="text-lg hover:scale-105 transition-transform relative overflow-hidden group interactive"
                >
                  <Link href="/contact">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                    >
                      {content.cta.ctaText}
                    </motion.span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-1 bg-white/30"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.button>
              </motion.div>
              <motion.div variants={fadeInUpVariant} custom={1}>
                <motion.button
                  variants={buttonHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  className="text-lg hover:scale
                  -105 transition-transform interactive"
                >
                  <Link href="/demo">Try Demo</Link>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
