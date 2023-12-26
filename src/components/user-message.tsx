import { Avatar, Indicator } from "@mantine/core";
import Link from "next/link";
import React from "react";
interface IProps {
  name:string;
  id:number;
  onClick:()=>void; 
}
const UserMessage = ({ name, id, onClick }:IProps) => {
  const isMobile = window.innerWidth
  return (
    <Link href={`/chat/${id}`} onClick={()=>{
      if(isMobile<=768){
        onClick()
      }
    }} className="flex gap-4 w-full p-[8px] cursor-pointer rounded-[4px] hover:bg-[#2d2e2e] transition-colors duration-75">
      <picture className="flex items-center justify-center">
        <Indicator
          inline
          size={12}
          offset={7}
          position="bottom-end"
          color="green"
          withBorder
        >
          <Avatar
            className="w-[50px] h-[50px]"
            radius="xl"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
          />
        </Indicator>
      </picture>
      <div className="w-full flex flex-col justify-evenly">
        <div className="flex justify-between">
            <h1 className="text-[#fff] text-[14px]">{name}</h1>
            <h1 className="text-[#838383] text-[12px]">2:49 AM</h1>
        </div>
        <div>
            <h1 className="text-[#888] text-[12px] font-[400]">You: lets do this quick</h1>
        </div>
      </div>
    </Link>
  );
};

export default UserMessage;
