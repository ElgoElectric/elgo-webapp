"use client";
import styles, { layout } from "../constants/style";

export default function ThreeDeeModel() {
  return (
    // <section id="team" className={layout.section}>
    //   <div className={layout.sectionInfo}>
    //     <h2 className={styles.heading2}>
    //       <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
    //         Meet Our Team
    //       </div>
    //     </h2>
    //     <p className={`${styles.paragraph} max-w-[460px] mt-5`}>
    //       We&apos;re a team of passionate engineers. We&apos;re in this to make
    //       a difference.
    //     </p>
    //   </div>
    //  <div className={styles.flexStart + " flex-col overflow-x-auto scrollbar md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2"}>
    //     <div className="flex justify-between items-center p-2">
    //       {teamMembers.slice(0,7).map((member, index) => (
    //         <TeamCard
    //           key={index}
    //           name={member.name}
    //           designation={member.title}
    //           image={member.img}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section id="3dm" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2Updated}>
          This is how it looks.
          <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Our Solution in a Kitchen
          </div>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our solution visualised in a kitchen environment. Click and drag to
          view the model in 3D.
        </p>
      </div>
      <div className={layout.sectionImg}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            width: "100%",
          }}
        >
          <iframe
            src="https://3dwarehouse.sketchup.com/embed/a30a4316-3a9f-4ed0-8637-2016971c97dc?token=dpkj3zzpPuk=&binaryName=s21"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
