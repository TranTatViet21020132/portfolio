import { useCallback, useState } from "react";
import { ReactFlow, useReactFlow, NodeMouseHandler } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { Slide } from "./Slide";
import { slides, slidesToElements } from "./slides";

const nodeTypes = {
  slide: Slide,
};

const initialSlide = "01";
const { nodes, edges } = slidesToElements(initialSlide, slides);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const { fitView } = useReactFlow();

  const handleNodeClick = useCallback<NodeMouseHandler>(
    (_, node) => {
      if (node.id !== currentSlide) {
        setCurrentSlide(node.id);
        fitView({ nodes: [{ id: node.id }], duration: 100 });
      }
    },
    [fitView, currentSlide]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        edges={edges}
        fitView
        fitViewOptions={{ nodes: [{ id: initialSlide }], duration: 100 }}
        minZoom={0.1}
        onNodeClick={handleNodeClick}
      />
    </div>
  );
}
