import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box, FormControl, IconButton, Input, Spinner, Text, Toast } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { getSender } from '../config/ChatLogics';
import UpdateGroupChatModal from './UpdateGroupChatModal';
import axios from 'axios';
import ScrollabelChat from './ScrollabelChat';

const SingleChat = ({ fetchAgain, setFetchAgain }) => {

    const { selectedChat, setSelectedChat, user } = ChatState();

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState("");

    const fetchMessages = async () => {
        if (!selectedChat) return;

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            setLoading(true)

            const { data } = await axios.get(`http://localhost:5000/api/message/${selectedChat._id}`, config);
            // console.log(messages);

            setMessages(data)
            setLoading(false)
        } catch (error) {
            Toast({
                title: "Error Occured!",
                description: "Failed to Load the Messages",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-center",
            });
        }
    }

    useEffect(() => {
        fetchMessages()
        // eslint-disable-next-line
    }, [selectedChat])

    const sendMessage = async (event) => {
        if (event.key === "Enter" && newMessage) {
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${user.token}`,
                    }
                };

                setNewMessage("")
                const { data } = await axios.post("http://localhost:5000/api/message", {
                    content: newMessage,
                    chatId: selectedChat,
                }, config);
                console.log(data);

                setMessages([...messages, data])
            } catch (error) {
                Toast({
                    title: "Error Occured!",
                    description: "Failed to send the Message",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "top-center",
                });
            }
        }
    }

    const typingHandler = (e) => {
        setNewMessage(e.target.value)
    }

    return (
        <>
            {selectedChat ? (
                <>
                    <Text
                        fontSize={{ base: "28px", md: "30px" }}
                        pb={3}
                        px={2}
                        w="100%"
                        display="flex"
                        justifyContent={{ base: "space-between" }}
                        alignItems="center">
                        <IconButton
                            display={{ base: "flex", md: "none" }}
                            icon={<ArrowBackIcon />}
                            onClick={() => setSelectedChat("")}
                        />
                        {!selectedChat.isGroupChat ? (
                            <>
                                {getSender(user, selectedChat.users)}
                            </>
                        ) : (
                            <>
                                {selectedChat.chatName.toUpperCase()}
                                <UpdateGroupChatModal fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}
                                    fetchMessages={fetchMessages} />
                            </>
                        )}
                    </Text>
                    <Box display='flex'
                        flexDir='column'
                        justifyContent="flex-end"
                        p={3}
                        bg="#E8E8E8"
                        w="100%"
                        h="100%"
                        borderRadius="lg"
                        overflowY="hidden">
                        {loading ? <Spinner size="xl" w={20} h={20} alignSelf="center" margin="auto" /> : (
                            <div style={{ display: "flex", flexDirection: "column", overflowY: "auto", scrollbarWidth: "none" }}>
                                <ScrollabelChat messages={messages} />
                            </div>
                        )}
                        <FormControl onKeyDown={sendMessage} id="first-name" isRequired mt={3} display='flex' flexDirection='column-reverse' >
                            <Input variant="filled" bg="#E0E0E0" alignItems='bottom' placeholder="Enter a message.." value={newMessage} onChange={typingHandler} />
                        </FormControl>
                    </Box>
                </>) : (
                <Box display="flex" alignItems="center" justifyContent="center" h="100%">
                    <Text fontSize="3xl" pb={3}>
                        Click on a user to start chatting
                    </Text>
                </Box>
            )}
        </>
    )
}

export default SingleChat
