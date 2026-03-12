import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/contact";
import PrivacyPolicy from "./Pages/Privacy-policy";
import MainLayout from "./Layouts/Mainlayout";
import TermsConditions from "./Pages/terms-conditions";
import RefundPolicy from "./Pages/RefundPolicy";
import ScrollToTop from "./Components/ScrollToTop";
import SolarJourney from "./Pages/solar-journey";
import Residential from "./Pages/residential";
import Industries from "./Pages/industries";
import Agriculture from "./Pages/agriculture";
import SolarCalculator from "./Pages/solar-calculator";

export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* Layout Wrapper */}
        <Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/terms-conditions" element={<TermsConditions />} />
  <Route path="/refund-policy" element={<RefundPolicy />} />
  <Route path="/solar-journey" element={<SolarJourney />} />
  <Route path="/residential" element={<Residential />} />
  <Route path="/industries" element={<Industries />} />
  <Route path="/agriculture" element={<Agriculture />} />
  <Route path="/solar-calculator" element={<SolarCalculator />} />
</Route>

      </Routes>
    </BrowserRouter>
  );
}