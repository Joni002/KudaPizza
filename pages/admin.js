import { Box, Button, Container, Heading, Input, Spacer, Text } from "@chakra-ui/react"
import Head from "next/head"
import { useState } from "react"
import Logo from "../components/logo"

const admin = () => {

    const [pass, setPass] = useState('')
    const PassHandleChange = (event) => setPass(event.target.value)

    return(
        <Box as='main' minH='100vh' className='main' bg='#F9F9F9' display='flex' flexDirection='column'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Kuda Pizza | Admin</title>
            </Head>
            <Box position='fixed' as='nav' w='100%' bg='#ffffff' zIndex={1}>
                <Container display='flex' p={2} maxW='container.lg' wrap='wrap' align='center'>
                    <Logo/>
                </Container>
            </Box>
            <Container maxW='container.lg' pt={14} align='center' margin='auto'>
                <Box width={{base: '90%', md: '70%'}} h={{base: '500px', sm: '400px'}} borderWidth={1} borderColor='#F0F0F0' borderRadius='xl' bg='#fff' marginTop='-40px' display='flex' flexDirection='column'>
                    <Heading size='md' mt={4}>Вхід до панелі адміністратора:</Heading>
                    <Box mx={14} mt={14} align='start'>
                        <Text mb='6px'>Логін:</Text>
                        <Input
                            value={pass}
                            onChange={PassHandleChange}
                            placeholder='Введіть логін'
                            size='sm'
                        />
                    </Box>
                    <Box mx={14} mt={4} align='start'>
                        <Text mb='6px'>Пароль:</Text>
                        <Input
                            value={pass}
                            onChange={PassHandleChange}
                            placeholder='Введіть пароль'
                            size='sm'
                        />
                    </Box>
                    <Spacer/>
                    <Box display='flex' flexDirection='row' justifyContent='flex-end'>
                        <Button w='32' size='md' mb={8} mr={8}>Увійти</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default admin