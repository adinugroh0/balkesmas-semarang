"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImagesSlider } from "./ui/images-slider";
import { motion } from "framer-motion";

export function Beranda() {
  const imageUrls = [
    "https://th.bing.com/th/id/OIP.ZFhOPejMa4yQeBxCy4XfpgHaE0?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.mBuiA0eh1H370KH4XR2lXgHaFj?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.JAdCsuYM81tRTlOqjLDX1wHaDs?rs=1&pid=ImgDetMain",
  ];

  return (
    <>
      <ImagesSlider className="h-[40rem] top-11" images={imageUrls}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center">
          <Image
            src="/logopolos.png"
            alt="Background Image"
            className="w-40"
            width={800}
            height={800}
          />
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            BALKESMAS <br /> WILAYAH SEMARANG
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </>
  );
}

export default Beranda;
