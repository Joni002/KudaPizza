import { Box, Container, Flex, Heading, Spacer, Icon, Divider  } from "@chakra-ui/react"
import {BsTelephone, BsFacebook} from 'react-icons/bs'
import {BiMap} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import Logo from "../logo"

const Footer = () => {
    return(
        <Box
         as="footer" 
         marginTop='auto'
         display='flex' 
         
        // bottom={{base: 'none'}}

         w='100%' 
         h={{base: '680px', md: 56}} 
         bg='white' py={6} 
         fontSize={{base: 'md', md: 'sm'}} 
         >

            <Container display='flex' 
             maxW='container.lg' 
             justifyContent='space-between' 
             flexDirection={{base: 'column', md: 'row'}}>

                <Flex flexDirection='column' mb={{base: 6, md:0}}>
                    <Logo imgSize='35' textSize='xl'/>
                    <Spacer display={{base: 'none', md: 'inline-block'}}/>
                    <Box display={{base: 'none', md: 'inline-block'}}>
                        © Copyright 2022 — Куда Піца
                    </Box>
                    
                </Flex>
                <Flex flexDirection='column'>
                    <Heading as={'h2'} size="md">LikePizza</Heading>
                    <Box mt='22px'>Про компанію</Box>
                    <Box mt='20px'>Угода користувача</Box>
                    <Box mt='20px'>Умови гарантії</Box>
                    <Box mt='20px'></Box>
                </Flex>
                <Flex flexDirection='column'>
                    <Heading as={'h2'} size="md">Допомога</Heading>
                    <Box mt='22px'>Ресторан</Box>
                    <Box mt='20px'>Контакти</Box>
                    <Box mt='20px'>Підтримка</Box>
                    <Box mt='20px'></Box>
                </Flex>
                <Flex flexDirection='column' >
                    <Heading as={'h2'} size="md">Контакти</Heading>
                    <Box mt='22px' display='flex' alignItems='center'>
                        <Icon as={BsTelephone} color='orange.400' mr={2}/>
                        +380 00 000-00-00
                    </Box>
                    <Box mt='20px' display='flex' alignItems='center'>
                        <Icon as={BiMap} color='orange.400' mr={2}/>
                        Хмельницький, вул. ............
                    </Box>
                    <Flex>
                        <Box mt='20px' display='flex' alignItems='center'>
                            <Icon as={BsFacebook} color='orange.400' mr={1}/>
                            Facebok
                        </Box>
                        <Box mt='20px' ml={5} display='flex' alignItems='center'>
                            <Icon as={AiOutlineInstagram} boxSize={5} color='orange.400' mr={1} />
                            Instagram
                        </Box>
                    </Flex>
                </Flex>
                <Box display={{base: 'inline-block', md: 'none'}} mt={5}>
                    <Divider mb={3}/>
                    © Copyright 2022 — LikePizza
                </Box>
            </Container>
        </Box>
    )
}

export default Footer