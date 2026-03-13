import { useState } from "react";
import { motion } from "framer-motion";

type SolarResult = {
  system_size: number;
  panels: number;
  cost: string;
  subsidy: string;
  payback: number;
  yearly_savings: number;
  monthly_savings: number;
  solar_profit_25yrs: string;
};

export default function SolarCalculator(){

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [city,setCity] = useState("");
  const [area,setArea] = useState("");
  const [propertyType,setPropertyType] = useState("Residential");

  const [month,setMonth] = useState("");

const [bill, setBill] = useState<number | string>(3000);
  const [units,setUnits] = useState<number>(200);

  const [businessName,setBusinessName] = useState("");
  const [connectedLoad,setConnectedLoad] = useState("");

  const [societyName,setSocietyName] = useState("");
  const [flats,setFlats] = useState("");

  const [pumpHP,setPumpHP] = useState("");
  const [runningHours,setRunningHours] = useState("");
  const [farmArea,setFarmArea] = useState("");

  const [solarType,setSolarType] = useState("On-grid");
  const [consent,setConsent] = useState(false);

  const [loading,setLoading] = useState(false);
  const [result,setResult] = useState<SolarResult | null>(null);

const yearlyBill = Number(bill || 0) * 12;

  const calculateSolar = async () => {

    if(!name || !phone || !city){
      alert("Please fill all required details");
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
          headers:{ "Content-Type":"application/json" },
          body:JSON.stringify({
            name,
            phone,
            city,
            area,
            propertyType,
            month,
            bill,
            units,
            solarType,
            businessName,
            connectedLoad,
            societyName,
            flats,
            pumpHP,
            runningHours,
            farmArea
          })
        }
      );

      const data = await res.json();
     if(data.status === "success"){
  setResult(data);
}else{
  alert(data.message);
}

    }catch(err){
      alert("Server error");
    }

    setLoading(false);
  };

  return(

    <div className="min-h-screen mt-14 text-black bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center px-6 py-20">

      <motion.div
      initial={{opacity:0,y:40}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.6}}
      className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl p-10"
      >

        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Solar Electricity Savings Calculator
        </h1>

{/* BASIC DETAILS */}

<div className="mb-10">

<h3 className="text-lg font-semibold text-gray-700 mb-4">
Basic Details
</h3>

<div className="grid md:grid-cols-2 gap-4">

<input
placeholder="Enter Your Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="border border-gray-300 rounded-xl p-3 w-full"
/>

<input
placeholder="Enter Mobile Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="border border-gray-300 rounded-xl p-3 w-full"
/>

<input
placeholder="Enter Your City"
value={city}
onChange={(e)=>setCity(e.target.value)}
className="border border-gray-300 rounded-xl p-3 w-full"
/>

<select
value={area}
onChange={(e)=>setArea(e.target.value)}
className="border border-gray-300 rounded-xl p-3 w-full"
>
<option value="">Select Your Area</option>
<option>Nagpur Urban</option>
<option>Nagpur Rural</option>
<option>Wardha</option>
<option>Amravati</option>
<option>Other</option>
</select>

</div>

<div className="mt-4">

<label className="block text-sm font-semibold text-gray-700 mb-2">
Installation Type
</label>

<select
value={propertyType}
onChange={(e)=>setPropertyType(e.target.value)}
className="border border-gray-300 rounded-xl p-3 w-full"
>
<option value="Residential">Residential / Household</option>
<option value="Society">Housing Society</option>
<option value="Commercial">Commercial / Industrial</option>
<option value="Agriculture">Agriculture Pump</option>
</select>

</div>

</div>

{/* MONTH */}
 <label className="block text-sm font-semibold text-gray-700 mb-2">
Select You Month:
</label>
<select
value={month}
onChange={(e)=>setMonth(e.target.value)}
className="border rounded-xl p-3 w-full mb-6"
>
<option value="">Select Month</option>
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

{/* RESIDENTIAL */}

{propertyType === "Residential" && (

<div className="mb-6">
<label className="block text-sm font-semibold text-gray-700 mb-2">
Enter Monthly Electricity Bill ₹
</label>

<input
type="number"
value={bill}
onChange={(e)=>{
const val = e.target.value;
setBill(val === "" ? "" : Number(val));
}}
placeholder="Enter Monthly Electricity Bill ₹"
className="border rounded-xl p-3 w-full"
/>

</div>
)}

{/* COMMERCIAL */}

{propertyType === "Commercial" && (

<div className="grid md:grid-cols-2 gap-4 mb-6">

<input
value={businessName}
onChange={(e)=>setBusinessName(e.target.value)}
placeholder="Enter Business / Factory Name"
className="border rounded-xl p-3"
/>

<input
type="number"
value={bill}
onChange={(e)=>setBill(Number(e.target.value))}
placeholder="Monthly Electricity Bill ₹"
className="border rounded-xl p-3"
/>

<input
type="number"
value={units}
onChange={(e)=>setUnits(Number(e.target.value))}
placeholder="Monthly Units Consumed"
className="border rounded-xl p-3"
/>

<input
type="number"
value={connectedLoad}
onChange={(e)=>setConnectedLoad(e.target.value)}
placeholder="Connected Load (kW)"
className="border rounded-xl p-3"
/>

</div>

)}

{/* SOCIETY */}

{propertyType === "Society" && (

<div className="grid md:grid-cols-2 gap-4 mb-6">

<input
value={societyName}
onChange={(e)=>setSocietyName(e.target.value)}
placeholder="Enter Society Name"
className="border rounded-xl p-3"
/>

<input
type="number"
value={flats}
onChange={(e)=>setFlats(e.target.value)}
placeholder="Number of Flats"
className="border rounded-xl p-3"
/>

<input
type="number"
value={bill}
onChange={(e)=>setBill(Number(e.target.value))}
placeholder="Common Electricity Bill ₹"
className="border rounded-xl p-3"
/>

<input
type="number"
value={units}
onChange={(e)=>setUnits(Number(e.target.value))}
placeholder="Monthly Units Consumed"
className="border rounded-xl p-3"
/>

</div>

)}

{/* AGRICULTURE */}

{propertyType === "Agriculture" && (

<div className="grid md:grid-cols-2 gap-4 mb-6">

<input
type="number"
value={pumpHP}
onChange={(e)=>setPumpHP(e.target.value)}
placeholder="Pump Capacity (HP)"
className="border rounded-xl p-3"
/>

<input
type="number"
value={runningHours}
onChange={(e)=>setRunningHours(e.target.value)}
placeholder="Daily Running Hours"
className="border rounded-xl p-3"
/>

<input
type="number"
value={bill}
onChange={(e)=>setBill(Number(e.target.value))}
placeholder="Monthly Electricity Bill ₹"
className="border rounded-xl p-3"
/>

<input
value={farmArea}
onChange={(e)=>setFarmArea(e.target.value)}
placeholder="Farm / Land Area"
className="border rounded-xl p-3"
/>

</div>

)}

{/* SOLAR TYPE */}

<div className="mb-6">
<label className="block text-sm font-semibold text-gray-700 mb-2">
Select Your Solar-Type
</label>
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

{/* BILL PREVIEW */}

<div className="grid md:grid-cols-2 gap-6 mb-8">

<div className="bg-blue-50 p-6 rounded-xl text-center">
<p className="text-gray-500">Monthly Electricity Bill</p>
<h3 className="text-2xl font-bold text-blue-600">
₹ {bill}
</h3>
</div>

<div className="bg-green-50 p-6 rounded-xl text-center">
<p className="text-gray-500">Yearly Electricity Cost</p>
<h3 className="text-2xl font-bold text-green-600">
₹ {yearlyBill}
</h3>
</div>

</div>

{/* CONSENT */}

<div className="flex items-center mb-6">

<input
type="checkbox"
checked={consent}
onChange={(e)=>setConsent(e.target.checked)}
className="mr-3"
/>

<span className="text-sm text-gray-600">
I agree to be contacted for solar installation consultation.
</span>

</div>

{/* BUTTON */}

<div className="text-center">

<button
onClick={calculateSolar}
disabled={loading}
className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold shadow hover:scale-105 transition"
>
{loading ? "Calculating..." : "Calculate Solar Savings"}
</button>

</div>

{/* REPORT */}

{result && (

<div className="bg-gray-50 p-6 rounded-xl mt-10 mb-6">

<h2 className="text-xl font-bold mb-4">
Solar Feasibility Report
</h2>

<p><strong>Name:</strong> {name}</p>
<p><strong>City:</strong> {city}</p>
<p><strong>Property Type:</strong> {propertyType}</p>
<p><strong>Selected Month:</strong> {month}</p>
<p><strong>Monthly Bill:</strong> ₹ {Number(bill || 0).toLocaleString()}</p>
<p><strong>Estimated Yearly Cost:</strong> ₹ {yearlyBill.toLocaleString()}</p>

</div>

)}

{/* RESULT */}

{result && (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="mt-6 grid md:grid-cols-3 gap-6"
>

<div className="bg-blue-50 p-6 rounded-xl text-center">
<p>Recommended System</p>
<h3 className="text-xl font-bold">{result.system_size} kW</h3>
</div>

<div className="bg-yellow-50 p-6 rounded-xl text-center">
<p>Solar Panels</p>
<h3 className="text-xl font-bold">{result.panels}</h3>
</div>

<div className="bg-green-50 p-6 rounded-xl text-center">
<p>Installation Cost</p>
<h3 className="text-xl font-bold">₹ {result.cost}</h3>
</div>

<div className="bg-purple-50 p-6 rounded-xl text-center">
<p>Government Subsidy</p>
<h3 className="text-xl font-bold">₹ {result.subsidy}</h3>
</div>

<div className="bg-indigo-50 p-6 rounded-xl text-center">
<p>Payback Period</p>
<h3 className="text-xl font-bold">{result.payback} Years</h3>
</div>

<div className="bg-emerald-50 p-6 rounded-xl text-center">
<p>Monthly Electricity Savings</p>
<h3 className="text-xl font-bold text-green-700">
₹ {result.monthly_savings?.toLocaleString()}
</h3>

</div>

<div className="bg-green-100 p-6 rounded-xl text-center">
<p>Yearly Electricity Savings</p>
<h3 className="text-xl font-bold text-green-700">
Yearly Savings: ₹ {result.yearly_savings?.toLocaleString()}
</h3>
</div>

<div className="bg-green-100 p-6 rounded-xl text-center">
<p>25 Year Solar Profit</p>
<h3 className="text-xl font-bold text-green-700">
₹ {result.solar_profit_25yrs}
</h3>
</div>

</motion.div>

)}

</motion.div>

</div>

  );
}