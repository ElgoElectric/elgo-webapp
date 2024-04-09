"use client";
import { FaLocationDot } from "react-icons/fa6";
import * as Slider from "@radix-ui/react-slider";
import { useEffect, useState } from "react";

export default function HVACCard() {
  const [valu, setVal] = useState<number[]>([0]);
  const [Temperature, setTemperature] = useState<number>(18);
  const [green, setGreen] = useState<boolean>(false);

  async function temperatureset(val: number[]) {
    var newTemp = 18 + val[0];
    setVal(val);
    
    setTemperature(newTemp);

    const response = await fetch("https://elgo-backend.vercel.app/devices/hvac/getTemp");
    if (response.ok){
      const data = await response.json();
      const currTemp = data["temp"];
      if (currTemp == newTemp){
        setGreen(true);
      } else {
        setGreen(false);
      }
    }
    
    const newData = await fetch('https://elgo-backend.vercel.app/devices/hvac/setTemp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "temp": newTemp
      })
    });
    if (!newData.ok){
      console.log("Error setting temperature");
    }
  }

  useEffect(() => {
      async function getElgoTemp() {
        const response = await fetch("https://elgo-backend.vercel.app/devices/hvac/getTemp");
        if (!response.ok) {
          console.log("Error fetching temperature");
          return;
        }
        const data = await response.json();
        setVal([data["temp"]-18]);
        setTemperature(data["temp"]);
        setGreen(true);
      }

      getElgoTemp(); // Call once immediately
      const intervalId = setInterval(getElgoTemp, 5000); // Then every 5 seconds

      return () => clearInterval(intervalId); // Clean up on component unmount
    }, []);

  // async function setElgoTemp(){
  //   //Get The Temperature Using API (Not Ready Yet)
  //   setVal([6]);
  //   setTemperature(24);
  //   setGreen(true);
  // }

  return (
    <div className="w-full h-full flex flex-col rounded-md bg-gradient-to-r from-slate-800 via-white-100 to-slate-900 p-5">
      <div className="text-white text-2xl font-bold">HVAC Temperature</div>
      <div className="text-white text-sm">
        <FaLocationDot className="inline-block text-white" />
        &nbsp;Kitchen
      </div>
      <div className="flex flex-col h-full justify-between mt-5 bg-gradient-to-r rounded-md from-slate-900 to-black">
      <div className={`flex justify-center items-center text-2xl font-bold pt-5 ${green ? 'text-[#7ed957]' : 'text-white'}`}>
        {`${Temperature}°C`}
      </div>

      <div className="flex justify-center items-center pt-7">
        <div className="text-white text-xl font-semibold mx-2">18°C</div>
        <div>
          <form>
            <Slider.Root
              className="relative flex items-center select-none touch-none w-[150px] h-5"
              value={valu}
              max={9}
              step={1}
              onValueChange={temperatureset}
            >
              <Slider.Track className="bg-black relative grow rounded-full h-[3px]">
                <Slider.Range className="absolute bg-white rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb
                className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-white rounded-[10px] hover:bg-violet3 focus:border-2 focus:bg-indigo-600"
                aria-label="Volume"
              />
            </Slider.Root>
          </form>
        </div>
        <div className="text-white text-xl font-semibold mx-2">27°C</div>
      </div>
      <div className="flex justify-end pt-5 mb-1 mr-1">
        {/* <button onClick={setElgoTemp} className="border-[1px] text-[10px] p-1 border-indigo-800 bg-indigo-800 hover:border-white hover:bg-indigo-600 rounded-md flex items-center justify-center hover:shadow-[0_1px_5px] hover:shadow-white">
          Set Recommended Temperature
        </button> */}
      </div>
      </div>
    </div>
  );
}
