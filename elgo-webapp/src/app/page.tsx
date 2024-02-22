import Image from "next/image";
import Billing from "./components/Billing";
import Business from "./components/Business";
import CTA from "./components/CTA";
import Stats from "./components/Stats";
import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Hero/>
        <CTA/>
        <Business/>
        <Billing/>
        <Stats/>
        <CardDeal/>
        <Clients/>
      </div>
    </main>
  );
}
