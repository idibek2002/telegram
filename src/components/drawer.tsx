import { Drawer as CustomDrawer } from '@mantine/core'
import React from 'react'

const Drawer = ({isOpen, onClose}:{isOpen:boolean, onClose:()=>void}) => {
  return (
    <CustomDrawer opened={isOpen} onClose={onClose} title="Setting" size={380}>
        sdnvsdkjvnkjdfvf
    </CustomDrawer>
  )
}

export default Drawer