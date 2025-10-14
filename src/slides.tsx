import { Edge, Node } from "@xyflow/react";
import { SLIDE_WIDTH, SLIDE_HEIGHT, SLIDE_PADDING, SlideData } from "./Slide";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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

// 01: HERO
const slide01 = {
  id: "01",
  data: {
    title: "Welcome to My Portfolio",
    content: (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            marginBottom: "30px",
          }}
        >
          <Avatar className="size-16">
            <AvatarImage src="https://via.placeholder.com/120" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p
              style={{
                fontSize: "1.3rem",
                marginBottom: "10px",
                fontWeight: 600,
              }}
            >
              Full Stack Developer | Creative Problem Solver
            </p>
            <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>
              Navigate right through my portfolio →
            </p>
          </div>
        </div>
      </div>
    ),
    right: "02",
  },
};

// 02: ABOUT
const slide02 = {
  id: "02",
  data: {
    title: "About Me",
    content: (
      <div>
        <div style={{ marginBottom: "30px" }}>
          <p style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
            A passionate full-stack developer with 5+ years of experience
            building scalable web applications.
          </p>
          <p style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
            I specialize in React, Node.js, and cloud technologies. I love
            creating elegant solutions to complex problems.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <Card className="p-4 border-2 border-blue-200">
            <p style={{ fontWeight: 600, marginBottom: "5px" }}>📍 Location</p>
            <p>San Francisco, CA</p>
          </Card>
          <Card className="p-4 border-2 border-purple-200">
            <p style={{ fontWeight: 600, marginBottom: "5px" }}>
              ⚡ Experience
            </p>
            <p>5+ Years</p>
          </Card>
        </div>
      </div>
    ),
    left: "01",
    right: "03",
  },
};

// 03: TIMELINE
const slide03 = {
  id: "03",
  data: {
    title: "My Journey",
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
    left: "02",
    right: "04",
  },
};

// 04: LANGUAGES
const slide04 = {
  id: "04",
  data: {
    title: "Languages",
    content: (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "20px",
                color: "#2563eb",
                fontWeight: 700,
              }}
            >
              Primary Languages
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              {[
                {
                  name: "JavaScript / TypeScript",
                  level: 95,
                  color: "bg-blue-500",
                },
                { name: "Python", level: 80, color: "bg-purple-500" },
                { name: "SQL", level: 85, color: "bg-green-500" },
              ].map((lang) => (
                <Card key={lang.name} className="p-4">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <p style={{ fontWeight: 600 }}>{lang.name}</p>
                    <Badge className={`${lang.color}`}>{lang.level}%</Badge>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#e5e7eb",
                      height: "8px",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className={`${lang.color}`}
                      style={{ height: "100%", width: `${lang.level}%` }}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "20px",
                color: "#2563eb",
                fontWeight: 700,
              }}
            >
              Other Languages
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {["Go", "Java", "Rust"].map((lang) => (
                <Card key={lang} className="p-3">
                  <p style={{ fontWeight: 600 }}>{lang}</p>
                  <p style={{ fontSize: "0.9rem", color: "#666" }}>
                    {lang === "Go"
                      ? "Intermediate"
                      : lang === "Java"
                      ? "Intermediate"
                      : "Beginner"}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    left: "03",
    right: "05",
  },
};

// 05: LIBRARIES
const slide05 = {
  id: "05",
  data: {
    title: "Libraries",
    content: (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "20px",
                color: "#7c3aed",
                fontWeight: 700,
              }}
            >
              Frontend Libraries
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {[
                "React & Hooks",
                "React Query",
                "Redux / Zustand",
                "Tailwind CSS",
                "Framer Motion",
              ].map((lib) => (
                <Badge
                  key={lib}
                  variant="secondary"
                  className="w-fit px-3 py-2 text-sm"
                >
                  ✓ {lib}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "20px",
                color: "#7c3aed",
                fontWeight: 700,
              }}
            >
              Backend Libraries
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {[
                "Express.js",
                "NestJS",
                "Prisma ORM",
                "GraphQL",
                "Socket.io",
              ].map((lib) => (
                <Badge
                  key={lib}
                  variant="secondary"
                  className="w-fit px-3 py-2 text-sm"
                >
                  ✓ {lib}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    left: "04",
    right: "06",
  },
};

// 06: FRAMEWORKS
const slide06 = {
  id: "06",
  data: {
    title: "Frameworks",
    content: (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
          }}
        >
          <Card className="p-6 border-2 border-blue-500 bg-blue-50">
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#2563eb",
                marginBottom: "15px",
                fontWeight: 700,
              }}
            >
              Web Frameworks
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {["Next.js", "React", "Vue.js", "Remix"].map((fw) => (
                <Badge key={fw} variant="outline" className="w-fit">
                  • {fw}
                </Badge>
              ))}
            </div>
          </Card>
          <Card className="p-6 border-2 border-purple-500 bg-purple-50">
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#7c3aed",
                marginBottom: "15px",
                fontWeight: 700,
              }}
            >
              Backend Frameworks
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {["Express", "NestJS", "Django", "FastAPI"].map((fw) => (
                <Badge key={fw} variant="outline" className="w-fit">
                  • {fw}
                </Badge>
              ))}
            </div>
          </Card>
          <Card className="p-6 border-2 border-green-500 bg-green-50">
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#059669",
                marginBottom: "15px",
                fontWeight: 700,
              }}
            >
              DevOps & Cloud
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {["Docker", "AWS", "Kubernetes", "Vercel"].map((fw) => (
                <Badge key={fw} variant="outline" className="w-fit">
                  • {fw}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    ),
    left: "05",
    right: "07",
  },
};

// 07: PROJECTS
const slide07 = {
  id: "07",
  data: {
    title: "Featured Projects",
    content: (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
          }}
        >
          <Card className="p-6 border-2 border-blue-500 hover:shadow-lg transition">
            <h3
              style={{
                fontSize: "1.3rem",
                color: "#2563eb",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              E-Commerce Platform
            </h3>
            <p style={{ marginBottom: "15px", fontSize: "0.95rem" }}>
              Full-stack marketplace with real-time inventory
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["React", "Next.js", "Node.js", "PostgreSQL"].map((tech) => (
                <Badge key={tech} className="bg-blue-500">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
          <Card className="p-6 border-2 border-purple-500 hover:shadow-lg transition">
            <h3
              style={{
                fontSize: "1.3rem",
                color: "#7c3aed",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              Analytics Dashboard
            </h3>
            <p style={{ marginBottom: "15px", fontSize: "0.95rem" }}>
              Data viz platform processing millions of events
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["React", "D3.js", "GraphQL", "AWS"].map((tech) => (
                <Badge key={tech} className="bg-purple-500">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
          <Card className="p-6 border-2 border-green-500 hover:shadow-lg transition">
            <h3
              style={{
                fontSize: "1.3rem",
                color: "#059669",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              Task Management
            </h3>
            <p style={{ marginBottom: "15px", fontSize: "0.95rem" }}>
              Collaborative tool with real-time updates
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["React", "Socket.io", "MongoDB", "Express"].map((tech) => (
                <Badge key={tech} className="bg-green-500">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
          <Card className="p-6 border-2 border-red-500 hover:shadow-lg transition">
            <h3
              style={{
                fontSize: "1.3rem",
                color: "#dc2626",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              Mobile App
            </h3>
            <p style={{ marginBottom: "15px", fontSize: "0.95rem" }}>
              Cross-platform app with 50k+ downloads
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["React Native", "Firebase", "TypeScript"].map((tech) => (
                <Badge key={tech} className="bg-red-500">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    ),
    left: "06",
    right: "08",
  },
};

// 08: CONTACT
const slide08 = {
  id: "08",
  data: {
    title: "Get In Touch",
    content: (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "25px",
                fontWeight: 700,
              }}
            >
              Contact
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {[
                { label: "Email", value: "hello@example.com", icon: "✉️" },
                { label: "Phone", value: "+1 (555) 123-4567", icon: "📱" },
                { label: "Location", value: "San Francisco, CA", icon: "📍" },
              ].map((item) => (
                <Card key={item.label} className="p-4">
                  <p
                    style={{
                      fontWeight: 600,
                      marginBottom: "8px",
                      fontSize: "1rem",
                    }}
                  >
                    {item.icon} {item.label}
                  </p>
                  <p style={{ fontSize: "1.05rem", fontWeight: 500 }}>
                    {item.value}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "25px",
                fontWeight: 700,
              }}
            >
              Socials
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
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
                    <span style={{ marginRight: "10px" }}>{social.icon}</span>
                    <span style={{ fontWeight: 600 }}>{social.label}:</span>
                    <span
                      style={{
                        marginLeft: "8px",
                        color: "#666",
                        fontSize: "0.9rem",
                      }}
                    >
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
    left: "07",
  },
};

export const slides = Object.fromEntries(
  [slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08].map(
    ({ id, data }) => [id, data]
  )
) as Record<string, SlideData>;

export const slidesToElements = (
  initial: string,
  slides: Record<string, SlideData>
) => {
  const stack = [{ id: initial, position: { x: 0, y: 0 } }];
  const visited = new Set();
  const nodes: Node<SlideData>[] = [];
  const edges: Edge[] = [];

  while (stack.length) {
    const { id, position } = stack.pop()!;
    const data = slides[id];
    const node = { id, type: "slide", position, data };

    if (data.left && !visited.has(data.left)) {
      const nextPosition = {
        x: position.x - (SLIDE_WIDTH + SLIDE_PADDING),
        y: position.y,
      };
      stack.push({ id: data.left, position: nextPosition });
      edges.push({
        id: `${id}->${data.left}`,
        source: id,
        target: data.left,
      });
    }

    if (data.up && !visited.has(data.up)) {
      const nextPosition = {
        x: position.x,
        y: position.y - (SLIDE_HEIGHT + SLIDE_PADDING),
      };
      stack.push({ id: data.up, position: nextPosition });
      edges.push({ id: `${id}->${data.up}`, source: id, target: data.up });
    }

    if (data.down && !visited.has(data.down)) {
      const nextPosition = {
        x: position.x,
        y: position.y + (SLIDE_HEIGHT + SLIDE_PADDING),
      };
      stack.push({ id: data.down, position: nextPosition });
      edges.push({
        id: `${id}->${data.down}`,
        source: id,
        target: data.down,
      });
    }

    if (data.right && !visited.has(data.right)) {
      const nextPosition = {
        x: position.x + (SLIDE_WIDTH + SLIDE_PADDING),
        y: position.y,
      };
      stack.push({ id: data.right, position: nextPosition });
      edges.push({
        id: `${id}->${data.right}`,
        source: id,
        target: data.right,
      });
    }

    nodes.push(node);
    visited.add(id);
  }

  return { nodes, edges };
};
