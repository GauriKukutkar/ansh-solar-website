import { motion } from "framer-motion";

// 👉 Import your local images from assets folder
import industry1 from "../assets/industries.png";
import industry2 from "../assets/industry2.jpg";
import industry3 from "../assets/society.jpg";
import industry4 from "../assets/industry.jpg";

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
    <section className="py-24 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Text Side */}
        <motion.div
          initial={{ x: reverse ? 80 : -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className={`${reverse ? "order-2" : "order-1"}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
            {title}
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            {description}
          </p>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600 flex-shrink-0" />
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

        {/* Images Side — staggered */}
        <motion.div
          initial={{ x: reverse ? -80 : 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className={`relative ${reverse ? "order-1" : "order-2"}`}
        >
          <div className="space-y-8">
            {images.map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-xl w-[85%]"
                style={{ marginLeft: i % 2 === 0 ? "0" : "40px" }}
              >
                <img
                  src={img}
                  alt="industrial solar"
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ================= PAGE =================

export default function industries() {
  return (
    <div className="bg-gray-50">
      {/* 🔷 HERO HEADING */}
      <div className="pt-28 pb-10 px-6 lg:px-20 max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
          <span className="text-blue-600">Powering Industries</span> with Smart
          Solar Solutions
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-6xl">
          Reduce operational costs and improve sustainability with our
          end-to-end industrial solar solutions. From heavy manufacturing
          plants to warehouses and commercial facilities, we design,
          install, and maintain high-performance solar systems built for
          large energy demands.
        </p>
      </div>

      {/* ================= INSTALLATION ================= */}
      <Section
        title="Industrial Solar Installation"
        description="Our industrial solar installation service is engineered for high-load facilities that require reliable, scalable, and efficient energy systems. We handle everything from technical feasibility to final commissioning, ensuring minimal disruption to your operations while maximizing long-term ROI."
        steps={[
          {
            title: "Comprehensive Energy Audit",
            desc:
              "We analyze your plant’s load profile, peak demand patterns, and available rooftop or ground space to design the most efficient solar capacity.",
          },
          {
            title: "Engineering & Structural Design",
            desc:
              "Detailed electrical and structural engineering ensures the system meets industrial safety standards, wind load requirements, and future scalability.",
          },
          {
            title: "High-Efficiency System Deployment",
            desc:
              "We deploy Tier-1 solar panels, industrial-grade inverters, and robust mounting structures designed for long operational life in demanding environments.",
          },
          {
            title: "Testing, Commissioning & Grid Sync",
            desc:
              "Complete performance testing, protection checks, and grid synchronization ensure your plant starts generating savings from day one.",
          },
        ]}
        images={[industry1, industry2]}
      />

      {/* ================= MAINTENANCE ================= */}
      <Section
        reverse
        title="Industrial Solar Maintenance & AMC"
        description="Industrial solar systems require proactive maintenance to sustain peak generation. Our comprehensive AMC and monitoring services ensure your plant operates at maximum efficiency with minimal downtime and predictable long-term performance."
        steps={[
          {
            title: "Scheduled Preventive Maintenance",
            desc:
              "Routine inspections, thermal scanning, and electrical checks help detect issues early and maintain optimal plant health.",
          },
          {
            title: "Professional Panel Cleaning",
            desc:
              "Industrial-grade cleaning processes remove dust and residue buildup, improving generation efficiency across all seasons.",
          },
          {
            title: "24/7 Remote Monitoring",
            desc:
              "Real-time performance tracking with instant alerts allows quick fault detection and faster resolution.",
          },
          {
            title: "Dedicated Service Support",
            desc:
              "Our AMC team provides priority support, spare management, and performance optimization for uninterrupted industrial operations.",
          },
        ]}
        images={[industry3, industry4]}
      />
    </div>
  );
}
