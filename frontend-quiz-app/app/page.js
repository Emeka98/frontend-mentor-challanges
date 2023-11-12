import HomeContainer from "@/containers/home";

export const metadata = {
  title : 'Homepage',
  description: "Deneme acıklamasi",
}

export default function Home() {
  return (
    <main className="w-full h-full">
      <HomeContainer />
    </main>
  );
}
