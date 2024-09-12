import WelcomeHero from "@/components/common/welcome-hero";


export default function Home() {
  return (
    <>
      <WelcomeHero />
      <div className="grid grid-cols-2 container px-8 mx-auto">
        <div className="space-y-4 text-justify">
          <p>
            We specialize in supplying highly qualified and dedicated Doctors, Nurses, and Care Workers to the NHS and other healthcare providers across the UK. With an unwavering commitment to excellence, we understand the critical role healthcare professionals play in ensuring the quality and sustainability of patient care, and we are proud to support the NHS in fulfilling its staffing needs.
          </p>
          <p>
            At Prime Locums, we adhere to the highest standards of recruitment, ensuring that all our candidates meet the necessary regulatory and legal requirements. We work closely with the NHS to ensure our processes align with UK healthcare policies, focusing on delivering not just staff, but care professionals who are skilled, reliable, and passionate about their work.
          </p>
        </div>
        <div>

        </div>
      </div>
    </>
  );
}
