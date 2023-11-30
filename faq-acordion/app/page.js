import Accordions from "@/components/Accordions";
import StarIcon from "@/assets/icons/icon-star.svg";
export default function Home() {
  return (
    <main className="w-full h-full bg-hero-desktop bg-[#F8EEFF] bg-no-repeat px-6 flex justify-center items-center">
      {/* Container */}
      <div className="w-full  bg-white p-6 rounded-lg shadow-xl ">
        <div className="flex items-center gap-6 mb-6">
          <StarIcon />
          <h1 className="text-[#301534] text-[32px] font-bold leading-normal">
            FAQs
          </h1>
        </div>
        <Accordions />
      </div>
    </main>
  );
}
