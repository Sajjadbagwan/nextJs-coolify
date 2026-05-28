import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/isaac-lord-logo.svg";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--brand-bg))] w-full max-w-[640px] mx-auto">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link to="/login" aria-label="Back" className="text-[hsl(var(--brand-mid))] -ml-1">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <Link to="/" aria-label="Home">
            <img src={logo} alt="Isaac Lord" className="h-8 w-auto" />
          </Link>
          <div className="w-6" />
        </div>
      </header>

      <div className="px-4 py-6">
        {!submitted ? (
          <>
            <h1 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
              Forgot Password
            </h1>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
              Enter the email address linked to your Isaac Lord account and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div className="space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-xs uppercase tracking-wider font-heading text-[hsl(var(--brand-dark))]"
                >
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 bg-background"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[hsl(var(--brand-mid))] hover:bg-[hsl(var(--brand-mid))]/90 text-white font-heading uppercase tracking-wider"
              >
                Send Reset Link
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Remembered your password?{" "}
                <Link to="/login" className="text-[hsl(var(--brand-mid))] font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </>
        ) : (
          <div className="mt-6">
            <div className="bg-background border border-border rounded-lg p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[hsl(var(--trust-green))]/10 flex items-center justify-center mx-auto">
                <MailCheck className="w-7 h-7 text-[hsl(var(--trust-green))]" />
              </div>
              <h1 className="font-heading text-xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide mt-4">
                Check Your Email
              </h1>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                If an account exists for{" "}
                <span className="font-medium text-[hsl(var(--brand-dark))]">{email}</span>, we've
                sent a link to reset your password. The link will expire in 60 minutes.
              </p>

              <Link to="/login" className="block mt-6">
                <Button className="w-full h-12 bg-[hsl(var(--brand-mid))] hover:bg-[hsl(var(--brand-mid))]/90 text-white font-heading uppercase tracking-wider">
                  Back to Sign In
                </Button>
              </Link>
            </div>

            <p className="text-xs text-center text-muted-foreground mt-5 leading-relaxed">
              Didn't receive an email? Check your spam folder or{" "}
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="underline text-[hsl(var(--brand-mid))]"
              >
                try a different email
              </button>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
