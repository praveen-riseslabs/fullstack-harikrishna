import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box, FormControl, IconButton, Input, Spinner, Text, Toast } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { getSender } from '../config/ChatLogics';
import UpdateGroupChatModal from './UpdateGroupChatModal';
import axios from 'axios';
import ScrollabelChat from './ScrollabelChat';
import { io } from 'socket.io-client';
import Lottie from 'lottie-react';
import animationData from "../Assets/Animations/TypingAnimation.json";

const ENDPOINT = "http://localhost:5000"
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {

    const { selectedChat, setSelectedChat, user, notification, setNotification } = ChatState();

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [socketConnected, setSocketConnected] = useState(false);
    const [typing, setTyping] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg',
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

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

            setMessages(data)
            setLoading(false)
            socket.emit("join chat", selectedChat._id)
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
        socket = io(ENDPOINT)
        socket.emit("setup", user)
        socket.on("Connected", () => setSocketConnected(true));
        socket.on("typing", () => setIsTyping(true))
        socket.on("stop typing", () => setIsTyping(false))
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        fetchMessages()
        selectedChatCompare = selectedChat
        // eslint-disable-next-line
    }, [selectedChat])

    useEffect(() => {
        socket.on("message recieved", (newMessageRecieved) => {
            if (!selectedChatCompare || selectedChatCompare._id !== newMessageRecieved.chat._id) {
                if (!notification.includes(newMessageRecieved)) {
                    setNotification([newMessageRecieved, ...notification])
                    setFetchAgain(!fetchAgain)
                }
            } else {
                setMessages([...messages, newMessageRecieved])
            }
        })
    })

    const sendMessage = async (event) => {
        if (event.key === "Enter" && newMessage) {
            socket.emit("stop typing", selectedChat._id)
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

                socket.emit("new message", data)
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

        if (!socketConnected) {
            return;
        }

        if (!typing) {
            setTyping(true)
            socket.emit("typing", selectedChat._id)
        }

        let lastTypingTime = new Date().getTime()
        var timerLength = 3000;
        setTimeout(() => {
            var timeNow = new Date().getTime();
            var timeDiff = timeNow - lastTypingTime

            if (timeDiff >= timerLength && typing) {
                socket.emit("stop typing", selectedChat._id)
                setTyping(false)
            }
        }, timerLength);
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
                        {isTyping ? <div style={{ width: 40, height: 40 }}>
                            <Lottie animationData={defaultOptions.animationData} loop={defaultOptions.loop} autoplay={defaultOptions.autoplay} style={{ marginBottom: 15, marginLeft: 0, marginTop: 15 }} />
                        </div> : (<></>)}
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
