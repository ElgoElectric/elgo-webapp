import Link from "next/link";
import { FaRegLightbulb } from "react-icons/fa";

export default function ConsumptionCard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full rounded-md bg-gradient-to-r from-slate-800 via-white-100 to-slate-900 p-5 ">
        <div>
          <div className="flex justify-center">
            <div className="w-full rounded-md bg-gradient-to-r to-slate-800 via-white-100 from-slate-900">
              <div className="p-3">
                <div className="flex justify-start text-white text-sm font-semibold">
                  Total Consumption
                </div>
                <div className="flex justify-start text-white text-2xl font-bold">
                  {"1,000 kWh"}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <ConsumptionRow />
            <ConsumptionRow />
          </div>
          <div className="flex justify-end mt-1">
            <Link href={"/home"} className={`flex justify-start text-white text-sm font-semibold hover:text-indigo-600`}> &gt; Click for Insights</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsumptionRow() {
  return (
    <div className="flex flex-col justify-center my-2">
      <div className="w-full sm:w-1/2 lg:w-full sm-gap-3 rounded-md hover:bg-gradient-to-r from-indigo-500 via-white-100 to-slate-900">
        <div className="p-3">
          <div className="flex justify-between text-white text-sm">
            <div className="w-auto bg-indigo-600 rounded-full flex items-center justify-center p-1">
                <FaRegLightbulb className="text-white"/>
            </div>
            <div>{"Device Name"}</div>
            <div>{"100kWh"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
