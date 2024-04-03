"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function Donut() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if ((chartRef.current as any).chart) {
        (chartRef.current as any).chart.destroy();
      }

      const context = (chartRef.current as HTMLCanvasElement | null)?.getContext("2d");

      if (context) {
        const newChart = new Chart(context, {
          type: "doughnut",
          data: {
            labels: ["Kitchen Appliances", "Air Conditioning", "Refrigeration", "Lighting"],
            datasets: [
              {
                label: "% of Energy Consumption in Restaurants",
                data: [28.3, 31.3, 25.3, 15.2],
                backgroundColor: [
                  "#B2B0EAff",
                  "#8481DDff",
                  "#5752D1ff",
                  "#3C3D99ff",
                  
                ],
                borderColor: [
                  "#FFFFFFa0",
                  "#FFFFFFa0",
                  "#FFFFFFa0",
                  "#FFFFFFa0",
                  
                ],
                borderWidth: 0,
                spacing: 3,
              },
            ],
          },
          options: {
            // responsive: true
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                //padding: 20,
              },
            },
          },
        });

        //chartRef.current.chart = newChart;
      }
    }
  }, []);
  return (
    <div className="w-1/2 rounded-md bg-gradient-to-r from-slate-800 via-white-100 to-black p-5 ">
        <div>
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] mb-3">
                    Device Consumption
            </h4>
        </div>
        <div style={{ position: "relative", width: "40vw", height: "50vh" }} className=" flex justify-start">
            <canvas ref={chartRef} />
        </div>
    </div>
  );
}