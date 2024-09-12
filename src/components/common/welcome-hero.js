import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WelcomeHero() {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white ">
      <div className="container mx-auto py-16  sm:py-24 flex flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Welcome to{" "}
            <span className="text-primary">Prime Locums Group Limited</span>
          </h1>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
            T/A Prime Locums
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your trusted partner in healthcare staffing.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Button
                size="lg"
                className="w-full sm:w-auto text-primary text-white"
              >
                Find Opportunities
              </Button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-aut bg-secondary text-white"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <Image
            src="/healthcare.jpg"
            alt="Healthcare professionals team"
            width={600}
            height={400}
            className="w-full max-w-lg mx-auto rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
