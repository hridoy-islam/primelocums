import RecruitmentProcess from "@/components/common/RecruitmentProcess";

export default function page() {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Regulatory Compliance
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-4">
              At Prime Locums, we understand the importance of adhering to the
              UK's legal and regulatory frameworks for recruitment within the
              NHS. Our recruitment practices are in line with the Employment
              Agencies Act 1973, the Conduct of Employment Agencies and
              Employment Businesses Regulations 2003, and other applicable UK
              laws. We strictly follow NHS guidelines on worker supply, ensuring
              we meet all the criteria set by NHS Employers and other regulatory
              bodies such as the Care Quality Commission (CQC).
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-center mb-6">
            Key Compliance Areas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-primary mb-4">
                Pre-Employment Checks
              </h4>
              <p className="text-gray-600 mb-2">
                All candidates undergo a rigorous pre-employment screening
                process, as mandated by the NHS Employment Check Standards. This
                includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                <li>Identity verification</li>
                <li>Right to Work in the UK checks</li>
                <li>Enhanced DBS (Disclosure and Barring Service) checks</li>
                <li>
                  Professional registration and qualification checks (with the
                  General Medical Council for doctors and the Nursing and
                  Midwifery Council for nurses)
                </li>
                <li>Occupational health clearance</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-primary mb-4">
                Right to Work Compliance
              </h4>
              <p className="text-gray-600">
                We ensure that all candidates have the right to work in the UK
                and that any visa requirements are fully complied with,
                including adherence to UKVI (UK Visas and Immigration) rules. We
                assist international candidates in obtaining the necessary work
                permits under the Skilled Worker Visa or Health and Care Visa,
                ensuring full compliance with UK immigration laws.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-primary mb-4">
                Equality and Diversity
              </h4>
              <p className="text-gray-600">
                We are committed to The Equality Act 2010, promoting equality
                and diversity in our recruitment processes. Our policies are
                designed to ensure that no one is discriminated against based on
                age, gender, race, disability, sexual orientation, or religion.
                We foster an inclusive workplace for all healthcare
                professionals and are proud to support the NHS's diversity
                goals.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-primary mb-4">
                GDPR Compliance
              </h4>
              <p className="text-gray-600">
                Protecting the data and privacy of both our clients and
                candidates is paramount. We comply with the General Data
                Protection Regulation (GDPR), ensuring that all personal data is
                collected, stored, and processed securely and lawfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RecruitmentProcess />
    </>
  );
}
