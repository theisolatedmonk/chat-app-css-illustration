import React from 'react'


export  function MobileParagraph() {
  return (
    <div>  <div className="flex flex-col justify-center items-center  p-4 text-center sm:w-[480px] text-lg sm:justify-start sm:text-left sm:p-0 ">
    <p className=" font-bold text-[hsl(271,36%,24%)] text-xl">Simple booking</p>
    <p className=" text-[hsl(270,7%,64%)] ">
      {" "}
      Stay in touch with our dog walkers through the chat interface. This
      make it easy to discuss arrangements and make bookings. Once the
      walk has been completed you can rate your walker and book again
      through the chat.
    </p>
  </div></div>
  )
}