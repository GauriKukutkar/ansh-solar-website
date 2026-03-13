import { useState } from "react";
import { motion } from "framer-motion";

type RoofResult = {
  estimated_kw: number;
  panels: number;
  suitability_result: string;
};

export default function RoofSuitabilityChecker() {

const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [city,setCity] = useState("");
const [area,setArea] = useState("");

const [propertyType,setPropertyType] = useState("Residential");

const [roofType,setRoofType] = useState("");
const [roofArea,setRoofArea] = useState<number>(0);
const [roofDirection,setRoofDirection] = useState("");
const [shadowLevel,setShadowLevel] = useState("");

const [roofCondition,setRoofCondition] = useState("");
const [roofAccess,setRoofAccess] = useState("");

const [roofTilt,setRoofTilt] = useState("");
const [billRange,setBillRange] = useState("");

const [photo,setPhoto] = useState<File | null>(null);

const [result,setResult] = useState<RoofResult | null>(null);
const [loading,setLoading] = useState(false);


const checkRoof = async()=>{

if(!name || !phone || !city || !roofArea){
alert("Please fill required details");
return;
}

setLoading(true);

const formData = new FormData();

formData.append("name",name);
formData.append("phone",phone);
formData.append("city",city);
formData.append("area",area);
formData.append("propertyType",propertyType);

formData.append("roofType",roofType);
formData.append("roofArea",roofArea.toString());
formData.append("roofDirection",roofDirection);
formData.append("shadowLevel",shadowLevel);

formData.append("roofCondition",roofCondition);
formData.append("roofAccess",roofAccess);

formData.append("roofTilt",roofTilt);
formData.append("billRange",billRange);

if(photo){
formData.append("photo",photo);
}

try{

const res = await fetch(
"https://anshsolarelectricals.com/Backend/roof_checker.php",
{
method:"POST",
body:formData
}
);

const data = await res.json();

if(data.status === "success"){
setResult(data);
}else{
alert(data.message);
}

}catch{
alert("Server error");
}

setLoading(false);

};

return(

<div className="min-h-screen text-black mt-14 bg-gradient-to-r from-indigo-600 via-blue-500 to-blue-600 flex items-center justify-center px-6 py-20">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl p-10"
>

<h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
Free Solar Roof Assessment
</h1>

{/* BASIC DETAILS */}

<h3 className="text-lg font-semibold mb-4">Basic Details</h3>

<div className="grid md:grid-cols-2 gap-6 mb-8">

<div>
<label className="block font-medium mb-1">Full Name</label>
<input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="Enter your name"
className="border p-3 rounded-xl w-full"
/>
</div>

<div>
<label className="block font-medium mb-1">Mobile Number</label>
<input
value={phone}
onChange={(e)=>setPhone(e.target.value)}
placeholder="Enter mobile number"
className="border p-3 rounded-xl w-full"
/>
</div>

<div>
<label className="block font-medium mb-1">City</label>
<input
value={city}
onChange={(e)=>setCity(e.target.value)}
placeholder="City"
className="border p-3 rounded-xl w-full"
/>
</div>

<div>
<label className="block font-medium mb-1">Area / Locality</label>
<input
value={area}
onChange={(e)=>setArea(e.target.value)}
placeholder="Area"
className="border p-3 rounded-xl w-full"
/>
</div>

</div>


{/* PROPERTY TYPE */}

<div className="mb-8">
<label className="font-semibold mb-2 block">
Property Type
</label>

<select
value={propertyType}
onChange={(e)=>setPropertyType(e.target.value)}
className="border p-3 rounded-xl w-full"
>
<option>Residential</option>
<option>Commercial</option>
<option>Society</option>
<option>Agriculture</option>
</select>
</div>


{/* ROOF DETAILS */}

<h3 className="text-lg font-semibold mb-4">
Roof Details
</h3>

<div className="grid md:grid-cols-2 gap-6 mb-8">

<div>
<label className="block font-medium mb-1">Roof Type</label>
<select
value={roofType}
onChange={(e)=>setRoofType(e.target.value)}
className="border p-3 rounded-xl w-full"
>
<option value="">Select Roof Type</option>
<option>RCC / Concrete</option>
<option>Metal Sheet</option>
<option>Tile Roof</option>
<option>Asbestos</option>
<option>Other</option>
</select>
</div>

<div>
<label className="block font-medium mb-1">Roof Area (sq.ft)</label>
<input
type="number"
value={roofArea}
onChange={(e)=>setRoofArea(Number(e.target.value))}
placeholder="Enter available roof area"
className="border p-3 rounded-xl w-full"
/>
</div>

<div>
<label className="block font-medium mb-1">Roof Direction</label>
<select
value={roofDirection}
onChange={(e)=>setRoofDirection(e.target.value)}
className="border p-3 rounded-xl w-full"
>
<option value="">Select Direction</option>
<option>South (Best for Solar)</option>
<option>South-East</option>
<option>South-West</option>
<option>East</option>
<option>West</option>
<option>North</option>
</select>

<p className="text-sm text-gray-500 mt-1">
South-facing roofs generate maximum solar energy.
</p>
</div>

<div>
<label className="block font-medium mb-1">Shadow Level</label>
<select
value={shadowLevel}
onChange={(e)=>setShadowLevel(e.target.value)}
className="border p-3 rounded-xl w-full"
>
<option value="">Select Shadow Level</option>
<option>No Shadow</option>
<option>Partial Shadow</option>
<option>Heavy Shadow</option>
</select>
</div>

<div>
<label className="block font-medium mb-1">Roof Tilt</label>
<select
value={roofTilt}
onChange={(e)=>setRoofTilt(e.target.value)}
className="border p-3 rounded-xl w-full"
>
<option value="">Select Roof Tilt</option>
<option>Flat Roof</option>
<option>Slight Tilt</option>
<option>Already Slanted</option>
<option>Not Sure</option>
</select>
</div>

<div>
<label className="block font-medium mb-1">Roof Condition</label>
<select
value={roofCondition}
onChange={(e)=>setRoofCondition(e.target.value)}
className="border p-3 rounded-xl w-full"
>
<option value="">Select Condition</option>
<option>New / Strong</option>
<option>5-10 Years Old</option>
<option>Needs Repair</option>
</select>
</div>

<div>
<label className="block font-medium mb-1">Roof Access</label>
<select
value={roofAccess}
onChange={(e)=>setRoofAccess(e.target.value)}
className="border p-3 rounded-xl w-full"
>
<option value="">Select Access</option>
<option>Easy Access</option>
<option>Ladder Required</option>
<option>Difficult Access</option>
</select>
</div>

<div>
<label className="block font-medium mb-1">Monthly Electricity Bill</label>
<select
value={billRange}
onChange={(e)=>setBillRange(e.target.value)}
className="border p-3 rounded-xl w-full"
>
<option value="">Select Bill Range</option>
<option>₹1000 - ₹3000</option>
<option>₹3000 - ₹5000</option>
<option>₹5000 - ₹10000</option>
<option>₹10000+</option>
</select>
</div>

</div>


{/* PHOTO */}

<div className="mb-8">

<label className="block font-semibold mb-2">
Upload Roof Photo (optional)
</label>

<input
type="file"
onChange={(e)=>setPhoto(e.target.files?.[0] || null)}
/>

</div>


{/* BUTTON */}

<div className="text-center">

<button
onClick={checkRoof}
disabled={loading}
className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold shadow hover:scale-105 transition"
>

{loading ? "Checking..." : "Check Roof Suitability"}

</button>

</div>


{/* RESULT */}

{result && (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="mt-10 grid md:grid-cols-3 gap-6"
>

<div className="bg-blue-50 p-6 rounded-xl text-center">
<p>Estimated System Size</p>
<h3 className="text-xl font-bold">
{result.estimated_kw} kW
</h3>
</div>

<div className="bg-yellow-50 p-6 rounded-xl text-center">
<p>Estimated Panels</p>
<h3 className="text-xl font-bold">
{result.panels}
</h3>
</div>

<div className="bg-green-50 p-6 rounded-xl text-center">
<p>Suitability Result</p>
<h3 className="text-xl font-bold text-green-700">
{result.suitability_result}
</h3>
</div>

</motion.div>

)}

</motion.div>

</div>

);

}