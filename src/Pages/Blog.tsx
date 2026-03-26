import { motion } from "framer-motion";
import blog1 from "../assets/blog6.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
// import { useEffect } from "react";
import societyImg from "../assets/society.jpg";
import homeImg from "../assets/home.jpg";
import villaImg from "../assets/villas.jpg";
import agricultureImg from "../assets/agriculture.jpg";
import industryImg from "../assets/industry.jpg";
import featured from "../assets/blog-featured.png";
import { Sun, Zap, BarChart3, Battery } from "lucide-react";
// import { ArrowRight } from "lucide-react";
import { useState } from "react";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import customer5 from "../assets/customer5.jpg";
import customer6 from "../assets/customer6.jpg";
import customer7 from "../assets/customer7.jpg";

export default function Blog() {
    const offerings = [
  {
    title: "Societies",
    desc: "Shared rooftop systems for residential communities.",
    img: societyImg,
    height: "h-[340px]",
  },
  {
    title: "Homes",
    desc: "Efficient solar solutions for independent houses.",
    img: homeImg,
    height: "h-[340px]",
  },
  {
    title: "Villas",
    desc: "Premium solar setups tailored for luxury living.",
    img: villaImg, // ✅ fixed here
    height: "h-[340px]",
  },
  {
    title: "Agriculture",
    desc: "Solar pumps & irrigation systems for farms.",
    img: agricultureImg,
    height: "h-[340px]",
  },
  {
    title: "Industries",
    desc: "High-capacity solar for commercial & industrial needs.",
    img: industryImg,
    height: "h-[340px]",
  },
];

const customers = [
{
img: customer1,
title: "5kW Solar Installed",
desc: "Nagpur home saving ₹5000/month on electricity."
},
{
img: customer2,
title: "3kW Residential System",
desc: "Reduced electricity bill by 80%."
},
{
img: customer3,
title: "Residential System ",
desc: "homes saving thousands every year."
},
{
img: customer4,
title: "Independent House Solar",
desc: "Efficient solar solutions for independent houses."
},
{
  img: customer5,
  title: "Rooftop Solar Installation",
  desc: "Lowered monthly electricity bills with an efficient home solar setup."
},
{
  img: customer6,
  title: "Home Solar Upgrade",
  desc: "Upgraded to solar energy for consistent savings and reliable power."
},
{
  img: customer7,
  title: "Smart Solar Living",
  desc: "Adopted clean energy for a sustainable and cost-effective lifestyle."
}
];

// const [index,setIndex] = useState(0);

// useEffect(()=>{
// const interval = setInterval(()=>{
// setIndex((prev)=> (prev + 1) % customers.length);
// },3000);

// return ()=> clearInterval(interval);
// },[]);

// const sliderRef = useRef(null);

// const scrollLeft = () => {
// sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
// };

// const scrollRight = () => {
// sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
// };


const [newsletterEmail,setNewsletterEmail] = useState("");
const [newsletterSuccess,setNewsletterSuccess] = useState(false);

const subscribeNewsletter = async () => {

if(!newsletterEmail){
alert("Please enter your email");
return;
}

try{

const res = await fetch(
"https://anshsolarelectricals.com/Backend/newsletter_subscribe.php",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email:newsletterEmail
})
}
);

const data = await res.json();

if(data.status === "success"){
setNewsletterSuccess(true);
setNewsletterEmail("");
}

}catch(err){
alert("Server error");
}

};
  return (
    <>

// Enhanced Sections with Better UI/UX, Animations, and Visual Hierarchy

{/* ================= HAPPY SOLAR CUSTOMERS ================= */}
<section className="py-28 bg-gradient-to-br from-white via-yellow-50 to-yellow-100 relative overflow-hidden">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}
<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="text-center mb-20"
>
<h2 className="text-5xl font-bold text-gray-900 mb-4">
Trusted by <span className="text-yellow-500">Happy Solar Customers</span>
</h2>

<p className="text-gray-600 max-w-2xl mx-auto text-lg">
Real homes. Real savings. Real impact. See how rooftop solar is transforming lives.
</p>
</motion.div>

{/* Slider */}
<div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">

{customers.map((item,i)=>(

<motion.div
key={i}
whileHover={{scale:1.06}}
transition={{type:"spring", stiffness:200}}
className="min-w-[320px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-yellow-100 hover:shadow-yellow-200"
>

<div className="relative group">
<img
src={item.img}
alt="Solar Customer"
className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-700"
/>

<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

<div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow">
{item.title}
</div>
</div>

<div className="p-6">
<p className="font-bold text-gray-900 text-xl">
{item.title}
</p>

<p className="text-sm text-gray-500 mt-2 leading-relaxed">
{item.desc}
</p>

{/* Added Metric */}
<div className="mt-4 text-yellow-500 font-semibold text-sm">
⚡ Saved up to 70% electricity
</div>
</div>

</motion.div>

))}

</div>

</div>
</section>


{/* ================= INSIGHTS SECTION ================= */}
<section className="bg-gradient-to-b from-white to-gray-50 pt-32 pb-28 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">

{/* Header */}
<motion.div
initial={{ opacity: 0, y: 60 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-center max-w-4xl mx-auto"
>
<h1 className="text-5xl sm:text-6xl font-bold text-[#021423] leading-tight">
Solar <span className="text-sky-500">Insights & Trends</span>
</h1>

<p className="mt-6 text-gray-600 text-lg leading-relaxed">
Stay ahead with expert guides, cost breakdowns, and future-ready solar innovations.
</p>
</motion.div>

{/* GRID */}
<div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[220px]">

{/* Card Component */}
{[
  {img: blog1, span: "lg:col-span-4 row-span-2", title:"Solar Savings Guide"},
  {img: blog2, span: "lg:col-span-2 row-span-2", title:"Installation Tips"},
  {img: blog3, span: "lg:col-span-2 row-span-2", title:"Cost Breakdown"},
  {img: blog4, span: "lg:col-span-2 row-span-2", title:"Future of Solar"},
  {img: blog5, span: "lg:col-span-2 row-span-2", title:"Why Go Solar?"}
].map((card, i)=>(

<motion.div
key={i}
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6, delay: i * 0.1 }}
viewport={{ once: true }}
className={`${card.span} rounded-3xl overflow-hidden relative group cursor-pointer`}
>

<img
src={card.img}
alt="Blog"
className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
/>

{/* Overlay */}
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-5">

<div>
<p className="text-white text-lg font-semibold">
{card.title}
</p>
{/* <p className="text-sm text-gray-200">Contact Now</p> */}
</div>

</div>

</motion.div>

))}

</div>

</div>
</section>


{/* <section className="bg-white pt-32 pb-24 px-6 overflow-hidden">

  <div className="max-w-7xl mx-auto">



    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto"
    >

      <h1 className="text-4xl sm:text-5xl font-bold text-[#021423] leading-tight">
        Insights on
        <span className="text-sky-500"> Rooftop Solar</span>
      </h1>

      <p className="mt-6 text-gray-600 text-lg leading-relaxed">
        Expert insights, solar trends, installation guides and energy
        innovations helping you make smarter sustainable decisions.
      </p>

    </motion.div>


 

    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">



      {[blog1, blog2, blog3, blog4, blog5].map((img, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
        >

  

          <div className="h-[200px] overflow-hidden">

            <img
              src={img}
              alt="Solar Blog"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />

          </div>

   

          <div className="p-5">

            <h3 className="text-lg font-semibold text-gray-800">
              Solar Installation Guide
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Learn how rooftop solar systems work and how they reduce
              electricity costs for homeowners.
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section> */}

{/* ================= HAPPY CUSTOMERS (SOLAR CAROUSEL) ================= */}

<section className="relative bg-gradient-to-b from-[#020617] to-[#021423] py-32 overflow-hidden">

{/* background glow */}

  <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[200px] rounded-full"></div>

  <div className="max-w-6xl mx-auto px-6 relative">

{/* HEADER */}
<motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="text-center mb-24"
>
  <p className="text-yellow-400 tracking-[6px] uppercase text-sm font-semibold">
  Customers Reviews Across Maharashtra
  </p>

  <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
    Voices Powered By Solar Energy
  </h2>

  <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
    Across Maharashtra, our customers are experiencing the benefits
    of reliable solar power and reduced electricity bills.
  </p>
</motion.div>

{/* TESTIMONIAL SLIDER */}
<div className="relative overflow-hidden">

  <motion.div
    className="flex gap-16"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear"
    }}
  >

    {[
      {
        name: "Rahul Patil",
        city: "Pune",
        text: "Electricity bills dropped drastically after installing solar panels."
      },
      {
        name: "Sneha Kulkarni",
        city: "Nagpur",
        text: "Professional installation and excellent solar output."
      },
      {
        name: "Amit Deshmukh",
        city: "Nashik",
        text: "A great investment for clean energy and long-term savings."
      },
      {
        name: "Priya Sharma",
        city: "Aurangabad",
        text: "Reliable system performance throughout the year."
      },
      {
        name: "Vikram Joshi",
        city: "Mumbai",
        text: "Our home now runs efficiently on solar energy."
      },
      {
        name: "Sanjay Patwardhan",
        city: "Kolhapur",
        text: "Smooth installation and strong technical support."
      }
    ].map((item, i) => (

      <div
        key={i}
        className="min-w-[320px] max-w-[320px] text-center"
      >

        {/* big quote */}
        <div className="text-yellow-400 text-5xl mb-4">“</div>

        <p className="text-gray-300 text-lg leading-relaxed">
          {item.text}
        </p>

        <div className="mt-6 text-white font-semibold">
          {item.name}
        </div>

        <div className="text-sm text-gray-400">
          {item.city}
        </div>

      </div>

    ))}

  </motion.div>

</div>


  </div>
</section>


    <section className="bg-[#f8fbff] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#021423]">
            Featured & Latest Articles
          </h2>
          <p className="text-gray-600 mt-3">
            Discover expert insights, rooftop solar savings tips and energy innovations.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* ================= FEATURED LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-3xl overflow-hidden bg-white shadow-lg"
          >
            <div className="relative">
              <img
                src={featured}
                alt="Featured Blog"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <div className="p-8">
              <p className="text-sky-500 font-semibold text-sm uppercase tracking-wider">
                Featured
              </p>

              <h3 className="text-2xl font-bold text-[#021423] mt-3">
                How Rooftop Solar Reduces Electricity Bills by 70%
              </h3>

             <p className="text-gray-600 mt-4 leading-relaxed">
  Learn how solar panels generate long-term savings, reduce dependency on grid power,
  increase property value, and help you transition toward clean renewable energy for
  a more sustainable future.
</p>

<button onClick={() => window.location.href = '/residential'}
 className="mt-6 text-sky-600 font-semibold hover:underline">
  Explore the Complete Guide to Solar Savings →
</button>
            </div>
          </motion.div>

          {/* ================= LATEST LIST RIGHT ================= */}
<div className="space-y-6">

{[
  {
    img: blog1,
    category: "Solar Guide",
    title: "Top 5 Benefits of Installing Solar Panels in Maharashtra",
    read: "5 min read"
  },
  {
    img: blog3,
    category: "Energy Savings",
    title: "How Rooftop Solar Reduces Your Electricity Bill by 90%",
    read: "4 min read"
  },
  {
    img: blog5,
    category: "Solar Technology",
    title: "On-Grid vs Off-Grid Solar Systems: Which One is Better?",
    read: "6 min read"
  },
  {
    img: blog2,
    category: "Solar Installation",
    title: "Step-by-Step Process of Installing Rooftop Solar Panels",
    read: "5 min read"
  }
].map((blog, index) => (

<motion.div
key={index}
initial={{ opacity: 0, x: 60 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, delay: index * 0.1 }}
viewport={{ once: true }}
onClick={() => window.location.href = '/contact'}
className="flex gap-5 bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition"
>

<img
src={blog.img}
alt="Solar Blog"
className="w-28 h-28 object-cover rounded-xl"
/>

<div>
<p className="text-xs text-sky-500 font-semibold uppercase">
{blog.category}
</p>

<h4 className="font-bold text-[#021423] mt-1 text-sm leading-snug">
{blog.title}
</h4>

<p className="text-gray-500 text-xs mt-2">
{blog.read}
</p>
</div>

</motion.div>

))}

</div>

        </div>
      </div>
    </section>


<section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#021423]">
            Solar Solutions We Offer
          </h2>
          <p className="text-gray-600 mt-4">
            Smart energy solutions designed for every type of property.
          </p>
        </motion.div>

        {/* FIRST ROW - 3 CARDS */}
        <div className="grid lg:grid-cols-3 gap-8">
          {offerings.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-3xl shadow-xl ${item.height}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mt-2">
                  {item.desc}
                </p>
                {/* <a
                  onClick={() => window.location.href = '/residential'}
                  className="inline-flex items-center gap-2 text-sky-400 mt-4 font-medium hover:gap-3 transition-all"
                >
                  See More <ArrowRight size={16} />
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECOND ROW - CENTERED 2 CARDS */}
        <div className="flex justify-center mt-12">
          <div className="grid sm:grid-cols-2 gap-8 w-full lg:w-2/3">
            {offerings.slice(3).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative group overflow-hidden rounded-3xl shadow-xl ${item.height}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-2">
                    {item.desc}
                  </p>
                  {/* <a
                    onClick={() => window.location.href = '/ind'}
                    className="inline-flex items-center gap-2 text-sky-400 mt-4 font-medium hover:gap-3 transition-all"
                  >
                    See More <ArrowRight size={16} />
                  </a> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>

     <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#021423]">
            Explore by Category
          </h2>
          <p className="text-gray-600 mt-4">
            Dive deeper into rooftop solar knowledge and smart energy insights.
          </p>
        </motion.div>

        {/* CATEGORY GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              icon: <Sun size={28} />,
              title: "Rooftop Solar",
              desc: "Installation, benefits and residential systems."
            },
            {
              icon: <Zap size={28} />,
              title: "Energy Savings",
              desc: "Reduce bills and maximize efficiency."
            },
            {
              icon: <BarChart3 size={28} />,
              title: "Solar Trends",
              desc: "Latest innovations and policy updates."
            },
            {
              icon: <Battery size={28} />,
              title: "Battery Storage",
              desc: "Backup systems and hybrid solutions."
            }
          ].map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-[#f8fbff] hover:bg-sky-50 transition shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                {cat.icon}
              </div>

              <h3 className="mt-6 font-bold text-[#021423]">
                {cat.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </motion.div>
          ))}

        </div>

        /* NEWSLETTER CTA */
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="mt-24 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-3xl p-12 text-white text-center"
>

<h3 className="text-2xl sm:text-3xl font-bold">
Stay Updated With Solar Insights
</h3>

<p className="mt-4 text-white/90">
Get the latest rooftop solar news, savings tips and energy innovations delivered to your inbox.
</p>

<div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">

<input
type="email"
placeholder="Enter your email"
value={newsletterEmail}
onChange={(e)=>setNewsletterEmail(e.target.value)}
className="px-6 py-3 rounded-full text-gray-800 w-full"
/>

<button
onClick={subscribeNewsletter}
className="px-8 py-3 rounded-full bg-white text-sky-600 font-semibold hover:scale-105 transition"
>
Subscribe
</button>

</div>

</motion.div>

      </div>
    </section>

    {newsletterSuccess && (

<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

<div className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-sm">

<h3 className="text-xl font-bold text-[#021423]">
Subscription Successful
</h3>

<p className="text-gray-600 mt-2">
You will now receive solar updates and energy tips.
</p>

<button
onClick={()=>setNewsletterSuccess(false)}
className="mt-5 bg-sky-600 text-white px-6 py-2 rounded-lg"
>
Close
</button>

</div>

</div>

)}

    </>
  );
}