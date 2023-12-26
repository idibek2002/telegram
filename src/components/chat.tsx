import React from 'react'
import Message from './message'

const Chat = () => {
   
    return (
    <div className='flex flex-col justify-betwen px-6 py-3 gap-y-2 relative w-full'>
        <div className='py-[105px] flex flex-col gap-y-3'>
          <Message isOther={true}/>
          <Message isOther={false}/>
          <Message isOther={false}/>
          <Message isOther={true}/>
          <Message isOther={false}/>
          <Message isOther={true}/>
          <Message isOther={false}/>
          <Message isOther={false}/>
        </div>
    </div>
  )
}

export default Chat