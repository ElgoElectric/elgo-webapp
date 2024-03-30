"use client";
import { FaPlus } from "react-icons/fa6";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";
import DeviceModal from "./DeviceModal";

export default function AddDeviceCard() {
  
  return (
    <div className="w-full h-full flex flex-col rounded-md bg-gradient-to-r from-slate-800 via-white-100 to-slate-900 p-5">
      <div className="text-white text-2xl font-bold">Add New Device</div>
      <div className="text-white text-sm">
        Evolve your setup with a new device!
      </div>
      <div className="flex flex-col justify-center h-full items-center mt-5 bg-gradient-to-r from-slate-900 to-black rounded-md">
        <DeviceModal />
      </div>
    </div>
  );
}
