
import refundHero from "../assets/solar-about-hero.avif";

export default function RefundPolicy() {

  const sections = [
    {
      title: "1. General Principles",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Solar projects require advance material procurement, engineering
            planning, and workforce allocation.
          </li>
          <li>
            Refund eligibility depends on the project stage at the time of
            cancellation.
          </li>
          <li>
            Refund requests must be submitted via official WhatsApp or email.
          </li>
          <li>
            Approved refunds are processed within 3–5 working days.
          </li>
        </ul>
      ),
    },

    {
      title: "2. Free Consultation Bookings",
      content: (
        <p>
          Free consultation bookings may be cancelled anytime before the visit
          without charges. If paid site visits are introduced in the future,
          applicable charges will be communicated in advance.
        </p>
      ),
    },

    {
      title: "3. Solar Installation Projects (Residential)",
      content: (
        <div className="space-y-4">
          <p className="text-green-400 font-semibold">
            ✅ Full Refund (100%)
          </p>
          <ul className="list-disc pl-6">
            <li>Cancellation within 24 hours of advance payment</li>
            <li>Before site survey completion</li>
            <li>No material procurement started</li>
          </ul>

          <p className="text-yellow-400 font-semibold mt-4">
            ⚠️ Partial Refund
          </p>
          <ul className="list-disc pl-6">
            <li>Site survey or engineering work completed</li>
            <li>Documentation or subsidy process initiated</li>
            <li>Partial material procurement completed</li>
            <li>Actual incurred costs deducted before refund</li>
          </ul>

          <p className="text-red-400 font-semibold mt-4">
            ❌ No Refund
          </p>
          <ul className="list-disc pl-6">
            <li>Materials fully procured or dispatched</li>
            <li>Installation work started or completed</li>
            <li>Net-metering initiated</li>
            <li>Custom structures already manufactured</li>
            <li>Customer delays project after procurement</li>
          </ul>
        </div>
      ),
    },

    {
      title: "4. Commercial / Industrial Projects",
      content: (
        <div className="space-y-4">
          <p className="text-green-400 font-semibold">
            🟢 Full Refund
          </p>
          <ul className="list-disc pl-6">
            <li>Cancellation within 3–5 days of advance payment</li>
            <li>Before engineering or bulk procurement begins</li>
          </ul>

          <p className="text-yellow-400 font-semibold mt-4">
            🟡 Partial Refund
          </p>
          <ul className="list-disc pl-6">
            <li>Detailed design or material blocking completed</li>
            <li>Site mobilization initiated</li>
            <li>Financing/subsidy processing started</li>
          </ul>

          <p className="text-red-400 font-semibold mt-4">
            🔴 No Refund
          </p>
          <ul className="list-disc pl-6">
            <li>Bulk orders placed or dispatched</li>
            <li>Installation or structural work started</li>
            <li>Customized engineering completed</li>
            <li>Project held indefinitely after procurement</li>
          </ul>
        </div>
      ),
    },

    {
      title: "5. EMI / Loan Cases",
      content: (
        <p>
          Loan cancellations are governed by respective bank policies.
          Processing fees, legal charges, or documentation costs are
          non-refundable. The Company is not responsible for bank-side
          deductions or delays.
        </p>
      ),
    },

    {
      title: "6. Refund Method",
      content: (
        <p>
          Refunds will be processed through the original payment mode or bank
          transfer only. Cash refunds may not be provided. Customers must share
          correct bank details for processing.
        </p>
      ),
    },

    {
      title: "7. Timeline Commitment",
      content: (
        <p>
          Once approved, refunds are processed within 3–5 working days.
          Additional settlement time may depend on banking systems.
        </p>
      ),
    },

    {
      title: "8. Exceptional Cases",
      content: (
        <p>
          Refunds may be evaluated on a case-by-case basis in genuine hardship
          or exceptional circumstances at the Company’s discretion.
        </p>
      ),
    },

    {
      title: "9. Policy Updates",
      content: (
        <p>
          Ansh Solar Electricals reserves the right to update this policy at
          any time. Continued use of services implies acceptance of updated
          terms.
        </p>
      ),
    },

    {
      title: "10. Contact for Refund Requests",
      content: (
        <div className="space-y-2">
          <p>📞 WhatsApp / Mobile: 7057408223, 7249709662</p>
          <p>📧 Email: anshelectrical5858@gmail.com</p>
          <p>📍 Service Area: Maharashtra, India</p>
        </div>
      ),
    },
  ];

  return (
    <>

      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        <img
          src={refundHero}
          alt="Refund Policy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#010b14]/80" />

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Refund & Cancellation Policy
          </h1>
          <p className="text-gray-300 mt-4 text-sm">
            Last Updated: 27-02-2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[#f8fafc] py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-10">

          {sections.map((sec, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-5">
                {sec.title}
              </h2>

              <div className="text-gray-700 leading-relaxed">
                {sec.content}
              </div>
            </div>
          ))}

        </div>
      </section>

    </>
  );
}