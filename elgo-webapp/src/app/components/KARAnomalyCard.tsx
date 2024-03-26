import { FaLocationDot } from "react-icons/fa6";

export default function KARAnomalyCard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full rounded-md bg-gradient-to-r from-slate-800 via-white-100 to-slate-900 p-5 ">
        <div>
          <div className="text-white text-2xl font-bold">
            Refrigerator Anomalies
          </div>
          <div className="text-white text-sm">
            <FaLocationDot className="inline-block text-white" />
            &nbsp;Kitchen
          </div>
          <div className="flex justify-center w-full rounded-md h-[150px] bg-gradient-to-r from-slate-900 to-black mt-5">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
