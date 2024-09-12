export default function OurMission() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Bridging the Gap in Healthcare
          </h3>
          <p className="text-gray-600">
            Our mission is to bridge the gap between healthcare providers and
            qualified professionals, supporting the NHS by ensuring there is a
            continuous supply of competent staff who are fully compliant with UK
            legislation and NHS standards. We strive to deliver top-tier
            professionals who contribute to the enhancement of patient care and
            the operational efficiency of healthcare systems.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-6">Core Values</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Excellence",
              description:
                "We recruit only the highest calibre of healthcare workers who meet all UK compliance and regulatory standards.",
            },
            {
              title: "Integrity",
              description:
                "We operate with transparency and ethical practices, ensuring full legal compliance with NHS guidelines and UK recruitment laws.",
            },
            {
              title: "Commitment",
              description:
                "We are committed to the long-term success of both healthcare providers and workers, fostering a supportive and reliable partnership.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <h4 className="flex items-center text-xl font-semibold text-primary mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {value.title}
              </h4>
              <p className="text-sm text-gray-600 flex-grow">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
