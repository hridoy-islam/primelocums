import Link from "next/link";

export default function Services() {
  return (
    <section>
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <h2 className="mb-5 text-3xl text-center font-bold text-primary  sm:text-[40px]/[48px]">
          What We Do?
        </h2>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-4">
          <Link
            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/nurses"
          >
            <span className="inline-block  w-full bg-gray-50 p-3">
              <img src="/nurse.jpg" alt="nurses" />
            </span>

            <h2 className="mt-2 font-bold">Nurses</h2>
          </Link>

          <Link
            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/doctors"
          >
            <span className="inline-block  w-full bg-gray-50 p-3">
              <img src="/doctor.jpg" alt="nurses" />
            </span>

            <h2 className="mt-2 font-bold">Doctors</h2>
          </Link>

          <Link
            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/medical"
          >
            <span className="inline-block  w-full bg-gray-50 p-3">
              <img src="/medical.jpg" alt="nurses" />
            </span>

            <h2 className="mt-2 font-bold">Medical </h2>
          </Link>

          <Link
            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/mental-health"
          >
            <span className="inline-block w-full bg-gray-50 p-3">
              <img src="/mental.jpg" alt="nurses" />
            </span>

            <h2 className="mt-2 font-bold">Mental health</h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
