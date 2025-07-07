// import FeaturedWorks from "@/components/HomeComp/FeaturedWorks";
import HeroSection from "@/components/HomeComp/HeroSection";
import RecentPostComp from "@/components/HomeComp/RecentPostComp"
import FeaturedWorks from "@/components/HomeComp/FeaturedWorks";
import Image from "next/image";

export default function Home() {
  return (
   <section className="h-full flex flex-col items-center w-full gap-6">
<HeroSection />
<RecentPostComp />
<FeaturedWorks />
   </section>
  );
}
