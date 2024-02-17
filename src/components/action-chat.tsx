'use client'
import { Textarea } from '@mantine/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import Icon from './icon'

export const ActionChat = () => {
    const attach = <Icon name='attach' />
    const emojiAndMic = <div className="flex items-end gap-x-2"><Icon name='emoji' /> <Icon name='mic' /></div>
    const { register, handleSubmit } = useForm()
    const onKeyDown = (event: any) => {
      console.log(event);
    }
    return (
        <Textarea
            {...register("message", { required: true })}
            placeholder="Write a message..."
            color="#343434"
            leftSection={attach}
            rightSection={emojiAndMic}
            rightSectionWidth={80}
            autosize
            classNames={{
                input: "bg-[#ffffff0d] border-none text-[#fff] text-[16px]"
            }}
            radius="8px"
            size='lg'
            onKeyDown={onKeyDown}
        />
    )
}