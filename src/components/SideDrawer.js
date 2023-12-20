import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spinner, Text, Tooltip, useDisclosure, useToast } from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState } from 'react'
import { ChatState } from '../Context/ChatProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ChatLoading from './ChatLoading';
import UserListItem from './UserListItem';
import { getSender } from '../config/ChatLogics';

const SideDrawer = () => {

    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingChat, setLoadingChat] = useState(false);

    const { user, setSelectedChat, chats, setChats, notification, setNotification } = ChatState()

    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();

    const handleLogout = () => {
        localStorage.removeItem("userInfo")
        navigate('/')
    }

    const handleSearch = async () => {
        if (!search) {
            toast({
                title: "Please Enter something in search",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top-center",
            });
            return;
        }
        try {
            setLoading(true)

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const { data } = await axios.get(`http://localhost:5000/api/user/?search=${search}`, config)
            setLoading(false)
            setSearchResult(data)
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: "Failed to Load the Search Results",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-center",
            });
        }
    }

    const accessChat = async (userId) => {
        try {
            setLoadingChat(true)
            const config = {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const { data } = await axios.post('http://localhost:5000/api/chat', { userId }, config);

            if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
            setSelectedChat(data)
            setLoadingChat(false)
            onClose();
        } catch (error) {
            toast({
                title: "Error fetching the chat",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-center",
            });
        }
    }

    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                bg="white"
                w="100%"
                p="5px 10px 5px 10px"
                borderWidth="5px"
                borderColor='white' >
                <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
                    <Button variant="ghost" onClick={onOpen}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <Text d={{ base: "none", md: "flex" }} px={4}>Search User</Text>
                    </Button>
                </Tooltip>
                <Text fontSize="2xl" fontFamily="Work sans">
                    ChatApp
                </Text>
                <div>
                    <Menu>
                        <MenuButton p={1}>
                            <BellIcon fontSize="2xl" m={1} />
                        </MenuButton>
                        <MenuList pl={2}>
                            {!notification.length && "No New Messages"}
                            {notification.map((noti) => (
                                <MenuItem key={noti._id} onClick={() => {
                                    setSelectedChat(noti.chat)
                                    setNotification(notification.filter((n) => n !== noti))
                                }}>
                                    {noti.chat.isGroupChat ? `New message in ${noti.chat.chatName}` : `New message from ${getSender(user, noti.chat.users)}`}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
                            <Avatar size='sm' cursor='pointer' />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>{user.name}</MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </Box>

            <Drawer placement='left' onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth='1px'>Search Users</DrawerHeader>
                        <DrawerBody>
                            <Box display='flex' pb={2}>
                                <Input
                                    placeholder="Search by name or email"
                                    mr={2}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <Button onClick={handleSearch}>Go</Button>
                            </Box>
                            {loading ? <ChatLoading /> : (
                                searchResult?.map(user => (
                                    <UserListItem key={user._id} user={user} handleFunction={() => accessChat(user._id)} />
                                ))
                            )}
                            {loadingChat && <Spinner ml="auto" display="flex" />}
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}

export default SideDrawer
