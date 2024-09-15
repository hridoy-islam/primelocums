export default function Page() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nurses</h2>
      </div>
      <div className="my-10 grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <p>
            Nurses If you are looking for a new role, relocating or simply want
            to work in a new department, our dedicated nursing team focus on
            your requirements and will work with you to help make the transition
            as smooth as possible. Our nursing division is a progressive
            department with focus on delivering the quality service you deserve.
            Registering with our agency will enable you to take advantage of the
            lucrative opportunities for short and long term placements as well
            as permanent positions in a vast portfolio of hospitals across the
            UK.
          </p>
          <div className="border border-gray-100 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">HOW WE CAN HELP YOU</h2>
            <ul className="list-disc list-inside mb-12 space-y-1">
              <li className="text-base">
                Dedicated Recruitment Consultant to fully understand you
              </li>
              <li className="text-base">
                Available to help whenever you need us; anytime, any day
              </li>
              <li className="text-base">
                Find you your ideal assignment to suit your needs
              </li>
              <li className="text-base">Appraisal and revalidation support</li>
              <li className="text-base">
                Assistance with compliance and training
              </li>
              <li className="text-base">
                Market leading compliance team available across the UK
              </li>
              <li className="text-base">CPD advice and signposting</li>
              <li className="text-base">Block bookings available</li>
              <li className="text-base">
                Complete rota management to suit you
              </li>
              <li className="text-base">Competitive pay</li>
            </ul>
          </div>
        </div>

        <img
          src="/nurses.jpg"
          alt="about locums"
          className="w-full h-auto my-3 rounded-lg shadow-lg"
        />
      </div>
      <div className="my-10 grid grid-cols-2 gap-6"></div>
    </section>
  );
}
