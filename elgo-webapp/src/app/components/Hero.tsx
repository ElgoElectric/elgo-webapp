import styles from "../constants/style";
import { discount, robot } from "../../../public";
import GetStarted from "./GetStarted";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[72px] text-[#7ed957] ss:leading-[100.8px] leading-[75px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            No One <br className="sm:block hidden" />{" "}
            <span className="text-gradient text-white">Looks Out</span>{" "}
          </h1>
          <div className="ss:flex md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[72px] text-[#7ed957] ss:leading-[100px] leading-[75px] w-full bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          For the Lil&apos; Guys.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Small and medium sized F&B outlets lack an impactful energy optimization solution.
          ElgoElectric is here to change that.
        </p>
      </div>
      <div
        className={`flex-1 flex justify-end items-center md:my-0 my-10 relative`}
      >
        <Image
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 rounded-full bg-gradient-to-r from-pink-500" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-white bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 rounded-full bg-gradient-to-r from-blue-500 " /> */}
      </div>
    </section>
  );
};

export default Hero;
