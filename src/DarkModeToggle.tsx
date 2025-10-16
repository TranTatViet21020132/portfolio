import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { Toggle, ToggleGroup } from "@/components/ui/toggle-group";
import { Toolbar, ToolbarButton, ToolbarGroup } from "@/components/ui/toolbar";
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "./App";

type ThemeMode = "light" | "dark" | "system";

export default function DarkModeToggle() {
  const { setIsDark } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentMode, setCurrentMode] = useState<ThemeMode>("system");
  const [systemDark, setSystemDark] = useState(false);

  // Track system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as ThemeMode | null;
    setCurrentMode(stored || "system");
  }, []);

  const handleThemeChange = (values: string[]) => {
    const newMode = (values[0] || "system") as ThemeMode;
    setCurrentMode(newMode);

    if (newMode === "dark") {
      setIsDark(true);
      localStorage.setItem("theme", "dark");
    } else if (newMode === "light") {
      setIsDark(false);
      localStorage.setItem("theme", "light");
    } else {
      // System preference
      setIsDark(systemDark);
      localStorage.removeItem("theme");
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-6 right-6 z-40">
      <TooltipProvider>
        <Toolbar>
          <ToolbarGroup>
            <ToggleGroup
              value={[currentMode]}
              onValueChange={handleThemeChange}
              className="border-none p-0"
            >
              <Tooltip>
                <TooltipTrigger
                  render={
                    <ToolbarButton
                      render={<Toggle value="light" />}
                      aria-label="Light mode"
                    >
                      <Sun className="w-4 h-4" />
                    </ToolbarButton>
                  }
                />
                <TooltipPopup sideOffset={8}>Light mode</TooltipPopup>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <ToolbarButton
                      render={<Toggle value="system" />}
                      aria-label="System preference"
                    >
                      <Monitor className="w-4 h-4" />
                    </ToolbarButton>
                  }
                />
                <TooltipPopup sideOffset={8}>System preference</TooltipPopup>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <ToolbarButton
                      render={<Toggle value="dark" />}
                      aria-label="Dark mode"
                    >
                      <Moon className="w-4 h-4" />
                    </ToolbarButton>
                  }
                />
                <TooltipPopup sideOffset={8}>Dark mode</TooltipPopup>
              </Tooltip>
            </ToggleGroup>
          </ToolbarGroup>
        </Toolbar>
      </TooltipProvider>
    </div>
  );
}
