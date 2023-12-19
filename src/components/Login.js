import { Button, FormControl, FormLabel, Input, VStack, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const toast = useToast()
    let navigate = useNavigate()

    const handleSubmit = async () => {
        if ( !email || !password) {
            toast({
                title: "Please Fill all the Feilds",
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
                    "Content-type": "application/json",
                },
            };
            const response = await axios.post('http://localhost:5000/api/user/login', { email, password }, config);
            const { data } = response
            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top-center",
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate("/chats")
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-center",
            });
        }
    }


    return (
        <VStack spacing='5px'>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)}></Input>
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)}></Input>
            </FormControl>
            <Button colorScheme="blue" width="100%" style={{ marginTop: "25px" }} onClick={handleSubmit}>
                Login
            </Button>
        </VStack>
    )
}

export default Login
