"use client";
import { FaLocationDot } from "react-icons/fa6";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";
import Link from "next/link";

export default function HVACCard() {
  const [Temperature, setTemperature] = useState<number>(24);

  function temperatureset(val: number[]){
    var newTemp = 18+val[0];
    setTemperature(newTemp);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-full rounded-md bg-gradient-to-r from-slate-800 via-white-100 to-slate-900 p-5 ">
        <div>
          <div className="text-white text-2xl font-bold">HVAC Temperature</div>
          <div className="text-white text-sm">
            <FaLocationDot className="inline-block text-white" />
            &nbsp;Kitchen
          </div>

          <div className="flex justify-center items-center text-white text-2xl font-bold pt-5">
            {`${Temperature}°C`}
          </div>

          <div className="flex justify-center items-center pt-7">
            <div className="text-white text-xl font-semibold mx-2">18°C</div>
            <div>
              <form>
                <Slider.Root
                  className="relative flex items-center select-none touch-none w-[150px] h-5"
                  defaultValue={[6]}
                  max={12}
                  step={1}
                  onValueChange={(value)=>temperatureset(value)}
                >
                  <Slider.Track className="bg-black relative grow rounded-full h-[3px]">
                    <Slider.Range className="absolute bg-white rounded-full h-full" />
                  </Slider.Track>
                  <Slider.Thumb
                    className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-2 focus:bg-indigo-600"
                    aria-label="Volume"
                  />
                </Slider.Root>
              </form>
            </div>
            <div className="text-white text-xl font-semibold mx-2">30°C</div>
          </div>
          <div className="flex justify-end pt-10">
            <Link
              href={"/home"}
              className={`flex justify-start text-white text-sm font-semibold hover:text-indigo-600`}
            >
              {" "}
              &gt; Click for Insights
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

