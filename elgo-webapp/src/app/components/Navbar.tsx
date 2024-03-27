"use client";
import React, { useState } from "react";
import { close, logo, menu } from "../../../public";
import { navLinks } from "../constants";
import Image from "next/image";
import Link from "next/link";
import styles from "../constants/style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div className={`${styles.paddingX}`}>
      <nav className="xl:max-w-full w-full fixed top-0 flex justify-between py-6 items-center navbar z-10 bg-black px-6">
        
        <div className="w-1/2 flex justify-start">
          <Image src={logo} alt="hoobank" className="w-[54px] h-[52px]" />
          <div className="font-poppins font-medium text-[24px] text-white ml-2 flex items-center">
            Elgo
            <div className="font-poppins font-medium text-[24px] text-[#7ed957] flex items-center">Electric</div>
          </div>
        </div>
        <ul className="list-none sm:flex hidden justify-center items-center flex-1 pr-1">
          {navLinks.map((nav, i) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                i === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white mr-10`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-10">
            <Link href={"/api/auth/login"}>Sign In</Link>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((previous) => !previous)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, i) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    i === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white mr-10`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
