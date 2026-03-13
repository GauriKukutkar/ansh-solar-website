import { useState } from "react";
import { motion } from "framer-motion";

type SolarResult = {
  system_size: number;
  panels: number;
  cost: string;
  subsidy: string;
  payback: number;
};

export default function SolarCalculator() {

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [city,setCity] = useState("");

  const [month,setMonth] = useState("January");
  const [bill,setBill] = useState<number>(3000);
  const [units,setUnits] = useState<number>(200);

  const [solarType,setSolarType] = useState("On-grid");
  const [consent,setConsent] = useState(false);

  const [loading,setLoading] = useState(false);
  const [result,setResult] = useState<SolarResult | null>(null);

  const yearlyBill = bill * 12;

  const calculateSolar = async () => {

    if(!name || !phone || !city){
      alert("Please fill your details first");
      return;
    }

    if(!consent){
      alert("Please accept consent");
      return;
    }

    setLoading(true);

    try{

      const res = await fetch(
        "https://anshsolarelectricals.com/Backend/solar_calculator.php",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name,
            phone,
            city,
            month,
            bill,
            units,
            solarType
          })
        }
      );

      const data = await res.json();
      setResult(data);

    }catch(err){
      alert("Server connection failed");
    }

    setLoading(false);
  };

  return(

    <div className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section
        className="h-[420px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:"url('/assets/solar-hero.jpg')"
        }}
      >

        <div className="bg-black/50 w-full h-full flex items-center">

          <div className="max-w-4xl mx-auto px-6">

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Electricity Bill Calculator
            </h1>

            <p className="text-lg opacity-90">
              Estimate solar system size, installation cost and yearly savings
              based on your electricity bill.
            </p>

          </div>

        </div>

      </section>


      {/* CALCULATOR */}

      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Solar Savings Calculator
          </h2>


          {/* BASIC DETAILS */}

          <div className="mb-12">

            <h3 className="text-xl font-semibold mb-6 text-gray-700">
              1. Basic Details
            </h3>

            <div className="grid md:grid-cols-3 gap-5">

              <input
                placeholder="Full Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="border rounded-xl p-3"
              />

              <input
                placeholder="Mobile Number"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                className="border rounded-xl p-3"
              />

              <input
                placeholder="City / Location"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                className="border rounded-xl p-3"
              />

            </div>

          </div>


          {/* BILL DETAILS */}

          <div className="mb-12">

            <h3 className="text-xl font-semibold mb-6 text-gray-700">
              2. Electricity Bill Details
            </h3>

            <div className="grid md:grid-cols-3 gap-5">

              <select
                value={month}
                onChange={(e)=>setMonth(e.target.value)}
                className="border rounded-xl p-3"
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>

              <input
                type="number"
                value={bill}
                onChange={(e)=>setBill(Number(e.target.value))}
                placeholder="Monthly Bill ₹"
                className="border rounded-xl p-3"
              />

              <input
                type="number"
                value={units}
                onChange={(e)=>setUnits(Number(e.target.value))}
                placeholder="Units Consumed (kWh)"
                className="border rounded-xl p-3"
              />

            </div>

          </div>


          {/* BILL CALCULATION */}

          <div className="mb-12">

            <h3 className="text-xl font-semibold mb-6 text-gray-700">
              3. Bill Calculation
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-gray-100 p-6 rounded-xl text-center">
                <p className="text-gray-500">Monthly Electricity Charges</p>
                <p className="text-2xl font-bold">₹ {bill}</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl text-center">
                <p className="text-gray-500">Estimated Yearly Charges</p>
                <p className="text-2xl font-bold">₹ {yearlyBill}</p>
              </div>

            </div>

          </div>


          {/* SOLAR TYPE */}

          <div className="mb-12">

            <h3 className="text-xl font-semibold mb-6 text-gray-700">
              4. Solar System Preference
            </h3>

            <select
              value={solarType}
              onChange={(e)=>setSolarType(e.target.value)}
              className="border rounded-xl p-3 w-full"
            >
              <option>On-grid</option>
              <option>Off-grid</option>
              <option>Hybrid</option>
            </select>

          </div>


          {/* FILE UPLOAD */}

          <div className="mb-12">

            <label className="block mb-3 font-semibold text-gray-700">
              Upload Electricity Bill (Optional)
            </label>

            <input type="file" className="border rounded-xl p-3 w-full"/>

          </div>


          {/* CONSENT */}

          <div className="flex items-center mb-10">

            <input
              type="checkbox"
              checked={consent}
              onChange={(e)=>setConsent(e.target.checked)}
              className="mr-3"
            />

            <span className="text-sm text-gray-600">
              I agree to be contacted regarding solar installation.
            </span>

          </div>


          {/* BUTTON */}

          <div className="text-center">

            <button
              onClick={calculateSolar}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Calculating..." : "Calculate Solar Savings"}
            </button>

          </div>


          {/* RESULT */}

          {result && (

            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              className="mt-16 grid md:grid-cols-2 gap-6"
            >

              <div className="bg-gray-100 p-6 rounded-xl text-center">
                <p>System Size</p>
                <h3 className="text-2xl font-bold">{result.system_size} kW</h3>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl text-center">
                <p>Solar Panels</p>
                <h3 className="text-2xl font-bold">{result.panels}</h3>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl text-center">
                <p>Installation Cost</p>
                <h3 className="text-2xl font-bold">₹ {result.cost}</h3>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl text-center">
                <p>Government Subsidy</p>
                <h3 className="text-2xl font-bold">₹ {result.subsidy}</h3>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl text-center md:col-span-2">
                <p>Payback Period</p>
                <h3 className="text-2xl font-bold">{result.payback} Years</h3>
              </div>

            </motion.div>

          )}

        </div>

      </section>

    </div>

  );

}