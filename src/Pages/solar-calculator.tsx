import { useState } from "react";
import { motion } from "framer-motion";

type SolarResult = {
  system_size: string;
  panels: string;
  cost: string;
  subsidy: string;
  payback: string;
};

export default function SolarCalculator() {

  const [bill, setBill] = useState<number>(3000);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SolarResult | null>(null);

  const calculateSolar = async () => {

    setLoading(true);

    try {

      const res = await fetch(
        "https://anshsolarelectricals.com/Backend/solar_calculator.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bill })
        }
      );

      const data = await res.json();

      setResult(data);

    } catch (err) {

      alert("Calculation failed");

    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28 px-6"
      >

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solar Savings Calculator
          </h1>

          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Estimate solar system size, installation cost and long-term savings
            based on your electricity bill.
          </p>

          <a
            href="#calculator"
            className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold"
          >
            Calculate Now
          </a>

        </div>

      </motion.section>


      {/* CALCULATOR */}

      <section
        id="calculator"
        className="py-24 px-6"
      >

        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-10">

          <h2 className="text-3xl text-black font-bold text-center mb-8">
            Estimate Your Solar System
          </h2>

          <div className="space-y-8">

            <div>

              <label className="text-sm text-gray-600 font-semibold">
                Monthly Electricity Bill
              </label>

              <input
                type="range"
                min="500"
                max="20000"
                step="500"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full mt-4 accent-blue-600"
              />

              <p className="text-xl font-bold text-blue-600 mt-3">
                ₹ {bill.toLocaleString()} / month
              </p>

            </div>


            <button
              onClick={calculateSolar}
              disabled={loading}
              className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-lg"
            >
              {loading ? "Calculating..." : "Calculate Solar System"}
            </button>

          </div>


          {/* RESULT SECTION */}

          {result && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 grid md:grid-cols-2 gap-6 text-black"
            >

              <div className="bg-gray-100 p-6 rounded-xl">
                <p className="text-sm text-gray-600">System Size</p>
                <p className="text-2xl font-bold">{result.system_size} kW</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl">
                <p className="text-sm text-gray-600">Solar Panels Needed</p>
                <p className="text-2xl font-bold">{result.panels}</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl">
                <p className="text-sm text-gray-600">Installation Cost</p>
                <p className="text-2xl font-bold">₹ {result.cost}</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl">
                <p className="text-sm text-gray-600">Government Subsidy</p>
                <p className="text-2xl font-bold">₹ {result.subsidy}</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl md:col-span-2">
                <p className="text-sm text-gray-600">Estimated Payback Period</p>
                <p className="text-2xl font-bold">{result.payback} Years</p>
              </div>

            </motion.div>

          )}

        </div>

      </section>

    </div>
  );
}