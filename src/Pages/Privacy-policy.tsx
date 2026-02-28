import privacyHero from "../assets/privacy-hero.jpg";

export default function PrivacyPolicy() {
  const sections = [
  {
    title: "1. About the Company",
    content: (
      <p className="text-gray-700 leading-relaxed">
        Ansh Solar Electricals has been operating for more than eight (8)
        years, delivering reliable and sustainable solar energy solutions
        across Maharashtra. The company provides end-to-end services including
        consultation, feasibility analysis, system design, engineering,
        installation, commissioning, monitoring, and long-term maintenance.
        Our solutions include inverter integration, battery backup systems,
        and energy optimization services for residential, commercial,
        industrial, agricultural, and warehouse projects. We specialize in
        on-grid, off-grid, and hybrid solar systems designed to reduce
        electricity costs while promoting environmentally responsible energy
        adoption.
      </p>
    ),
  },

  {
    title: "2. Information We Collect",
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Full name, mobile number, WhatsApp number, and contact preferences</li>
        <li>Email address, installation address, and service location details</li>
        <li>Electricity consumption history and rooftop or site measurements</li>
        <li>Identity and financial documents required for subsidy or loan processing</li>
        <li>Technical data such as IP address, browser type, and device analytics</li>
        <li>Site survey photographs, drawings, and installation documentation</li>
        <li>System monitoring data including inverter or smart meter performance</li>
        <li>Maintenance history, service requests, and warranty-related records</li>
      </ul>
    ),
  },

  {
    title: "3. How We Use Your Information",
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Providing consultation and preparing customized solar quotations</li>
        <li>Engineering design, load calculation, and installation planning</li>
        <li>Processing government subsidy and net-metering applications</li>
        <li>Scheduling installation, inspection, and maintenance services</li>
        <li>Processing invoices, advance payments, EMI, and loan facilitation</li>
        <li>Sending service reminders, warranty updates, and operational alerts</li>
        <li>Improving service quality, website performance, and customer experience</li>
        <li>Communicating offers or important updates (with opt-out options)</li>
      </ul>
    ),
  },

  {
    title: "4. Legal Basis & Consent",
    content: (
      <p className="text-gray-700 leading-relaxed">
        Personal information is processed in accordance with applicable Indian
        regulations, including the Digital Personal Data Protection Act, 2023.
        Data processing is based on customer consent, contractual necessity for
        service delivery, compliance with statutory or regulatory obligations,
        and legitimate business interests such as operational improvement and
        customer support. Customers may withdraw consent for non-essential
        communications at any time.
      </p>
    ),
  },

  {
    title: "5. Sharing of Information",
    content: (
      <p className="text-gray-700 leading-relaxed">
        We do not sell, trade, or rent personal data. Information may be shared
        only when necessary with authorized installation teams, banking and
        financing partners, government authorities, DISCOMs, subsidy agencies,
        cloud or CRM service providers, and legal authorities where required.
        All partners are expected to maintain appropriate confidentiality and
        data protection safeguards.
      </p>
    ),
  },

  {
    title: "6. Cookies and Tracking",
    content: (
      <p className="text-gray-700 leading-relaxed">
        Our website may use cookies, analytics tools, and tracking technologies
        to understand visitor interactions, enhance usability, and optimize
        performance. Cookies help remember preferences and improve browsing
        efficiency. Users may disable cookies through browser settings,
        although certain features may function with limited capability.
      </p>
    ),
  },

  {
    title: "7. Data Security",
    content: (
      <p className="text-gray-700 leading-relaxed">
        We implement reasonable administrative, technical, and physical
        safeguards including controlled access, secure storage practices, and
        restricted data handling procedures to protect personal information
        from unauthorized access, disclosure, or misuse. Despite these efforts,
        no electronic transmission or storage system can guarantee absolute
        security.
      </p>
    ),
  },

  {
    title: "8. Data Retention",
    content: (
      <p className="text-gray-700 leading-relaxed">
        Personal information is retained only for the duration necessary to
        fulfill installation obligations, warranty support, maintenance
        lifecycle tracking, subsidy compliance, taxation requirements, and
        dispute resolution. Certain technical and project records may be kept
        for extended periods aligned with solar panel lifecycle and regulatory
        obligations.
      </p>
    ),
  },

  {
    title: "9. Customer Rights",
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Request access to personal information held by us</li>
        <li>Request correction or updating of inaccurate data</li>
        <li>Request deletion where legally permissible</li>
        <li>Withdraw consent from promotional or marketing communication</li>
        <li>Submit grievances or privacy-related complaints</li>
      </ul>
    ),
  },

  {
    title: "10. Third-Party Links",
    content: (
      <p className="text-gray-700 leading-relaxed">
        Our website or communications may contain links to third-party
        platforms or external websites. We are not responsible for the privacy
        policies, security practices, or content of such external services,
        and users are encouraged to review their respective policies.
      </p>
    ),
  },

  {
    title: "11. Children’s Privacy",
    content: (
      <p className="text-gray-700 leading-relaxed">
        Our services are intended for adults and property owners. We do not
        knowingly collect or process personal information from individuals
        under the age of eighteen (18). If such data is identified, it will be
        removed in accordance with applicable regulations.
      </p>
    ),
  },

  {
    title: "12. Service Coverage",
    content: (
      <p className="text-gray-700 leading-relaxed">
        Services are currently provided across urban, semi-urban, and rural
        regions of Maharashtra. Project execution depends on technical
        feasibility, regulatory approvals, grid connectivity conditions, and
        logistical considerations. Expansion to additional regions may occur
        in the future.
      </p>
    ),
  },

  {
    title: "13. Policy Updates",
    content: (
      <p className="text-gray-700 leading-relaxed">
        This Privacy Policy may be revised periodically to reflect operational
        improvements, legal developments, or regulatory updates. The latest
        version will always be available on this page with an updated effective
        date. Continued use of our services indicates acceptance of the revised
        policy.
      </p>
    ),
  },
];
  return (
    <>

      {/* ================= HERO ================= */}
      <section className="relative h-[480px] flex items-center justify-center text-white">

        <img
          src={privacyHero}
          alt="Privacy Policy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-[#021423]/85" />

        <div className="relative text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            Privacy Policy
          </h1>

          <p className="mt-5 text-gray-200 text-lg leading-relaxed">
            Protecting your data with transparency, responsibility,
            and long-term trust.
          </p>

          <p className="mt-3 text-sm text-blue-300 font-medium">
            Last Updated: 27-02-2026
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="bg-[#f4f8fc] py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          {/* Intro */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gray-600 leading-relaxed text-lg">
              Ansh Solar Electricals is committed to protecting customer
              and visitor privacy. This policy explains how we collect,
              use, store, and safeguard information while delivering
              reliable solar energy solutions across Maharashtra.
            </p>
          </div>

          {/* Policy Sections */}
          {sections.map((sec, i) => (
            <div
              key={i}
              className="bg-white p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* BLUE HEADING */}
              <h2 className="
                text-2xl md:text-[26px]
                font-bold
                text-blue-700
                mb-6
                border-l-4 border-blue-600
                pl-4
                leading-snug
              ">
                {sec.title}
              </h2>

              {/* CONTENT */}
              <div className="text-gray-600 leading-relaxed space-y-4 text-[15.5px]">
                {sec.content}
              </div>
            </div>
          ))}

          {/* Contact Block */}
          <div className="bg-gradient-to-r from-[#021423] to-[#06365a] text-white p-12 rounded-2xl mt-20 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-300 mb-5">
              Contact & Grievance Officer
            </h3>

            <p className="text-gray-300 leading-relaxed text-[15.5px]">
              <span className="font-semibold text-white">
                Ansh Solar Electricals
              </span>
              <br />
              📞 7057408223 / 7249709662
              <br />
              📧 anshelectrical5858@gmail.com
              <br />
              📍 Maharashtra, India
            </p>
          </div>

        </div>
      </section>

    </>
  );
}