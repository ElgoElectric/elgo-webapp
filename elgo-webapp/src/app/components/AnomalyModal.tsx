"use client";
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import { useEffect, useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { FaCheckSquare } from "react-icons/fa";
import { BsXSquareFill } from "react-icons/bs";

interface AnomalyModalProps {
  deviceName: string;
  consumption: string;
}

const toggleGroupItemClasses =
  "bg-black p-2 data-[state=on]:bg-indigo-600 data-[state=on]:shadow-[0_1px_5px] data-[state=on]:border-[1px] border-white shadow-white flex w-auto items-center justify-center bg-slate rounded-md text-base leading-4 focus:z-10 text-sm font-bold hover:shadow-[0_1px_5px] hover:shadow-white";

export default function AnomalyModal(props: AnomalyModalProps) {
  const [data, setData] = useState<any[]>([]);
  const [timevalue, setTimeValue] = useState<string>("24h");
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function getAnomalies() {
      setLoading(true);
      const response = await fetch(
        `https://elgo-backend.vercel.app/anomalies/${props.deviceName}/last${timevalue}ours`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    getAnomalies();
  }, [props.deviceName, timevalue]);

  async function updateAction(id:number){
    const response = await fetch(`https://elgo-backend.vercel.app/anomalies/${id}/updateAction`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        action_taken: true
      })
    });

    if (response.ok){
      setLoading(true);
      const response = await fetch(
        `https://elgo-backend.vercel.app/anomalies/${props.deviceName}/last${timevalue}ours`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } else {
      console.log("Error updating action");
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="flex flex-col justify-center my-2">
          <div className="w-full sm:w-1/2 lg:w-full sm-gap-3 rounded-md hover:bg-gradient-to-r from-indigo-500 via-white-100 to-slate-900">
            <div className="p-3">
              <div className="flex justify-between text-white text-sm">
                <div className="w-auto bg-indigo-600 rounded-full flex items-center justify-center p-1">
                  <FaRegLightbulb className="text-white" />
                </div>
                <div>{props.deviceName}</div>
                <div>{props.consumption}</div>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-10 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[75vh] w-[100vw] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-gradient-to-r from-slate-800 via-white-100 to-slate-900 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-auto my-10 no-scrollbar">
          <Dialog.Title className="flex text-white m-0 text-[17px] font-medium">
            Device Anomaly Table:{" "}
            <div className="text-[#EE4B2B]">&nbsp;{props.deviceName}</div>
          </Dialog.Title>
          <Dialog.Description className="text-white mt-[10px] mb-5 text-[15px] leading-normal">
            <div className="flex justify-between">
              <div className="flex flex-col justify-center">
                <div>Energy Consumed: {props.consumption}&nbsp;</div>
                <div>
                  Here&apos;s a list of anomalies detected in the device.
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <ToggleGroup.Root
                  className="inline-flex bg-gradient-to-r from-slate-800 via-white-100 to-slate-900 rounded shadow-[0_2px_10px] shadow-black space-x-1 p-1 mt-2"
                  type="single"
                  value={timevalue}
                  onValueChange={(value) => {
                    if (value) setTimeValue(value);
                  }}
                  aria-label="Text alignment"
                >
                  <ToggleGroup.Item
                    className={toggleGroupItemClasses}
                    value="24h"
                  >
                    24h
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    className={toggleGroupItemClasses}
                    value="48h"
                    //onClick={onToggleChange}
                  >
                    48h
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>
            </div>
          </Dialog.Description>

          <div className="flex flex-col basis-full md:justify-center items-center">
            <div className="w-[95%] grid grid-cols-5 text-center text-white md:max-lg:text-[10px] lg:text-sm text-[6px] font-quicksand font-bold md:p-5 p-3 md:rounded-2xl rounded-lg bg-indigo-600">
              <div className="text-wrap break-words">Anomaly ID</div>
              <div className="text-wrap break-words">Start Timestamp</div>
              <div className="text-wrap break-words">End Timestamp</div>
              <div className="text-wrap break-words">Valid Anomaly</div>
              <div className="text-wrap break-words">Action Taken</div>
            </div>
            {loading ? (
              <div className="w-[95%] md:rounded-2xl rounded-lg bg-black p-2">
                <div className="animate-spin w-full h-full flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="w-[95%] md:rounded-2xl rounded-lg bg-black">
                {data?.map((data, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-5 text-center text-white md:max-lg:text-[10px] lg:text-sm text-[6px] font-quicksand font-bold md:p-5 p-3"
                  >
                    <div className="text-wrap break-words">{data["id"]}</div>
                    <div className="text-wrap break-words">
                      {convertDateTime(data["timestamp_start"])}
                    </div>
                    <div className="text-wrap break-words">
                      {convertDateTime(data["timestamp_start"])}
                    </div>
                    <div className="flex items-center justify-center text-wrap break-words">
                      {data["valid_anomaly"] ? (
                        <FaCheckSquare className="text-[#7ed957]" />
                      ) : (
                        <BsXSquareFill className="text-[#EE4B2B]" />
                      )}
                    </div>
                    <div className="flex items-center justify-center text-wrap break-words">
                      {data["action_taken"] ? (
                        <FaCheckSquare className="text-[#7ed957]" />
                      ) : (
                        <button onClick={()=>updateAction(data["id"])} className="bg-slate-800 p-2 focus:bg-indigo-600 focus:shadow-[0_1px_5px] focus:border-[1px] border-white shadow-white flex w-auto items-center justify-center bg-slate rounded-md text-base leading-4 focus:z-10 text-xs font-bold hover:shadow-[0_1px_5px] hover:shadow-white">
                          Take Action
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Dialog.DialogClose asChild>
            <button
              className="text-white hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <IoClose />
            </button>
          </Dialog.DialogClose>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function convertDateTime(dtStr: string): string {
  const dt = new Date(dtStr);
  const day = dt.toLocaleDateString("en-US", { weekday: "long" });
  const month = dt.toLocaleDateString("en-US", { month: "long" });
  const dayOfMonth = dt.getDate();
  const year = dt.getFullYear();
  const hour = dt.getHours();
  const minute = dt.getMinutes().toString().padStart(2, "0");
  const meridian = hour < 12 ? "AM" : "PM";

  // Convert hour to 12-hour format
  let convertedHour = hour;
  if (hour === 0) {
    convertedHour = 12;
  } else if (hour > 12) {
    convertedHour = hour - 12;
  }

  return `${day}, ${month} ${dayOfMonth}, ${year}, ${convertedHour}:${minute} ${meridian}`;
}
