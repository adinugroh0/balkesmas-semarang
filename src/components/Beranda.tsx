"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImagesSlider } from "./ui/images-slider";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function Beranda() {
  const imageUrls = [
    "https://th.bing.com/th/id/OIP.ZFhOPejMa4yQeBxCy4XfpgHaE0?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.mBuiA0eh1H370KH4XR2lXgHaFj?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.JAdCsuYM81tRTlOqjLDX1wHaDs?rs=1&pid=ImgDetMain",
  ];

  return (
    <>
      <ImagesSlider className="h-[40rem] " images={imageUrls}>
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
          className="z-50 flex flex-col lg-flex-row justify-center items-center">
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
          <button className="px-4 py-2 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-blue-600 transition duration-1000 ">
            <span>Hubungi Kami →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent  to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>

      <div className="flex flex-col items-center justify-center lg:flex-row flex-wrap p-0 ">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
            {" "}
            <Highlight className="text-white items-center justify-center flex dark:text-white">
              LAYANAN BALKESMAS
            </Highlight>
          </motion.h1>
        </HeroHighlight>
        <div className=" relative transform-style-preserve-3d w-[400px] h-[500px] m-9 transition-transform  duration-700 hover:rotate-y-180">
          <div className=" bg-[#ffffff] shadow-2xl flex flex-col p-12 gap-8 justify-center   rounded-[10px] text-black absolute w-full h-full backface-hidden">
            <svg
              width="79"
              height="79"
              viewBox="0 0 79 79"
              fill=""
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50.4375 38.4063C48.9062 38.4063 47.6113 37.8769 46.5525 36.8181C45.4938 35.7594 44.9658 34.4659 44.9688 32.9375C44.9717 31.4092 45.501 30.1142 46.5569 29.0525C47.6127 27.9909 48.9062 27.4629 50.4375 27.4688C51.9688 27.4746 53.2637 28.004 54.3225 29.0569C55.3812 30.1098 55.9092 31.4034 55.9062 32.9375C55.9033 34.4717 55.374 35.7667 54.3181 36.8225C53.2623 37.8784 51.9688 38.4063 50.4375 38.4063ZM28.5625 38.4063C27.0313 38.4063 25.7363 37.8769 24.6775 36.8181C23.6188 35.7594 23.0908 34.4659 23.0938 32.9375C23.0967 31.4092 23.626 30.1142 24.6819 29.0525C25.7377 27.9909 27.0313 27.4629 28.5625 27.4688C30.0938 27.4746 31.3888 28.004 32.4475 29.0569C33.5063 30.1098 34.0342 31.4034 34.0313 32.9375C34.0283 34.4717 33.499 35.7667 32.4431 36.8225C31.3873 37.8784 30.0938 38.4063 28.5625 38.4063ZM39.5 61.375C35.125 61.375 31.1685 60.1719 27.6306 57.7656C24.0927 55.3594 21.4867 52.1875 19.8125 48.25H59.1875C57.5104 52.1875 54.9044 55.3594 51.3694 57.7656C47.8344 60.1719 43.8779 61.375 39.5 61.375ZM39.5 78.875C34.0312 78.875 28.9096 77.8367 24.135 75.76C19.3604 73.6834 15.2042 70.8761 11.6663 67.3382C8.12834 63.8002 5.32105 59.644 3.24438 54.8694C1.16771 50.0948 0.127923 44.9717 0.125006 39.5C0.122089 34.0284 1.16188 28.9067 3.24438 24.135C5.32688 19.3634 8.13271 15.2071 11.6619 11.6663C15.191 8.12544 19.3473 5.31815 24.1306 3.2444C28.914 1.17065 34.0371 0.130858 39.5 0.125024C44.9629 0.119191 50.086 1.15898 54.8694 3.2444C59.6527 5.32982 63.809 8.13565 67.3381 11.6619C70.8673 15.1881 73.6746 19.3444 75.76 24.1307C77.8454 28.9169 78.8838 34.04 78.875 39.5C78.8662 44.96 77.8279 50.0831 75.76 54.8694C73.6921 59.6556 70.8848 63.8119 67.3381 67.3382C63.7915 70.8644 59.6352 73.6717 54.8694 75.76C50.1035 77.8484 44.9804 78.8867 39.5 78.875ZM39.5 70.125C47.9583 70.125 55.1771 67.1354 61.1562 61.1563C67.1354 55.1771 70.125 47.9584 70.125 39.5C70.125 31.0417 67.1354 23.8229 61.1562 17.8438C55.1771 11.8646 47.9583 8.87502 39.5 8.87502H38.1875C37.75 8.87502 37.3125 8.94794 36.875 9.09377C36.4375 9.53127 36.1458 10.0052 36 10.5156C35.8542 11.0261 35.7812 11.5729 35.7812 12.1563C35.7812 13.6875 36.3092 14.9825 37.365 16.0413C38.4208 17.1 39.7158 17.6279 41.25 17.625C41.9062 17.625 42.5085 17.5156 43.0569 17.2969C43.6052 17.0781 44.1696 16.9688 44.75 16.9688C45.625 16.9688 46.3542 17.2969 46.9375 17.9531C47.5208 18.6094 47.8125 19.375 47.8125 20.25C47.8125 21.9271 47.0279 23.0034 45.4588 23.4788C43.8896 23.9542 42.4867 24.1904 41.25 24.1875C37.9688 24.1875 35.144 23.0034 32.7756 20.635C30.4073 18.2667 29.2217 15.4404 29.2188 12.1563V11.5C29.2188 11.2813 29.2552 10.9896 29.3281 10.625C23.276 12.8125 18.3542 16.4948 14.5625 21.6719C10.7708 26.849 8.87501 32.7917 8.87501 39.5C8.87501 47.9584 11.8646 55.1771 17.8438 61.1563C23.8229 67.1354 31.0417 70.125 39.5 70.125Z"
                fill="#2A8EE4"
              />
            </svg>
            <div>
              <h1 className="font-bold text-3xl">Klinik Anak</h1>
            </div>
            <h1 className="text-[#2A8EE4]">SELENGKAPNYA</h1>
          </div>
          <div className="card-back bg-[#2A8EE4] text-white flex flex-col p-12 gap-8 justify-center shadow-2xl rounded-[10px]  absolute w-full h-full backface-hidden rotate-y-180">
            <svg
              width="79"
              height="79"
              viewBox="0 0 79 79"
              fill=""
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50.4375 38.4063C48.9062 38.4063 47.6113 37.8769 46.5525 36.8181C45.4938 35.7594 44.9658 34.4659 44.9688 32.9375C44.9717 31.4092 45.501 30.1142 46.5569 29.0525C47.6127 27.9909 48.9062 27.4629 50.4375 27.4688C51.9688 27.4746 53.2637 28.004 54.3225 29.0569C55.3812 30.1098 55.9092 31.4034 55.9062 32.9375C55.9033 34.4717 55.374 35.7667 54.3181 36.8225C53.2623 37.8784 51.9688 38.4063 50.4375 38.4063ZM28.5625 38.4063C27.0313 38.4063 25.7363 37.8769 24.6775 36.8181C23.6188 35.7594 23.0908 34.4659 23.0938 32.9375C23.0967 31.4092 23.626 30.1142 24.6819 29.0525C25.7377 27.9909 27.0313 27.4629 28.5625 27.4688C30.0938 27.4746 31.3888 28.004 32.4475 29.0569C33.5063 30.1098 34.0342 31.4034 34.0313 32.9375C34.0283 34.4717 33.499 35.7667 32.4431 36.8225C31.3873 37.8784 30.0938 38.4063 28.5625 38.4063ZM39.5 61.375C35.125 61.375 31.1685 60.1719 27.6306 57.7656C24.0927 55.3594 21.4867 52.1875 19.8125 48.25H59.1875C57.5104 52.1875 54.9044 55.3594 51.3694 57.7656C47.8344 60.1719 43.8779 61.375 39.5 61.375ZM39.5 78.875C34.0312 78.875 28.9096 77.8367 24.135 75.76C19.3604 73.6834 15.2042 70.8761 11.6663 67.3382C8.12834 63.8002 5.32105 59.644 3.24438 54.8694C1.16771 50.0948 0.127923 44.9717 0.125006 39.5C0.122089 34.0284 1.16188 28.9067 3.24438 24.135C5.32688 19.3634 8.13271 15.2071 11.6619 11.6663C15.191 8.12544 19.3473 5.31815 24.1306 3.2444C28.914 1.17065 34.0371 0.130858 39.5 0.125024C44.9629 0.119191 50.086 1.15898 54.8694 3.2444C59.6527 5.32982 63.809 8.13565 67.3381 11.6619C70.8673 15.1881 73.6746 19.3444 75.76 24.1307C77.8454 28.9169 78.8838 34.04 78.875 39.5C78.8662 44.96 77.8279 50.0831 75.76 54.8694C73.6921 59.6556 70.8848 63.8119 67.3381 67.3382C63.7915 70.8644 59.6352 73.6717 54.8694 75.76C50.1035 77.8484 44.9804 78.8867 39.5 78.875ZM39.5 70.125C47.9583 70.125 55.1771 67.1354 61.1562 61.1563C67.1354 55.1771 70.125 47.9584 70.125 39.5C70.125 31.0417 67.1354 23.8229 61.1562 17.8438C55.1771 11.8646 47.9583 8.87502 39.5 8.87502H38.1875C37.75 8.87502 37.3125 8.94794 36.875 9.09377C36.4375 9.53127 36.1458 10.0052 36 10.5156C35.8542 11.0261 35.7812 11.5729 35.7812 12.1563C35.7812 13.6875 36.3092 14.9825 37.365 16.0413C38.4208 17.1 39.7158 17.6279 41.25 17.625C41.9062 17.625 42.5085 17.5156 43.0569 17.2969C43.6052 17.0781 44.1696 16.9688 44.75 16.9688C45.625 16.9688 46.3542 17.2969 46.9375 17.9531C47.5208 18.6094 47.8125 19.375 47.8125 20.25C47.8125 21.9271 47.0279 23.0034 45.4588 23.4788C43.8896 23.9542 42.4867 24.1904 41.25 24.1875C37.9688 24.1875 35.144 23.0034 32.7756 20.635C30.4073 18.2667 29.2217 15.4404 29.2188 12.1563V11.5C29.2188 11.2813 29.2552 10.9896 29.3281 10.625C23.276 12.8125 18.3542 16.4948 14.5625 21.6719C10.7708 26.849 8.87501 32.7917 8.87501 39.5C8.87501 47.9584 11.8646 55.1771 17.8438 61.1563C23.8229 67.1354 31.0417 70.125 39.5 70.125Z"
                fill="#fff"
              />
            </svg>
            <div className="gap-5">
              <h1 className="font-bold text-3xl">Klinik Anak</h1>
              <p>
                Memberikan pelayanan Pemeriksaan kesehatan, Medical check up,
                Screening TBC, Screening stunting, TB anak, dll.
              </p>
            </div>
            <Link
              href="/Sejarah"
              className="block py-2 px-4 text-white hover:bg-[#004B8C] hover:text-white rounded-xl">
              <h1>SELENGKAPNYA</h1>
            </Link>
          </div>
        </div>
        <div className=" relative w-[400px] h-[500px]  transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180">
          <div className=" bg-[#ffffff] shadow-2xl flex flex-col p-12 gap-8 justify-center   rounded-[10px] text-black absolute w-full h-full backface-hidden">
            <svg
              width="105"
              height="105"
              viewBox="0 0 105 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M45.9375 74.375H59.0625V63.4375H70V50.3125H59.0625V39.375H45.9375V50.3125H35V63.4375H45.9375V74.375ZM17.5 91.875V39.375L52.5 13.125L87.5 39.375V91.875H17.5ZM26.25 83.125H78.75V43.75L52.5 24.0625L26.25 43.75V83.125Z"
                fill="#2A8EE4"
              />
            </svg>
            <div>
              <h1 className="font-bold text-3xl">Klinik Umum</h1>
            </div>
            <h1 className="text-[#2A8EE4]">SELENGKAPNYA</h1>
          </div>
          <div className="card-back bg-[#2A8EE4] text-white flex flex-col p-12 gap-8 justify-center shadow-2xl rounded-[10px]  absolute w-full h-full backface-hidden rotate-y-180">
            <svg
              width="105"
              height="105"
              viewBox="0 0 105 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M45.9375 74.375H59.0625V63.4375H70V50.3125H59.0625V39.375H45.9375V50.3125H35V63.4375H45.9375V74.375ZM17.5 91.875V39.375L52.5 13.125L87.5 39.375V91.875H17.5ZM26.25 83.125H78.75V43.75L52.5 24.0625L26.25 43.75V83.125Z"
                fill="#ffffff"
              />
            </svg>

            <div className="gap-5">
              <h1 className="font-bold text-3xl">Klinik Umum</h1>
              <p>
                Memberikan pelayanan Radiologi, Laboratorium hematologi klinik,
                Laboratorium mikrobiologi, Elektrokardiografi (EKG), Layanan
                Konseling, Rujukan Spesialistik.
              </p>
            </div>
            <Link
              href="/Sejarah"
              className="block py-2 px-4 text-white hover:bg-[#004B8C] hover:text-white rounded-xl">
              <h1>SELENGKAPNYA</h1>
            </Link>
          </div>
        </div>
        <div className=" relative transform-style-preserve-3d w-[400px] h-[500px] m-9 transition-transform duration-700 hover:rotate-y-180">
          <div className=" bg-[#ffffff] shadow-2xl flex flex-col p-12 gap-8 justify-center   rounded-[10px] text-black absolute w-full h-full backface-hidden">
            <svg
              width="105"
              height="105"
              viewBox="0 0 105 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M56.875 17.5H48.125L43.75 8.75H61.25L56.875 17.5ZM83.125 56.875V96.25H21.875V56.875C21.875 44.8 31.675 35 43.75 35V26.25H39.375V21.875H65.625V26.25H61.25V35C73.325 35 83.125 44.8 83.125 56.875ZM74.375 56.875C74.375 49.6563 68.4688 43.75 61.25 43.75H43.75C36.5313 43.75 30.625 49.6563 30.625 56.875V87.5H74.375V56.875ZM65.625 70H56.875V78.75H48.125V70H39.375V61.25H48.125V52.5H56.875V61.25H65.625V70Z"
                fill="#2A8EE4"
              />
            </svg>
            <div>
              <h1 className="font-bold text-3xl">Laboratorium</h1>
            </div>
            <h1 className="text-[#2A8EE4]">SELENGKAPNYA</h1>
          </div>
          <div className="card-back bg-[#2A8EE4] text-white flex flex-col p-12 gap-8 justify-center shadow-2xl rounded-[10px]  absolute w-full h-full backface-hidden rotate-y-180">
            <svg
              width="105"
              height="105"
              viewBox="0 0 105 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M56.875 17.5H48.125L43.75 8.75H61.25L56.875 17.5ZM83.125 56.875V96.25H21.875V56.875C21.875 44.8 31.675 35 43.75 35V26.25H39.375V21.875H65.625V26.25H61.25V35C73.325 35 83.125 44.8 83.125 56.875ZM74.375 56.875C74.375 49.6563 68.4688 43.75 61.25 43.75H43.75C36.5313 43.75 30.625 49.6563 30.625 56.875V87.5H74.375V56.875ZM65.625 70H56.875V78.75H48.125V70H39.375V61.25H48.125V52.5H56.875V61.25H65.625V70Z"
                fill="#ffffff"
              />
            </svg>

            <div className="gap-5">
              <h1 className="font-bold text-3xl">Laboratorium</h1>
              <p>
                Memberikan pelayanan Pemeriksaan sampel darah rutin, Darah
                lengkap, Urin Rutin, Urin lengkap, Kimia Klinik, Dahak (TCM dan
                Mikroskopis), Immunoserolog( Rapid dan Swab).
              </p>
            </div>
            <Link
              href="/Sejarah"
              className="block py-2 px-4 text-white hover:bg-[#004B8C] hover:text-white rounded-xl">
              <h1>SELENGKAPNYA</h1>
            </Link>
          </div>
        </div>

        <div className=" relative transform-style-preserve-3d w-[400px] h-[500px]  transition-transform duration-700 hover:rotate-y-180">
          <div className=" bg-[#ffffff] shadow-2xl flex flex-col p-12 gap-8 justify-center   rounded-[10px] text-black absolute w-full h-full backface-hidden">
            <svg
              width="69"
              height="76"
              viewBox="0 0 69 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.25 0.5C37.535 0.498877 44.5716 3.14865 50.0463 7.95477C55.5211 12.7609 59.06 19.3949 60.0025 26.6188L68.44 39.89C68.995 40.7637 68.8825 42.065 67.5962 42.62L60.25 45.7625V56.75C60.25 58.7391 59.4598 60.6468 58.0533 62.0533C56.6468 63.4598 54.7391 64.25 52.75 64.25H45.2537L45.25 75.5H11.5V61.6475C11.5 57.2225 9.86498 53.0338 6.83123 49.2538C3.29761 44.8417 1.0824 39.5211 0.440824 33.905C-0.20075 28.2889 0.757423 22.6057 3.20494 17.5104C5.65246 12.4151 9.48973 8.11497 14.2746 5.10543C19.0595 2.09589 24.5973 0.499433 30.25 0.5ZM30.25 8C26.0109 7.99982 21.858 9.19717 18.2697 11.4541C14.6814 13.7111 11.8037 16.9358 9.96801 20.7568C8.13236 24.5778 7.41347 28.8397 7.89416 33.0514C8.37485 37.2631 10.0356 41.2534 12.685 44.5625C16.7875 49.6775 19 55.5012 19 61.6475V68H37.75L37.7575 56.75H52.75V40.82L58.5625 38.33L52.7762 29.2363L52.5625 27.5787C51.8533 22.1631 49.1985 17.1903 45.093 13.5878C40.9875 9.98537 35.7119 7.99929 30.25 8ZM30.25 19.25C31.2445 19.25 32.1984 19.6451 32.9016 20.3484C33.6049 21.0516 34 22.0054 34 23V26.75H37.75C38.7445 26.75 39.6984 27.1451 40.4016 27.8484C41.1049 28.5516 41.5 29.5054 41.5 30.5C41.5 31.4946 41.1049 32.4484 40.4016 33.1516C39.6984 33.8549 38.7445 34.25 37.75 34.25H34V38C34 38.9946 33.6049 39.9484 32.9016 40.6516C32.1984 41.3549 31.2445 41.75 30.25 41.75C29.2554 41.75 28.3016 41.3549 27.5983 40.6516C26.8951 39.9484 26.5 38.9946 26.5 38V34.2462L22.75 34.25C21.7554 34.25 20.8016 33.8549 20.0983 33.1516C19.3951 32.4484 19 31.4946 19 30.5C19 29.5054 19.3951 28.5516 20.0983 27.8484C20.8016 27.1451 21.7554 26.75 22.75 26.75L26.5 26.7462V23C26.5 22.0054 26.8951 21.0516 27.5983 20.3484C28.3016 19.6451 29.2554 19.25 30.25 19.25Z"
                fill="#2A8EE4"
              />
            </svg>

            <div>
              <h1 className="font-bold text-3xl">Fisioterapi</h1>
            </div>
            <h1 className="text-[#2A8EE4]">SELENGKAPNYA</h1>
          </div>
          <div className="card-back bg-[#2A8EE4] text-white flex flex-col p-12 gap-8 justify-center shadow-2xl rounded-[10px]  absolute w-full h-full backface-hidden rotate-y-180">
            <svg
              width="69"
              height="76"
              viewBox="0 0 69 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.25 0.5C37.535 0.498877 44.5716 3.14865 50.0463 7.95477C55.5211 12.7609 59.06 19.3949 60.0025 26.6188L68.44 39.89C68.995 40.7637 68.8825 42.065 67.5962 42.62L60.25 45.7625V56.75C60.25 58.7391 59.4598 60.6468 58.0533 62.0533C56.6468 63.4598 54.7391 64.25 52.75 64.25H45.2537L45.25 75.5H11.5V61.6475C11.5 57.2225 9.86498 53.0338 6.83123 49.2538C3.29761 44.8417 1.0824 39.5211 0.440824 33.905C-0.20075 28.2889 0.757423 22.6057 3.20494 17.5104C5.65246 12.4151 9.48973 8.11497 14.2746 5.10543C19.0595 2.09589 24.5973 0.499433 30.25 0.5ZM30.25 8C26.0109 7.99982 21.858 9.19717 18.2697 11.4541C14.6814 13.7111 11.8037 16.9358 9.96801 20.7568C8.13236 24.5778 7.41347 28.8397 7.89416 33.0514C8.37485 37.2631 10.0356 41.2534 12.685 44.5625C16.7875 49.6775 19 55.5012 19 61.6475V68H37.75L37.7575 56.75H52.75V40.82L58.5625 38.33L52.7762 29.2363L52.5625 27.5787C51.8533 22.1631 49.1985 17.1903 45.093 13.5878C40.9875 9.98537 35.7119 7.99929 30.25 8ZM30.25 19.25C31.2445 19.25 32.1984 19.6451 32.9016 20.3484C33.6049 21.0516 34 22.0054 34 23V26.75H37.75C38.7445 26.75 39.6984 27.1451 40.4016 27.8484C41.1049 28.5516 41.5 29.5054 41.5 30.5C41.5 31.4946 41.1049 32.4484 40.4016 33.1516C39.6984 33.8549 38.7445 34.25 37.75 34.25H34V38C34 38.9946 33.6049 39.9484 32.9016 40.6516C32.1984 41.3549 31.2445 41.75 30.25 41.75C29.2554 41.75 28.3016 41.3549 27.5983 40.6516C26.8951 39.9484 26.5 38.9946 26.5 38V34.2462L22.75 34.25C21.7554 34.25 20.8016 33.8549 20.0983 33.1516C19.3951 32.4484 19 31.4946 19 30.5C19 29.5054 19.3951 28.5516 20.0983 27.8484C20.8016 27.1451 21.7554 26.75 22.75 26.75L26.5 26.7462V23C26.5 22.0054 26.8951 21.0516 27.5983 20.3484C28.3016 19.6451 29.2554 19.25 30.25 19.25Z"
                fill="#ffffff"
              />
            </svg>
            <div className="gap-5">
              <h1 className="font-bold text-3xl">Fisioterapi</h1>
              <p>
                Unit Fisioterapi Balkesmas Wiayah Semarang merupakan pelayanan
                Rawat Jalan yang memberikan pelayanan fisioterapi kepada seorang
                pasien untuk tujuan anamnesa, pemeriksaan, penegakan diagnosis,
                tindakan fisioterapi, evaluasi, dan edukasi
              </p>
            </div>
            <Link
              href="/Sejarah"
              className="block py-2 px-4 text-white hover:bg-[#004B8C] hover:text-white rounded-xl">
              <h1>SELENGKAPNYA</h1>
            </Link>
          </div>
        </div>
        <div className=" relative transform-style-preserve-3d w-[400px] h-[500px] m-9 transition-transform duration-700 hover:rotate-y-180">
          <div className=" bg-[#ffffff] shadow-2xl flex flex-col p-12 gap-8 justify-center   rounded-[10px] text-black absolute w-full h-full backface-hidden">
            <svg
              width="119"
              height="119"
              viewBox="0 0 119 119"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.7084 104.125C34.7084 104.125 80.7515 55.33 80.7515 35.4967C80.9105 32.7348 80.469 29.9713 79.4572 27.3965C78.4454 24.8216 76.8875 22.4968 74.8907 20.582C72.8548 18.6269 70.4367 17.1137 67.7881 16.1376C65.1396 15.1614 62.3178 14.7434 59.5 14.9097C56.6826 14.7427 53.8611 15.16 51.2125 16.1353C48.564 17.1106 46.1457 18.6228 44.1094 20.5771C42.1113 22.4929 40.5526 24.8194 39.5408 27.396C38.5289 29.9727 38.0881 32.7381 38.2486 35.5017C38.2486 55.335 84.2917 104.125 84.2917 104.125"
                stroke="#2A8EE4"
                stroke-width="9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div>
              <h1 className="font-bold text-3xl">Klinik VCT-CST</h1>
            </div>
            <h1 className="text-[#2A8EE4]">SELENGKAPNYA</h1>
          </div>
          <div className="card-back bg-[#2A8EE4] text-white flex flex-col p-12 gap-8 justify-center shadow-2xl rounded-[10px]  absolute w-full h-full backface-hidden rotate-y-180">
            <svg
              width="119"
              height="119"
              viewBox="0 0 119 119"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.7084 104.125C34.7084 104.125 80.7515 55.33 80.7515 35.4967C80.9105 32.7348 80.469 29.9713 79.4572 27.3965C78.4454 24.8216 76.8875 22.4968 74.8907 20.582C72.8548 18.6269 70.4367 17.1137 67.7881 16.1376C65.1396 15.1614 62.3178 14.7434 59.5 14.9097C56.6826 14.7427 53.8611 15.16 51.2125 16.1353C48.564 17.1106 46.1457 18.6228 44.1094 20.5771C42.1113 22.4929 40.5526 24.8194 39.5408 27.396C38.5289 29.9727 38.0881 32.7381 38.2486 35.5017C38.2486 55.335 84.2917 104.125 84.2917 104.125"
                stroke="#ffffff"
                stroke-width="9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="gap-5">
              <h1 className="font-bold text-3xl">Klinik VCT-CST</h1>
              <p>
                Klinik VCT-CST (Voluntary Counselling and Testing / Care,
                Support and Treatment) bertujuan untuk membantu pencegahan,
                perawatan dan pengobatan bagi penderita HIV/AIDS.
              </p>
            </div>
            <Link
              href="/Sejarah"
              className="block py-2 px-4 text-white hover:bg-[#004B8C] hover:text-white rounded-xl">
              <h1>SELENGKAPNYA</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Beranda;
