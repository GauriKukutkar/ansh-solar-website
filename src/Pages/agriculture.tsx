import { motion } from "framer-motion";

// 👉 Agriculture images
import agri1 from "../assets/agriculture.jpg";
import agri2 from "../assets/agri2.png";
import agri3 from "../assets/agri3.png";
import agri4 from "../assets/agri4.png";

// ================= COMPONENT =================

type Step = {
  title: string;
  desc: string;
};

type SectionProps = {
  reverse?: boolean;
  title: string;
  description: string;
  steps: Step[];
  images: string[];
};

const Section: React.FC<SectionProps> = ({
  reverse = false,
  title,
  description,
  steps,
  images,
}) => {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
        {/* Text Side */}
        <motion.div
          initial={{ x: reverse ? 80 : -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className={`${reverse ? "order-2" : "order-1"}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-5 text-gray-900 leading-tight">
            {title}
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            {description}
          </p>

          <div className="space-y-5">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-2 h-2.5 w-2.5 rounded-full bg-green-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Images Side */}
        <motion.div
          initial={{ x: reverse ? -80 : 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className={`space-y-6 ${reverse ? "order-1" : "order-2"}`}
        >
          {images.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={img}
                alt="agriculture solar"
                className="w-full h-72 object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ================= PAGE =================

export default function agriculture() {
  const benefits = [
    "Up to 90% reduction in diesel or grid electricity costs for irrigation",
    "Reliable daytime water supply without manual fuel management",
    "Long system life (25+ years) with minimal operating expense",
    "Government subsidy assistance where applicable",
    "Environment-friendly farming with reduced carbon footprint",
  ];
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-24 pb-10">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          <span className="text-blue-600">Smart Solar</span>{" "}
          <span className="text-gray-900">for Agriculture</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl text-lg">
          Transform your farming operations with dependable solar power.
          Our agriculture-focused systems help farmers reduce diesel costs,
          ensure reliable irrigation, and improve long-term profitability.
          Built for rural conditions, our solutions deliver consistent
          performance even in remote locations.
        </p>
      </div>

      {/* Key Benefits */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Why Farmers Choose Solar
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <p className="text-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Solar Pumps */}
      <Section
        title="Solar Pumping Systems for Irrigation"
        description="Our solar water pumping solutions are engineered specifically for Indian farming conditions. Whether you operate borewells, open wells, or drip irrigation, we design systems that deliver reliable daytime water flow without recurring fuel expenses."
        steps={[
          {
            title: "On-Field Requirement Study",
            desc:
              "We evaluate bore depth, seasonal water demand, crop pattern, and irrigation method to size the ideal solar pump system.",
          },
          {
            title: "High-Efficiency Pump Selection",
            desc:
              "Deployment of robust DC or AC solar pumps with MPPT controllers to maximize water output even during low sunlight hours.",
          },
          {
            title: "Rural-Grade Installation",
            desc:
              "Galvanized mounting structures, theft-resistant wiring, and weatherproof components ensure durability in farm environments.",
          },
          {
            title: "Subsidy Guidance & Commissioning",
            desc:
              "Support with government subsidy documentation where applicable, followed by full system testing and farmer handover.",
          },
        ]}
        images={[agri1, agri2]}
      />

      {/* Farm Solar */}
      <Section
        reverse
        title="Solar Power for Farm Operations"
        description="Beyond irrigation, farms today require dependable electricity for lighting, fencing, dairy units, cold storage, and small processing equipment. Our customized farm solar plants provide scalable, low-maintenance energy tailored for agricultural businesses."
        steps={[
          {
            title: "Comprehensive Load Planning",
            desc:
              "We map current and future farm loads including motors, pack houses, electric fencing, and rural buildings.",
          },
          {
            title: "Custom System Engineering",
            desc:
              "Design of grid-tied or hybrid solar systems optimized for maximum generation and seasonal performance stability.",
          },
          {
            title: "Battery & Hybrid Integration",
            desc:
              "Optional battery backup ensures night-time lighting, security systems, and critical farm equipment remain operational.",
          },
          {
            title: "Long-Term Maintenance Support",
            desc:
              "Scheduled panel cleaning, remote performance tracking, and preventive service visits keep your farm solar running at peak efficiency.",
          },
        ]}
        images={[agri3, agri4]}
      />
    </div>
  );
}
