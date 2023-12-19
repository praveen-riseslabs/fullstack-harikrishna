import React from 'react'
import { ChatState } from '../Context/ChatProvider'
import SideDrawer from '../components/SideDrawer'
import MyChats from '../components/MyChats'
import Chatbox from '../components/Chatbox'
import { Box } from '@chakra-ui/react'

const ChatPage = () => {

  const { user } = ChatState()
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px" >
        {user && <MyChats />}
        {user && (<Chatbox />)}
      </Box>
    </div>
  )
}

export default ChatPage
