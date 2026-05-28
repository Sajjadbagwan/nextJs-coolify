import { ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  to?: string;
}

const PageBreadcrumb = ({ crumbs, backTo = "/" }: { crumbs: Crumb[]; backTo?: string }) => (
  <div className="flex items-center gap-1 px-4 py-2.5 bg-[hsl(var(--brand-bg))] border-b border-border overflow-x-auto scrollbar-none">
    <Link
      to={backTo}
      className="flex items-center gap-1 text-[hsl(var(--brand-mid))] flex-shrink-0 pr-1"
      aria-label="Back"
    >
      <ArrowLeft className="w-4 h-4" />
    </Link>
    <span className="text-[hsl(var(--brand-mid))]/40">|</span>
    <Link to="/" className="text-[12px] text-[hsl(var(--brand-mid))] font-medium flex-shrink-0 pl-1">
      Home
    </Link>
    {crumbs.slice(0, -1).map((c, i) => (
      <div key={i} className="flex items-center gap-1 flex-shrink-0">
        <ChevronRight className="w-3 h-3 text-muted-foreground" />
        {c.to ? (
          <Link to={c.to} className="text-[12px] text-[hsl(var(--brand-mid))] font-medium">
            {c.label}
          </Link>
        ) : (
          <span className="text-[12px] text-[hsl(var(--brand-mid))] font-medium">
            {c.label}
          </span>
        )}
      </div>
    ))}
  </div>
);

export default PageBreadcrumb;
