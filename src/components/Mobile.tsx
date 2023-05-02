import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import avatar from "@/images/avatar.jpg";
import dog1 from "@/images/dog-image-1.jpg";
import dog2 from "@/images/dog-image-2.jpg";
import dog3 from "@/images/dog-image-3.jpg";
import {MdNavigateNext} from "react-icons/md"
import {IoChevronBack} from "react-icons/io5"

type PropsMobile = {};

export function Mobile({}: PropsMobile) {
  return (
    <div className="w-[340px] h-full rounded-3xl bg-white  flex flex-col text-sm p-2">
    <div className="h-16 bg-gradient-to-r from-[hsl(264,100%,61%)] to-[hsl(293,100%,63%)] rounded-t-3xl flex  flex-col px-2 ">
        <div className="px-10 outline-none"><div className="w-full bg-white h-5  rounded-b-lg"></div></div>
   <div className="flex gap-2 items-center ">
   <IoChevronBack className="h-8 w-8"/>
   
   <Image className="w-auto h-8  rounded-full border" src={avatar} alt={""} />
   <div className=" flex flex-col">
    <p className="font-bold text-white">Samuel Green</p>
    <p> Available to Walk</p>
   </div>
   </div>


         </div>
    <div className="h-full w-full bg-[hsl(270,20%,96%)] gap-2 p-2  flex flex-col rounded-b-3xl ">

    <MobileChatleft text={"That sounds great.I'd be happy with that."}/>
    <MobileChatleft text={"Could ypo send ever some pictures of your dog please?"}/>
    <DogImg/>
    <MobileChatRight text={"Here are a few pictures. She's a happy girl!"}/>
    <MobileChatRight text={"can you make it?"}/>
    <MobileChatleft text={"She looks so happy! The time we discussed works. How long shall I take her out for?"}/>
    <MobileChatSpecial text1={"30 minute walk"} text2={"$29"}/>
    <MobileChatSpecial text1={"1 hour walk"} text2={"$49"}/>

      
     
     <div>
     <input type=" text" placeholder="Type a message"  className="p-3 rounded-3xl relative w-full text-[hsl(206,6%,79%)] "/>
     <MdNavigateNext className="bg-[hsl(271,36%,24%)] h-8 w-8 p-1  items-center text-white rounded-full mt-[-36px] ml-[270px] z-20 absolute "/>
     </div>
    </div>
  </div>
  );
}

type leftMobileText = {
    text:string
};
export function MobileChatleft(props: leftMobileText) {
    return(
    
    <div className="flex justify-start">
       <p className="w-[80%] p-2 text-[hsl(276,55%,52%)] bg-[hsl(270,7%,64%)] rounded-xl bg-opacity-10 ">{props.text}</p>
    </div>)
  
}

type rightMobileText = {
    text:string
};
export function MobileChatRight(props: rightMobileText) {
  return (
  <div className="flex justify-end"><p className="w p-2 text-[ hsl(271,15%,43%)] bg-white rounded-xl text-right p-2 ">{props.text}</p></div>
  )
}
type specialMobileText = {
    text1:string
    text2:string
};
export function MobileChatSpecial(props: specialMobileText) {
  return (
  <>
  <div className="flex justify-between ">
  <div className="flex justify-between items-center bg-gradient-to-r from-[hsl(264,100%,61%)] to-[hsl(293,100%,63%)] rounded-r-xl rounded-tl-xl rounded-bl-sm
p-2 text-white">
          <div  className="w-4 h-4 outline rounded-full outline-1" />
          <p className="w p-2 radio-[ hsl(271,15%,43%)]   text-right p-2 ">{props.text1}</p>
          <p className="w p-2 radio-[ hsl(271,15%,43%)]   text-right p-2 font-bold  ">{props.text2}</p>
      </div>
    </div></>

  )
}
2



export  function DogImg() {
  return (
    <div className=" flex gap-1 justify-end ">
    <Image className="w-8  rounded-lg" src={dog1} alt={""} />
    <Image  className="w-8  rounded-lg" src={dog2} alt={""} />
    <Image  className="w-8  rounded-lg" src={dog3} alt={""} />
    </div>
  )
}