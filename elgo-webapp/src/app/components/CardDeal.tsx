"use client";
import React from "react";
import { card } from "../../../public";
import styles, { layout } from "../constants/style";
import Image from "next/image";
import { ProductSlider } from "./ProductSlider";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { productDesc } from "../constants";

const toggleGroupItemClasses =
  "color-mauve11 data-[state=on]:bg-gradient-to-r from-slate-600  flex h-[35px] w-auto p-2 items-center justify-center bg-slate rounded-md text-base leading-4 focus:z-10";

const CardDeal = () => {
  const [value, setValue] = React.useState("hvac");
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-[42px]`}>
          Energy bills got you sweating?{" "}
          <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-[38px]">
            We analyze,
          </div>
          <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-[38px]">
            reveal, and unlock savings.
          </div>
        </h2>
        <div>
          <ToggleGroup.Root
            className="inline-flex bg-gradient-to-r from-slate-800 to-black p-2 rounded space-x-px"
            type="single"
            value={value}
            onValueChange={(value) => {
              if (value) setValue(value);
            }}
            aria-label="Text alignment"
          >
            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value="hvac"
              aria-label="Left aligned"
            >
              <div
                className={
                  value == "hvac"
                    ? "bg-gradient-to-r from-indigo-400 to-white text-transparent bg-clip-text"
                    : "text-white"
                }
              >
                Air Conditioning
              </div>
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value="fridge"
              aria-label="Center aligned"
            >
              <div
                className={
                  value == "fridge"
                    ? "bg-gradient-to-r from-indigo-500 to-white text-transparent bg-clip-text"
                    : "text-white"
                }
              >
                Refrigerator
              </div>
            </ToggleGroup.Item>

            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value="light"
              aria-label="Right aligned"
            >
              <div
                className={
                  value == "light"
                    ? "bg-gradient-to-r from-indigo-500 to-white text-transparent bg-clip-text"
                    : "text-white"
                }
              >
                Lighting
              </div>
            </ToggleGroup.Item>

            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value="kapp"
              aria-label="Right aligned"
            >
              <div
                className={
                  value == "kapp"
                    ? "bg-gradient-to-r from-indigo-500 to-white text-transparent bg-clip-text"
                    : "text-white"
                }
              >
                Kitchen Appliances
              </div>
            </ToggleGroup.Item>
          </ToggleGroup.Root>
          <div>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              {productDesc[value as keyof typeof productDesc]}
            </p>
          </div>
        </div>
      </div>
      <div className={layout.sectionImg}>
        <Image src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
