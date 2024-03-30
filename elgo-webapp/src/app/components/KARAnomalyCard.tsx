"use client"
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { FaKitchenSet } from "react-icons/fa6";
import * as Select from '@radix-ui/react-select';
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function KARAnomalyCard() {
  const { user, error, isLoading } = useUser();
  const [options, setOptions] = useState<any[]>([{"device_label":"Loading", "id":"-1"}]);
  
  useEffect(() => {
  async function getDevices() {
    if (user && user.email) {
      const response = await fetch(`https://elgo-backend.vercel.app/users/getByEmail/${user.email}`);
      const data = await response.json();
      const user_id = data["user_id"];

      const devices = await fetch(`https://elgo-backend.vercel.app/users/${user_id}/devices/`);
      const devices_data = await devices.json();
      setOptions(devices_data["devices"]);
    }
  }
  getDevices();
  }, [user]);

  async function getDevices() {
    if (user && user.email) {
      const response = await fetch(`https://elgo-backend.vercel.app/users/getByEmail/${user.email}`);
      const data = await response.json();
      const user_id = data["user_id"];

      const devices = await fetch(`https://elgo-backend.vercel.app/users/${user_id}/devices/`);
      const devices_data = await devices.json();
      setOptions(devices_data["devices"]);
    }
  }

  const SelectDemo = () => (
    <Select.Root onOpenChange={getDevices}>
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
              <Select.Item key={index} value={option["id"]} className="bg-black text-[12px] p-1 rounded-md">
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
      <div className="flex justify-center w-full rounded-md h-[150px] bg-gradient-to-r from-slate-900 to-black mt-5">
        <div></div>
      </div>
    </div>
  );
}






