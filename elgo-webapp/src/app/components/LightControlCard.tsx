"use client";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { RiLightbulbLine, RiLightbulbFlashLine, RiLightbulbFlashFill } from "react-icons/ri";
import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

const toggleGroupItemClasses =
  "bg-black p-4 data-[state=on]:bg-indigo-600 data-[state=on]:shadow-[0_1px_5px] data-[state=on]:border-[1px] border-white shadow-white flex w-auto p-2 items-center justify-center bg-slate rounded-md text-base leading-4 focus:z-10 text-2xl font-bold hover:shadow-[0_1px_5px] hover:shadow-white";

export default function LightControlCard() {
  const [Light, setLight] = useState<boolean>(false);

  async function turnOnLight() {
    setLight(true);
    const lightstate = await fetch("http://44.203.163.147:3000/togglePower?isPowerOn=true&plugID=shellyplusplugs-d4d4daec6c98");
    const response = await lightstate.json();
    if (response.success) {
      console.log("Light is on");
    }
  }

  async function turnOffLight() {
    setLight(false);
    const lightstate = await fetch("http://44.203.163.147:3000/togglePower?isPowerOn=false&plugID=shellyplusplugs-d4d4daec6c98");
    const response = await lightstate.json();
    if (response.success) {
      console.log("Light is off");
    }
  }

  return (
    <div className="w-full h-full flex flex-col rounded-md bg-gradient-to-r from-slate-800 via-white-100 to-slate-900 p-5">
      <div className="text-white text-2xl font-bold">Lighting</div>
      <div className="text-white text-sm">
        <FaLocationDot className="inline-block text-white" />
        &nbsp;Restaurant Foyer
      </div>
      <div className="flex flex-col h-full justify-between mt-5 bg-gradient-to-r rounded-md from-slate-900 to-black">
        <div className="flex h-full justify-center items-center">
          
          <ToggleGroup.Root
            className="inline-flex bg-gradient-to-r from-slate-800 via-white-100 to-slate-900 rounded shadow-[0_2px_10px] shadow-black space-x-1 p-2 mt-2"
            type="single"
            defaultValue="center"
            aria-label="Text alignment"
          >
            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value="left"
              onClick={turnOffLight}
              aria-label="Left aligned"
            >
              <RiLightbulbLine className="text-white text-2xl font-bold" />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value="center"
              onClick={turnOnLight}
              aria-label="Center aligned"
            >
              <RiLightbulbFlashLine className="text-white text-2xl font-bold" />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value="right"
              onClick={turnOnLight}
              aria-label="Right aligned"
            >
              <RiLightbulbFlashFill className="text-white text-2xl font-bold" />
            </ToggleGroup.Item>
          </ToggleGroup.Root>
          
          
        </div>

        <div className="flex justify-end pt-1 mb-1 mr-1">
          <button className="border-[1px] text-[10px] p-1 border-indigo-800 bg-indigo-800 hover:border-white hover:bg-indigo-600 rounded-md flex items-center justify-center hover:shadow-[0_1px_5px] hover:shadow-white">
            Set Recommended Lighting
          </button>
        </div>
      </div>
    </div>
  );
}
