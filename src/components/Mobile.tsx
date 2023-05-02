import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import avatar from "@/images/avatar.jpg";
import dog1 from "@/images/dog-image-1.jpg";
import dog2 from "@/images/dog-image-2.jpg";
import dog3 from "@/images/dog-image-3.jpg";
import {MdNavigateNext} from "react-icons/md"
// import {IoChevronBack} from "react-icons/io"

type PropsMobile = {};

export function Mobile({}: PropsMobile) {
  return (
    <div className="w-60 h-[430px] rounded-3xl bg-white p-1 flex flex-col text-xs ">
    <div className="h-16 bg-gradient-to-r from-[hsl(264,100%,61%)] to-[hsl(293,100%,63%)] rounded-t-3xl flex  flex-col px-2 ">
        <div className="px-10 outline-none"><div className="w-full bg-white h-5  rounded-b-lg"></div></div>
   <div className="flex gap-2 items-center ">
   {/* <IoChevronBack/> */}
    
   <Image className="w-auto h-8  rounded-full border" src={avatar} alt={""} />
   <div className=" flex flex-col">
    <p>Samuel Green</p>
    <p> Available to Walk</p>
   </div>
   </div>


         </div>
    <div className="h-full w-full bg-[hsl(270,20%,96%)] gap-2 p-1  flex flex-col rounded-b-3xl">

    <MobileChatRight text={"That sounds great.I'd be happy with that."}/>
    <MobileChatRight text={"Could ypo send ever some pictures of your dog please?"}/>
    <MobileChatLeft text={"Here are a few pictures. She's a happy girl!"}/>
    <MobileChatLeft text={"can you make it?"}/>
    <MobileChatRight text={"She looks so happy! The time we discussed works. How long shall I take her out for?"}/>
    <MobileChatSpecial text1={"30 minute walk"} text2={"$29"}/>
    <MobileChatSpecial text1={"1 hour walk"} text2={"$49"}/>

      
      <div className=" flex gap-1 justify-end ">
      <Image className="w-8  rounded-lg" src={dog1} alt={""} />
      <Image  className="w-8  rounded-lg" src={dog2} alt={""} />
      <Image  className="w-8  rounded-lg" src={dog3} alt={""} />
      </div>
     <div>
     <input type=" text" placeholder="Type a message"  className="p-2 rounded-3xl relative w-full text-[hsl(206,6%,79%)] "/>
     <MdNavigateNext className="bg-[hsl(271,36%,24%)] h-6 w-6 p-1  items-center text-white rounded-full mt-[-28px] ml-44 z-20 absolute "/>
     </div>
    </div>
  </div>
  );
}

type leftMobileText = {
    text:string
};
export function MobileChatRight(props: leftMobileText) {
    return(
    
    <div className="flex justify-start">
       <p className="w-[80%] p-2 text-[hsl(276,55%,52%)] bg-[hsl(270,7%,64%)] rounded-xl ">{props.text}</p>
    </div>)
  
}

type rightMobileText = {
    text:string
};
export function MobileChatLeft(props: rightMobileText) {
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
  <div className="flex justify-between">
  <div className="flex justify-between items-center bg-gradient-to-r from-[hsl(264,100%,61%)] to-[hsl(293,100%,63%)] rounded-xl
p-1">
          <input type="radio" className="w-4 h-4" />
          <p className="w p-2 radio-[ hsl(271,15%,43%)]   text-right p-2 ">{props.text1}</p>
      </div><p className="w p-2 radio-[ hsl(271,15%,43%)]   text-right p-2 ">{props.text2}</p>
    </div></>

  )
}
2

{/* <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input> */}

{/* <p className="w-[80%] p-2 text-[hsl(276,55%,52%)] rounded-xl ">That sounds great.I'd be happy with that. </p>
      <p className="w-[80%] p-2 bg-[hsl(270,7%,64%)] rounded-xl text-[hsl(276,55%,52%)]">Could ypo send ever some pictures of your dog please? </p> */}