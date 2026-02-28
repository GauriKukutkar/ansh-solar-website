import { motion } from "framer-motion";

// 👉 Import your local images from assets folder
import home1 from "../assets/about1.jpg";
import home2 from "../assets/solar_fit.jpg";
import home3 from "../assets/home2.jpg";

import villa1 from "../assets/blog-featured.png";
import villa2 from "../assets/villas.jpg";
import villa3 from "../assets/villa3.jpg";

import society1 from "../assets/industry.jpg";
import society2 from "../assets/industry2.jpg";
import society3 from "../assets/society.jpg";

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

          {/* Clean list */}
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
              <img src={img} alt="solar" className="w-full h-72 object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ================= PAGE =================

export default function Residential() {
  return (
    <div className="bg-gray-50">
      {/* ===== HERO HEADING ===== */}
      <section className="pt-28 pb-10 px-6 lg:px-20 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-blue-600">Powering</span>{" "}
            <span className="text-gray-900">Homes, Villas & Societies</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            From independent houses to premium villas and large housing
            societies, our rooftop solar solutions are engineered for maximum
            savings, long-term reliability, and clean energy independence. We
            handle everything — from design and approvals to installation and
            lifetime support.
          </p>
        </motion.div>
      </section>

      {/* Home Installation */}
      <Section
        title="Solar Installation for Homes"
        description="Power your home with clean solar energy. Our end-to-end rooftop solar solutions are specially designed for independent houses and residential rooftops, delivering faster approvals, premium components, and expert installation for maximum long-term savings."
        steps={[
          {
            title: "Site Survey & Energy Assessment",
            desc:
              "We carefully analyze your electricity consumption, roof dimensions, shadow-free area, and local DISCOM norms to design the most efficient solar system for your home.",
          },
          {
            title: "Custom Design & Government Approvals",
            desc:
              "Our in-house engineering team prepares a precise solar layout and manages net-metering approvals, subsidy documentation, and all regulatory compliance on your behalf.",
          },
          {
            title: "Professional & Safe Installation",
            desc:
              "Certified technicians install high-efficiency solar panels, inverter systems, and wind-resistant mounting structures while maintaining strict quality and safety standards.",
          },
          {
            title: "Activation, Monitoring & Support",
            desc:
              "Your system is fully commissioned and connected to real-time monitoring so you can track generation, savings, and performance directly from your mobile.",
          },
        ]}
        images={[home1, home2, home3]}
      />

      {/* Villas Installation */}
      <Section
        reverse
        title="Premium Solar Solutions for Villas"
        description="Luxury villas require high-performance and aesthetically refined solar systems. We deliver premium rooftop solutions with superior generation capacity, elegant structures, and intelligent energy management tailored specifically for upscale residences."
        steps={[
          {
            title: "Detailed Roof & Aesthetic Planning",
            desc:
              "We study villa architecture, elevation constraints, and visual aesthetics to ensure the solar system blends seamlessly with your premium property.",
          },
          {
            title: "High-Capacity Premium System",
            desc:
              "Designed for higher power consumption using advanced mono-PERC panels and smart inverters to maximize generation and long-term ROI.",
          },
          {
            title: "Elegant, Wind-Safe Installation",
            desc:
              "Heavy-duty, cyclone-resistant mounting structures with concealed cabling preserve your villa's premium appearance while ensuring safety.",
          },
          {
            title: "Smart Energy Intelligence",
            desc:
              "App-based monitoring, net-metering integration, and optional battery backup give you complete control and uninterrupted luxury living.",
          },
        ]}
        images={[villa1, villa2, villa3]}
      />

      {/* Societies Installation */}
      <Section
        title="Solar for Housing Societies & Apartments"
        description="Significantly reduce common electricity expenses for your society with large-scale rooftop solar. Ideal for RWAs, apartment complexes, and gated communities aiming for long-term savings, sustainability, and lower maintenance costs."
        steps={[
          {
            title: "Comprehensive Society Load Analysis",
            desc:
              "We evaluate common area consumption including lifts, water pumps, lighting, and amenities to determine the optimal solar capacity for maximum financial benefit.",
          },
          {
            title: "Technical Feasibility & Approvals",
            desc:
              "End-to-end support for DISCOM permissions, subsidy advisory, structural safety checks, and complete regulatory compliance.",
          },
          {
            title: "Efficient Large-Scale Deployment",
            desc:
              "Professional installation across multiple rooftops with planned execution to ensure minimal disturbance to residents and society operations.",
          },
          {
            title: "Long-Term Maintenance & AMC",
            desc:
              "Quarterly deep cleaning, continuous performance monitoring, and dedicated service support ensure your society enjoys worry-free solar savings for years.",
          },
        ]}
        images={[society1, society2, society3]}
      />
    </div>
  );
}
