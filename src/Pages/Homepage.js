import { Box, Container, Tabs, Tab, TabList, TabPanel, TabPanels, Text } from '@chakra-ui/react'
import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

const Homepage = () => {
    return (
        <Container maxW='xl' centerContent marginTop='10%'>
            {/* <Box
                d="flex"
                justifyContent="center"
                p={3}
                bg="white"
                border='solid black'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px">
                <Text fontSize="4xl" fontWeight='600'>
                    Login
                </Text>
            </Box> */}
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
