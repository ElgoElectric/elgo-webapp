import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import ConsumptionCard from "@/app/components/ConsumptionCard";
import HVACCard from "@/app/components/HVACCard";
import KARAnomalyCard from "@/app/components/KARAnomalyCard";
import LightControlCard from "@/app/components/LightControlCard";
import styles from "@/app/constants/style";
import AddDeviceCard from "@/app/components/AddDeviceCard";

export default withPageAuthRequired(
  async function Home() {
    const session = await getSession();
    const user = session?.user;
    var name = "";

    async function createUser() {
      if (user && user.name && user.email) {
        const userData = {
          name: user.name,
          email: user.email,
        };

        const exists = await fetch(
          `https://elgo-backend.vercel.app/users/getByEmail/${user.email}`
        );
        if (exists.status === 200) {
          const details = await exists.json();
          name = details.name;
          return;
        } else {
          const userJson = JSON.stringify(userData);
          const response = await fetch(
            "https://elgo-backend.vercel.app/users/create",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: userJson,
            }
          );
        }
      }
    }

    return (
      createUser(),
      (
        <main className="flex min-h-screen flex-col justify-center items-center p-24 z-0">
          <div className={styles.boxWidth}>
            <div className={`bg-primary m-5`}>
              <div className={`flex justify-start`}>
                <div className={styles.heading2}>
                  Hello,&nbsp;
                  <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    {name==""?user?.name:name}!
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
                <AddDeviceCard />
              </div>
            </div>
          </div>
        </main>
      )
    );
  },
  { returnTo: "/user/home" }
);
