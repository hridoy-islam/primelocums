
import { MailIcon, PhoneIcon, LocationMarkerIcon, GlobeAltIcon } from '@heroicons/react/outline';

export default function page() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          If you’re an NHS trust or healthcare provider looking for reliable, compliant, and skilled healthcare professionals, Prime Locums is here to support you. Get in touch with us today to discuss your staffing needs and how we can assist in delivering quality care through exceptional healthcare professionals.
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <PhoneIcon className="h-6 w-6 text-gray-500" />
            <span className="text-gray-700">+44 20 8214 2906</span>
          </div>
          <div className="flex items-center space-x-3">
            <MailIcon className="h-6 w-6 text-gray-500" />
            <span className="text-gray-700">info@primelocums.co.uk</span>
          </div>
          <div className="flex items-center space-x-3">
            <LocationMarkerIcon className="h-6 w-6 text-gray-500" />
            <span className="text-gray-700">
              Unit 9.0.3<br />
              Town Quay Wharf, Abbey Road<br />
              London<br />
              IG11 7BZ
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <GlobeAltIcon className="h-6 w-6 text-gray-500" />
            <a href="https://www.primelocums.co.uk" className="text-blue-500 hover:underline">
              www.primelocums.co.uk
            </a>
          </div>
        </div>
        <div className="mt-4 text-gray-500 text-sm">
          We look forward to hearing from you!
        </div>
      </div>
    </div>
  );
}
