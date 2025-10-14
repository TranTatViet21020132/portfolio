import { type Node, type NodeProps, useReactFlow } from "@xyflow/react";
import { useCallback } from "react";

export type SlideData = {
  title: string;
  content: React.ReactNode;
  left?: string;
  up?: string;
  down?: string;
  right?: string;
};

export const SLIDE_WIDTH = 1920;
export const SLIDE_HEIGHT = 1080;
export const SLIDE_PADDING = 100;

const style: React.CSSProperties = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
  padding: "60px",
  backgroundColor: "rgba(255, 255, 255, 0.98)",
  borderRadius: "12px",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
};

export function Slide({ data }: NodeProps<Node<SlideData>>) {
  const { title, content, left, up, down, right } = data;
  const { fitView } = useReactFlow();

  const moveToNextSlide = useCallback(
    (event: React.MouseEvent, nextId: string) => {
      event.stopPropagation();
      fitView({ nodes: [{ id: nextId }], duration: 100 });
    },
    [fitView]
  );

  return (
    <article style={style}>
      <div>
        <h1
          style={{ fontSize: "3.5rem", marginBottom: "20px", color: "#1a1a1a" }}
        >
          {title}
        </h1>
        <div style={{ fontSize: "1.1rem", color: "#333", lineHeight: "1.8" }}>
          {content}
        </div>
      </div>

      <footer
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "flex-start",
          marginTop: "40px",
        }}
      >
        {left && (
          <button
            onClick={(e) => moveToNextSlide(e, left)}
            style={{
              padding: "10px 16px",
              fontSize: "18px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#1d4ed8";
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#2563eb";
            }}
          >
            ← Back
          </button>
        )}
        {up && (
          <button
            onClick={(e) => moveToNextSlide(e, up)}
            style={{
              padding: "10px 16px",
              fontSize: "18px",
              backgroundColor: "#7c3aed",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#6d28d9";
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#7c3aed";
            }}
          >
            ↑ Up
          </button>
        )}
        {down && (
          <button
            onClick={(e) => moveToNextSlide(e, down)}
            style={{
              padding: "10px 16px",
              fontSize: "18px",
              backgroundColor: "#059669",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#047857";
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#059669";
            }}
          >
            ↓ Down
          </button>
        )}
        {right && (
          <button
            onClick={(e) => moveToNextSlide(e, right)}
            style={{
              padding: "10px 16px",
              fontSize: "18px",
              backgroundColor: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#b91c1c";
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#dc2626";
            }}
          >
            Next →
          </button>
        )}
      </footer>
    </article>
  );
}
