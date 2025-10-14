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
              <AvatarImage
                src="https://via.placeholder.com/120"
                alt="Profile"
              />
              <AvatarFallback className="bg-gray-100 text-gray-900 text-2xl font-semibold">
                JD
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
                Full Stack Developer
              </motion.h2>
              <motion.p
                className="text-xl font-medium text-gray-600"
                variants={textSlideVariant}
                transition={{ delay: 0.2 }}
              >
                Creative Problem Solver
              </motion.p>
              <motion.p
                className="text-gray-500 text-base leading-relaxed max-w-md"
                variants={textSlideVariant}
                transition={{ delay: 0.4 }}
              >
                Explore my journey through this interactive portfolio and get to
                know my work, skills, and experiences.
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
            {["React & Next.js", "Full Stack", "Cloud Native"].map((skill) => (
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
                passionate full-stack developer
              </span>{" "}
              with over 5 years of experience building scalable,
              high-performance web applications that serve millions of users
              worldwide.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light"
              variants={textSlideVariant}
              transition={{ delay: 0.2 }}
            >
              I specialize in{" "}
              <span className="font-medium text-gray-900">
                React, Node.js, and cloud technologies
              </span>{" "}
              — crafting elegant solutions to complex problems while mentoring
              junior developers to reach their full potential.
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
              { label: "LOCATION", value: "San Francisco, CA" },
              { label: "EXPERIENCE", value: "5+ Years" },
              { label: "PROJECTS", value: "50+" },
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

// ============================================
// 03: SKILLS - Languages and Tools
// ============================================
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
                  className="w-1.5 h-1.5 rounded-full bg-gray-900 group-hover:bg-gray-700"
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
        iconSvg: <icon.Icon className="w-16 h-16 text-gray-700" />,
      },
    };
  }
);

// ============================================
// 04: SKILLS - Frameworks and Libraries
// ============================================
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
                <TabsList className="mb-4 gap-1 bg-transparent">
                  <TabsTrigger
                    value="frontend"
                    className="rounded-full data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:shadow-none text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Frontend
                  </TabsTrigger>
                  <TabsTrigger
                    value="state"
                    className="rounded-full data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:shadow-none text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    State & Data
                  </TabsTrigger>
                  <TabsTrigger
                    value="build"
                    className="rounded-full data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:shadow-none text-gray-700 hover:text-gray-900 transition-colors"
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
                        transition: { delayChildren: 0.1, staggerChildren: 0.1 },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    {["React", "Next.js", "Tailwind CSS", "Sass"].map((t, idx) => (
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

                <TabsContent value="state" className="mt-6">
                  <motion.div
                    className="grid grid-cols-2 gap-6 sm:gap-8"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { delayChildren: 0.1, staggerChildren: 0.1 },
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
                        transition: { delayChildren: 0.1, staggerChildren: 0.1 },
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
                2019 - 2021
              </TimelineDate>
              <TimelineTitle className="text-lg font-semibold text-gray-900">
                Junior Developer
              </TimelineTitle>
              <TimelineIndicator className="bg-gray-400" />
            </TimelineHeader>
            <TimelineContent className="text-gray-600">
              Started my career building web applications and learning best
              practices in software development. Worked with React and Node.js.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem step={2}>
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineDate className="text-gray-600 font-medium">
                2021 - 2023
              </TimelineDate>
              <TimelineTitle className="text-lg font-semibold text-gray-900">
                Full Stack Developer
              </TimelineTitle>
              <TimelineIndicator className="bg-gray-400" />
            </TimelineHeader>
            <TimelineContent className="text-gray-600">
              Built and maintained multiple production applications serving
              millions of users across different platforms and regions.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem step={3}>
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineDate className="text-gray-600 font-medium">
                2023 - Present
              </TimelineDate>
              <TimelineTitle className="text-lg font-semibold text-gray-900">
                Senior Developer
              </TimelineTitle>
              <TimelineIndicator className="bg-gray-400" />
            </TimelineHeader>
            <TimelineContent className="text-gray-600">
              Leading frontend architecture, mentoring junior developers, and
              driving technical innovation across the organization.
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
      <div className="space-y-6">
        <p className="text-gray-700">Explore my recent work and achievements</p>
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 border-gray-200 bg-gray-50">
            <p className="text-sm font-semibold text-gray-600">
              TOTAL PROJECTS
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-2">20+</p>
          </Card>
          <Card className="p-4 border-gray-200 bg-gray-50">
            <p className="text-sm font-semibold text-gray-600">USERS SERVED</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">5M+</p>
          </Card>
        </div>
      </div>
    ),
    up: "05",
    right: "project-01",
    down: "08",
  },
};

// PROJECT NODES - Now arranged horizontally to the right
const projectNode01: Node<ProjectCardData> = {
  id: "project-01",
  type: "projectCard",
  position: getPosition(1, 5),
  data: {
    title: "E-Commerce Platform",
    description:
      "Full-stack marketplace with real-time inventory management, payment processing, and advanced analytics dashboard.",
    thumbnail:
      "https://via.placeholder.com/800x450/e5e7eb/374151?text=E-Commerce",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe"],
    left: "06",
    right: "project-02",
  },
};

const projectNode02: Node<ProjectCardData> = {
  id: "project-02",
  type: "projectCard",
  position: getPosition(2, 5),
  data: {
    title: "Analytics Dashboard",
    description:
      "Data visualization platform processing millions of real-time events with interactive charts and insights.",
    thumbnail:
      "https://via.placeholder.com/800x450/e5e7eb/374151?text=Analytics",
    technologies: ["React", "D3.js", "GraphQL", "AWS", "Redis"],
    left: "project-01",
    right: "project-03",
  },
};

const projectNode03: Node<ProjectCardData> = {
  id: "project-03",
  type: "projectCard",
  position: getPosition(3, 5),
  data: {
    title: "Task Management App",
    description:
      "Collaborative tool with real-time updates, team synchronization, and intelligent task prioritization.",
    thumbnail:
      "https://via.placeholder.com/800x450/e5e7eb/374151?text=Task+Manager",
    technologies: ["React", "Socket.io", "MongoDB", "Express"],
    left: "project-02",
    right: "project-04",
  },
};

const projectNode04: Node<ProjectCardData> = {
  id: "project-04",
  type: "projectCard",
  position: getPosition(4, 5),
  data: {
    title: "Mobile App",
    description:
      "Cross-platform mobile application with 50k+ downloads on app stores and 4.8 star rating.",
    thumbnail:
      "https://via.placeholder.com/800x450/e5e7eb/374151?text=Mobile+App",
    technologies: ["React Native", "Firebase", "TypeScript"],
    left: "project-03",
    backToHub: "06",
  },
};

// 08: CONTACT
const slide08: Node<SlideData> = {
  id: "08",
  type: "slide",
  position: getPosition(0, 6),
  data: {
    title: "Get In Touch",
    content: (
      <div className="space-y-6">
        <Tabs defaultValue="contact" className="w-full">
          <ScrollArea>
            <TabsList className="mb-3 gap-1 bg-transparent">
              <TabsTrigger
                value="contact"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
              >
                Contact Info
              </TabsTrigger>
              <TabsTrigger
                value="socials"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
              >
                Social Links
              </TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <TabsContent value="contact" className="space-y-3 mt-4">
            {[
              { label: "Email", value: "hello@example.com" },
              { label: "Phone", value: "+1 (555) 123-4567" },
              { label: "Location", value: "San Francisco, CA" },
            ].map((item) => (
              <Card key={item.label} className="p-4 border-gray-200 bg-gray-50">
                <p className="text-sm font-semibold text-gray-600">
                  {item.label.toUpperCase()}
                </p>
                <p className="text-gray-900 mt-2 font-medium">{item.value}</p>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="socials" className="space-y-3 mt-4">
            {[
              { label: "GitHub", url: "github.com/yourprofile" },
              { label: "LinkedIn", url: "linkedin.com/in/yourprofile" },
              { label: "Twitter", url: "twitter.com/yourprofile" },
              { label: "Website", url: "yourportfolio.com" },
            ].map((social) => (
              <Card
                key={social.label}
                className="p-4 border-gray-200 bg-gray-50"
              >
                <p className="text-sm font-semibold text-gray-600">
                  {social.label.toUpperCase()}
                </p>
                <p className="text-gray-700 mt-2">{social.url}</p>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
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
  projectNode04,
  slide08,
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
    id: "06->08",
    source: "06",
    target: "08",
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
