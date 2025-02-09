import HomeCarousel from "@/components/shared/home/home-carousel";
import DATA from "@/lib/data";

export default function Page() {
  return <HomeCarousel items={DATA.carousels} />;
}
