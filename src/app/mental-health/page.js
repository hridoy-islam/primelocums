export default function Page() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Mental Health</h2>
      </div>
      <div className="my-10 grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <p>
            We pride ourselves on being able to find you your ideal position
            while providing our clients with high calibre and highly suitable
            candidates. We work with you to develop lasting relationships and
            understand individual requirements. Our specialist division have an
            unrivalled knowledge of mental health medical recruitment and will
            help assist you with finding a placement that will suit your
            criteria. We can offer you a complete range of unique opportunities
            through the Master Vendors and preferred supplier arrangements which
            we hold. Our mental health division have multiple contracts in place
            with private clients so our dedicated team can offer a plethora of
            opportunities across the UK with an unrivalled variety of work.
          </p>
          <div className="border border-gray-100 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Specialist</h2>
            <ul className="list-disc list-inside mb-12 space-y-1">
              <li className="text-base">Adult</li>
              <li className="text-base">Assertive Outreach</li>
              <li className="text-base">Child and Adolescent</li>
              <li className="text-base">Crisis Resolution</li>
              <li className="text-base">Early Intervention</li>
              <li className="text-base">Eating Disorders</li>
              <li className="text-base">Forensic</li>
              <li className="text-base">Learning Disabilities</li>
              <li className="text-base">Liaison</li>
              <li className="text-base">Neuro</li>
              <li className="text-base">Old Age</li>
              <li className="text-base">Rehabilitation</li>
              <li className="text-base">Substance Misuse</li>
            </ul>
          </div>
          <div className="border border-gray-100 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Benifits</h2>
            <ul className="list-disc list-inside mb-12 space-y-1">
              <li className="text-base">
                Your own dedicated Recruitment Consultant
              </li>
              <li className="text-base">
                Available to help whenever you need us; anytime, any day
              </li>
              <li className="text-base">
                Assistance with compliance and training
              </li>
              <li className="text-base">Competitive pay</li>
              <li className="text-base">Expert support and advice</li>
              <li className="text-base">
                Variety of positions available from part-time to full-time,
                short-term to long-term
              </li>
              <li className="text-base">
                Assistance managing a complete rota of work based on your
                preferences
              </li>
              <li className="text-base">
                Expert revalidation and appraisal support
              </li>
            </ul>
          </div>
        </div>

        <img
          src="/mentalhealth.jpg"
          alt="about locums"
          className="w-full h-auto my-3 rounded-lg shadow-lg"
        />
      </div>
      <div className="my-10 ">
        <p>
          Call today on 01908 545926 and see if we have a suitable role for you
          and to begin your registration with us. We have made the process as
          simple as possible so you can find your ideal role as soon as
          possible.
        </p>
      </div>
    </section>
  );
}
