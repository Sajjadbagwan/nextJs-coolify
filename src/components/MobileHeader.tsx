import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X, ChevronRight, ChevronLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/isaac-lord-logo.svg";

type Category = {
  name: string;
  children?: string[];
};

const categories: Category[] = [
  {
    name: "Blum",
    children: [
      "CLIP top BLUMOTION Hinges",
      "TANDEM Drawer Runners",
      "LEGRABOX Drawer Systems",
      "AVENTOS Lift Systems",
      "MOVENTO Runners",
      "Blum Spare Parts",
    ],
  },
  {
    name: "Powertools",
    children: [
      "Cordless Drills & Drivers",
      "Circular Saws",
      "Jigsaws",
      "Routers",
      "Sanders",
      "Planers",
      "Mitre Saws",
      "Vacuum Extractors",
    ],
  },
  {
    name: "Fixings & Jointing",
    children: [
      "Wood Screws",
      "Machine Screws & Bolts",
      "Nails & Staples",
      "Wall Plugs & Anchors",
      "Adhesives & Sealants",
      "Biscuits & Dominos",
    ],
  },
  {
    name: "Powertool Accessories",
    children: [
      "Saw Blades",
      "Drill Bits",
      "Router Cutters",
      "Sanding Discs",
      "Batteries & Chargers",
      "Dust Extraction",
    ],
  },
  {
    name: "Cabinet Hardware",
    children: [
      "Handles & Knobs",
      "Hinges",
      "Drawer Runners",
      "Wardrobe Fittings",
      "Sliding Door Gear",
      "Worktop Connectors",
    ],
  },
  {
    name: "Abrasives",
    children: [
      "Sanding Sheets",
      "Sanding Discs",
      "Sanding Belts",
      "Hand Sanding Blocks",
      "Polishing Compounds",
      "Wire Brushes",
    ],
  },
  {
    name: "Workwear",
    children: [
      "Jackets & Hoodies",
      "Trousers & Shorts",
      "T-Shirts & Polos",
      "Footwear",
      "Gloves",
      "Eye & Ear Protection",
    ],
  },
  {
    name: "Brands",
    children: [
      "Festool",
      "Blum",
      "Hafele",
      "Mirka",
      "Carhartt",
      "Reisser",
      "Makita",
      "DeWalt",
    ],
  },
];

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveCategory(null);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[hsl(var(--brand-dark))]">
        {/* Top bar */}
        <div className="flex items-center justify-between px-2 h-16">
          <button
            onClick={() => setMenuOpen(true)}
            className="touch-target flex items-center justify-center text-primary-foreground p-2"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link to="/" className="flex items-center justify-center" aria-label="Isaac Lord">
            <img src={logo} alt="Isaac Lord — Fittings, Hardware & Tools" className="h-10 w-auto" />
          </Link>

          <div className="flex items-center gap-0">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="touch-target flex items-center justify-center text-primary-foreground p-2"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link to="#" className="touch-target flex items-center justify-center text-primary-foreground p-2" aria-label="Account">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/basket" className="touch-target flex items-center justify-center text-primary-foreground p-2 relative" aria-label="Basket">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-0.5 bg-[hsl(var(--brand-light-blue))] text-white text-[12px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Expandable search */}
        {searchOpen && (
          <div className="px-3 pb-3 w-full max-w-full overflow-hidden">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search our store"
                size={1}
                className="block w-full min-w-0 max-w-full h-10 pl-4 pr-10 rounded bg-white text-foreground text-base focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]"
                autoFocus
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        )}
      </header>

      {/* Slide-out mega menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-foreground/50" onClick={closeMenu} />
          <nav className="relative w-[88%] max-w-sm bg-background h-full overflow-hidden shadow-2xl flex flex-col">
            {/* Menu header */}
            <div className="bg-[hsl(var(--brand-dark))] px-3 h-16 flex items-center justify-between flex-shrink-0">
              {activeCategory ? (
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-primary-foreground flex items-center gap-1 p-2 -ml-2 touch-target"
                  aria-label="Back"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="font-heading text-base font-medium uppercase tracking-wide">Back</span>
                </button>
              ) : (
                <img src={logo} alt="Isaac Lord" className="h-9 w-auto" />
              )}
              <button onClick={closeMenu} className="text-primary-foreground p-2 touch-target" aria-label="Close">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Sliding panels container */}
            <div className="flex-1 overflow-hidden relative">
              {/* Root categories panel */}
              <div
                className={`absolute inset-0 overflow-y-auto transition-transform duration-300 ${
                  activeCategory ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                <div className="py-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat)}
                      className="w-full flex items-center justify-between px-5 py-4 active:bg-[hsl(var(--brand-bg))] border-b border-border/50"
                    >
                      <span className="font-heading text-[15px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
                        {cat.name}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
                    </button>
                  ))}
                </div>

                {/* Account & Contact */}
                <div className="px-5 py-4 space-y-3 border-t border-border bg-[hsl(var(--brand-bg))]">
                  <a href="#" className="flex items-center gap-3 text-sm text-foreground py-2">
                    <User className="w-4 h-4 text-[hsl(var(--brand-mid))]" /> Login / Register
                  </a>
                  <a href="tel:01494835200" className="flex items-center gap-3 text-sm text-foreground py-2">
                    <Phone className="w-4 h-4 text-[hsl(var(--brand-mid))]" /> 01494 835200
                  </a>
                </div>
              </div>

              {/* Child categories panel */}
              <div
                className={`absolute inset-0 overflow-y-auto transition-transform duration-300 ${
                  activeCategory ? "translate-x-0" : "translate-x-full"
                }`}
              >
                {activeCategory && (
                  <div className="py-1">
                    {/* Shop all */}
                    <a
                      href="#"
                      onClick={closeMenu}
                      className="flex items-center justify-between px-5 py-4 bg-[hsl(var(--brand-bg))] border-b border-border"
                    >
                      <span className="font-heading text-[15px] font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wide">
                        Shop All {activeCategory.name}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
                    </a>
                    {activeCategory.children?.map((child) => (
                      <a
                        key={child}
                        href="#"
                        onClick={closeMenu}
                        className="flex items-center justify-between px-5 py-3.5 active:bg-[hsl(var(--brand-bg))] border-b border-border/50"
                      >
                        <span className="text-[14px] text-foreground">{child}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
