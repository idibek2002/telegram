import { Avatar } from "@mantine/core";
import React from "react";

const Message = ({ isOther }: { isOther: boolean }) => {
  return (
    <div>
      {isOther ? (
        <div className="flex items-end gap-x-2">
          <picture>
            <Avatar
              size="md"
              radius="xl"
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
            />
          </picture>
          <div className="max-w-[477px] px-[10px] bg-[#333333] rounded-tl-[14px] rounded-tr-[14px] rounded-br-[14px] rounded-bl-[4px]">
            <h1 className="text-[11px] text-[#C8504F] font-[600] py-[2px]">
              Idibek
            </h1>
            <h1 className="text-[14px] text-[#FFF] py-[3px]">
              True. Btw, how about to hop up in figma in 5 mins?
              True. Btw, how about to hop up in figma in 5 mins?
              True. Btw, how about to hop up in figma in 5 mins?
              True. Btw, how about to hop up in figma in 5 mins?
              True. Btw, how about to hop up in figma in 5 mins?
            </h1>
            <h1 className="text-[12px] text-[#A1AAB3] text-end py-[4px]">
              10:03 AM
            </h1>
          </div>
        </div>
      ) : (
        <div className="flex items-end gap-x-2 justify-end">
          <div className="max-w-[477px] px-[10px] bg-[#333333] rounded-tl-[14px] rounded-tr-[14px] rounded-br-[4px] rounded-bl-[14px]">
            <h1 className="text-[14px] text-[#FFF] py-[3px]">
              True. Btw, how about to hop up in figma in 5 mins?
              True. Btw, how about to hop up in figma in 5 mins?
              True. Btw, how about to hop up in figma in 5 mins?
            </h1>
            <h1 className="text-[12px] text-[#A1AAB3] text-end py-[4px]">
              10:03 AM
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
