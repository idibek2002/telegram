"use client";
import { AppShell, Burger, Group, Input, Skeleton, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Icon from "./icon";
import UserMessage from "./user-message";
import Drawer from "./drawer";
import Header from "./header";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function CollapseDesktop(props: any) {  
  const [settingOpen, { toggle: toggleSettingOpen }] = useDisclosure(false);
  const [open, setOpen] = useState(false)
  const icon = <Icon name="search" />;
  const attach = <Icon name='attach'/>
  const emojiAndMic = <div className="flex items-end gap-x-2"><Icon name='emoji'/> <Icon name='mic'/></div>
  const {register, handleSubmit} = useForm()
  const onKeyDown =(event:any)=>{
    console.log(event);
  }

  const openChat = () =>{
    setOpen(!open)
  }
  const goBack = () =>{
    setOpen(false)
  }
  return (
    <>
    <AppShell
    layout="alt"
      navbar={{
        width: 380,
        breakpoint: "sm",
        collapsed: { desktop: open, mobile: open },
      }}
      className="bg-[#282727]"
    >
      <AppShell.Header withBorder={false} className="!bg-[#282727]">
        <Header isBack={open} onClick={goBack}/>
      </AppShell.Header>
        <AppShell.Navbar className="!bg-[#202020]">
          <div className="flex flex-col py-3">
            <div className="flex items-center">
              <div className="flex items-center gap-x-1 w-full px-[8px]">
                 <Burger opened={settingOpen} onClick={toggleSettingOpen}  aria-label="Toggle navigation" size={"sm"} color="white" />
                 <h1 className="text-[#fff] text-[12px]">Chats</h1>
              </div>
            </div>
            <div className="px-[8px]">
              <TextInput
                mt="md"
                rightSectionPointerEvents="none"
                rightSection={icon}
                placeholder="Поиск"
                className="border-b rounded-[5px] border-[#717171]"
                classNames={{
                  input:"bg-[#ffffff0d] border-none text-[#fff] text-[16px]"
                }}
              />
            </div>
          </div>
          <div className="w-full overflow-y-auto px-4 sidebar-scroll">
            
              <UserMessage name="Idibek" id={1} onClick={openChat} />
            
              <UserMessage name="Kamol" id={2} onClick={openChat}/>
          </div>
        </AppShell.Navbar>
      <AppShell.Main>{props.children}</AppShell.Main>
      <AppShell.Footer withBorder={false} className="bg-[#282727] px-5 md:px-10 pb-3">
        <div>
            <Textarea 
            {...register("message", {required:true})}
            placeholder="Write a message..." 
            color="#343434"   
            leftSection={attach} 
            rightSection={emojiAndMic} 
            rightSectionWidth={80}
            autosize
            classNames={{
              input:"bg-[#ffffff0d] border-none text-[#fff] text-[16px]"
            }}
            radius="8px" 
            size='lg'
            onKeyDown={onKeyDown}
            />
            </div>
      </AppShell.Footer>
    </AppShell>
    <Drawer isOpen={settingOpen} onClose={toggleSettingOpen}/>
    </>
  );
}
