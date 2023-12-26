import { Avatar } from "@mantine/core";
import React from "react";
import Button from "./button";
import { IconHeart, IconSearch } from "@tabler/icons-react";
import Icon from "./icon";
import { usePathname } from "next/navigation";
interface IUser {
  id:number;
  username:string;
}
const user:IUser[] = [
  {
    id:1,
    username: "Idibek"
  },
  {
    id:2,
    username: "Kamol"
  },
];
interface IProps {
  isBack: boolean;
  onClick: () => void;
}
const Header = ({ isBack, onClick }: IProps) => {
  const index = 2;
  const userId = usePathname().split("/")[index];
  
  return (
    <div className="flex items-center justify-between p-6 border-b border-b-[#ffffff0d]">
      <div className="flex items-center gap-5 cursor-pointer">
        {isBack && (
          <Button onClick={onClick}>
            <Icon name="backArrow" />
          </Button>
        )}
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
        />
        <div className="flex flex-col gap-y-1">
          <h1 className="text-[#FFF] font-[600] text-[16px]">
            {user.find((el:IUser)=>el.id===Number(userId))?.username}
          </h1>
          <h1 className="text-[#888888] text-[12px]">был(а) недавно</h1>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Button>
          <IconSearch size={20} strokeWidth={2} color="#fff" />
        </Button>
        <Button>
          <Icon name="comment" />
        </Button>
        <Button>
          <Icon name="more" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
