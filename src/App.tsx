import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  ReactFlow,
  Background,
  ReactFlowProvider,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { Slide, SkillIcon, ProjectCard } from "./Slide";
import { nodes, edges } from "./slides";

// ============================================
// PROGRESS CONTEXT
// ============================================

type ProgressContextType = {
  progress: number;
  setProgress: (value: number) => void;
  updateProgressBySlide: (slideId: string) => void;
};

const ProgressContext = createContext<ProgressContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
};

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(100 / 8);
  const mainSlides = useMemo(() => {
    return ["01", "02", "03", "04", "05", "06", "07", "08"];
  }, []);

  const updateProgressBySlide = useCallback(
    (slideId: string) => {
      const idx = mainSlides.indexOf(slideId);
      if (idx !== -1) {
        const p = ((idx + 1) / mainSlides.length) * 100;
        setProgress(p);
      }
    },
    [mainSlides]
  );

  return (
    <ProgressContext.Provider
      value={{ progress, setProgress, updateProgressBySlide }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

// ============================================
// NODE TYPES REGISTRATION
// ============================================

const nodeTypes = {
  slide: Slide,
  skillIcon: SkillIcon,
  projectCard: ProjectCard,
};

const initialSlide = "01";

// ============================================
// LOADING SCREEN
// ============================================

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const steps = 60;
    const increment = 100 / steps;
    const stepDuration = duration / steps;
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        setLoadingProgress(100);
        clearInterval(interval);
        setTimeout(onComplete, 400);
      } else setLoadingProgress(currentProgress);
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-8"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center shadow-lg">
          <motion.div
            animate={{
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full bg-white"
          />
        </div>

        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Loading Portfolio
          </h2>
          <p className="text-sm text-gray-600">Preparing your experience...</p>
        </div>

        <div className="w-64">
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-full"
              initial={{ x: "-100%" }}
              animate={{ x: `${loadingProgress - 100}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            {Math.round(loadingProgress)}%
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// GLOBAL PROGRESS BAR
// ============================================

function ScrollProgress() {
  const { progress } = useProgress();

  return (
    <Progress
      value={progress}
      className="top-0 fixed h-1 rounded-none border-none [&>div]:transition-all [&>div]:duration-500 [&>div]:ease-out"
    />
  );
}

// ============================================
// FLOW CONTENT
// ============================================

function FlowContent() {
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
          padding: 0.2,
        }}
        minZoom={0.1}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} />
        <ScrollProgress />
      </ReactFlow>
    </div>
  );
}

// ============================================
// MAIN APP
// ============================================

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <TooltipProvider>
      <ReactFlowProvider>
        <ProgressProvider>
          <AnimatePresence mode="wait">
            {isLoading && (
              <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
            )}
          </AnimatePresence>
          {!isLoading && <FlowContent />}
        </ProgressProvider>
      </ReactFlowProvider>
    </TooltipProvider>
  );
}
