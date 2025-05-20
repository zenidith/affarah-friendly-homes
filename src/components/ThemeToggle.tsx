
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="opacity-0 w-9 h-9"></Button>;
  }

  // Function to get the next theme in the cycle
  const cycleTheme = () => {
    if (theme === 'light') return 'dark';
    return 'light';
  };

  // Function to get appropriate aria label based on current theme
  const getAriaLabel = () => {
    if (theme === 'light') return 'Switch to dark theme';
    return 'Switch to light theme';
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(cycleTheme())}
      className="ml-4"
      aria-label={getAriaLabel()}
    >
      {/* Sun icon - visible in light mode */}
      <Sun className={`h-5 w-5 transition-all ${
        theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
      }`} />
      {/* Moon icon - visible in dark mode */}
      <Moon className={`absolute h-5 w-5 transition-all ${
        theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
      }`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
