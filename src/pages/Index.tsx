import MobileHeader from "@/components/MobileHeader";
import USPMarquee from "@/components/USPMarquee";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoGrid from "@/components/PromoGrid";
import TopDeals from "@/components/TopDeals";
import MoreCategories from "@/components/MoreCategories";
import BrandLogosStrip from "@/components/BrandLogosStrip";
import LoyaltyBanner from "@/components/LoyaltyBanner";
import PromotionsBlock from "@/components/PromotionsBlock";
import LatestNews from "@/components/LatestNews";
import AboutBlock from "@/components/AboutBlock";
import NewsletterBlock from "@/components/NewsletterBlock";
import MobileFooter from "@/components/MobileFooter";


const Index = () => (
  <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden">
    <MobileHeader />
    <USPMarquee />
    <HeroCarousel />
    <CategoryGrid />
    <PromoGrid />
    <FeaturedProducts />
    <BrandLogosStrip />
    <TopDeals />
    <LoyaltyBanner />
    <MoreCategories />
    <PromotionsBlock />
    <LatestNews />
    <AboutBlock />
    <NewsletterBlock />
    
    <MobileFooter />
  </div>
);

export default Index;

