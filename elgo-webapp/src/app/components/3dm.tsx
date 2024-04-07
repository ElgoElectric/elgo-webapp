"use client"
import styles from "../constants/style";

export default function ThreeDeeModel() {
  return (
    <section
      className={`flex justify-center items-center sm:px-4 px-6 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2Updated}>
          This is how it looks.
          <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Our Solution in a Kitchen
          </div>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our solution visualised in a kitchen environment. Click and drag to view the model in 3D.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <iframe
          src="https://3dwarehouse.sketchup.com/embed/a30a4316-3a9f-4ed0-8637-2016971c97dc?token=dpkj3zzpPuk=&binaryName=s21"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          width="580"
          height="326"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
