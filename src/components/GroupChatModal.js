import { Box, Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ChatState } from '../Context/ChatProvider';
import axios from 'axios';
import UserListItem from './UserListItem';
import UserBadgeItem from './UserBadgeItem';

const GroupChatModal = ({ children }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [groupChatName, setGroupChatName] = useState();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const toast = useToast();

    const { user, chats, setChats } = ChatState();

    const handleSearch = async (query) => {
        setSearch(query)
        if (!search) {
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
            // console.log(data);
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

    const handleSubmit = async () => {
        if (!groupChatName || !selectedUsers) {
            toast({
                title: "Please fill all the feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top-center",
            });
            return;
        }

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const { data } = await axios.post('http://localhost:5000/api/chat/group', {
                name: groupChatName,
                users: JSON.stringify(selectedUsers.map((user) => user._id))
            }, config);

            setChats([data, ...chats])
            onClose();
            toast({
                title: "New Group Chat Created!",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top-center",
            });
        } catch (error) {
            toast({
                title: "Failed to Create the Chat!",
                description: error.response.data,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-center",
            });
        }
    }

    const handlegroup = (userToAdd) => {
        if (selectedUsers.includes(userToAdd)) {
            toast({
                title: "User already added",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top-center",
            });
            return;
        }

        setSelectedUsers([...selectedUsers, userToAdd]);
    }

    const handleDelete = (deleted) => {
        setSelectedUsers(selectedUsers.filter((selected) => selected._id !== deleted._id));
    };

    return (
        <>
            <span onClick={onOpen}>{children}</span>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize="35px"
                        display="flex"
                        justifyContent="center">
                        Create Group Chat
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display="flex"
                        flexDir="column"
                        alignItems="center">
                        <FormControl>
                            <Input
                                placeholder="Chat Name"
                                mb={3}
                                onChange={(e) => setGroupChatName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                placeholder="Add Users eg: John, Piyush, Jane"
                                mb={1}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </FormControl>

                        <Box w='100%' display='flex' flexWrap='wrap'>
                            {selectedUsers.map(user => (
                                <UserBadgeItem key={user._id} user={user} handleFunction={() => handleDelete(user)} />
                            ))}
                        </Box>

                        {loading ? <div>Loading</div>
                            : searchResult?.slice(0, 4).map((user) => <UserListItem key={user._id} user={user} handleFunction={() => handlegroup(user)} />
                            )}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' onClick={handleSubmit}>
                            Create Chat
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default GroupChatModal
