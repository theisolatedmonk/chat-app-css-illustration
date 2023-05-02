import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-screen flex">
      <div className=" flex justify-between h-full bg-[ hsl(0,0%,100%)] w-full relative">
        <div className=" w-44 bg-gradient-to-r h-[90%] from-[hsl(264,100%,61%)] to-[hsl(293,100%,63%)]  rounded-br-full"></div>

        <div className="flex items-end">
          <div className="w-44 bg-[hsl(270,20%,96%)] h-[90%]    rounded-tl-full "></div>
        </div>
      </div>
      <div className="flex w-52 bg-yellow-100 gap-5
      ">
        <div className="w-3  bg-green-400 ">
          <div className="flex flex-col">
            <p className="">Simple booking</p>
            <p className=""> Stay in touch with our dog walkers through the chat interface. This make it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again through the chat.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
