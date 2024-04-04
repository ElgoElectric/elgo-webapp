"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { use, useEffect, useRef, useState } from "react";
import { FaKitchenSet } from "react-icons/fa6";
import * as Select from "@radix-ui/react-select";
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Chart } from "chart.js/auto";

export default function KARAnomalyCard() {
  const { user, error, isLoading } = useUser();
  const [options, setOptions] = useState<any[]>([
    { device_label: "Loading", id: "-1" },
  ]);

  useEffect(() => {
    async function getDevices() {
      if (user && user.email) {
        const response = await fetch(
          `https://elgo-backend.vercel.app/users/getByEmail/${user.email}`
        );
        const data = await response.json();
        const user_id = data["user_id"];

        const devices = await fetch(
          `https://elgo-backend.vercel.app/users/${user_id}/devices/`
        );
        const devices_data = await devices.json();
        setOptions(devices_data["devices"]);
      }
    }
    getDevices();
  }, [user]);

  const [selectedDevice, setSelectedDevice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  async function getGraph(value: string) {
    console.log(value);
    setSelectedDevice(value);
    setLoading(true);
    getData(value);
    setLoading(false);
  }

  const chartRef = useRef(null);
  const [data, setData] = useState<any[]>([]);
  const [labels, setLabels] = useState<any[]>([]);

  async function getData(deviceLabel: string) {
    const response = await fetch(
      `https://elgo-backend.vercel.app/datastreams/deviceLabel/${deviceLabel}`
    );
    if (response.ok) {
      const Graphdata = await response.json();
      const cleanedData = Graphdata["datastreams"].map((items: any) =>
        parseFloat(items["power"])
      );
      const cleanedLabels = Graphdata["datastreams"].map((items: any) =>
        convertDateTime(items["timestamp"])
      );
      setData(cleanedData);
      setLabels(cleanedLabels);
      console.log("YAYAYA");
    } else{
      console.log("NOOOOO");
    }
  }

  useEffect(() => {
    if (chartRef.current) {
      if ((chartRef.current as any).chart) {
        (chartRef.current as any).chart.destroy();
      }

      const context = (
        chartRef.current as HTMLCanvasElement | null
      )?.getContext("2d");
      // const chartdata: any[] = data.map((items) => parseFloat(items["power"]));
      //console.log(chartdata);
      if (context) {
        const newChart = new Chart(context, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Power",
                data: data,

                fill: {
                  target: "origin",
                  above: "rgba(86,194,16, 0.5)", // Area will be red above the origin    // And blue below the origin
                },

                //backgroundColor: ["black"],
                borderColor: "rgb(86,194,16)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio:5.2,
            scales: {
              x: {
                grid: {
                  display: true,
                },
                ticks: {
                  display: false, // Hide labels
                },
                border: {
                  display: true,
                  color: "rgba(255,255,255,1)",
                },
                //distribution: 'linear', // Add this line
              },
              y: {
                // defining min and max so hiding the dataset does not change scale range
                min: Math.min(...data) - 10,
                max: Math.max(...data) + 20,
                grid: {
                  display: true,
                },
                border: {
                  display: true,
                  color: "rgb(255,255,255)",
                },
              },
            },
            plugins: {
              legend: {
                position: "top",
                align: "end",
              },
            },
          },
        });

        (chartRef.current as any).chart = newChart;
      }
    }
  }, [data, labels]);

  const SelectDemo = () => (
    <Select.Root value={selectedDevice} onValueChange={getGraph}>
      <Select.Trigger
        className="inline-flex items-center justify-center rounded p-[5px] text-white leading-none h-full w-auto gap-[5px] bg-slate-900 text-white"
        aria-label="Food"
      >
        <Select.Value placeholder="Select a Device.." />
        <Select.Icon className="text-white">
          <FaChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-black rounded-md">
          <Select.Viewport className="p-[2px]">
            {options.map((option, index) => (
              <Select.Item
                key={index}
                value={option["device_label"]}
                className="bg-black text-[12px] p-1 rounded-md"
              >
                <Select.ItemText>{option["device_label"]}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );

  return (
    <div className="w-full h-full flex flex-col rounded-md bg-gradient-to-r from-slate-800 via-white-100 to-slate-900 p-5">
      <div className="text-white text-2xl font-bold">Device Analysis</div>
      <div className="text-white text-sm">
        <FaKitchenSet className="inline-block text-white" />
        &nbsp;&nbsp;
        <SelectDemo />
      </div>
      <div className="flex justify-center w-full rounded-md h-[150px] bg-black mt-5">
        <div>
          {loading ? (
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
          ) : (
            <div className="w-full h-full">
              <canvas
                className="w-full h-full"
                style={{ width: "750px", height: "150px" }}
                ref={chartRef}
              />
            </div>
          )}
        </div>
      </div>
    </div>
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
  const second = dt.getSeconds().toString().padStart(2, "0"); // Get seconds
  const meridian = hour < 12 ? "AM" : "PM";

  // Convert hour to 12-hour format
  let convertedHour = hour;
  if (hour === 0) {
    convertedHour = 12;
  } else if (hour > 12) {
    convertedHour = hour - 12;
  }

  return `${day}, ${month} ${dayOfMonth}, ${year}, ${convertedHour}:${minute}:${second} ${meridian}`; // Include seconds
}
