export default function Page() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Medical</h2>
      </div>
      <div className="my-10 grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <p>
            As a market leader in the provision of medical solutions we are
            capable of developing and adapting a variety of services to meet the
            individual requirements of our clients. For each client a bespoke
            solution ensures that maximum savings and effectiveness can be
            achieved. We understand that each solution must be in the best
            interests of the client and offer our clients expert knowledge and
            current market advice. In order to provide a best quality, best
            price solution we offer a vast array of service solutions that can
            be tailored to individual client needs.
          </p>
          <div className="border border-gray-100 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">What we can offer</h2>
            <ul className="list-disc list-inside mb-12 space-y-1">
              <li className="text-base">Tiered/PSL Solution</li>
              <li className="text-base">Master Vendor</li>
              <li className="text-base">On Call Services</li>
              <li className="text-base">Complete Service Management</li>
              <li className="text-base">Rota/Bank Management</li>
              <li className="text-base">Out of Hours Service</li>
              <li className="text-base">Resident Medical Officers</li>
              <li className="text-base">International Recruitment</li>
            </ul>
          </div>
        </div>

        <img
          src="/medicalservice.jpg"
          alt="about locums"
          className="w-full h-auto my-3 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
