import aboutImg from "../assets/about1.jpg";
import { motion } from "framer-motion";
import abouthero from "../assets/solar-about-hero.avif"
import aboutfit from "../assets/solar_fit.jpg";
import { useInView } from "framer-motion";
import { Sun, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Map from "../assets/India_Maharashtra_location_map.svg";

type CountUpProps = {
  end: number;
  duration?: number;
};

function CountUp({ end, duration = 2 }: CountUpProps) {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

const journeyData = [
  {
    year: "2018",
    title: "Foundation Laid",
    desc: "Ansh Solar Electricals began with a mission to make clean energy accessible and affordable.",
  },
  {
    year: "2019",
    title: "First Residential Projects",
    desc: "Successfully delivered early rooftop solar installations and built customer trust.",
  },
  {
    year: "2020",
    title: "Growing During Challenges",
    desc: "Expanded services despite market challenges, strengthening technical expertise.",
  },
  {
    year: "2021",
    title: "Team & Service Expansion",
    desc: "Built a skilled workforce and extended installation capabilities across regions.",
  },
  {
    year: "2022",
    title: "Commercial Solar Entry",
    desc: "Started handling commercial and small industrial solar projects.",
  },
  {
    year: "2023",
    title: "Advanced Solar Solutions",
    desc: "Introduced energy optimization, better system monitoring and efficient designs.",
  },
  {
    year: "2024",
    title: "Multi-City Presence",
    desc: "Expanded operations across multiple cities in Maharashtra.",
  },
  {
    year: "2025–26",
    title: "8 Years of Excellence",
    desc: "Delivering reliable solar solutions while moving toward large-scale sustainable impact.",
  },
];

export default function AboutHero() {
  return (
    <>
      {/* ================= HERO ================= */}
<section className="relative pt-32 min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#021423]">        {/* Background Image from assets */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${abouthero})` }}
        />

        {/* Animated gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-br from-[#021423]/45 via-[#021423]/60 to-[#021423]/75"
        />

        {/* subtle animated light sweep (creative new effect) */}
        <motion.div
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute top-0 left-0 h-full w-1/3 bg-white/10 blur-2xl rotate-12"
        />

        {/* floating glow blobs */}
        {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-400/25 rounded-full blur-3xl" /> */}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
        >
          <p className="text-sky-300 tracking-[4px] uppercase font-semibold text-sm mb-4">
            Welcome to Ansh Solar Electricals
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15]">
            Powering Maharashtra With
            <span className="block mt-2 bg-gradient-to-r from-sky-300 via-white to-emerald-300 bg-clip-text text-transparent pb-3">
              Smart Solar Solutions
            </span>
          </h1>

          {/* reduced paragraph */}
          <p className="mt-5 text-blue-100 text-base sm:text-lg max-w-xl mx-auto">
            8+ years of trusted solar installation and maintenance for homes
            and businesses.
          </p>

          {/* <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-emerald-400 shadow-xl hover:scale-105 active:scale-95 transition">
              Book Free Consultation
            </button>

            <button className="px-8 py-4 rounded-xl font-semibold border border-white/40 hover:bg-white/10 backdrop-blur transition">
              View Our Projects
            </button>
          </div> */}
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [10, 0, 10] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm"
        >
          Scroll to explore ↓
        </motion.div>
      </section>
{/* ================= SECOND CREATIVE SECTION ================= */}
<section className="relative bg-[#010b14] text-white overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <motion.div
    initial={{ scale: 1.1, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 0.2 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${aboutImg})` }}
  />

  {/* SOFT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#010b14] via-[#010b14]/90 to-[#010b14]/90" />

  {/* CONTENT */}
  <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="text-blue-400 font-semibold tracking-widest uppercase"
      >
        About Ansh Solar Electricals
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mt-4 leading-tight"
      >
        Engineering Energy
        <br />
        <span className="text-blue-400">
          For A Sustainable India
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        viewport={{ once: true }}
        className="text-gray-300 mt-6 leading-relaxed max-w-xl"
      >
        We design intelligent solar solutions built for Indian
        environments — helping homes and businesses reduce
        electricity costs while moving toward clean energy independence.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: true }}
        onClick={() => window.location.href = '/solar-journey'}
        className="mt-8 bg-blue-500 hover:bg-blue-600 transition px-7 py-3 rounded-full font-semibold shadow-lg"
      >
        Start Your Solar Journey →
      </motion.button>
    </motion.div>

    {/* RIGHT IMAGE DESIGN */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      {/* IMAGE GRID STYLE */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="grid grid-cols-2 gap-4 w-[420px]"
      >
        <img
          src={aboutfit}
          className="rounded-xl object-cover h-52 w-full"
        />
        <img
          src={aboutImg}
          className="rounded-xl object-cover h-72 w-full mt-10"
        />
      </motion.div>

      {/* FLOATING BADGE */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
        viewport={{ once: true }}
        animate={{ y: [0, -6, 0] }}
        className="absolute top-10 right-10 bg-white text-[#021423] px-5 py-3 rounded-full font-semibold shadow-xl"
      >
        300+ Projects
      </motion.div>
    </motion.div>

  </div>
</section>

{/* ================= VISION SECTION ================= */}
<section className="bg-[#f8fbff] py-28 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT TEXT */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-blue-600 uppercase tracking-widest font-semibold text-sm">
        Our Vision
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#021423] leading-tight">
        Leading India's Transition
        <span className="block text-blue-600">
          Toward Clean Energy
        </span>
      </h2>

      <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
        Our vision is to make solar energy the most accessible and
        trusted power solution for homes and businesses across India.
        We aim to accelerate the transition toward renewable energy
        through innovation, reliability, and sustainable engineering.
      </p>
    </motion.div>

    {/* RIGHT INFO GRAPHIC */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center"
    >

      {/* TARGET CIRCLE */}
      <div className="relative w-56 h-56 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 flex items-center justify-center shadow-xl">

        <div className="w-36 h-36 rounded-full bg-white flex items-center justify-center text-[#021423] font-bold text-lg">
          Vision
        </div>

      </div>

      {/* INFO CARDS */}
      <div className="absolute -right-10 top-10 bg-white p-4 rounded-xl shadow-lg w-52">
        <h4 className="font-semibold text-[#021423]">Sustainable Future</h4>
        <p className="text-gray-600 text-sm mt-1">
          Accelerating India's renewable energy adoption.
        </p>
      </div>

      <div className="absolute -left-10 bottom-10 bg-white p-4 rounded-xl shadow-lg w-52">
        <h4 className="font-semibold text-[#021423]">Energy Independence</h4>
        <p className="text-gray-600 text-sm mt-1">
          Helping homes produce their own electricity.
        </p>
      </div>

    </motion.div>

  </div>
</section>


{/* ================= MISSION SECTION ================= */}
<section className="bg-white py-28 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* INFOGRAPHIC */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative flex items-center justify-center"
    >

      {/* TARGET */}
      <div className="relative w-56 h-56 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 flex items-center justify-center shadow-xl">
        <div className="w-36 h-36 rounded-full bg-white flex items-center justify-center text-[#021423] font-bold text-lg">
          Mission
        </div>
      </div>

      {/* CARDS */}
      <div className="absolute -left-12 top-8 bg-white p-4 rounded-xl shadow-lg w-52">
        <h4 className="font-semibold text-[#021423]">Affordable Solar</h4>
        <p className="text-gray-600 text-sm mt-1">
          Providing cost-effective solar solutions.
        </p>
      </div>

      <div className="absolute -right-12 bottom-8 bg-white p-4 rounded-xl shadow-lg w-52">
        <h4 className="font-semibold text-[#021423]">Expert Installation</h4>
        <p className="text-gray-600 text-sm mt-1">
          High-quality engineering and reliable systems.
        </p>
      </div>

    </motion.div>

    {/* TEXT */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-blue-600 uppercase tracking-widest font-semibold text-sm">
        Our Mission
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#021423] leading-tight">
        Delivering Reliable
        <span className="block text-blue-600">
          Solar Power Solutions
        </span>
      </h2>

      <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
        Our mission is to empower households and businesses with
        dependable solar technology while reducing electricity
        costs and environmental impact. We focus on quality
        installations, expert engineering, and long-term customer trust.
      </p>
    </motion.div>

  </div>
</section>

 <section className="relative bg-white overflow-hidden">
      {/* subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-emerald-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            Our Impact
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#021423] leading-tight">
            Trusted Solar Experts
            <span className="block text-blue-600">
              Powering Maharashtra
            </span>
          </h2>
        </motion.div>

        {/* BIG STATS — no cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-14 text-center">
          
          {/* stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <Sun className="w-14 h-14 text-blue-600 mb-6" />

            <h3 className="text-5xl sm:text-6xl font-bold text-[#021423]">
              <CountUp end={300} />+
            </h3>

            <p className="mt-3 text-gray-600 font-medium">
              Solar Projects Completed
            </p>
          </motion.div>

          {/* stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col items-center"
          >
            <Users className="w-14 h-14 text-emerald-500 mb-6" />

            <h3 className="text-5xl sm:text-6xl font-bold text-[#021423]">
              <CountUp end={20} />+
            </h3>

            <p className="mt-3 text-gray-600 font-medium">
              Expert Technicians
              <span className="block text-sm text-gray-500">
                (7–10 Years Experience)
              </span>
            </p>
          </motion.div>

          {/* stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <Zap className="w-14 h-14 text-yellow-500 mb-6" />

            <h3 className="text-5xl sm:text-6xl font-bold text-[#021423]">
              <CountUp end={8} />+
            </h3>

            <p className="mt-3 text-gray-600 font-medium">
              Years of Solar Excellence
            </p>
          </motion.div>
        </div>

        {/* bottom CTA feel */}
      

      </div>
    </section>
{/* ================= SOLAR COVERAGE MAP ================= */}
<section className="relative bg-white overflow-hidden py-28">

  <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* ================= LEFT TEXT ================= */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-left"
    >
      <p className="text-blue-600 tracking-[4px] uppercase text-sm font-semibold">
        Our Coverage
      </p>

      <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight text-[#021423]">
        Powering Cities Across
        <span className="block bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
          Maharashtra
        </span>
      </h2>

      <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
        Our solar installations are actively expanding across major
        cities — delivering sustainable energy solutions for homes,
        businesses, and industries.
      </p>
    </motion.div>

    {/* ================= RIGHT MAP ================= */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center"
>
  {/* STATIC MAP (no floating animation) */}
  <div className="relative">
    <img
      src={Map}
      alt="India Map"
      className="w-[360px] sm:w-[500px] md:w-[620px]"
    />

    {/* ===== CITY MARKERS ONLY ANIMATED ===== */}
    {[
      { name: "Mumbai", top: "55%", left: "38%" },
      { name: "Pune", top: "53%", left: "42%" },
      { name: "Nashik", top: "48%", left: "42%" },
      { name: "Nagpur", top: "48%", left: "60%" },
      { name: "Aurangabad", top: "50%", left: "50%" },
      { name: "Amravati", top: "45%", left: "58%" },
      { name: "Kolhapur", top: "62%", left: "40%" },
      { name: "Solapur", top: "60%", left: "47%" },
      { name: "Nanded", top: "55%", left: "55%" },
      { name: "Jalgaon", top: "44%", left: "48%" }
    ].map((city, i) => (
      <motion.div
        key={city.name}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.12, type: "spring" }}
        viewport={{ once: true }}
        className="absolute"
        style={{ top: city.top, left: city.left }}
      >
        {/* glowing pulse */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_16px_5px_rgba(16,185,129,0.6)]"
        />

        {/* city label */}
        <span className="absolute top-5 left-1/2 -translate-x-1/2 text-xs text-[#021423] font-medium whitespace-nowrap">
          {city.name}
        </span>
      </motion.div>
    ))}
  </div>
</motion.div>
  

  </div>
</section>

{/* ================= COMPANY JOURNEY (CREATIVE ROADMAP STYLE) ================= */}
<section className="relative bg-gradient-to-b from-[#f8fbff] to-white py-32 overflow-hidden">

  <div className="max-w-6xl mx-auto px-6 relative">

    {/* HEADER */}
    <div className="text-center mb-24">
      <p className="text-blue-600 tracking-widest uppercase text-sm font-semibold">
        Our Journey
      </p>
      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#021423]">
        8 Years of Solar Growth
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        From our first installation to powering multiple cities —
        here’s how Ansh Solar Electricals evolved year after year.
      </p>
    </div>

    {/* TIMELINE WRAPPER */}
    <div className="relative">

      {/* CENTER CURVED LINE */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 via-blue-500 to-emerald-500 rounded-full" />

      {journeyData.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`relative mb-20 flex items-center ${
              isLeft ? "justify-start" : "justify-end"
            }`}
          >
            {/* CONTENT CARD */}
            <div
              className={`w-full md:w-[45%] ${
                isLeft ? "md:pr-16 text-right" : "md:pl-16 text-left"
              }`}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition">

                <span className="text-sm font-semibold text-blue-600">
                  {item.year}
                </span>

                <h3 className="text-xl font-bold text-[#021423] mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* CENTER DOT */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-6 h-6 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)] border-4 border-white"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
    </>
  );
}
