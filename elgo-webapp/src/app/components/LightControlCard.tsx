"use client";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { RiLightbulbLine } from "react-icons/ri";
import { RiLightbulbFlashLine } from "react-icons/ri";

export default function LightControlCard() {
    
    const [Light, setLight] = useState<boolean>(false);

    return (
        <div className="flex flex-col justify-center items-center">
      <div className="w-full h-full rounded-md bg-gradient-to-r from-slate-800 via-white-100 to-slate-900 p-5 ">
        <div>
          <div className="text-white text-2xl font-bold">Lighting</div>
          <div className="text-white text-sm">
            <FaLocationDot className="inline-block text-white" />
            &nbsp;Restaurant Foyer
          </div>
        <div className="">
          <div className="flex justify-center items-cente mt-10">
            <button onClick={()=>setLight(!Light)} className={Light?"border-[1px] border-white bg-indigo-600 w-1/4 rounded-full flex items-center justify-center p-1 shadow-[0_1px_5px] shadow-white":"border-[1px] border-indigo-800 bg-indigo-800 w-1/4 rounded-full flex items-center justify-center p-1"}>
                <div className="p-7">
                    {Light?<RiLightbulbFlashLine className="text-white text-2xl font-bold"/>:<RiLightbulbLine className="text-white text-2xl font-bold"/>}
                </div>
            </button>
          </div>

          <div className="flex justify-end mt-5">
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
    </div>
    );
}