import Image from "next/image";
import { Inter } from "next/font/google";
import avatar from "@/images/avatar.jpg";
import dog1 from "@/images/dog-image-1.jpg";
import dog2 from "@/images/dog-image-2.jpg";
import dog3 from "@/images/dog-image-3.jpg";
import {MdNavigateNext} from "react-icons/md"
import { Mobile } from "@/components/Mobile";
import { MobileParagraph } from "@/components/MobileParagraph";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center ">
      <div className=" flex flex-col justify-between h-full bg-[ hsl(0,0%,100%)] w-full relative  sm:justify-between sm:flex-row">
        <div className=" w-[50vh] h-[96vh] bg-gradient-to-r  from-[hsl(264,100%,61%)] to-[hsl(293,100%,63%)]  rounded-br-full pt-96"></div>

        <div className="sm:flex sm:items-end hidden">
          <div className=" w-[50vh] h-[96vh] bg-[hsl(270,20%,96%)]     rounded-tl-full "></div>
        </div>
      </div>
    <div className="flex  justify-center absolute z-20 items-center   h-[90] sm:flex-row ">
    <div
        className="flex flex-col  gap-5  sm:gap-44 w-screen items-center justify-center  sm:flex-row mt-10"
      >
        <Mobile></Mobile>
        <MobileParagraph/>
      </div>
    </div>
    </main>
  );
}   
