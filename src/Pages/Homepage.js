import { Box, Container, Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!userInfo) {
            navigate("/chats");
        }
      }, [navigate]);


    return (
        <Container maxW='xl' centerContent marginTop='10%'>
            <Box bg="white" w="100%" p={4} border='solid black' borderRadius="lg" borderWidth="1px">
                <Tabs variant='soft-rounded'>
                    <TabList mb='1em'>
                        <Tab width='50%'>Login</Tab>
                        <Tab width='50%'>Signup</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Homepage
