export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-8 pt-8">
          <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Prime Locums Group Limited
              </h3>
              <p className="mt-4 space-y-4 text-gray-300">
                {" "}
                Get in touch with us today to discuss your staffing needs and
                how we can assist in delivering quality care through exceptional
                healthcare professionals.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-4">
                {[
                  "Home",
                  "NHS Recruitment",
                  "Recruitment Process",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Address
              </h3>
              <p className="text-base text-gray-300">
                Unit 9.0.3
                <br />
                Town Quay Wharf, Abbey Road
                <br />
                London
                <br />
                IG11 7BZ
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Contact
              </h3>
              <p className="text-base text-gray-300">
                Phone:{" "}
                <a href="tel:+442082142906" className="hover:text-white">
                  +44 20 8214 2906
                </a>
                <br />
                Email:{" "}
                <a
                  href="mailto:info@primelocums.co.uk"
                  className="hover:text-white"
                >
                  info@primelocums.co.uk
                </a>
                <br />
                Website:{" "}
                <a
                  href="https://www.primelocums.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  www.primelocums.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Prime Locums Group Limited. All
            rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Facebook", "Twitter", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{social}</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
