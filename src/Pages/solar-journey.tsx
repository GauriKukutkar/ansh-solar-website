import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import journeyImg from "../assets/solar-journey.jpg";

/* ================= INPUT ================= */

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div>
      <label className="text-sm text-gray-600 font-semibold">{label}</label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={`Enter ${label}`}
        className="w-full mt-2 px-4 py-3 rounded-xl
        border border-gray-300 bg-gray-50
        text-gray-900 placeholder:text-gray-400
        focus:bg-white focus:border-blue-500
        outline-none transition"
      />
    </div>
  );
}

/* ================= SELECT (NEW) ================= */

type SelectProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select({ label, name, value, onChange }: SelectProps) {
  return (
    <div>
      <label className="text-sm text-gray-600 font-semibold">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-2 px-4 py-3 rounded-xl
        border border-gray-300 bg-gray-50
        focus:bg-white focus:border-blue-500 outline-none"
      >
        <option value="">Select Option</option>
        <option value="Available">Approval Available</option>
        <option value="Not Available">Not Available</option>
        <option value="In Process">In Process</option>
        <option value="Need Guidance">Need Guidance</option>
      </select>
    </div>
  );
}

/* ================= TAB META ================= */

const tabMeta = {
  residential: {
    title: "Residential Solar",
    desc: "Perfect for homes and villas. Reduce electricity bills with rooftop solar.",
    color: "from-blue-500 to-sky-500",
  },
  society: {
    title: "Housing Society Solar",
    desc: "Lower common electricity costs using shared solar systems.",
    color: "from-emerald-500 to-green-500",
  },
  business: {
    title: "MSME / Business Solar",
    desc: "Cut operational expenses with commercial solar plants.",
    color: "from-purple-500 to-indigo-500",
  },
  agriculture: {
    title: "Agriculture Solar",
    desc: "Reliable solar pumping and farm power solutions.",
    color: "from-orange-500 to-amber-500",
  },
} as const;

/* ================= MAIN ================= */

export default function SolarJourney() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof tabMeta>("residential");

  const meta = tabMeta[activeTab];

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    city: "",
    pincode: "",
    approval: "",
  });

  const [bill, setBill] = useState(3000);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ================= BILL SLIDER ================= */

  const BillSlider = () => (
    <div>
      <label className="text-sm text-gray-600 font-semibold">
        Monthly Electricity Bill
      </label>

      <input
        type="range"
        min={500}
        max={20000}
        step={500}
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        className="w-full mt-3 accent-blue-600"
      />

      <p className="text-blue-600 font-semibold mt-2">
        ₹ {bill.toLocaleString()} / month
      </p>
    </div>
  );

  /* ================= SUBMIT ================= */

  const handleSubmit = async () => {
    if (!formData.name || !formData.whatsapp || !formData.city) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost/solar-api/save_solar_lead.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            bill,
            category: activeTab,
          }),
        }
      );

      const data = await res.json();

      alert(data.message);

      if (data.status === "success") {
        setFormData({
          name: "",
          whatsapp: "",
          city: "",
          pincode: "",
          approval: "",
        });
        setBill(3000);
      }
    } catch (err) {
      alert("Server connection failed");
    }

    setLoading(false);
  };

  /* ================= UI ================= */

  const tabs = [
    { id: "residential", label: "Residential" },
    { id: "society", label: "Housing Society" },
    { id: "business", label: "MSME / Business" },
    { id: "agriculture", label: "Agriculture" },
  ] as const;

  return (
    <section className="w-full text-black bg-gradient-to-b from-gray-50 to-white pt-[120px] pb-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.img
          src={journeyImg}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
        />

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white border rounded-3xl shadow-2xl p-8"
        >
          <h2 className="text-3xl text-black font-bold">Start Your Solar Journey</h2>

          {/* TAB INFO */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`mt-4 rounded-2xl p-4 text-white bg-gradient-to-r ${meta.color}`}
            >
              <p className="font-semibold">{meta.title}</p>
              <p className="text-sm">{meta.desc}</p>
            </motion.div>
          </AnimatePresence>

          {/* TABS */}
          <div className="flex flex-wrap gap-3 my-7">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full font-semibold ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-5">
            <Input label="Full Name" name="name" value={formData.name} onChange={handleChange}/>
            <Input label="WhatsApp Number" name="whatsapp" value={formData.whatsapp} onChange={handleChange}/>
            <Input label="City" name="city" value={formData.city} onChange={handleChange}/>
            <Input label="Pin Code" name="pincode" value={formData.pincode} onChange={handleChange}/>

            {activeTab !== "residential" && (
              <Select
                label="Approval / Connection Status"
                name="approval"
                value={formData.approval}
                onChange={handleChange}
              />
            )}

            <BillSlider />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full mt-8 py-4 rounded-full
            bg-gradient-to-r ${meta.color}
            text-white font-bold text-lg`}
          >
            {loading ? "Submitting..." : "Get Free Solar Consultation ⚡"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}