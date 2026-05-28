import applePay from "@/assets/apple-pay.png";
import googlePay from "@/assets/google-pay.png";

// Compact inline SVG payment method icons (no external dependencies)
export const VisaLogo = () => (
  <svg viewBox="0 0 48 32" className="h-6 w-auto" aria-label="Visa">
    <rect width="48" height="32" rx="4" fill="#1A1F71" />
    <text x="24" y="21" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontStyle="italic" fontSize="13" fill="#fff">VISA</text>
  </svg>
);

export const MastercardLogo = () => (
  <svg viewBox="0 0 48 32" className="h-6 w-auto" aria-label="Mastercard">
    <rect width="48" height="32" rx="4" fill="#fff" />
    <circle cx="20" cy="16" r="8" fill="#EB001B" />
    <circle cx="28" cy="16" r="8" fill="#F79E1B" />
    <path d="M24 10.5a8 8 0 0 0 0 11 8 8 0 0 0 0-11Z" fill="#FF5F00" />
  </svg>
);

export const AmexLogo = () => (
  <svg viewBox="0 0 48 32" className="h-6 w-auto" aria-label="American Express">
    <rect width="48" height="32" rx="4" fill="#2E77BC" />
    <text x="24" y="14" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="6" fill="#fff">AMERICAN</text>
    <text x="24" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="6" fill="#fff">EXPRESS</text>
  </svg>
);

export const ApplePayLogo = () => (
  <div className="h-6 w-12 rounded bg-white border border-[#dadce0] flex items-center justify-center">
    <img src={applePay} alt="Apple Pay" className="h-4 w-auto object-contain" />
  </div>
);

export const GooglePayLogo = () => (
  <div className="h-6 w-12 rounded bg-white border border-[#dadce0] flex items-center justify-center">
    <img src={googlePay} alt="Google Pay" className="h-4 w-auto object-contain" />
  </div>
);
