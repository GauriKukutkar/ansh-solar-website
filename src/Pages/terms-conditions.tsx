
import termsHero from "../assets/solar-about-hero.avif";

export default function TermsConditions() {

  const sections = [
  {
    title: "1. About the Company",
    content: (
      <p>
        Ansh Solar Electricals provides end-to-end solar energy solutions
        including consultation, engineering design, installation,
        commissioning, inverter and battery setup, maintenance, and
        electrical support services. The Company serves residential,
        commercial, industrial, agricultural, and rural customers across
        Maharashtra. Services may expand geographically as operational
        capacity and regulatory approvals permit. Our objective is to
        promote reliable, safe, and sustainable energy adoption through
        professionally executed solar projects.
      </p>
    ),
  },

  {
    title: "2. Scope of Services",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Pre-installation consultation and feasibility assessment</li>
        <li>Technical survey, load analysis, and rooftop inspection</li>
        <li>Customized solar system engineering and design</li>
        <li>On-grid, off-grid, and hybrid solar installation</li>
        <li>Inverter, battery, and protection system configuration</li>
        <li>Net-metering documentation and subsidy assistance</li>
        <li>System testing, commissioning, and handover</li>
        <li>After-sales monitoring guidance and customer support</li>
      </ul>
    ),
  },

  {
    title: "3. Booking & Advance Payment",
    content: (
      <p>
        Project confirmation generally requires an advance payment
        (currently 40% unless otherwise agreed in writing). Procurement
        of materials, manpower allocation, and scheduling begin only
        after advance receipt. Remaining payments must follow milestone
        terms mentioned in the quotation or agreement. Delay in payment
        may result in project suspension or rescheduling.
      </p>
    ),
  },

  {
    title: "4. Pricing",
    content: (
      <p>
        Indicative installation pricing may start around ₹70,000 per kW;
        however final pricing depends on structure requirements, wiring
        distance, safety equipment, capacity selection, and site
        conditions. Prices remain valid only after written quotation
        approval. Government subsidy values are controlled solely by
        authorities and may change without Company responsibility.
      </p>
    ),
  },

  {
    title: "5. Installation Timeline",
    content: (
      <p>
        Standard installation targets approximately 10 working days after
        booking confirmation and site readiness. Timelines may vary due
        to weather conditions, logistics delays, DISCOM approvals,
        structural modifications, or customer-side readiness issues.
        Estimated timelines are indicative and not guaranteed delivery
        commitments.
      </p>
    ),
  },

  {
    title: "6. Customer Responsibilities",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide accurate identity and property documentation</li>
        <li>Ensure rooftop strength and safe working conditions</li>
        <li>Provide uninterrupted site access during installation</li>
        <li>Submit subsidy and net-meter documents on time</li>
        <li>Obtain housing society or authority approvals if required</li>
        <li>Complete payments according to agreed milestones</li>
        <li>Maintain safety of installed equipment after handover</li>
      </ul>
    ),
  },

  {
    title: "7. Subsidy Assistance",
    content: (
      <p>
        The Company may assist customers in applying for Central or State
        solar subsidies. Approval, processing timelines, and payment
        release are governed entirely by government authorities and
        DISCOM policies. Subsidy rejection due to policy updates,
        eligibility issues, or incomplete documentation is not the
        Company’s liability.
      </p>
    ),
  },

  {
    title: "8. EMI & Financing",
    content: (
      <p>
        Financing or EMI options may be facilitated through partner banks
        such as SBI, Bank of Maharashtra, Bank of Baroda, Union Bank,
        Canara Bank, and Saraswat Bank. Loan approval, interest rates,
        tenure, and disbursement decisions are made solely by the
        financial institution. The Company acts only as a facilitator.
      </p>
    ),
  },

  {
    title: "9. Warranty",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Solar panel performance warranty up to 25 years*</li>
        <li>Inverter warranty typically 8–10 years*</li>
        <li>Installation workmanship warranty if specified</li>
        <li>Warranty governed by manufacturer policies</li>
        <li>Physical damage or misuse not covered</li>
      </ul>
    ),
  },

  {
    title: "10. Maintenance & Service",
    content: (
      <p>
        Maintenance and panel cleaning services are provided where agreed
        or under AMC subscription. Service timelines may vary depending
        on location and service demand. Damage caused by natural
        disasters, rodents, electrical surges, or unauthorized
        modification is excluded from standard service coverage.
      </p>
    ),
  },

  {
    title: "11. Monitoring Access",
    content: (
      <p>
        Monitoring platforms provide system performance visibility for
        customer reference. Data accuracy depends on internet
        connectivity, inverter communication, and third-party platform
        availability. Temporary downtime may occur and does not imply
        system malfunction.
      </p>
    ),
  },

  {
    title: "12. Cancellation & Refunds",
    content: (
      <p>
        Advance payments may become partially or fully non-refundable once
        procurement or installation activities begin. Cancellation terms
        follow the signed quotation or agreement. Refunds, if applicable,
        are processed after deduction of incurred material and service
        costs.
      </p>
    ),
  },

  {
    title: "13. Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by law, the Company shall not be
        liable for indirect, incidental, or consequential damages.
        Estimated savings or generation projections are indicative and
        depend on environmental conditions, usage patterns, and grid
        availability.
      </p>
    ),
  },

  {
    title: "14. Force Majeure",
    content: (
      <p>
        The Company shall not be responsible for delays or non-performance
        caused by events beyond reasonable control including natural
        disasters, strikes, government restrictions, supply chain issues,
        or electrical grid failures.
      </p>
    ),
  },

  {
    title: "15. Website Use",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>No unauthorized access or hacking attempts</li>
        <li>No submission of false or misleading information</li>
        <li>No unlawful or abusive usage of website services</li>
        <li>Violation may result in restricted access</li>
      </ul>
    ),
  },

  {
    title: "16. Privacy",
    content: (
      <p>
        Customer data handling is governed by our Privacy Policy. By using
        our services, users acknowledge and consent to the collection and
        processing of information as described therein.
      </p>
    ),
  },

  {
    title: "17. Modifications",
    content: (
      <p>
        These Terms & Conditions may be revised periodically to reflect
        operational or legal updates. Continued use of services after
        updates indicates acceptance of revised terms.
      </p>
    ),
  },

  {
    title: "18. Governing Law & Jurisdiction",
    content: (
      <p>
        These Terms shall be governed by the laws of India. Any disputes
        arising shall fall under the jurisdiction of competent courts
        within Maharashtra.
      </p>
    ),
  },
];
    return (
    <>

      {/* HERO */}
      <section className="relative h-[420px] flex items-center justify-center text-white">
        <img
          src={termsHero}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#021423]/80" />

        <div className="relative text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold">Terms & Conditions</h1>
          <p className="mt-4 text-gray-200">
            Clear agreements that build transparent and trusted solar
            partnerships.
          </p>
          <p className="mt-2 text-sm text-gray-300">
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

          {/* CONTACT */}
          <div className="bg-[#021423] text-white p-10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Contact Information
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Ansh Solar Electricals <br />
              📞 7057408223 / 7249709662 <br />
              📧 anshelectrical5858@gmail.com <br />
              📍 Maharashtra, India
            </p>
          </div>

        </div>
      </section>

    </>
  );
}