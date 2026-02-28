"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import slide1 from "../assets/about2.jpg";
import slide2 from "../assets/solar-about-hero.avif";
import slide3 from "../assets/blog-featured.png";
import slide4 from "../assets/solar-bg-2.jpg";

// ✅ Define strict service type
type ServiceType =
  | "Maintenance"
  | "Cleaning"
  | "System Upgrade"
  | "Monitoring"
  | "Other";

export default function Contact() {
  const [current, setCurrent] = useState<number>(0);
  const [serviceType, setServiceType] =
    useState<ServiceType>("Maintenance");

  const slides: string[] = [slide1, slide2, slide3, slide4];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Strict typed service list
  const serviceOptions: ServiceType[] = [
    "Maintenance",
    "Cleaning",
    "System Upgrade",
    "Monitoring",
    "Other",
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] min-h-[700px] text-white overflow-hidden">
        {/* Slider */}
        <div className="absolute inset-0 z-0">
          {slides.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: index === current ? 1 : 0,
                scale: index === current ? 1 : 1.1,
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={img}
                alt="Solar Project"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl font-bold leading-tight max-w-3xl"
          >
            Power Your Future with
            <span className="text-emerald-400">
              {" "}Smart Solar Energy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl"
          >
            Save more. Spend less. Switch to clean and reliable solar solutions.
          </motion.p>
        </div>
      </section>

      {/* ================= SERVICE CONTACT SECTION ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Solar System Support & Services
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Need maintenance, cleaning, monitoring assistance, or system upgrades?
              Submit your request and our service team will assist you quickly.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✔ Preventive & Breakdown Maintenance</li>
              <li>✔ Professional Solar Panel Cleaning</li>
              <li>✔ Inverter & System Upgrade</li>
              <li>✔ Remote Monitoring Support</li>
              <li>✔ Technical Assistance</li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Raise a Service Request
            </h3>

            {/* Service Type Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {serviceOptions.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setServiceType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    serviceType === type
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400 outline-none"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Installation Pincode"
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400 outline-none"
                />

                <input
                  type="text"
                  placeholder="City"
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400 outline-none"
                />
              </div>

              <textarea
                rows={4}   // ✅ FIXED
                placeholder={`Describe your ${serviceType} issue...`}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 
                           text-white font-semibold py-3 rounded-lg 
                           transition duration-300 shadow-md"
              >
                Submit Service Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}