"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOulineClose, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

import React from "react";
import { headers } from "@/next.config";
import Logo from "./logo";

export default function Navbar() {
  const [menuIcon, setIcon] = useState(false);

  const handleSmallerScreensNavigation = () => {
    setIcon(!menuIcon);
  };

  return (
    <header className=" bg-blue-700 text-white w-full ease-in duration-300 fixed top-0 left-0 z-10">
      <nav className="max-w-[1366px] mx-auto h-[70px] flex justify-between items-center p-4">
        <div>
          <Link href="/" onClick={handleSmallerScreensNavigation}>
            <span className="font-normal text-1xl md:text-1xl xl:text-3xl uppercase">
              <figure className="flex flex-col items-center rounded-full">
                <Logo />
              </figure>
            </span>
          </Link>
        </div>

        <ul className="hidden md:flex uppercase font-semibold text-xl lg: text-[20px] text-white">
          <li className="mr-4 lg:mr-8 hover:text-amber-200">
            <Link href="/">Espiritual</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-amber-200">
            <Link href="/Familiar">Familiar</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-amber-200">
            <Link href="/Intelectual">Intelectual</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-amber-200">
            <Link href="/Laboral">Laboral</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-amber-200">
            <Link href="/Fisico">Fisico</Link>
          </li>
        </ul>
        {/* pantallas pequenas */}
        <div
          onClick={handleSmallerScreensNavigation}
          className="flex md:hidden"
        >
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-white" />
          ) : (
            <AiOutlineMenu size={25} className="text-white" />
          )}
        </div>

        {/* pantallas celulares */}

        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[70px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white ease-in duration-300"
              : "md:hidden absolute top-[100px] right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-800 text-white  ease-in duration-300"
          }
        >
          {/* navbar celulares */}

          <div className="w-full">
            <ul className="uppercase font-bold text-1xl flex flex-col items-center justify-center text-center top-0">
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-amber-300 cursor-pointer"
              >
                <Link href="/">
                  <figure className="flex flex-col items-center">
                    <Image
                      src="/jesus-icon.png"
                      alt="imagen"
                      width={60}
                      height={60}
                    />
                    <figcaption>Espiritual</figcaption>
                  </figure>
                </Link>
              </li>

              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-amber-300 cursor-pointer items-center"
              >
                <Link href="/Familiar">
                  <figure className="flex flex-col items-center">
                    <Image
                      src="/familiar.png"
                      alt="imagen"
                      width={70}
                      height={70}
                    />
                    <figcaption>Familiar</figcaption>
                  </figure>
                </Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-amber-300 cursor-pointer item-center"
              >
                <Link href="/Intelectual">
                  <figure className="flex flex-col items-center">
                    <Image
                      src="/intelectual.png"
                      alt="imagen"
                      width={70}
                      height={70}
                    />
                    <figcaption>Intelectual</figcaption>
                  </figure>
                </Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-amber-300 cursor-pointer"
              >
                <Link href="/Laboral">
                  <figure className="flex flex-col items-center">
                    <Image
                      src="/Laboral.png"
                      alt="imagen"
                      width={70}
                      height={70}
                    />
                    <figcaption>Laboral</figcaption>
                  </figure>
                </Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-amber-300 cursor-pointer"
              >
                <Link href="/Fisico">
                  <figure className="flex flex-col items-center">
                    <Image
                      src="/fisico.png"
                      alt="imagen"
                      width={70}
                      height={70}
                    />
                    <figcaption>Fisico</figcaption>
                  </figure>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
