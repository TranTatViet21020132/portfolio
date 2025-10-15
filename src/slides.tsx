import { Edge, Node } from "@xyflow/react";
import { SlideData, SkillIconData, ProjectCardData } from "./Slide";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AnimatePresence, motion, Variants } from "framer-motion";

import CSSIcon from "@/assets/icons/css.svg?react";
import FigmaIcon from "@/assets/icons/figma.svg?react";
import GitIcon from "@/assets/icons/git.svg?react";
import HTMLIcon from "@/assets/icons/html.svg?react";
import JavaScriptIcon from "@/assets/icons/javascript.svg?react";
import NextJSIcon from "@/assets/icons/nextjs.svg?react";
import ReactIcon from "@/assets/icons/react.svg?react";
import ReduxIcon from "@/assets/icons/redux.svg?react";
import SassIcon from "@/assets/icons/sass.svg?react";
import TailwindCSSIcon from "@/assets/icons/tailwindcss.svg?react";
import TanstackQueryIcon from "@/assets/icons/tanstack-query.svg?react";
import TypeScriptIcon from "@/assets/icons/typescript.svg?react";
import ViteIcon from "@/assets/icons/vite.svg?react";
import WebpackIcon from "@/assets/icons/webpack.svg?react";
import { ArrowRight, FolderGit2, Github, Linkedin, Mail, Phone, Sparkles, Users } from "lucide-react";

const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;
const SLIDE_PADDING = 400;

const getPosition = (x: number, y: number) => ({
  x: x * (SLIDE_WIDTH + SLIDE_PADDING),
  y: y * (SLIDE_HEIGHT + SLIDE_PADDING),
});

const getLanguageIconPosition = (
  centerX: number,
  centerY: number,
  index: number,
  total: number
) => {
  const angle = (index / total) * 2 * Math.PI;
  const horizontalRadius = 640;
  const verticalRadius = 420;
  const x = Math.cos(angle) * horizontalRadius;
  const y = Math.sin(angle) * verticalRadius;
  const slideCenterOffsetX = SLIDE_PADDING / 2;
  const slideCenterOffsetY = SLIDE_PADDING / 2;
  return {
    x: centerX + slideCenterOffsetX + x,
    y: centerY + slideCenterOffsetY + y,
  };
};

const getFrameworkIconPosition = (
  centerX: number,
  centerY: number,
  index: number,
  total: number
) => {
  const slideCenterOffsetX = SLIDE_PADDING / 2;
  const slideCenterOffsetY = SLIDE_PADDING / 2;

  const iconsPerSide = total / 2;

  const isLeftSide = index < iconsPerSide;
  const sideIndex = isLeftSide ? index : index - iconsPerSide;

  const startAngle = isLeftSide ? Math.PI * 0.67 : -Math.PI * 0.33;
  const endAngle = isLeftSide ? Math.PI * 1.33 : Math.PI * 0.33;
  const angle =
    startAngle + (endAngle - startAngle) * (sideIndex / (iconsPerSide - 1));

  const horizontalRadius = 880;
  const verticalRadius = 480;

  const x = Math.cos(angle) * horizontalRadius;
  const y = Math.sin(angle) * verticalRadius;

  return {
    x: centerX + slideCenterOffsetX + x,
    y: centerY + slideCenterOffsetY + y,
  };
};

const textSlideVariant: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const gridItemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const counterVariant: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

// 01: HOME
const slide01: Node<SlideData> = {
  id: "01",
  type: "slide",
  position: getPosition(0, 0),
  data: {
    title: "Welcome to My Portfolio",
    content: (
      <AnimatePresence mode="wait">
        <motion.div
          key={"01"}
          className="flex flex-col items-center justify-center text-center space-y-12 p-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          {/* Profile Section */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Avatar className="size-28 border-2 border-gray-200 shadow-sm">
              <AvatarImage src="src\assets\images\Avatar.jpg" alt="Profile" />
              <AvatarFallback className="bg-gray-100 text-gray-900 text-2xl font-semibold">
                TV
              </AvatarFallback>
            </Avatar>

            <motion.div
              className="space-y-3 sm:text-left"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <motion.h2
                className="text-4xl font-extrabold text-gray-900 leading-tight tracking-tight"
                variants={textSlideVariant}
              >
                Frontend Developer
              </motion.h2>
              <motion.p
                className="text-xl font-medium text-gray-600"
                variants={textSlideVariant}
                transition={{ delay: 0.2 }}
              >
                Building High-Performance Web Applications
              </motion.p>
              <motion.p
                className="text-gray-500 text-base leading-relaxed max-w-md"
                variants={textSlideVariant}
                transition={{ delay: 0.4 }}
              >
                Explore my journey through this interactive portfolio and
                discover how I transform complex requirements into intuitive,
                scalable user interfaces.
              </motion.p>
            </motion.div>
          </motion.div>

          <Separator className="bg-gray-200 w-2/3 mx-auto" />

          {/* Skills Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 0.5, staggerChildren: 0.1 },
              },
            }}
          >
            {[
              "React & React Hooks",
              "Data Visualization",
              "State Management",
            ].map((skill) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Badge
                  variant="outline"
                  className="text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-100 transition-all px-4 py-1 text-sm font-medium tracking-wide"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    ),
    down: "02",
  },
};

// 02: ABOUT
const slide02: Node<SlideData> = {
  id: "02",
  type: "slide",
  position: getPosition(0, 1),
  data: {
    title: "About Me",
    content: (
      <AnimatePresence mode="wait">
        <motion.div
          key={"02"}
          className="max-w-3xl mx-auto space-y-12 p-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          {/* Text Section */}
          <motion.div
            className="space-y-6 text-center sm:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 0.2, staggerChildren: 0.15 },
              },
            }}
          >
            <motion.p
              className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light"
              variants={textSlideVariant}
            >
              I'm a{" "}
              <span className="font-semibold text-gray-900">
                passionate frontend developer
              </span>{" "}
              with 2 years of experience specializing in building
              high-performance, data-intensive web applications that serve real
              business needs.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light"
              variants={textSlideVariant}
              transition={{ delay: 0.2 }}
            >
              I focus on transforming{" "}
              <span className="font-medium text-gray-900">
                complex requirements into intuitive, visually compelling user
                interfaces
              </span>{" "}
              — from large-scale data visualizations to intricate state
              management architectures, ensuring scalability and excellent user
              experiences.
            </motion.p>
          </motion.div>

          <Separator className="bg-gray-200 w-3/4 mx-auto" />

          {/* Info Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 0.3, staggerChildren: 0.15 },
              },
            }}
          >
            {[
              { label: "LOCATION", value: "Hanoi, Vietnam" },
              { label: "EXPERIENCE", value: "2 Years" },
              { label: "EDUCATION", value: "VNU-UET" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card className="h-40 p-6 border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                  <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase">
                    {item.label}
                  </p>
                  <p className="text-xl font-bold text-gray-900 mt-3">
                    {item.value}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    ),
    up: "01",
    down: "03",
  },
};

const slide03: Node<SlideData> = {
  id: "03",
  type: "slide",
  position: getPosition(0, 2),
  data: {
    title: "Languages & Tools",
    content: (
      <AnimatePresence mode="wait">
        <motion.div
          key="slide-03"
          className="space-y-8 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0.1, staggerChildren: 0.08 },
            },
          }}
        >
          <motion.p
            className="text-gray-600 text-base leading-relaxed"
            variants={textSlideVariant}
          >
            Core technologies I use daily to build robust applications
          </motion.p>

          <Separator className="bg-gray-200 w-1/3" />

          <motion.div
            className="grid grid-cols-2 gap-6 sm:gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 0.2, staggerChildren: 0.1 },
              },
            }}
          >
            {[
              "JavaScript & TypeScript",
              "HTML & CSS",
              "Git & GitHub",
              "Figma",
            ].map((tech, idx) => (
              <motion.div
                key={tech}
                variants={gridItemVariant}
                whileHover={{
                  x: 8,
                  transition: { duration: 0.2 },
                }}
                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-transparent hover:from-gray-100 transition-colors cursor-default group"
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-lg-700 group-hover:bg-lg-500"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 2.5,
                    delay: idx * 0.15,
                    repeat: Infinity,
                  }}
                />
                <span className="text-gray-900 font-medium">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    ),
    up: "02",
    down: "04",
  },
};

const languageIcons = [
  { name: "JavaScript", id: "icon-js", Icon: JavaScriptIcon },
  { name: "TypeScript", id: "icon-ts", Icon: TypeScriptIcon },
  { name: "HTML", id: "icon-html", Icon: HTMLIcon },
  { name: "CSS", id: "icon-css", Icon: CSSIcon },
  { name: "Git", id: "icon-git", Icon: GitIcon },
  { name: "Figma", id: "icon-figma", Icon: FigmaIcon },
];

const languageIconNodes: Node<SkillIconData>[] = languageIcons.map(
  (icon, index) => {
    const centerPos = getPosition(0, 2);
    const iconPos = getLanguageIconPosition(
      centerPos.x,
      centerPos.y,
      index,
      languageIcons.length
    );
    return {
      id: icon.id,
      type: "skillIcon",
      position: iconPos,
      data: {
        name: icon.name,
        iconSvg: <icon.Icon className="w-20 h-20 text-gray-700" />,
      },
    };
  }
);

const slide04: Node<SlideData> = {
  id: "04",
  type: "slide",
  position: getPosition(0, 3),
  data: {
    title: "Frameworks & Libraries",
    content: (
      <AnimatePresence mode="wait">
        <motion.div
          key="slide-04"
          className="space-y-8 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0.1, staggerChildren: 0.08 },
            },
          }}
        >
          <motion.p
            className="text-gray-600 text-base leading-relaxed"
            variants={textSlideVariant}
          >
            Modern libraries and frameworks powering my applications
          </motion.p>

          <Separator className="bg-gray-200 w-1/3" />

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 0.2, staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <Tabs defaultValue="frontend" className="w-full">
              <ScrollArea>
                <TabsList className="mb-4 gap-1 bg-transparent w-full">
                  <TabsTrigger
                    value="frontend"
                    className="rounded-full data-[state=active]:bg-lg-500 data-[state=active]:text-white data-[state=active]:shadow-none text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Frontend
                  </TabsTrigger>
                  <TabsTrigger
                    value="state"
                    className="rounded-full data-[state=active]:bg-lg-500 data-[state=active]:text-white data-[state=active]:shadow-none text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    State & Data
                  </TabsTrigger>
                  <TabsTrigger
                    value="build"
                    className="rounded-full data-[state=active]:bg-lg-500 data-[state=active]:text-white data-[state=active]:shadow-none text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Build Tools
                  </TabsTrigger>
                </TabsList>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="frontend" className="mt-6">
                  <motion.div
                    className="grid grid-cols-2 gap-6 sm:gap-8"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          delayChildren: 0.1,
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    {["React", "Next.js", "Tailwind CSS", "Sass"].map(
                      (t, idx) => (
                        <motion.div
                          key={t}
                          variants={gridItemVariant}
                          whileHover={{
                            x: 8,
                            transition: { duration: 0.2 },
                          }}
                          className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-transparent hover:from-gray-100 transition-colors cursor-default group"
                        >
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-lg-700 group-hover:bg-lg-500"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{
                              duration: 2.5,
                              delay: idx * 0.15,
                              repeat: Infinity,
                            }}
                          />
                          <span className="text-gray-900 font-medium">{t}</span>
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </TabsContent>

                <TabsContent value="state" className="mt-6">
                  <motion.div
                    className="grid grid-cols-2 gap-6 sm:gap-8"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          delayChildren: 0.1,
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    {["Redux", "Tanstack Query"].map((t, idx) => (
                      <motion.div
                        key={t}
                        variants={gridItemVariant}
                        whileHover={{
                          x: 8,
                          transition: { duration: 0.2 },
                        }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-transparent hover:from-gray-100 transition-colors cursor-default group"
                      >
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-gray-900 group-hover:bg-gray-700"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 2.5,
                            delay: idx * 0.15,
                            repeat: Infinity,
                          }}
                        />
                        <span className="text-gray-900 font-medium">{t}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>

                <TabsContent value="build" className="mt-6">
                  <motion.div
                    className="grid grid-cols-2 gap-6 sm:gap-8"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          delayChildren: 0.1,
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    {["Vite", "Webpack"].map((t, idx) => (
                      <motion.div
                        key={t}
                        variants={gridItemVariant}
                        whileHover={{
                          x: 8,
                          transition: { duration: 0.2 },
                        }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-transparent hover:from-gray-100 transition-colors cursor-default group"
                      >
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-gray-900 group-hover:bg-gray-700"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 2.5,
                            delay: idx * 0.15,
                            repeat: Infinity,
                          }}
                        />
                        <span className="text-gray-900 font-medium">{t}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              </motion.div>
            </Tabs>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    ),
    up: "03",
    down: "05",
  },
};

const frameworkIcons = [
  { name: "React", id: "icon-react", Icon: ReactIcon },
  { name: "Next.js", id: "icon-next", Icon: NextJSIcon },
  { name: "Redux", id: "icon-redux", Icon: ReduxIcon },
  { name: "Tanstack Query", id: "icon-tanstack", Icon: TanstackQueryIcon },
  { name: "Tailwind CSS", id: "icon-tailwind", Icon: TailwindCSSIcon },
  { name: "Sass", id: "icon-sass", Icon: SassIcon },
  { name: "Vite", id: "icon-vite", Icon: ViteIcon },
  { name: "Webpack", id: "icon-webpack", Icon: WebpackIcon },
];

const frameworkIconNodes: Node<SkillIconData>[] = frameworkIcons.map(
  (icon, index) => {
    const centerPos = getPosition(0, 3);
    const iconPos = getFrameworkIconPosition(
      centerPos.x,
      centerPos.y,
      index,
      frameworkIcons.length
    );
    return {
      id: icon.id,
      type: "skillIcon",
      position: iconPos,
      data: {
        name: icon.name,
        iconSvg: <icon.Icon className="w-24 h-24 text-gray-700" />,
      },
    };
  }
);

// 05: EXPERIENCE
const slide05: Node<SlideData> = {
  id: "05",
  type: "slide",
  position: getPosition(0, 4),
  data: {
    title: "Experience",
    content: (
      <div className="space-y-4">
        <Timeline defaultValue={3}>
          <TimelineItem step={1}>
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineDate className="text-gray-600 font-medium">
                Apr 2024 - Jul 2024
              </TimelineDate>
              <TimelineTitle className="text-lg font-semibold text-gray-900">
                Web Development Trainee
              </TimelineTitle>
              <TimelineIndicator className="bg-gray-400" />
            </TimelineHeader>
            <TimelineContent className="text-gray-600 text-base">
              Viettel Digital Talent Program trainee. Learned web development
              fundamentals including Front-End, Back-End, Database, Web
              Optimization, and Security. Collaborated on final assessment
              project.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem step={2}>
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineDate className="text-gray-600 font-medium">
                Jul 2024 - Oct 2024
              </TimelineDate>
              <TimelineTitle className="text-lg font-semibold text-gray-900">
                Frontend Intern
              </TimelineTitle>
              <TimelineIndicator className="bg-gray-400" />
            </TimelineHeader>
            <TimelineContent className="text-gray-600 text-base">
              At FPT IS, built pages and components from Figma designs,
              integrated APIs, and developed features based on client requests.
              Worked on IWM, CRM, and e-Procurement projects.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem step={3}>
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineDate className="text-gray-600 font-medium">
                Jan 2025 - Present
              </TimelineDate>
              <TimelineTitle className="text-lg font-semibold text-gray-900">
                Frontend Developer
              </TimelineTitle>
              <TimelineIndicator className="bg-gray-400" />
            </TimelineHeader>
            <TimelineContent className="text-gray-600 text-base">
              At FPT Software, transforming requirements into creative UIs.
              Optimizing large-scale data rendering with React Flow, processing
              millions of Excel rows, and managing complex state interactions.
              Collaborating with backend to ensure system scalability.
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    ),
    up: "04",
    down: "06",
  },
};

// 06: PROJECTS HUB
const slide06: Node<SlideData> = {
  id: "06",
  type: "slide",
  position: getPosition(0, 5),
  data: {
    title: "Featured Projects",
    content: (
      <motion.div
        className="space-y-10 max-w-4xl mx-auto p-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delayChildren: 0.1, staggerChildren: 0.12 },
          },
        }}
      >
        {/* Header Section */}
        <motion.div
          className="space-y-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0.15, staggerChildren: 0.1 },
            },
          }}
        >
          <motion.div
            className="flex items-center gap-3"
            variants={textSlideVariant}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-gray-600" />
            </motion.div>
            <h3 className="text-xl text-gray-600 font-light">
              A showcase of my work
            </h3>
          </motion.div>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed max-w-2xl"
            variants={textSlideVariant}
          >
            From real-time chat systems with encryption to task management tools
            and mobile applications — here are projects that highlight my
            expertise in full-stack development and front-end leadership.
          </motion.p>

          <Separator className="bg-gray-200 w-1/4" />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0.3, staggerChildren: 0.15 },
            },
          }}
        >
          {[
            {
              icon: FolderGit2,
              label: "TOTAL PROJECTS",
              value: "20+",
              description: "Completed & Deployed",
              color: "text-gray-700",
            },
            {
              icon: Users,
              label: "TEAM EXPERIENCE",
              value: "4+ members",
              description: "Worked in collaborative teams",
              color: "text-gray-700",
            },
          ].map((stat, idx) => (
            <motion.div key={stat.label} variants={gridItemVariant}>
              <Card className="relative h-full p-6 border-gray-200 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <motion.div
                  className="absolute -right-8 -top-8 w-32 h-32 bg-gray-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    delay: idx * 0.5,
                    repeat: Infinity,
                  }}
                />

                <div className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                        {stat.label}
                      </p>
                      <motion.p
                        className="text-4xl font-bold text-gray-900"
                        variants={counterVariant}
                      >
                        {stat.value}
                      </motion.p>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <motion.div
                      className="w-1 h-1 rounded-full bg-gray-600"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        duration: 2,
                        delay: idx * 0.3,
                        repeat: Infinity,
                      }}
                    />
                    {stat.description}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Hint */}
        <motion.div
          className="flex items-center justify-center gap-3 text-gray-500 pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="text-sm font-medium">Explore projects</span>
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    ),
    up: "05",
    right: "project-01",
    down: "07",
  },
};

// PROJECT NODES
const projectNode01: Node<ProjectCardData> = {
  id: "project-01",
  type: "projectCard",
  position: getPosition(1, 5),
  data: {
    title: "EE2E Chat",
    description:
      "A real-time chat web app featuring E2EE messaging, file sharing, group chats, and encrypted audio/video calls.",
    thumbnail:
      "https://via.placeholder.com/800x450/e5e7eb/374151?text=EE2E+Chat",
    technologies: [
      "React",
      "Tailwind",
      "Shadcn/ui",
      "Zustand",
      "libsodium-wrappers",
    ],
    github: "https://github.com/TranTatViet21020132/EE2EChat",
    left: "06",
    right: "project-02",
  },
};

const projectNode02: Node<ProjectCardData> = {
  id: "project-02",
  type: "projectCard",
  position: getPosition(2, 5),
  data: {
    title: "MB Chat",
    description:
      "A React Native chat mobile app enabling users to send messages, files, and images, with WebRTC-based audio and video calls.",
    thumbnail:
      "https://via.placeholder.com/800x450/e5e7eb/374151?text=MB+Chat",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "WebSocket",
      "WebRTC",
      "Expo",
    ],
    github: "https://github.com/TranTatViet21020132/MBChat",
    left: "project-01",
    right: "project-03",
  },
};

const projectNode03: Node<ProjectCardData> = {
  id: "project-03",
  type: "projectCard",
  position: getPosition(3, 5),
  data: {
    title: "Tasktify",
    description:
      "A simple task management system featuring analytics and Drag & Drop for intuitive task organization.",
    thumbnail:
      "https://via.placeholder.com/800x450/e5e7eb/374151?text=Tasktify",
    technologies: [
      "React",
      "Tailwind",
      "Zustand",
      "React Query",
      "Shadcn/ui",
      "TypeScript",
      "DnD Kit",
      "ThreeJS",
    ],
    github: "https://github.com/TranTatViet21020132/tasktify",
    left: "project-02",
    backToHub: "06",
  },
};


// 07: CONTACT
const slide07: Node<SlideData> = {
  id: "07",
  type: "slide",
  position: getPosition(0, 6),
  data: {
    title: "Let's Connect",
    content: (
      <AnimatePresence mode="wait">
        <motion.div
          key="slide-07"
          className="max-w-4xl mx-auto space-y-12 p-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0.1, staggerChildren: 0.1 },
            },
          }}
        >
          {/* Header Section */}
          <motion.div
            className="space-y-4 text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.h3
              className="text-3xl font-bold text-gray-900"
              variants={textSlideVariant}
            >
              Get In Touch
            </motion.h3>
            <motion.p
              className="text-gray-600 text-lg max-w-xl mx-auto"
              variants={textSlideVariant}
            >
              Feel free to reach out for collaborations, opportunities, or just
              to say hello!
            </motion.p>
            <Separator className="bg-gray-200 w-1/4 mx-auto" />
          </motion.div>

          {/* Contact Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 0.2, staggerChildren: 0.12 },
              },
            }}
          >
            {/* Email Card */}
            <motion.div variants={gridItemVariant}>
              <Card className="group relative h-full p-6 border-gray-200 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden cursor-pointer">
                <motion.div
                  className="absolute -right-6 -bottom-6 w-32 h-32 bg-gray-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <div className="relative space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                      Email
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 break-all pl-1">
                    trantatviet2003@gmail.com
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div variants={gridItemVariant}>
              <Card className="group relative h-full p-6 border-gray-200 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden cursor-pointer">
                <motion.div
                  className="absolute -right-6 -bottom-6 w-32 h-32 bg-gray-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: 0.5,
                    repeat: Infinity,
                  }}
                />
                <div className="relative space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                      LinkedIn
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 pl-1">
                    Trần Tất Việt
                  </p>
                  <p className="text-sm text-gray-600 pl-1">
                    linkedin.com/in/trần-tất-việt-bab402319
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* GitHub Card */}
            <motion.div variants={gridItemVariant}>
              <Card className="group relative h-full p-6 border-gray-200 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden cursor-pointer">
                <motion.div
                  className="absolute -right-6 -bottom-6 w-32 h-32 bg-gray-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: 1,
                    repeat: Infinity,
                  }}
                />
                <div className="relative space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                      GitHub
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 pl-1">
                    TranTatViet21020132
                  </p>
                  <p className="text-sm text-gray-600 pl-1">
                    github.com/TranTatViet21020132
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Location Card */}
            <motion.div variants={gridItemVariant}>
              <Card className="group relative h-full p-6 border-gray-200 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden cursor-pointer">
                <motion.div
                  className="absolute -right-6 -bottom-6 w-32 h-32 bg-gray-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: 1.5,
                    repeat: Infinity,
                  }}
                />
                <div className="relative space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                      Phone number
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 pl-1">
                    (+84) 97-9235-038
                  </p>
                  <p className="text-sm text-gray-600 pl-1">
                    Open to remote opportunities
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center space-y-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 text-gray-600"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium">
                Available for new opportunities
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    ),
    up: "06",
  },
};

export const nodes: Node[] = [
  slide01,
  slide02,
  slide03,
  ...languageIconNodes,
  slide04,
  ...frameworkIconNodes,
  slide05,
  slide06,
  projectNode01,
  projectNode02,
  projectNode03,
  slide07,
];

export const edges: Edge[] = [
  {
    id: "01->02",
    source: "01",
    target: "02",
    sourceHandle: "bottom",
    targetHandle: "top",
    animated: true,
    style: { stroke: "#d1d5db", strokeWidth: 3 },
  },
  {
    id: "02->03",
    source: "02",
    target: "03",
    sourceHandle: "bottom",
    targetHandle: "top",
    animated: true,
    style: { stroke: "#d1d5db", strokeWidth: 3 },
  },
  {
    id: "03->04",
    source: "03",
    target: "04",
    sourceHandle: "bottom",
    targetHandle: "top",
    animated: true,
    style: { stroke: "#d1d5db", strokeWidth: 3 },
  },
  {
    id: "04->05",
    source: "04",
    target: "05",
    sourceHandle: "bottom",
    targetHandle: "top",
    animated: true,
    style: { stroke: "#d1d5db", strokeWidth: 3 },
  },
  {
    id: "05->06",
    source: "05",
    target: "06",
    sourceHandle: "bottom",
    targetHandle: "top",
    animated: true,
    style: { stroke: "#d1d5db", strokeWidth: 3 },
  },
  {
    id: "06->07",
    source: "06",
    target: "07",
    sourceHandle: "bottom",
    targetHandle: "top",
    animated: true,
    style: { stroke: "#d1d5db", strokeWidth: 3 },
  },
  {
    id: "06->project-01",
    source: "06",
    target: "project-01",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#d1d5db", strokeWidth: 3 },
  },
  {
    id: "project-01->project-02",
    source: "project-01",
    target: "project-02",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#d1d5db", strokeWidth: 3 },
  },
  {
    id: "project-02->project-03",
    source: "project-02",
    target: "project-03",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#d1d5db", strokeWidth: 3 },
  },
  {
    id: "project-03->project-04",
    source: "project-03",
    target: "project-04",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#d1d5db", strokeWidth: 3 },
  },
];
