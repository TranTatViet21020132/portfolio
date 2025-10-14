import { useCallback, useState } from "react";
import {
  ReactFlow,
  NodeMouseHandler,
  Background,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Slide, SkillIcon, ProjectCard } from "./Slide";
import { nodes, edges } from "./slides";
import { TooltipProvider } from "@/components/ui/tooltip";

// ============================================
// NODE TYPES REGISTRATION
// ============================================
// Register all custom node components
const nodeTypes = {
  slide: Slide, // Main slide component
  skillIcon: SkillIcon, // Satellite skill icons
  projectCard: ProjectCard, // Project detail cards
};

const initialSlide = "01"; // Start at Home slide

// ============================================
// FLOW CONTENT COMPONENT
// ============================================
function FlowContent() {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const { fitView } = useReactFlow();

  // Handle clicking on nodes to navigate
  const handleNodeClick = useCallback<NodeMouseHandler>(
    (_, node) => {
      if (node.id !== currentSlide) {
        setCurrentSlide(node.id);
        fitView({ nodes: [{ id: node.id }], duration: 500, padding: 0.1 });
      }
    },
    [fitView, currentSlide]
  );

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        fitView
        fitViewOptions={{
          nodes: [{ id: initialSlide }],
          duration: 500,
          padding: 0.1,
        }}
        minZoom={0.1}
        maxZoom={2}
        onNodeClick={handleNodeClick}
      >
        <Background color="#e5e7eb" gap={16} size={1} />
      </ReactFlow>
    </div>
  );
}

// ============================================
// MAIN APP COMPONENT
// ============================================
export default function App() {
  return (
    <TooltipProvider>
      <ReactFlowProvider>
        <FlowContent />
      </ReactFlowProvider>
    </TooltipProvider>
  );
}
