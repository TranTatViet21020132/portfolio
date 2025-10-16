import {
  type Node,
  type NodeProps,
  useReactFlow,
  Handle,
  Position,
} from "@xyflow/react";
import { useCallback, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipTrigger, TooltipPopup } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { useProgress } from "./App";

export type SlideData = {
  title: string;
  content: React.ReactNode;
  left?: string;
  leftLabel?: string;
  up?: string;
  upLabel?: string;
  down?: string;
  downLabel?: string;
  right?: string;
  rightLabel?: string;
};

export type SkillIconData = {
  name: string;
  iconSvg: React.ReactNode;
};

export type ProjectCardData = {
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  left?: string;
  right?: string;
  up?: string;
  backToHub?: string;
  github?: string;
};

export const SLIDE_WIDTH = 1920;
export const SLIDE_HEIGHT = 1080;
export const SLIDE_PADDING = 400;

const slideVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

const iconVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -10 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5 },
  },
  hover: { scale: 1.05 },
};

export function Slide({ data }: NodeProps<Node<SlideData>>) {
  const {
    title,
    content,
    left,
    leftLabel,
    up,
    upLabel,
    down,
    downLabel,
    right,
    rightLabel,
  } = data;
  const { fitView } = useReactFlow();
  const { updateProgressBySlide } = useProgress();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const moveToNextSlide = useCallback(
    (event: React.MouseEvent, nextId: string) => {
      event.stopPropagation();
      fitView({
        nodes: [{ id: nextId }],
        duration: 500,
        padding: nextId === "03" || nextId === "04" ? 0.8 : 0.2,
      });
      updateProgressBySlide(nextId);
    },
    [fitView, updateProgressBySlide]
  );

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideVariants}
      transition={{ duration: 0.6 }}
      className="w-full h-full"
      key={`slide-${title}`}
    >
      <Card className="w-full h-full bg-white dark:bg-neutral-900 shadow-lg rounded-lg border border-gray-200 dark:border-neutral-800 flex flex-col justify-between p-12 relative overflow-hidden">
        {["Top", "Right", "Bottom", "Left"].map((pos) => (
          <Handle
            key={`src-${pos}`}
            type="source"
            position={Position[pos as keyof typeof Position]}
            id={pos.toLowerCase()}
            className="opacity-0"
          />
        ))}
        {["Top", "Right", "Bottom", "Left"].map((pos) => (
          <Handle
            key={`tgt-${pos}`}
            type="target"
            position={Position[pos as keyof typeof Position]}
            id={pos.toLowerCase()}
            className="opacity-0"
          />
        ))}

        <motion.div
          className="relative z-10 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={`content-${title}`}
        >
          <motion.div variants={slideInLeftVariants}>
            <motion.h1
              className="text-5xl font-bold text-gray-900 dark:text-neutral-50 mb-4"
              variants={titleVariants}
            >
              {title}
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ originX: 0 }}
            >
              <Separator className="w-12 bg-gray-900 dark:bg-lg-400" />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-base text-gray-700 dark:text-neutral-300 leading-relaxed space-y-3"
            variants={slideInUpVariants}
          >
            {content}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex gap-2 justify-end items-center mt-8 flex-wrap relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {left && (
            <motion.div variants={buttonVariants}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <motion.button
                      onClick={(e) => moveToNextSlide(e, left)}
                      className="px-4 py-2 rounded-md border border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-neutral-50 font-medium text-sm hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {leftLabel || "← Back"}
                    </motion.button>
                  }
                />
                <TooltipPopup>Go back to previous slide</TooltipPopup>
              </Tooltip>
            </motion.div>
          )}
          {up && (
            <motion.div variants={buttonVariants}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <motion.button
                      onClick={(e) => moveToNextSlide(e, up)}
                      className="px-4 py-2 rounded-md border border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-neutral-50 font-medium text-sm hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {upLabel || "↑ Up"}
                    </motion.button>
                  }
                />
                <TooltipPopup>Go up to parent slide</TooltipPopup>
              </Tooltip>
            </motion.div>
          )}
          {down && (
            <motion.div variants={buttonVariants}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <motion.button
                      onClick={(e) => moveToNextSlide(e, down)}
                      className="px-4 py-2 rounded-md border border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-neutral-50 font-medium text-sm hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {downLabel || "↓ Down"}
                    </motion.button>
                  }
                />
                <TooltipPopup>Go down to details</TooltipPopup>
              </Tooltip>
            </motion.div>
          )}
          {right && (
            <motion.div variants={buttonVariants}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <motion.button
                      onClick={(e) => moveToNextSlide(e, right)}
                      className="px-4 py-2 rounded-md bg-lg-600 dark:bg-lg-400 text-white font-medium text-sm hover:bg-lg-500 dark:hover:bg-lg-300 transition-colors"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {rightLabel || "Next →"}
                    </motion.button>
                  }
                />
                <TooltipPopup>Go to next slide</TooltipPopup>
              </Tooltip>
            </motion.div>
          )}
        </motion.div>
      </Card>
    </motion.div>
  );
}

export function SkillIcon({ data }: NodeProps<Node<SkillIconData>>) {
  const { name, iconSvg } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={iconVariants}
      transition={{ duration: 0.5 }}
      key={`icon-${name}`}
    >
      <Tooltip>
        <TooltipTrigger
          render={
            <motion.div
              className="bg-white dark:bg-neutral-800 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md dark:hover:shadow-lg transition-shadow border border-gray-200 dark:border-neutral-700 cursor-pointer"
              whileHover="hover"
            >
              <motion.div className="text-gray-700 dark:text-neutral-300">
                {iconSvg}
              </motion.div>
            </motion.div>
          }
        />
        <TooltipPopup className="font-bold">{name}</TooltipPopup>
      </Tooltip>
    </motion.div>
  );
}

export function ProjectCard({ data }: NodeProps<Node<ProjectCardData>>) {
  const {
    title,
    description,
    thumbnail,
    technologies,
    left,
    right,
    up,
    backToHub,
    github,
  } = data;
  const { fitView } = useReactFlow();
  const { updateProgressBySlide } = useProgress();
  const ref = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;

    setMousePosition({ x: deltaX * 25, y: deltaY * 25 });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleImageClick = () => {
    if (github) {
      window.open(github, "_blank");
    }
  };

  const moveToNextSlide = useCallback(
    (event: React.MouseEvent, nextId: string) => {
      event.stopPropagation();
      fitView({ nodes: [{ id: nextId }], duration: 500, padding: 0.2 });
      updateProgressBySlide(nextId);
    },
    [fitView, updateProgressBySlide]
  );

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideVariants}
      transition={{ duration: 0.6 }}
      className="w-full h-full"
      key={`project-${title}`}
    >
      <Card className="w-full h-full bg-white dark:bg-neutral-900 shadow-lg rounded-lg border border-gray-200 dark:border-neutral-800 flex flex-col p-8 relative overflow-hidden">
        <motion.div
          className="flex-1 relative z-10 space-y-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            ref={imageRef}
            className="w-full h-64 bg-gray-200 dark:bg-neutral-800 rounded-lg mb-6 overflow-hidden border border-gray-300 dark:border-neutral-700 relative cursor-pointer transition-all"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleImageClick}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: isHovering ? mousePosition.x : 0,
                      y: isHovering ? mousePosition.y : 0,
                      scale: isHovering ? 1.1 : 1,
                    }
                  : { opacity: 0 }
              }
              transition={{
                opacity: { delay: 0.3, duration: 0.5 },
                x: { type: "spring", stiffness: 150, damping: 15 },
                y: { type: "spring", stiffness: 150, damping: 15 },
                scale: { duration: 0.3 },
              }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent pointer-events-none dark:from-neutral-950/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovering ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.h2 className="text-4xl font-bold text-gray-900 dark:text-neutral-50 mb-3">
            {title}
          </motion.h2>
          <Separator className="w-12 bg-primary" />
          <p className="text-base text-gray-700 dark:text-neutral-300 leading-relaxed">
            {description}
          </p>

          <div className="space-y-3">
            <p className="text-xs font-semibold text-gray-600 dark:text-neutral-400 uppercase tracking-wide">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-gray-700 dark:text-neutral-300 border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="justify-end flex gap-2 mt-6 pt-6 border-t border-gray-200 dark:border-neutral-800">
          {left && (
            <motion.button
              onClick={(e) => moveToNextSlide(e, left)}
              className="px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md text-gray-900 dark:text-neutral-50 text-sm font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Previous
            </motion.button>
          )}
          {right && (
            <motion.button
              onClick={(e) => moveToNextSlide(e, right)}
              className="px-4 py-2 bg-lg-600 dark:bg-lg-400 text-white rounded-md text-sm font-medium hover:bg-lg-500 dark:hover:bg-lg-300 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next →
            </motion.button>
          )}
          {up && (
            <motion.button
              onClick={(e) => moveToNextSlide(e, up)}
              className="px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md text-gray-900 dark:text-neutral-50 text-sm font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ↑ Back
            </motion.button>
          )}
          {backToHub && (
            <motion.button
              onClick={(e) => moveToNextSlide(e, backToHub)}
              className="px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md text-gray-900 dark:text-neutral-50 text-sm font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ↑ Back to Hub
            </motion.button>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
