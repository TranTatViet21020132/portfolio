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
  Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { Slide, SkillIcon, ProjectCard } from "./Slide";
import { nodes, edges } from "./slides";
import DarkModeToggle from "./DarkModeToggle";

type ProgressContextType = {
  progress: number;
  setProgress: (value: number) => void;
  updateProgressBySlide: (slideId: string) => void;
};

type ThemeContextType = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
};

const ProgressContext = createContext<ProgressContextType | null>(null);
const ThemeContext = createContext<ThemeContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(0);

  const mainSlides = useMemo(
    () => ["01", "02", "03", "04", "05", "06", "07"],
    []
  );

  const updateProgressBySlide = useCallback(
    (slideId: string) => {
      const idx = mainSlides.indexOf(slideId);
      const totalGaps = mainSlides.length - 1;
      const p = (idx / totalGaps) * 100;
      setProgress(p);
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

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDarkState] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const setIsDark = useCallback((value: boolean) => {
    setIsDarkState(value);
    // Update document class synchronously
    if (value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Persist to localStorage
    localStorage.setItem("theme", value ? "dark" : "light");
  }, []);

  // Set initial theme on mount
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

const nodeTypes = {
  slide: Slide,
  skillIcon: SkillIcon,
  projectCard: ProjectCard,
};

const initialSlide = "01";

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { isDark } = useTheme();

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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-8"
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
          style={{
            background: "linear-gradient(to bottom right, #ba094a, #e90b5d)",
          }}
        >
          <motion.div
            animate={{
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className={`w-12 h-12 rounded-full ${
              isDark ? "bg-black" : "bg-white"
            }`}
          />
        </div>

        <div className="text-center space-y-3">
          <h2
            className="text-2xl font-bold"
            style={{ color: isDark ? "#e90b5d" : "#5d0425" }}
          >
            Loading Portfolio
          </h2>
          <p
            style={{ color: isDark ? "#f961a3" : "#ba094a" }}
            className="text-sm"
          >
            Preparing your experience...
          </p>
        </div>

        <div className="w-64">
          <div
            className={`relative h-2 rounded-full overflow-hidden ${
              isDark ? "bg-neutral-900" : "bg-gray-200"
            }`}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, #ba094a, #e90b5d, #8c0738)",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: `${loadingProgress - 100}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <p className="text-xs text-center mt-2" style={{ color: "#e90b5d" }}>
            {Math.round(loadingProgress)}%
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ScrollProgress() {
  const { progress } = useProgress();

  return (
    <Progress
      value={progress}
      className="top-0 fixed h-1 rounded-none border-none [&>div]:transition-all [&>div]:duration-500 [&>div]:ease-out"
    />
  );
}

function FlowContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`w-screen h-screen ${
        isDark
          ? "bg-gradient-to-br from-neutral-950 to-neutral-900"
          : "bg-gradient-to-br from-gray-50 to-white"
      }`}
    >
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
        colorMode={isDark ? "dark" : "light"}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} />
        <ScrollProgress />
        <Panel position="top-right">
          <DarkModeToggle />
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <TooltipProvider>
      <ReactFlowProvider>
        <ThemeProvider>
          <ProgressProvider>
            <AnimatePresence mode="wait">
              {isLoading && (
                <LoadingScreen
                  key="loading"
                  onComplete={handleLoadingComplete}
                />
              )}
            </AnimatePresence>
            {!isLoading && <FlowContent />}
          </ProgressProvider>
        </ThemeProvider>
      </ReactFlowProvider>
    </TooltipProvider>
  );
}
