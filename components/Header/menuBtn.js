import { ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Modal,
    IconButton, 
    Menu,
    MenuButton,
    Box,
    Container,
    Flex,
    Spacer,
    Icon,
    Divider,
    Text,
    Heading,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from '../logo'
import {BsTelephone, BsFacebook} from 'react-icons/bs'
import {BiMap} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'

const MenuBtn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const openFunc = () => onOpen()

    return(
        <Menu>
            <MenuButton onClick={() => openFunc()} as={IconButton} icon={<HamburgerIcon/>} variant='outline' aria-label='Options' _focus={{boxShadow: 'none'}}/>

            <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader onClick={onClose}><Logo/></ModalHeader>
                    <ModalCloseButton size={'lg'} _focus={{boxShadow: 'none'}}/>
                    <ModalBody p={0}>
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
                                px={6}
                                maxW='container.lg' >

                                    <Flex flexDirection='column'>
                                        <Heading>Меню</Heading>                                  
                                        <Text fontSize='lg' mt={14}>Про компанію</Text>
                                        <Text fontSize='lg' mt={4}>Угода користувача</Text>
                                        <Text fontSize='lg' mt={4}>Умови гарантії</Text>
                                        <Text fontSize='lg' mt={4}>Ресторан</Text>
                                        <Text fontSize='lg' mt={4}>Контакти</Text>
                                        <Text fontSize='lg' mt={4}>Підтримка</Text>
                                        <Divider mt={4}/>
                                        <Box mt={4} display='flex' alignItems='center'>
                                            <Icon as={BsTelephone} color='orange.400' mr={2}/>
                                            <Text fontSize='lg'>+380 00 000-00-00</Text>
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
                                </Container>
                        </Box>
                    </ModalBody>
                    <ModalFooter justifyContent='center'>
                        <Flex flexDirection='column' w='100%' alignItems='center'>
                            <Divider mb={3}/>
                            <Text fontSize='lg' color='#A5A5A5'>© Copyright 2022 — LikePizza</Text>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Menu>
    )
}

export default MenuBtn