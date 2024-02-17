'use client'
import React from 'react'
import Message from './message'
import { Box, Chip, Pill } from '@mantine/core'

const Chat = () => {

  return (
    <div className='flex flex-col justify-betwen px-6 py-3 gap-y-2 relative w-full'>
      <div className='py-[105px] flex flex-col gap-y-1'>
        <Message isOther={true} />
        <Box className='flex justify-center py-4'>
          <Pill bg={'#f5f5f5'}>19 февраля</Pill>
        </Box>
        <Message isOther={false} />
        <Message isOther={true} />
        <Message isOther={true} />
        <Message isOther={true} />
        <Message isOther={true} />
        <Message isOther={false} />
      </div>
    </div>
  )
}

export default Chat