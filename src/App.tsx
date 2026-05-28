import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import DemoIndex from "./pages/DemoIndex.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import ProductPageSimple from "./pages/ProductPageSimple.tsx";
import ProductPageTier from "./pages/ProductPageTier.tsx";
import ProductPageConfig from "./pages/ProductPageConfig.tsx";
import ProductPageOutOfStock from "./pages/ProductPageOutOfStock.tsx";
import ProductPageMTM from "./pages/ProductPageMTM.tsx";
import CategoryLanding from "./pages/CategoryLanding.tsx";
import CategoryListing from "./pages/CategoryListing.tsx";
import BasketPage from "./pages/BasketPage.tsx";
import CheckoutShipping from "./pages/CheckoutShipping.tsx";
import CheckoutShippingMethod from "./pages/CheckoutShippingMethod.tsx";
import CheckoutPayment from "./pages/CheckoutPayment.tsx";
import CheckoutPaymentLoggedIn from "./pages/CheckoutPaymentLoggedIn.tsx";
import AddToBasketDemo from "./pages/AddToBasketDemo.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import CreateAccountPage from "./pages/CreateAccountPage.tsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.tsx";
import AccountDashboard from "./pages/account/AccountDashboard.tsx";
import AccountOrders from "./pages/account/AccountOrders.tsx";
import AccountOrderDetail from "./pages/account/AccountOrderDetail.tsx";
import AccountFavourites from "./pages/account/AccountFavourites.tsx";
import AccountLoyalty from "./pages/account/AccountLoyalty.tsx";
import AccountAddresses from "./pages/account/AccountAddresses.tsx";
import AccountProfile from "./pages/account/AccountProfile.tsx";
import AccountTradeUpgrade from "./pages/account/AccountTradeUpgrade.tsx";
import AccountLogout from "./pages/account/AccountLogout.tsx";
import TradeDashboard from "./pages/account/TradeDashboard.tsx";
import TradeApplyCredit from "./pages/account/TradeApplyCredit.tsx";
import NotFound from "./pages/NotFound.tsx";
import PasswordGate from "./components/PasswordGate.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PasswordGate>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<DemoIndex />} />
            <Route path="/home" element={<Index />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/product-simple" element={<ProductPageSimple />} />
            <Route path="/product-tier" element={<ProductPageTier />} />
            <Route path="/product-config" element={<ProductPageConfig />} />
            <Route path="/product-out-of-stock" element={<ProductPageOutOfStock />} />
            <Route path="/product-made-to-measure" element={<ProductPageMTM />} />
            <Route path="/category-landing" element={<CategoryLanding />} />
            <Route path="/category" element={<CategoryListing />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/checkout/shipping" element={<CheckoutShipping />} />
            <Route path="/checkout/shipping-method" element={<CheckoutShippingMethod />} />
            <Route path="/checkout/payment" element={<CheckoutPayment />} />
            <Route path="/checkout/payment-logged-in" element={<CheckoutPaymentLoggedIn />} />
            <Route path="/add-to-basket-overlay" element={<AddToBasketDemo />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/account" element={<AccountDashboard />} />
            <Route path="/account/orders" element={<AccountOrders />} />
            <Route path="/account/orders/:id" element={<AccountOrderDetail />} />
            <Route path="/account/favourites" element={<AccountFavourites />} />
            <Route path="/account/loyalty" element={<AccountLoyalty />} />
            <Route path="/account/addresses" element={<AccountAddresses />} />
            <Route path="/account/profile" element={<AccountProfile />} />
            <Route path="/account/trade-upgrade" element={<AccountTradeUpgrade />} />
            <Route path="/account/logout" element={<AccountLogout />} />
            <Route path="/trade" element={<TradeDashboard />} />
            <Route path="/trade/apply-credit" element={<TradeApplyCredit />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PasswordGate>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
