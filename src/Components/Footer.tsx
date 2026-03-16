import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
   <footer className="bg-gradient-to-b from-[#021423] to-[#010b14] text-white pt-16">

  <div className="max-w-7xl mx-auto px-6">

    {/* MAIN GRID */}
    <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-12">

      {/* BRAND */}
      <div className="space-y-5 max-w-sm">

        <img
          src={logo}
          className="h-24 object-contain transition-transform duration-300 hover:scale-105"
          alt="Ansh Solar Electricals Logo"
           onClick={() => window.location.href = '/'}
        />

        <p className="text-sm text-gray-300 leading-relaxed">
          Turning sunlight into long-term value through smart engineering
          and sustainable solar innovation for modern India.
        </p>

        {/* SOCIAL */}
        <div className="flex gap-4 pt-2">
          {[Facebook, Instagram, Linkedin , Twitter , Youtube].map((Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 flex items-center justify-center
              rounded-full bg-white/5
              hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/20
              hover:scale-110 active:scale-95
              transition-all duration-300 cursor-pointer"
            >
              <Icon size={18}/>
            </div>
          ))}
        </div>
      </div>

      {/* REUSABLE LINK STYLE */}
      {/*
        hover:text-white → color change
        hover:translate-x → premium movement
        active:scale → mobile feedback
      */}

      {/* EXPLORE */}
      <div>
        <h3 className="font-semibold text-lg mb-5">Explore</h3>
        <ul className="space-y-3 text-gray-300 text-sm">
  {[
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" }
  ].map((item, i) => (
    <li key={i}>
      <Link
        to={item.path}
        className="transition-all duration-300
        hover:text-green-600 hover:translate-x-1
        active:scale-95 inline-block"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>
      </div>

      {/* SOLAR OFFERINGS */}
      <div>
        <h3 className="font-semibold text-lg mb-5">Solar Offerings</h3>
        <ul className="space-y-3 text-gray-300 text-sm">
  {[
    { name: "Homes & Villas", path: "/residential" },
    // { name: "Commercial Spaces", path: "/solar/commercial" },
    { name: "Industrial Solar", path: "/industries" },
    { name: "Agriculture Solutions", path: "/agriculture" }
  ].map((item, i) => (
    <li key={i}>
      <Link
        to={item.path}
        className="transition-all duration-300
        hover:text-green-600 hover:translate-x-1
        active:scale-95 inline-block"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>
      </div>

      {/* ENERGY CARE */}
      <div>
        <h3 className="font-semibold text-lg mb-5">Energy Care</h3>
        <ul className="space-y-3 text-gray-300 text-sm">
  {[
    { name: "Maintenance", path: "/maintenance" },
    { name: "Monitoring", path: "/monitoring" },
    { name: "System Upgrade", path: "/upgrade" },
    { name: "Consultation", path: "/consultation" }
  ].map((item, i) => (
    <li key={i}>
      <Link
        to={item.path}
        className="transition-all duration-300
        hover:text-green-600 hover:translate-x-1
        active:scale-95 inline-block"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>
      </div>

      {/* CONTACT */}
      <div>
        <h3 className="font-semibold text-lg mb-5">Contact</h3>

        <div className="space-y-4 text-sm text-gray-300">

          <div className="flex items-start gap-3
            hover:text-white transition duration-300">
            <Phone size={18} className="text-green-400 mt-[2px] shrink-0"/>
            <span>+91 7057408223</span>
          </div>

          <div className="flex items-start gap-3
            hover:text-white transition duration-300">
            <Mail size={18} className="text-green-400 mt-[2px] shrink-0"/>
            <span>anshelectrical5858@gmail.com</span>
          </div>

          <div className="flex items-start gap-3
            hover:text-white transition duration-300">
            <MapPin size={18} className="text-green-400 mt-[2px] shrink-0"/>
            <span>Nagpur, Maharashtra</span>
          </div>

        </div>
      </div>

    </div>

    {/* INDIA SECTION */}
    <div className="mt-14 border-t border-white/10 pt-8">
  <h4 className="font-semibold mb-3">
    Powering Solar Across Maharashtra
  </h4>

  <p className="text-sm text-gray-400 leading-relaxed">
    Nagpur • Mumbai • Thane • Satara • Parbhani • Ahmadnagar • Pune • Nashik • Aurangabad • Kolhapur • Solapur •
    Amravati • Nanded • Jalgaon • Yavatmal • Chandrapur
  </p>
</div>

    {/* BOTTOM BAR */}
    <div className="flex flex-col md:flex-row
      justify-between items-center
      gap-4 text-sm text-gray-400
      border-t border-white/10 mt-8 py-6">

      <p>© 2026 Ansh Solar Electricals — Powering Sustainable Future</p>

      <div className="flex flex-wrap gap-6">
  {[
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    // { name: "Refund Policy", path: "/refund-policy" }
  ].map((item, i) => (
    <Link
      key={i}
      to={item.path}
      className="transition-all duration-300
      hover:text-white hover:-translate-y-[1px]"
    >
      {item.name}
    </Link>
  ))}
</div>

    </div>

  </div>
</footer>
  );
}