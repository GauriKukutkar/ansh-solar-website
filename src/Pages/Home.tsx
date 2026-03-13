import heroVideo from "../assets/solar-panel.mp4";
import { motion } from "framer-motion";
import { Sun, Zap, BatteryCharging, Factory } from "lucide-react";
// import { SunMedium, Wrench } from "lucide-react";
import solarBg from "../assets/solar-bg-2.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import adani from "../assets/adani.png";
import polycab from "../assets/polycab.png";
import nova from "../assets/nova.png";
import vikram from "../assets/vikram.png";
import utl from "../assets/utl.avif";
// import tata from "../assets/tata.png";

export default function Home() {

const [selectedDate, setSelectedDate] = useState<string>("");
const [selectedTime, setSelectedTime] = useState<string>("");

const isTimeValid = () => {
  if (!selectedDate || !selectedTime) return false;

  const now = new Date();
  const selected = new Date(`${selectedDate}T${selectedTime}`);

  return selected > now;
};
const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [email,setEmail] = useState("");
const [bill,setBill] = useState("");
const [pincode,setPincode] = useState("");
const [city,setCity] = useState("");

const [loading,setLoading] = useState(false);
const [success,setSuccess] = useState(false);

const handleConsultation = async () => {

  if(!name || !phone || !selectedDate || !selectedTime){
    alert("Please fill required fields");
    return;
  }

  setLoading(true);

  try{

    const formData = new FormData();

    formData.append("name",name);
    formData.append("phone",phone);
    formData.append("email",email);
    formData.append("date",selectedDate);
    formData.append("time",selectedTime);
    formData.append("bill",bill);
    formData.append("pincode",pincode);
    formData.append("city",city);

    const res = await fetch(
      "https://anshsolarelectricals.com/Backend/consultation_booking.php",
      {
        method:"POST",
        body:formData
      }
    );

    const data = await res.json();

    if(data.status === "success"){
      setSuccess(true);

      setName("");
      setPhone("");
      setEmail("");
      setBill("");
      setPincode("");
      setCity("");
      setSelectedDate("");
      setSelectedTime("");
    }

  }catch(err){
    alert("Server connection failed");
  }

  setLoading(false);
};
const categories = ["General", "Installation", "Maintenance & Security"];

const faqData = {
  General: [
    {
      q: "What is rooftop solar and how does it work?",
      a: "Rooftop solar systems convert sunlight into electricity using photovoltaic panels installed on your roof to power your home or business.",
    },
    {
      q: "Is my home suitable for solar panels?",
      a: "Most homes with shadow-free roof space are suitable. A quick site survey confirms feasibility.",
    },
    {
      q: "Will solar work during cloudy days?",
      a: "Yes, panels still generate power on cloudy days, though output is slightly reduced.",
    },
    {
      q: "Do I still get electricity at night?",
      a: "At night you draw power from the grid or battery storage if installed.",
    },
    {
      q: "Is rooftop solar safe?",
      a: "Yes. Certified systems include earthing, surge protection, and safety shut-offs.",
    },
  ],

  Installation: [
    {
      q: "How long does solar installation take?",
      a: "Most residential systems are installed within 1–3 days after approvals.",
    },
    {
      q: "What is the solar installation process?",
      a: "It includes site survey, design, approvals, mounting, wiring, testing, and net meter connection.",
    },
    {
      q: "Do I need government approval?",
      a: "Yes, net-metering approval is required. Most installers handle the paperwork.",
    },
    {
      q: "How much roof area is required?",
      a: "Typically 1 kW requires around 80–100 sq ft of shadow-free space.",
    },
    {
      q: "Will installation damage my roof?",
      a: "No. Proper mounting structures are designed to protect roof integrity.",
    },
    {
      q: "Can solar be installed on any roof type?",
      a: "Yes — RCC, metal sheet, and tiled roofs are all supported with proper mounting.",
    },
    {
      q: "What capacity system do I need?",
      a: "It depends on your monthly electricity consumption and available roof space.",
    },
    {
      q: "Do I get subsidy on rooftop solar?",
      a: "Yes, residential users may receive government subsidies depending on state policies.",
    },
    {
      q: "What is net metering?",
      a: "Net metering allows you to export excess solar power to the grid and receive bill credits.",
    },
  ],

  "Maintenance & Security": [
    {
      q: "How much maintenance do solar panels require?",
      a: "Very little. Occasional cleaning and annual inspection keep performance optimal.",
    },
    {
      q: "How often should panels be cleaned?",
      a: "Usually once every 2–4 weeks depending on dust levels in your area.",
    },
    {
      q: "What is the lifespan of a solar system?",
      a: "Solar panels typically last 25+ years with gradual performance decline.",
    },
    {
      q: "Is my solar system protected and monitored?",
      a: "Yes. Modern systems include monitoring apps and electrical protections for safety.",
    },
  ],
};

  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>

{/* ================= HERO SECTION =================*/}
<section className="relative w-full min-h-screen flex items-center overflow-hidden pt-[80px]">

  {/* BACKGROUND VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

  {/* CLEAN OVERLAY */}
  <div className="absolute inset-0 bg-[#021423]/65" />
{/* HERO CONTENT */}
  <div className="relative z-10 max-w-8xl mx-auto px-6 w-full">
    <div className="max-w-2xl mx-auto text-center space-y-4">

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sky-400 text-3xl font-semibold tracking-wide uppercase"
      >
        Ansh Solar Electricals
      </motion.p>

      <motion.h1
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.15, duration: 0.6 }}
  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap"
>
Smart Solar Solutions for Modern India
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="text-gray-200 text-base sm:text-lg whitespace-nowrap"
>
  Reduce your electricity bills with high-efficiency rooftop solar systems.
</motion.p>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="pt-2"
      >
        <button
  onClick={() => window.location.href = '/solar-journey'}
  className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600
             text-white font-semibold
             px-6 py-3 rounded-lg
             hover:scale-[1.03] active:scale-[0.97]
             transition-all duration-200 shadow-lg"
>
  Get Quote
</button>
      </motion.div>

    </div>
  </div>

  {/* BOTTOM FADE */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#010b14] to-transparent" />
</section>

{/* ================= CONSULTATION BOOKING ================= */}
<section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 overflow-hidden">

  {/* ✨ subtle overlay for better readability */}
  <div className="absolute inset-0 bg-[#021423]/20" />

  {/* ✨ background glow */}
  <div className="solar-bg-glow top-[-120px] left-[-120px]" />
  <div className="solar-bg-glow bottom-[-140px] right-[-120px]" />

  <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

    {/* ================= LEFT CONTENT ================= */}
<div className="text-white space-y-7 text-center lg:text-left">

  <p className="text-sky-200 tracking-[4px] uppercase font-semibold text-sm">
    Free Solar Consultation
  </p>

  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.25]">
  Power Your Home With
  <span className="block mt-1 pb-2 bg-gradient-to-r from-sky-200 via-white to-emerald-200 bg-clip-text text-transparent">
    Smart Solar Energy
  </span>
</h2>

  <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
    Book a free site visit with our solar experts. We analyse your
    electricity usage, rooftop space, and provide a customized savings plan.
  </p>

  {/* ✨ feature list */}
  <div className="grid sm:grid-cols-2 gap-3 text-blue-100 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
    <p className="flex items-center gap-2">✅ Government Subsidy Guidance</p>
    <p className="flex items-center gap-2">✅ Customized Solar Design</p>
    <p className="flex items-center gap-2">✅ ROI & Savings Estimation</p>
    <p className="flex items-center gap-2">✅ Professional Installation</p>
  </div>
</div>

    {/* ================= RIGHT FORM CARD ================= */}
<div className="glass-card rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 sm:p-8 lg:p-10">

  <h3 className="text-xl sm:text-2xl font-bold text-[#021423] mb-6">
    Schedule Your Visit
  </h3>

  <div className="grid gap-4">

    {/* NAME */}
    <input
      placeholder="Full Name"
      className="inputStyle"
      value={name}
      onChange={(e)=>setName(e.target.value)}
    />

    {/* PHONE */}
    <input
      placeholder="Phone Number"
      className="inputStyle"
      type="tel"
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
    />

    {/* EMAIL */}
    <input
      placeholder="Email Address"
      className="inputStyle"
      type="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    />

    {/* DATE + TIME */}
    <div className="grid sm:grid-cols-2 gap-4">

      <div>
        <label className="formLabel">Select Date</label>

        <input
          type="date"
          className="inputStyle"
          min={new Date().toISOString().split("T")[0]}
          value={selectedDate}
          onChange={(e)=>setSelectedDate(e.target.value)}
        />
      </div>

      <div>
        <label className="formLabel">Select Time</label>

        <input
          type="time"
          className="inputStyle"
          value={selectedTime}
          onChange={(e)=>setSelectedTime(e.target.value)}
        />
      </div>

    </div>

    {/* BILL RANGE */}
    <select
      className="inputStyle"
      value={bill}
      onChange={(e)=>setBill(e.target.value)}
    >
      <option value="">Monthly Electricity Bill</option>
      <option value="Below ₹1000">Below ₹1000</option>
      <option value="₹1000 – ₹3000">₹1000 – ₹3000</option>
      <option value="₹3000 – ₹5000">₹3000 – ₹5000</option>
      <option value="Above ₹5000">Above ₹5000</option>
    </select>

    {/* PINCODE + CITY */}
    <div className="grid grid-cols-2 gap-4">

      <input
        placeholder="Pincode"
        className="inputStyle"
        value={pincode}
        onChange={(e)=>setPincode(e.target.value)}
      />

      <input
        placeholder="City"
        className="inputStyle"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
      />

    </div>

    {/* SUBMIT BUTTON */}
    <button
      onClick={handleConsultation}
      disabled={!selectedDate || !selectedTime || !isTimeValid() || loading}
      className="mt-4 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-400
      text-white py-4 rounded-xl font-semibold
      shadow-lg hover:scale-[1.03]
      active:scale-[0.98]
      transition disabled:opacity-50 disabled:cursor-not-allowed"
    >

      {loading ? "Submitting..." : "Confirm Consultation →"}

    </button>

  </div>

</div>
  </div>
</section>

{success && (

<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

  <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm">

    <h3 className="text-xl font-bold text-[#021423] mb-3">
      Consultation Booked!
    </h3>

    <p className="text-gray-600">
      Our solar expert will contact you soon.
    </p>

    <button
      onClick={()=>setSuccess(false)}
      className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg"
    >
      Close
    </button>

  </div>

</div>

)}

{/* ================= FLOATING ABOUT AREA ================= */}
<section
  className="relative bg-fixed bg-cover bg-center py-28"
  style={{ backgroundImage: `url(${solarBg})` }}
>
  {/* CENTER CARD */}
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">

    {/* ========= ABOUT SECTION ========= */}
    <div className="grid md:grid-cols-2 gap-12 items-center p-12">

      {/* TEXT */}
      <div>
        <p className="text-blue-600 tracking-widest uppercase font-semibold">
          — About Ansh Solar Electricals
        </p>

        <h2 className="text-4xl font-bold text-[#021423] mt-4 leading-tight">
          Engineering Energy
          <br />
          <span className="text-blue-600">
            For A Sustainable India
          </span>
        </h2>

        <p className="text-gray-500 mt-6 leading-relaxed">
          Intelligent solar solutions designed for Indian environments,
          reducing operational costs while building a cleaner tomorrow.
        </p>

        <button   onClick={() => window.location.href = '/solar-journey'}
 className="mt-8 bg-blue-600 text-white px-7 py-3 rounded-full shadow hover:bg-blue-700 transition">
          Start Your Solar Journey
        </button>
      </div>

      {/* IMAGE DESIGN */}
      <div className="relative flex justify-center">
        <div className="relative w-[360px] h-[360px]">

          <img
            src={about1}
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="absolute top-1/2 left-0 w-full h-2 bg-white -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-0 h-full w-2 bg-white -translate-x-1/2"></div>

          <div className="absolute -right-10 top-1/2 -translate-y-1/2
              w-24 h-24 bg-white rounded-full shadow flex items-center justify-center">

            <div className="w-16 h-16 border-2 border-dashed border-blue-500
                rounded-full flex items-center justify-center
                text-xs font-bold text-blue-600 text-center">
              CLEAN<br/>SOLAR<br/>ENERGY
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* ========= WHY CHOOSE US ========= */}
    <div className="grid md:grid-cols-2 gap-12 items-center p-12 border-t">

      {/* IMAGE */}
      <div>
        <img
          src={about2}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* CONTENT */}
      <div>
        <p className="text-blue-600 tracking-widest uppercase font-semibold">
          — Why Choose Us
        </p>

        <h2 className="text-4xl font-bold text-[#021423] mt-4">
          Smart Solar Engineering
        </h2>

        <p className="text-gray-500 mt-4">
          From consultation to deployment, we deliver scalable
          solar infrastructure built for long-term performance.
        </p>

        <div className="mt-8 space-y-6">

          <div className="flex gap-4">
            <span className="bg-yellow-300 w-8 h-8 rounded-full flex items-center justify-center font-bold">
              01
            </span>
            <div>
              <h4 className="font-semibold text-[#021423]">
                Best Choice For Your Business
              </h4>
              <p className="text-sm text-gray-500">
                Tailored engineering solutions for maximum efficiency.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="bg-yellow-300 w-8 h-8 rounded-full flex items-center justify-center font-bold">
              02
            </span>
            <div>
              <h4 className="font-semibold text-[#021423]">
                Low Cost With High Quality
              </h4>
              <p className="text-sm text-gray-500">
                Premium components with optimized installation cost.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>


  
{/* ================= PREMIUM MOVING SOLAR STRIP ================= */}
<section className="w-full overflow-hidden bg-white py-7 border-y border-gray-200">

  <div className="marquee flex whitespace-nowrap items-center">

    {/* LOOP CONTENT */}
    <div className="flex items-center gap-24 px-12">

      <div className="flex items-center gap-5">
        <Sun size={40} className="text-blue-600" strokeWidth={1.8} />
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#021423]">
          India’s <span className="text-blue-600">Smart Solar</span> Partner
        </h3>
      </div>

      <div className="flex items-center gap-5">
        <Factory size={40} className="text-blue-600" strokeWidth={1.8} />
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#021423]">
          Built For <span className="text-blue-600">Indian Conditions</span>
        </h3>
      </div>

      <div className="flex items-center gap-5">
        <BatteryCharging size={40} className="text-blue-600" strokeWidth={1.8} />
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#021423]">
          Save Energy. <span className="text-blue-600">Save Money.</span>
        </h3>
      </div>

      <div className="flex items-center gap-5">
        <Zap size={40} className="text-blue-600" strokeWidth={1.8} />
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#021423]">
          Clean Power For <span className="text-blue-600">Every Home</span>
        </h3>
      </div>

    </div>

    {/* DUPLICATE FOR INFINITE LOOP */}
    <div className="flex items-center gap-24 px-12">

      <div className="flex items-center gap-5">
        <Sun size={40} className="text-blue-600" strokeWidth={1.8} />
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#021423]">
          India’s <span className="text-blue-600">Smart Solar</span> Partner
        </h3>
      </div>

      <div className="flex items-center gap-5">
        <Factory size={40} className="text-blue-600" strokeWidth={1.8} />
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#021423]">
          Built For <span className="text-blue-600">Indian Conditions</span>
        </h3>
      </div>

      <div className="flex items-center gap-5">
        <BatteryCharging size={40} className="text-blue-600" strokeWidth={1.8} />
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#021423]">
          Save Energy. <span className="text-blue-600">Save Money.</span>
        </h3>
      </div>

      <div className="flex items-center gap-5">
        <Zap size={40} className="text-blue-600" strokeWidth={1.8} />
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#021423]">
          Clean Power For <span className="text-blue-600">Every Home</span>
        </h3>
      </div>

    </div>

  </div>
</section>

{/* ================= PREMIUM SERVICES SECTION ================= */}
<section className="relative bg-[#f5f7f9] py-28 px-6 overflow-hidden">

  {/* BACKGROUND ENERGY GLOW */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400/20 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* HEADER */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

      <div>
        <p className="text-blue-600 font-semibold tracking-widest uppercase">
          — Our Expertise
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#021423] mt-3 leading-tight">
          Smart Solar Solutions <br />
          <span className="text-blue-600">
            Designed For The Future
          </span>
        </h2>
      </div>

      <button   onClick={() => window.location.href = '/contact'}
 className="group flex items-center gap-3 bg-[#021423] text-white px-7 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg">
        Know All Services
        <span className="bg-white text-blue-600 w-8 h-8 flex items-center justify-center rounded-full group-hover:rotate-90 transition">
          +
        </span>
      </button>

    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-10 mt-16">

      {/* CARD 1 */}
      <div className="group relative bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">

        {/* hover gradient sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-green-400/0 opacity-0 group-hover:opacity-100 transition duration-700"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition">
            <i className="fa-solid fa-solar-panel"></i>
          </div>

          <h3 className="text-xl font-semibold text-[#021423] mt-6">
            Rooftop Solar Installation
          </h3>

          <p className="text-gray-500 mt-4 leading-relaxed">
            High-efficiency rooftop systems engineered for
            maximum savings and sustainable performance.
          </p>

          <p   onClick={() => window.location.href = '/residential'}
 className="text-blue-600 mt-6 font-semibold cursor-pointer group-hover:translate-x-2 transition">
            Learn more →
          </p>
        </div>
      </div>


      {/* CARD 2 */}
      <div className="group relative bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-green-400/0 opacity-0 group-hover:opacity-100 transition duration-700"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition">
            <i className="fa-solid fa-industry"></i>
          </div>

          <h3 className="text-xl font-semibold text-[#021423] mt-6">
            Commercial Solar Projects
          </h3>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Large-scale solar engineering solutions tailored
            for industries and commercial infrastructures.
          </p>

          <p onClick={() => window.location.href = '/industries'}  className="text-blue-600 mt-6 font-semibold cursor-pointer group-hover:translate-x-2 transition">
            Learn more →
          </p>
        </div>
      </div>


      {/* CARD 3 */}
      <div className="group relative bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-green-400/0 opacity-0 group-hover:opacity-100 transition duration-700"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition">
            <i className="fa-solid fa-screwdriver-wrench"></i>
          </div>

          <h3 className="text-xl font-semibold text-[#021423] mt-6">
            Maintenance & Energy Care
          </h3>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Continuous monitoring and proactive maintenance
            ensuring peak solar efficiency year-round.
          </p>

          <p onClick={() => window.location.href = '/Privacy-policy'} className="text-blue-600 mt-6 font-semibold cursor-pointer group-hover:translate-x-2 transition">
            Learn more →
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* trusted by section  */}
<section className="py-14 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* heading */}
    <div className="text-center mb-10">
      <p className="text-sm font-semibold tracking-[3px] text-[#021423]  uppercase">
         Our Solar Partners 
      </p>
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-600  mt-2">
        Trusted By Leading Brands
      </h3>
    </div>

    {/* marquee */}
    <div className="relative overflow-hidden group">
      <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused] gap-16 items-center">

        {[
          adani,
          polycab,
          nova,
          vikram,
          utl,
          // tata,

          // duplicate for seamless loop
          adani,
          polycab,
          nova,
          vikram,
          utl,
          // tata,
        ].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center min-w-[180px]"
          >
            <img
              src={logo}
              alt="solar partner"
              className="h-20 sm:h-22 md:h-24 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

{/* faq section  */}
 <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600">

      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="text-center mb-14">
          {/* <p className="text-white/80 tracking-[3px] uppercase font-semibold text-sm mb-3">
            FAQs
          </p> */}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Frequently Asked Solar Questions
          </h2>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Clear answers about solar installation, savings, and long-term reliability.
          </p>
        </div>

        {/* tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition
                ${
                  activeTab === cat
                    ? "bg-white text-blue-600 shadow-lg"
                    : "bg-white/20 text-white backdrop-blur hover:bg-white/30"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData[activeTab as keyof typeof faqData].map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300
                  ${
                    isOpen
                      ? "bg-white border-blue-200 shadow-xl"
                      : "bg-white/95 border-blue-200 hover:shadow-lg"
                  }`}
              >
                <button
  onClick={() => toggle(index)}
  className="w-full flex justify-between items-center text-left p-5 sm:p-6
             transition hover:bg-blue-50/40"
>
  <span className="font-semibold text-[#021423] pr-4">
    {item.q}
  </span>

  {/* ✅ Professional animated icon */}
  <span
    className={`h-8 w-8 flex items-center justify-center rounded-full
      transition-all duration-300 flex-shrink-0
      ${isOpen ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"}
    `}
  >
    <svg
      className={`w-4 h-4 transition-transform duration-300 ${
        isOpen ? "rotate-45" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  </span>
</button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>

    </>
  );
}