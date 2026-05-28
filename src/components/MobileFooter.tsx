import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { VisaLogo, MastercardLogo, AmexLogo, ApplePayLogo, GooglePayLogo } from "./PaymentLogos";

const aboutLinks = ["Company History", "News", "Store Location", "Price Match", "Brands"];
const serviceLinks = ["Create Account", "Contact Us", "Delivery Info", "Returns Policy"];
const legalLinks = [
  "Terms & Conditions",
  "Privacy Policy",
  "Cookie Policy",
  "Modern Slavery Statement",
  "CDA Accredited",
];

const MobileFooter = () => (
  <footer className="bg-[hsl(var(--brand-dark))] text-primary-foreground">
    <div className="px-5 py-7 space-y-6">
      {/* Two-column links with generous spacing */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-6">
        <div>
          <h4 className="font-heading font-medium text-[14px] uppercase tracking-wider mb-3 text-[hsl(var(--brand-light-blue))]">
            About
          </h4>
          <div className="space-y-2.5">
            {aboutLinks.map((l) => (
              <a key={l} href="#" className="block text-[14px] text-primary-foreground/80 active:text-white">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-medium text-[14px] uppercase tracking-wider mb-3 text-[hsl(var(--brand-light-blue))]">
            Customer Service
          </h4>
          <div className="space-y-2.5">
            {serviceLinks.map((l) => (
              <a key={l} href="#" className="block text-[14px] text-primary-foreground/80 active:text-white">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact block */}
      <div className="space-y-3 pt-5 border-t border-primary-foreground/15">
        <a href="tel:01494835200" className="flex items-center gap-3 text-[14px] font-medium active:text-[hsl(var(--brand-light-blue))]">
          <Phone className="w-4 h-4 flex-shrink-0 text-[hsl(var(--brand-light-blue))]" />
          01494 835200
        </a>
        <div className="flex items-center gap-3 text-[12px] text-primary-foreground/75">
          <Clock className="w-4 h-4 flex-shrink-0 text-[hsl(var(--brand-light-blue))]" />
          Mon–Fri 8am–5pm
        </div>
        <div className="flex items-start gap-3 text-[12px] text-primary-foreground/75 leading-relaxed">
          <MapPin className="w-4 h-4 flex-shrink-0 text-[hsl(var(--brand-light-blue))] mt-0.5" />
          <span>West End Court, Suffield Road,<br />High Wycombe, HP11 2JJ</span>
        </div>
      </div>

      {/* Social */}
      <div className="pt-5 border-t border-primary-foreground/15">
        <h4 className="font-heading font-medium text-[14px] uppercase tracking-wider mb-3 text-[hsl(var(--brand-light-blue))]">
          Follow Us
        </h4>
        <a
          href="#"
          aria-label="Instagram"
          className="w-11 h-11 rounded-full bg-primary-foreground/10 active:bg-[hsl(var(--brand-light-blue))] flex items-center justify-center transition-colors"
        >
          <Instagram className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* Payments */}
      <div className="pt-5 border-t border-primary-foreground/15">
        <h4 className="font-heading font-medium text-[14px] uppercase tracking-wider mb-3 text-[hsl(var(--brand-light-blue))]">
          We Accept
        </h4>
        <div className="flex items-center gap-2 flex-wrap">
          <VisaLogo />
          <MastercardLogo />
          <AmexLogo />
          <ApplePayLogo />
          <GooglePayLogo />
        </div>
      </div>

      {/* Legal links */}
      <div className="pt-5 border-t border-primary-foreground/15">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {legalLinks.map((l) => (
            <a key={l} href="#" className="text-[12px] text-primary-foreground/65 active:text-white underline-offset-2 hover:underline">
              {l}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="pt-5 border-t border-primary-foreground/15 text-center space-y-2">
        <p className="text-[12px] text-primary-foreground/55">
          © 2026 Isaac Lord Limited · Registered in England
        </p>
        <p className="text-[12px] text-primary-foreground/55">
          Site Designed and Developed by{" "}
          <a
            href="https://cda.group"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--brand-light-blue))] hover:underline font-medium"
          >
            CDA
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default MobileFooter;
