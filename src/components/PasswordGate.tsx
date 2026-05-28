import { useEffect, useState, type FormEvent } from "react";
import logo from "@/assets/isaac-lord-logo.svg";

const PASSWORD = "letmeinplease123";
const STORAGE_KEY = "il_access_granted";

const PasswordGate = ({ children }: { children: React.ReactNode }) => {
  const [unlocked, setUnlocked] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--brand-dark,209_76%_20%))] px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-background rounded-lg shadow-2xl p-8 space-y-6"
      >
        <div className="flex flex-col items-center gap-3">
          <img src={logo} alt="Isaac Lord" className="h-12 w-auto" />
          <h1 className="font-heading text-lg font-semibold text-foreground uppercase tracking-wide text-center">
            Restricted Preview
          </h1>
          <p className="text-sm text-muted-foreground text-center">
            Enter the password to continue.
          </p>
        </div>

        <div className="space-y-2">
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            autoFocus
            className="w-full h-11 px-4 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {error && (
            <p className="text-xs text-destructive">Incorrect password. Please try again.</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full h-11 rounded-md bg-primary text-primary-foreground font-heading font-medium uppercase tracking-wide text-sm hover:opacity-90 transition"
        >
          Enter Site
        </button>
      </form>
    </div>
  );
};

export default PasswordGate;
