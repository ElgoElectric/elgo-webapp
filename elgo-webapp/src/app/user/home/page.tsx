import Card from "@/app/components/Card";
import ConsumptionCard from "@/app/components/ConsumptionCard";
import HVACCard from "@/app/components/HVACCard";
import KARAnomalyCard from "@/app/components/KARAnomalyCard";
import LightControlCard from "@/app/components/LightControlCard";
import styles from "@/app/constants/style";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 z-0">
      <div className={`bg-primary m-5`}>
        <div className={`flex justify-start`}>
          <div className={styles.heading2}>
            Hello,&nbsp;
            <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Elgo!
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-rows-2 grid-cols-3 grid-flow-col gap-[20px]">
          <ConsumptionCard />
          <HVACCard />
          <LightControlCard />
          <div className="col-span-2">
            <KARAnomalyCard />
          </div>
		  <HVACCard />
        </div>
      </div>
    </main>
  );
}
