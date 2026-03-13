import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);

  /* CLOSE WHEN CLICK OUTSIDE */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  /* ✅ SAME STYLE FOR DESKTOP + MOBILE */
  const navItem = ({ isActive }: { isActive: boolean }) =>
    `relative block w-full lg:w-auto py-2 cursor-pointer
     transition duration-300 font-bold
     ${
       isActive
         ? "text-green-600 after:w-full"
         : "text-gray-800 hover:text-green-600 active:text-green-600"
     }
     after:absolute after:left-0 after:bottom-0
     after:h-[2px] after:w-0 after:bg-green-600
     after:transition-all after:duration-300
     hover:after:w-full active:after:w-full`;

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-[999]"
    >
      {/* NAVBAR */}
      <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">

        {/* LOGO */}
<img
  src={logo}
  alt="Ansh Solar Electricals Logo"
  className="h-16 lg:h-19 object-contain cursor-pointer"
  onClick={() => window.location.href = '/'}
/>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px]">

          <NavLink to="/" className={navItem}>Home</NavLink>
          <NavLink to="/about" className={navItem}>Our Story</NavLink>

          {/* SOLAR OFFERINGS */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("offerings")}
              className="flex items-center text-black gap-1 font-bold hover:text-green-600"
            >
              Solar Offerings <ChevronDown size={18}/>
            </button>

            {openDropdown === "offerings" && (
              <div className="absolute text-black top-12 left-0 w-64 bg-white border shadow-xl rounded-xl p-3 space-y-1 z-[1000]">

    {[
      { name: "Homes & Villas", path: "/residential" },
      // { name: "Businesses", path: "/solar/business" },
      { name: "Industries", path: "/industries" },
      { name: "Agriculture", path: "/agriculture" },
    ].map((item) => (
      <NavLink
        key={item.name}
        to={item.path}
        onClick={() => setOpenDropdown(null)}
        className="block px-4 py-2 rounded-lg hover:bg-green-50 transition"
      >
        {item.name}
      </NavLink>
    ))}

  </div>
            )}
          </div>

          {/* ENERGY CARE */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("care")}
              className="flex text-black items-center gap-1 font-bold hover:text-green-600"
            >
              Energy Care <ChevronDown size={18}/>
            </button>

            {openDropdown === "care" && (
              <div className="absolute text-black top-12 left-0 w-64 bg-white border shadow-xl rounded-xl p-3 space-y-1 z-[1000]">

    {[
      { name: "Solar Calculator", path: "/solar-calculator" },
      { name: "Roof-Suitability Checker", path: "/RoofSuitabilityChecker" },
      // { name: "Maintenance", path: "/Maintenance" },
      // { name: "Consultation", path: "/energy/consultation" },
    ].map((item) => (
      <NavLink
        key={item.name}
        to={item.path}
        onClick={() => setOpenDropdown(null)}
        className="block px-4 py-2 rounded-lg hover:bg-green-50 transition"
      >
        {item.name}
      </NavLink>
    ))}

  </div>
            )}
          </div>

          <NavLink to="/blog" className={navItem}>Blog</NavLink>
          <NavLink to="/contact" className={navItem}>Contact Us</NavLink>
        </nav>

        {/* CTA BUTTON */}
        <NavLink to="/solar-journey">
  <button
    className="hidden lg:block px-7 py-3 rounded-full text-white font-bold
    bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600
    shadow-lg hover:scale-105 transition"
  >
    Start Your Solar Journey
  </button>
</NavLink>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-black"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <Menu size={30}/>
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
{menuOpen && (
  <div className="lg:hidden bg-white border-t shadow-2xl px-6 py-7 space-y-5 text-[17px] animate-fadeIn">

    {/* NAV LINKS */}
    <NavLink to="/" className={navItem}>Home</NavLink>
    <NavLink to="/about" className={navItem}>Our Story</NavLink>

    {/* ===== SOLAR OFFERINGS ===== */}
    <div>
      <button
        onClick={() => toggleDropdown("offerings")}
        className="flex items-center justify-between w-full font-semibold text-black"
      >
        Solar Offerings
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            openDropdown === "offerings" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openDropdown === "offerings" && (
        <div className="pl-5 mt-3 space-y-3 text-gray-600 border-l-2 border-blue-100">
          <NavLink to="/residential" className="block hover:text-blue-600 transition">Homes & Villas</NavLink>
          {/* <NavLink to="/business" className="block hover:text-blue-600 transition">Businesses</NavLink> */}
          <NavLink to="/industries" className="block hover:text-blue-600 transition">Industries</NavLink>
          <NavLink to="/agriculture" className="block hover:text-blue-600 transition">Agriculture</NavLink>
        </div>
      )}
    </div>

    {/* ===== ENERGY CARE ===== */}
    <div>
      <button
        onClick={() => toggleDropdown("care")}
        className="flex items-center justify-between w-full font-semibold text-black"
      >
        Energy Care
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            openDropdown === "care" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openDropdown === "care" && (
        <div className="pl-5 mt-3 space-y-3 text-gray-600 border-l-2 border-blue-100">
          <NavLink to="/Solar-Calculator" className="block hover:text-blue-600 transition">Solar Calculator</NavLink>
          <NavLink to="/RoofSuitabilityChecker" className="block hover:text-blue-600 transition">Roof Suitability Checker</NavLink>
          {/* <NavLink to="/upgrade" className="block hover:text-blue-600 transition">System Upgrade</NavLink>
          <NavLink to="/consultation" className="block hover:text-blue-600 transition">Consultation</NavLink> */}
        </div>
      )}
    </div>

    <NavLink to="/blog" className={navItem}>Blog</NavLink>
    <NavLink to="/contact" className={navItem}>Contact Us</NavLink>

    <NavLink to="/solar-journey"
  className="block w-full mt-4 py-3 text-center rounded-full text-white font-semibold tracking-wide
  bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 hover:scale-[1.02] transition"
>
  Start Your Solar Journey
</NavLink>

  </div>
)}
    </header>
  );
}