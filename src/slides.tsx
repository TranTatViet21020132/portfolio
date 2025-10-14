import { Edge, Node } from "@xyflow/react";
import { SlideData, SkillIconData, ProjectCardData } from "./Slide";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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

const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;
const SLIDE_PADDING = 400;
const ICON_DISTANCE = 600;

// Helper function to calculate positions
const getPosition = (x: number, y: number) => ({
  x: x * (SLIDE_WIDTH + SLIDE_PADDING),
  y: y * (SLIDE_HEIGHT + SLIDE_PADDING),
});

// Helper function to calculate icon positions in a circle
const getIconPosition = (
  centerX: number,
  centerY: number,
  index: number,
  total: number
) => {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: centerX + Math.cos(angle) * ICON_DISTANCE,
    y: centerY + Math.sin(angle) * ICON_DISTANCE,
  };
};

// 01: HOME - Center (0, 0)
const slide01: Node<SlideData> = {
  id: "01",
  type: "slide",
  position: getPosition(0, 0),
  data: {
    title: "Welcome to My Portfolio",
    content: (
      <div>
        <div className="flex items-center gap-8 mb-8">
          <Avatar className="size-16">
            <AvatarImage src="https://via.placeholder.com/120" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-xl mb-2 font-semibold">
              Full Stack Developer | Creative Problem Solver
            </p>
            <p className="text-lg opacity-80">
              Explore my journey through this interactive portfolio
            </p>
          </div>
        </div>
      </div>
    ),
    right: "02",
  },
};

// 02: ABOUT - Right (1, 0)
const slide02: Node<SlideData> = {
  id: "02",
  type: "slide",
  position: getPosition(1, 0),
  data: {
    title: "About Me",
    content: (
      <div>
        <div className="mb-8">
          <p className="mb-4 text-lg">
            A passionate full-stack developer with 5+ years of experience
            building scalable web applications.
          </p>
          <p className="mb-4 text-lg">
            I specialize in React, Node.js, and cloud technologies. I love
            creating elegant solutions to complex problems.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Card className="p-4 border-2 border-blue-200">
            <p className="font-semibold mb-1">📍 Location</p>
            <p>San Francisco, CA</p>
          </Card>
          <Card className="p-4 border-2 border-purple-200">
            <p className="font-semibold mb-1">⚡ Experience</p>
            <p>5+ Years</p>
          </Card>
        </div>
      </div>
    ),
    left: "01",
    right: "03",
  },
};

// 03: SKILLS - Languages and Tools (2, 0)
const slide03: Node<SlideData> = {
  id: "03",
  type: "slide",
  position: getPosition(2, 0),
  data: {
    title: "Languages & Tools",
    content: (
      <div className="text-center text-xl opacity-60">
        Explore the technologies around this section
      </div>
    ),
    left: "02",
    right: "04",
  },
};

// Language & Tools satellite icons
const languageIcons = [
  { name: "JavaScript", id: "icon-js" },
  { name: "TypeScript", id: "icon-ts" },
  { name: "Python", id: "icon-py" },
  { name: "SQL", id: "icon-sql" },
  { name: "Git", id: "icon-git" },
  { name: "Docker", id: "icon-docker" },
];

const languageIconNodes: Node<SkillIconData>[] = languageIcons.map(
  (icon, index) => {
    const centerPos = getPosition(2, 0);
    const iconPos = getIconPosition(
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
        // Placeholder SVG - will be replaced with actual icons later
        iconSvg: (
          <svg width="120" height="120" viewBox="0 0 120 120">
            <rect width="120" height="120" fill="#3b82f6" rx="12" />
            <text
              x="60"
              y="70"
              textAnchor="middle"
              fill="white"
              fontSize="48"
              fontWeight="bold"
            >
              {icon.name.charAt(0)}
            </text>
          </svg>
        ),
      },
    };
  }
);

// 04: SKILLS - Frameworks and Libraries (3, 0)
const slide04: Node<SlideData> = {
  id: "04",
  type: "slide",
  position: getPosition(3, 0),
  data: {
    title: "Frameworks & Libraries",
    content: (
      <div className="text-center text-xl opacity-60">
        Explore the technologies around this section
      </div>
    ),
    left: "03",
    right: "05",
  },
};

// Frameworks & Libraries satellite icons
const frameworkIcons = [
  { name: "React", id: "icon-react" },
  { name: "Next.js", id: "icon-next" },
  { name: "Node.js", id: "icon-node" },
  { name: "Express", id: "icon-express" },
  { name: "Tailwind", id: "icon-tailwind" },
  { name: "GraphQL", id: "icon-graphql" },
];

const frameworkIconNodes: Node<SkillIconData>[] = frameworkIcons.map(
  (icon, index) => {
    const centerPos = getPosition(3, 0);
    const iconPos = getIconPosition(
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
        iconSvg: (
          <svg width="120" height="120" viewBox="0 0 120 120">
            <rect width="120" height="120" fill="#8b5cf6" rx="12" />
            <text
              x="60"
              y="70"
              textAnchor="middle"
              fill="white"
              fontSize="48"
              fontWeight="bold"
            >
              {icon.name.charAt(0)}
            </text>
          </svg>
        ),
      },
    };
  }
);

// 05: EXPERIENCE - (4, 0)
const slide05: Node<SlideData> = {
  id: "05",
  type: "slide",
  position: getPosition(4, 0),
  data: {
    title: "Experience",
    content: (
      <div>
        <Timeline defaultValue={3}>
          <TimelineItem step={1}>
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineDate>2019 - 2021</TimelineDate>
              <TimelineTitle>Junior Developer</TimelineTitle>
              <TimelineIndicator />
            </TimelineHeader>
            <TimelineContent>
              Started my career building web applications and learning best
              practices in software development.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem step={2}>
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineDate>2021 - 2023</TimelineDate>
              <TimelineTitle>Full Stack Developer</TimelineTitle>
              <TimelineIndicator />
            </TimelineHeader>
            <TimelineContent>
              Built and maintained multiple production applications serving
              millions of users across different platforms.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem step={3}>
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineDate>2023 - Present</TimelineDate>
              <TimelineTitle>Senior Developer</TimelineTitle>
              <TimelineIndicator />
            </TimelineHeader>
            <TimelineContent>
              Leading frontend architecture and mentoring junior developers
              while driving technical innovation.
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    ),
    left: "04",
    right: "06",
  },
};

// 06: PROJECTS HUB - (5, 0)
const slide06: Node<SlideData> = {
  id: "06",
  type: "slide",
  position: getPosition(5, 0),
  data: {
    title: "Projects",
    content: (
      <div className="text-center text-xl opacity-60">
        Explore my featured projects
      </div>
    ),
    left: "05",
    down: "project-01",
    right: "08",
  },
};

// PROJECT NODES - Branch from Projects Hub
const projectNode01: Node<ProjectCardData> = {
  id: "project-01",
  type: "projectCard",
  position: getPosition(5, 1),
  data: {
    title: "E-Commerce Platform",
    description:
      "Full-stack marketplace with real-time inventory management and payment processing",
    thumbnail:
      "https://via.placeholder.com/800x450/3b82f6/ffffff?text=E-Commerce",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe"],
    up: "06",
    right: "project-02",
  },
};

const projectNode02: Node<ProjectCardData> = {
  id: "project-02",
  type: "projectCard",
  position: getPosition(6, 1),
  data: {
    title: "Analytics Dashboard",
    description:
      "Data visualization platform processing millions of events with real-time insights",
    thumbnail:
      "https://via.placeholder.com/800x450/8b5cf6/ffffff?text=Analytics",
    technologies: ["React", "D3.js", "GraphQL", "AWS", "Redis"],
    left: "project-01",
    right: "project-03",
  },
};

const projectNode03: Node<ProjectCardData> = {
  id: "project-03",
  type: "projectCard",
  position: getPosition(7, 1),
  data: {
    title: "Task Management App",
    description:
      "Collaborative tool with real-time updates and team synchronization",
    thumbnail:
      "https://via.placeholder.com/800x450/10b981/ffffff?text=Task+Manager",
    technologies: ["React", "Socket.io", "MongoDB", "Express"],
    left: "project-02",
    right: "project-04",
  },
};

const projectNode04: Node<ProjectCardData> = {
  id: "project-04",
  type: "projectCard",
  position: getPosition(8, 1),
  data: {
    title: "Mobile App",
    description:
      "Cross-platform mobile application with 50k+ downloads on app stores",
    thumbnail:
      "https://via.placeholder.com/800x450/ef4444/ffffff?text=Mobile+App",
    technologies: ["React Native", "Firebase", "TypeScript"],
    left: "project-03",
    backToHub: "06",
  },
};

// 08: CONTACT - (6, 0)
const slide08: Node<SlideData> = {
  id: "08",
  type: "slide",
  position: getPosition(6, 0),
  data: {
    title: "Get In Touch",
    content: (
      <div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl mb-6 font-bold">Contact</h2>
            <div className="flex flex-col gap-5">
              {[
                { label: "Email", value: "hello@example.com", icon: "✉️" },
                { label: "Phone", value: "+1 (555) 123-4567", icon: "📱" },
                { label: "Location", value: "San Francisco, CA", icon: "📍" },
              ].map((item) => (
                <Card key={item.label} className="p-4">
                  <p className="font-semibold mb-2 text-base">
                    {item.icon} {item.label}
                  </p>
                  <p className="text-base font-medium">{item.value}</p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl mb-6 font-bold">Socials</h2>
            <div className="flex flex-col gap-3">
              {[
                { label: "GitHub", url: "github.com/yourprofile", icon: "🔗" },
                {
                  label: "LinkedIn",
                  url: "linkedin.com/in/yourprofile",
                  icon: "💼",
                },
                {
                  label: "Twitter",
                  url: "twitter.com/yourprofile",
                  icon: "🐦",
                },
                { label: "Website", url: "yourportfolio.com", icon: "🌐" },
              ].map((social) => (
                <Card
                  key={social.label}
                  className="p-3 hover:shadow-md transition"
                >
                  <Button variant="ghost" className="w-full justify-start">
                    <span className="mr-2">{social.icon}</span>
                    <span className="font-semibold">{social.label}:</span>
                    <span className="ml-2 text-gray-600 text-sm">
                      {social.url}
                    </span>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    left: "06",
  },
};

// Export all nodes
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

// Define edges for the main flow
export const edges: Edge[] = [
  // Main flow: Home -> About -> Skills -> Experience -> Projects -> Contact
  {
    id: "01->02",
    source: "01",
    target: "02",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#94a3b8", strokeWidth: 2 },
  },
  {
    id: "02->03",
    source: "02",
    target: "03",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#94a3b8", strokeWidth: 2 },
  },
  {
    id: "03->04",
    source: "03",
    target: "04",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#94a3b8", strokeWidth: 2 },
  },
  {
    id: "04->05",
    source: "04",
    target: "05",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#94a3b8", strokeWidth: 2 },
  },
  {
    id: "05->06",
    source: "05",
    target: "06",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#94a3b8", strokeWidth: 2 },
  },
  {
    id: "06->08",
    source: "06",
    target: "08",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#94a3b8", strokeWidth: 2 },
  },
  // Projects branch
  {
    id: "06->project-01",
    source: "06",
    target: "project-01",
    sourceHandle: "bottom",
    targetHandle: "top",
    animated: true,
    style: { stroke: "#94a3b8", strokeWidth: 2 },
  },
  {
    id: "project-01->project-02",
    source: "project-01",
    target: "project-02",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#94a3b8", strokeWidth: 2 },
  },
  {
    id: "project-02->project-03",
    source: "project-02",
    target: "project-03",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#94a3b8", strokeWidth: 2 },
  },
  {
    id: "project-03->project-04",
    source: "project-03",
    target: "project-04",
    sourceHandle: "right",
    targetHandle: "left",
    animated: true,
    style: { stroke: "#94a3b8", strokeWidth: 2 },
  },
];
