import Image from "next/image";
import { Inter } from "next/font/google";
import avatar from "@/images/avatar.jpg";
import dog1 from "@/images/dog-image-1.jpg";
import dog2 from "@/images/dog-image-2.jpg";
import dog3 from "@/images/dog-image-3.jpg";
import {MdNavigateNext} from "react-icons/md"
import {IoChevronBack} from "react-icons/io"
import { Mobile } from "@/components/Mobile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center">
      <div className=" flex justify-between h-full bg-[ hsl(0,0%,100%)] w-full relative">
        <div className=" w-96 bg-gradient-to-r h-[96%] from-[hsl(264,100%,61%)] to-[hsl(293,100%,63%)]  rounded-br-full"></div>

        <div className="flex items-end">
          <div className="w-96 bg-[hsl(270,20%,96%)] h-[96%]    rounded-tl-full "></div>
        </div>
      </div>
    <div className="flex justify-center absolute z-20 items-center  h-full">
    <div
        className="flex  h-screen gap-20 w-screen items-center justify-center  "
      >
        <Mobile></Mobile>
        <div className="flex flex-col w-72 text-xs">
          <p className=" font-bold text-[hsl(271,36%,24%)]">Simple booking</p>
          <p className=" text-[hsl(270,7%,64%)] ">
            {" "}
            Stay in touch with our dog walkers through the chat interface. This
            make it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again
            through the chat.
          </p>
        </div>
      </div>
    </div>
    </main>
  );
}
