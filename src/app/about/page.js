export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About</h2>
      </div>
      <p>
        Since 2001, we have established ourselves as a leading provider of
        temporary healthcare workers to both the Public and Private sectors
        across the UK. Diversifying our services to place not only Medical
        Locums but GPs, Nurses and AHPs into both the public and private
        sectors, we take pride in the quality and exceptional levels of service
        we provide to both our candidates and clients across the United Kingdom.
        We pride ourselves on our ability to source niche areas through our
        extensive experience and knowledge. Our experienced team have worked
        across a number of government approved framework agreements, developing
        a strong understanding of each specialty and hospitals alongside an
        industry leading vetting and screening process; ensuring we maintain a
        database of high quality candidates and industry leading client
        relations. Offering positions from short locum placements through to
        fixed term contracts and permanent roles, we have been able to support
        the NHS over more than 150 Service Level Agreements with individual
        trusts across major frameworks.
      </p>

      <img src="/about.jpg" alt="about locums" className="w-full h-auto my-3" />

      <div className="my-10 grid grid-cols-2 gap-6">
        <div className="border border-gray-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">
            What We Can Offer Candidates
          </h2>
          <ul className="list-disc list-inside mb-12 space-y-1">
            <li className="text-base">Competitive pay rates</li>
            <li className="text-base">
              Assistance with Compliance, Revalidation, and Appraisals
            </li>
            <li className="text-base">Dedicated compliance contact</li>
            <li className="text-base">Bespoke training packages</li>
            <li className="text-base">Recruitment service available 24/7</li>
            <li className="text-base">Expert support and advice</li>
            <li className="text-base">Dedicated recruitment teams</li>
          </ul>
        </div>
        <div className="border border-gray-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">What We Can Offer Clients</h2>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-base">
              Approved framework agency since 2005, residing on major frameworks
            </li>
            <li className="text-base">Recruitment service available 24/7</li>
            <li className="text-base">Open and transparent communications</li>
            <li className="text-base">
              Innovative and bespoke recruitment solutions tailored to unique
              requirements
            </li>
            <li className="text-base">
              Full support with contract delivery and implementation
            </li>
            <li className="text-base">Dedicated Account Manager</li>
            <li className="text-base">Dedicated Compliance Manager</li>
            <li className="text-base">
              Platinum status in our most recent framework audit
            </li>
          </ul>
        </div>
      </div>

      <p>
        To stay safe in your job search we recommend that you visit JobsAware, a
        non-profit, joint industry and law enforcement organisation working to
        combat job scams. Visit the JobsAware website for information on common
        scams and to get free, expert advice for a safer job search.
      </p>
    </section>
  );
}
