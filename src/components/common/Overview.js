export default function Overview() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-primary mb-6">About Us</h2>

          <p className="text-gray-700 mb-6">
            Your trusted partner in healthcare staffing. We specialize in
            supplying highly qualified and dedicated Doctors, Nurses, and Care
            Workers to the NHS and other healthcare providers across the UK.
            With an unwavering commitment to excellence, we understand the
            critical role healthcare professionals play in ensuring the quality
            and sustainability of patient care, and we are proud to support the
            NHS in fulfilling its staffing needs.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Our Commitment
            </h3>
            <p className="text-gray-700">
              At Prime Locums, we adhere to the highest standards of
              recruitment, ensuring that all our candidates meet the necessary
              regulatory and legal requirements. We work closely with the NHS to
              ensure our processes align with UK healthcare policies, focusing
              on delivering not just staff, but care professionals who are
              skilled, reliable, and passionate about their work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Quality Assurance
              </h4>
              <p className="text-gray-700">
                We ensure all our healthcare professionals meet the highest
                standards of qualifications and experience.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                NHS Partnership
              </h4>
              <p className="text-gray-700">
                We work closely with the NHS to align our processes with UK
                healthcare policies and standards.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Nationwide Coverage
              </h4>
              <p className="text-gray-700">
                We provide staffing solutions to healthcare providers across the
                UK, ensuring wide-reaching support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
