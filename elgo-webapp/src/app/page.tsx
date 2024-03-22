import Image from "next/image";
import Billing from "./components/Billing";
import Business from "./components/Business";
import CTA from "./components/CTA";
import Stats from "./components/Stats";
import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import styles from "./constants/style";
import Donut from "./components/Donut";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 z-0">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Billing />
          <CardDeal />
          <CTA />
        </div>
      </div>
      {/* <Stats /> */}
    </main>
  );
}
