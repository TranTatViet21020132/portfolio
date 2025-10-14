import {
  type Node,
  type NodeProps,
  useReactFlow,
  Handle,
  Position,
} from "@xyflow/react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ============================================
// TYPE DEFINITIONS
// ============================================

export type SlideData = {
  title: string;
  content: React.ReactNode;
  left?: string;
  up?: string;
  down?: string;
  right?: string;
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
};

export const SLIDE_WIDTH = 1920;
export const SLIDE_HEIGHT = 1080;
export const SLIDE_PADDING = 400;

// ============================================
// SLIDE COMPONENT (Main Slide)
// ============================================

export function Slide({ data }: NodeProps<Node<SlideData>>) {
  const { title, content, left, up, down, right } = data;
  const { fitView } = useReactFlow();

  const moveToNextSlide = useCallback(
    (event: React.MouseEvent, nextId: string) => {
      event.stopPropagation();
      fitView({ nodes: [{ id: nextId }], duration: 500, padding: 0.1 });
    },
    [fitView]
  );

  return (
    <Card className="w-full h-full bg-white shadow-2xl rounded-2xl border-2 border-gray-200 flex flex-col justify-between p-12">
      {/* Handles for connections */}
      <Handle
        type="source"
        position={Position.Top}
        id="top"
        className="opacity-0"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="opacity-0"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className="opacity-0"
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left"
        className="opacity-0"
      />

      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="opacity-0"
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right"
        className="opacity-0"
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom"
        className="opacity-0"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="opacity-0"
      />

      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="text-lg text-gray-700 leading-relaxed">{content}</div>
      </div>

      <div className="flex gap-3 justify-start items-center mt-12 flex-wrap">
        {left && (
          <Button
            onClick={(e) => moveToNextSlide(e, left)}
            variant="outline"
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white border-none"
          >
            ← Back
          </Button>
        )}
        {up && (
          <Button
            onClick={(e) => moveToNextSlide(e, up)}
            variant="outline"
            size="lg"
            className="bg-purple-500 hover:bg-purple-600 text-white border-none"
          >
            ↑ Up
          </Button>
        )}
        {down && (
          <Button
            onClick={(e) => moveToNextSlide(e, down)}
            variant="outline"
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white border-none"
          >
            ↓ Down
          </Button>
        )}
        {right && (
          <Button
            onClick={(e) => moveToNextSlide(e, right)}
            variant="outline"
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white border-none"
          >
            Next →
          </Button>
        )}
      </div>
    </Card>
  );
}

// ============================================
// SKILL ICON COMPONENT (Satellite Icons)
// ============================================

export function SkillIcon({ data }: NodeProps<Node<SkillIconData>>) {
  const { name, iconSvg } = data;

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center border-2 border-gray-100 hover:shadow-xl transition-shadow">
      <div className="mb-2">{iconSvg}</div>
      <p className="text-sm font-semibold text-gray-700">{name}</p>
    </div>
  );
}

// ============================================
// PROJECT CARD COMPONENT (Project Details)
// ============================================

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
  } = data;
  const { fitView } = useReactFlow();

  const moveToNextSlide = useCallback(
    (event: React.MouseEvent, nextId: string) => {
      event.stopPropagation();
      fitView({ nodes: [{ id: nextId }], duration: 500, padding: 0.1 });
    },
    [fitView]
  );

  return (
    <Card className="w-full h-full bg-white shadow-2xl rounded-2xl border-2 border-gray-200 flex flex-col p-8">
      {/* Handles */}
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="opacity-0"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="opacity-0"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="opacity-0"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className="opacity-0"
      />

      <div className="flex-1">
        {/* Thumbnail */}
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <h2 className="text-4xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-lg text-gray-700 mb-6">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              className="bg-blue-500 text-white px-3 py-1 text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 justify-start items-center flex-wrap mt-4">
        {left && (
          <Button
            onClick={(e) => moveToNextSlide(e, left)}
            variant="outline"
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white border-none"
          >
            ← Previous
          </Button>
        )}
        {up && (
          <Button
            onClick={(e) => moveToNextSlide(e, up)}
            variant="outline"
            size="lg"
            className="bg-purple-500 hover:bg-purple-600 text-white border-none"
          >
            ↑ Back to Projects
          </Button>
        )}
        {right && (
          <Button
            onClick={(e) => moveToNextSlide(e, right)}
            variant="outline"
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white border-none"
          >
            Next →
          </Button>
        )}
        {backToHub && (
          <Button
            onClick={(e) => moveToNextSlide(e, backToHub)}
            variant="outline"
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white border-none"
          >
            ↑ Back to Projects Hub
          </Button>
        )}
      </div>
    </Card>
  );
}
