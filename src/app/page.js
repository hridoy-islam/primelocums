import OurMission from "@/components/common/OurMission";
import Overview from "@/components/common/Overview";
import Services from "@/components/common/Services";
import Testimonail from "@/components/common/Testimonial";
import WelcomeHero from "@/components/common/welcome-hero";

export default function Home() {
  return (
    <>
      <WelcomeHero />
      <Overview />
      <Services />
      <OurMission />
      {/* <Testimonail /> */}
    </>
  );
}
