import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import logo from "@/assets/isaac-lord-logo.svg";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--brand-bg))] w-full max-w-[640px] mx-auto">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link to="/" aria-label="Back" className="text-[hsl(var(--brand-mid))] -ml-1">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <Link to="/" aria-label="Home">
            <img src={logo} alt="Isaac Lord" className="h-8 w-auto" />
          </Link>
          <div className="w-6" />
        </div>
      </header>

      <div className="px-4 py-6">
        <h1 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
          Sign In
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Welcome back. Sign in to your Isaac Lord account.
        </p>

        {/* Form */}
        <form className="space-y-4 mt-6">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs uppercase tracking-wider font-heading text-[hsl(var(--brand-dark))]">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input id="email" type="email" autoComplete="email" inputMode="email" placeholder="you@example.com" className="h-12 bg-background" />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-xs uppercase tracking-wider font-heading text-[hsl(var(--brand-dark))]">
                Password <span className="text-destructive">*</span>
              </Label>
              <Link to="/forgot-password" className="text-xs text-[hsl(var(--brand-mid))] font-medium">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="h-12 bg-background"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-[hsl(var(--brand-dark))]">
            <Checkbox id="remember" />
            <span>Keep me signed in</span>
          </label>

          <Button
            type="submit"
            className="w-full h-12 bg-[hsl(var(--brand-mid))] hover:bg-[hsl(var(--brand-mid))]/90 text-white font-heading uppercase tracking-wider"
          >
            Sign In
          </Button>
        </form>

        {/* Create account */}
        <div className="mt-8 bg-background border border-border rounded-lg p-5 text-center">
          <h2 className="font-heading text-sm uppercase tracking-wider text-[hsl(var(--brand-dark))] font-medium">
            New to Isaac Lord?
          </h2>
          <p className="text-xs text-muted-foreground mt-1.5">
            Create an account to track orders, save favourites and unlock trade pricing.
          </p>
          <Link to="/create-account">
            <Button
              variant="outline"
              className="w-full h-11 mt-4 border-[hsl(var(--brand-mid))] text-[hsl(var(--brand-mid))] font-heading uppercase tracking-wider"
            >
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
