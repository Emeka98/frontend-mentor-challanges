import Header from "@/components/Header";
import HomeContainer from "@/containers/home";

export const metadata = {
  title: "Homepage",
  description: "Frontend Quiz App",
};

export default function Home() {
  return (
    <main className="w-full h-full">
      <HomeContainer />
    </main>
  );
}
