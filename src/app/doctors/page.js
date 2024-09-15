export default function Page() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Doctors</h2>
      </div>
      <div className="my-10 grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <p>
            We believe our success comes from understanding what our candidates
            are looking for and therefore meeting expectations and not over
            promising something that simply cannot be delivered. We work with
            you to understand every need that is important because this is
            important to us. Honesty is the key to our approach and whilst
            finding the best position for you is important, the relationship
            between you and your Recruitment Consultant is highly important to
            us. If you are looking for a new role, relocating or simply want to
            work in a new department, your dedicated consultant will focus on
            your requirements and will work with you to help make the transition
            as smooth as possible.
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
              <li className="text-base">Competitive pay</li>
            </ul>
          </div>
          <p>
            Call today and see if we have a suitable role for you and to begin
            your registration with us. We have made the process as simple as
            possible so you can find your ideal role as soon as possible.
          </p>
        </div>

        <img
          src="/doctors.jpg"
          alt="about locums"
          className="w-full h-auto my-3 rounded-lg shadow-lg"
        />
      </div>
      <div className="my-10 grid grid-cols-2 gap-6"></div>
    </section>
  );
}
