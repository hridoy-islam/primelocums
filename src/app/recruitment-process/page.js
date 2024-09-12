export default function Component() {
  const steps = [
    {
      title: "Candidate Sourcing and Vetting",
      content: [
        "We source candidates through direct applications, partnerships with educational institutions, and recruitment drives.",
        "Detailed CV review and qualification verification",
        "Professional references from previous employers",
        "Assessment of work history and experience",
        "NHS framework-compliant competency tests",
      ],
    },
    {
      title: "Screening and Interviews",
      content: [
        "Initial screening interviews to assess suitability for the NHS",
        "Face-to-face or video interviews to evaluate:",
        "Clinical skills and knowledge",
        "Communication and interpersonal abilities",
        "Understanding of NHS values and patient care standards",
        "Cultural fit within the NHS environment",
      ],
    },
    {
      title: "Compliance and Onboarding",
      content: [
        "Comprehensive compliance checks including documentation, DBS checks, and health assessments",
        "Ensure full compliance with UK legal and NHS requirements",
        "Induction training on NHS policies and procedures",
        "Professional development opportunities",
      ],
    },
    {
      title: "Ongoing Support",
      content: [
        "24/7 access to support services for candidates and clients",
        "Regular performance evaluations and feedback sessions",
        "Training updates to ensure compliance with NHS standards",
        "Continuous improvement and satisfaction monitoring",
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Recruitment Process for Doctors, Nurses, and Care Workers
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Our recruitment process is designed to meet the stringent demands of
          NHS standards while ensuring a seamless and efficient experience for
          both healthcare professionals and employers.
        </p>

        <div className="relative">
          {steps.map((step, index) => (
            <div key={index} className="mb-8 flex">
              <div className="flex flex-col items-center mr-4">
                <div className="flex items-center justify-center w-8 h-8 border-2 border-primary rounded-full">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-primary mt-2"></div>
                )}
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex-grow">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Step {index + 1}: {step.title}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {step.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mt-16 mb-8">
          Our Commitment to NHS and Healthcare Excellence
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          At Prime Locums, we understand the evolving needs of the NHS and the
          healthcare industry in the UK. Our dedication to providing qualified
          and reliable healthcare workers ensures that the NHS can continue to
          deliver high-quality care to patients across the country.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Expertise in NHS Staffing: We have extensive experience
                supplying doctors, nurses, and care workers to the NHS and
                private healthcare providers.
              </li>
              <li>
                Full Legal Compliance: We are fully compliant with all UK
                employment laws, including the Agency Workers Regulations 2010.
              </li>
              <li>
                Sustainability and Continuity: We provide long-term workforce
                solutions that ensure continuity in patient care.
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Tailored Solutions for Healthcare Providers
            </h3>
            <p className="text-gray-600 mb-4">
              We understand that no two healthcare settings are the same. Our
              flexible recruitment solutions include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Temporary staffing for short-term needs or seasonal surges
              </li>
              <li>Permanent placements for long-term staffing stability</li>
              <li>
                Contract-based staffing for specialist projects or fixed periods
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Ethical Recruitment Practices
          </h3>
          <p className="text-gray-600">
            Our recruitment practices are built on ethical foundations. We
            strictly adhere to the WHO Code of Practice on the International
            Recruitment of Health Personnel, ensuring that our international
            recruitment efforts do not negatively impact healthcare systems in
            developing countries. We also provide candidates with fair pay,
            professional development, and support, contributing to the UK's
            healthcare sustainability goals.
          </p>
        </div>
      </div>
    </section>
  );
}
