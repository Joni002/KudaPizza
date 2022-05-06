import { InfoOutlineIcon } from "@chakra-ui/icons"
import {MdLocalFireDepartment} from 'react-icons/md'
import { Box, Text, Flex, Heading, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Spacer, Image, useCheckboxGroup, Center, Button } from "@chakra-ui/react"
import React, { useState } from "react";
import ModalIngredient from "./modalIngredient"
import ModalAddIngredient from "./modalAddIngredient"
import DoughRadio from "./doughRadio";
import SizeRadio from "./sizeRadio";
import { useDispatch } from 'react-redux';
import { delIngredient, addIngredient } from '../../../../redux/order'


const ItemModal = (props) => {
    const {isOpen, onClose, newBadge, title, img, cost, productObj} = props

    const indredientsIcon = {
        "Курка": "https://i.ibb.co/80YV34s/chicken.png",
        "Цибуля": "https://i.ibb.co/JxQwzRT/zibula.png",
        "Перець Халапеньо": "https://i.ibb.co/RDTtt6X/perezh.png",
        "Соус": "https://i.ibb.co/3MLtSPm/souse.png",
        "Сир Моцарелла": "https://i.ibb.co/PjMqf6C/cheese.png",
        "Томатний соуc": "https://i.ibb.co/3MLtSPm/souse.png",
        "Бекон": "https://i.ibb.co/pJtrj5y/becon.png",
        "Гриби": "https://i.ibb.co/PZLTwd2/gribi.png",
    }

    const [checkedDel, setCheckedDel] = useState();
    const [checkedAdd, setCheckedAdd] = useState();
    const dispatch = useDispatch();
    dispatch(delIngredient({checkedDel}))
    dispatch(addIngredient({checkedAdd}))

    const { getCheckboxProps } = useCheckboxGroup({
        onChange: setCheckedDel,
    })
    // let pushItem = productObj
    // pushItem.delIngredients = checkedDel
    // pushItem.addIngredients = checkedAdd
    // console.info(pushItem)

    return(
        <Modal isOpen={isOpen} onClose={onClose} size='4xl' motionPreset='slideInBottom'>
            <ModalOverlay backdropFilter={'blur(10px) brightness(110%)'}/>

            <ModalContent mt={{base: 20}} mr={0} my={{base: 0, md: 'auto'}}  borderRadius='3xl' borderBottomRadius={{base: 0, md: '3xl'}} minH={{base: '100%', md: '550px'}} userSelect='none' w={{base: 'full', sm: '2xl', md: '3xl', lg: '4xl'}}>
            
                <Box  display={{base: 'block', sm: 'none'}} mt={-5} w='50%' h='6px' bg='rgba(250, 250, 250, 0.5)' backdropBlur='24px' position='absolute' mx="25%" borderRadius='full'></Box>

            <ModalCloseButton display={{base: 'none', lg: 'flex'}} position='absolute' fontSize={'3xl'} color='white' size={'lg'} right={-14} _focus={{boxShadow:'0'}}/>

            <ModalCloseButton display={{base: 'block', md: 'none'}} _focus={{boxShadow:'0'}} size='md'/>

                <ModalBody overflowX='hidden' px={0} py={0} display='flex' flexDirection={{base: 'column', md: 'row'}}>
                    <Flex maxW={{base: '100%', md: '50%'}} align='center'>
                        <Box bg='#E23535' top={3} position='absolute' py={{base: '3px', sm: 1}} px={{base: 2, sm: 3}} borderRightRadius='lg' mt={{base: 2, sm: 3}} visibility={newBadge}>
                            <Center textTransform='uppercase' color='white'>
                                new
                            </Center>
                        </Box>
                        <Image src={img} px={{base: 8, sm: 24, md: 8}} py={5}/>
                    </Flex>

                    <Flex pt={6} pr={4} pl={{base: 4, md: 0}} minW={{base: '100%', md: '50%'}} display='flex' flexDirection='column' >
                        <Flex align='center'>
                            <Box display='flex' justifyContent='space-between'>
                                <Icon as={MdLocalFireDepartment} color='#E23535' boxSize={6} mr={2}/>
                                <Heading fontSize='xl'>{title}</Heading>
                            </Box>
                            <Spacer/>
                            <InfoOutlineIcon boxSize={6} color='#A5A5A5'/>
                        </Flex>

                        <Flex my={4} overflowX='scroll'
                        css={{
                            '&::-webkit-scrollbar': {
                                height: '10px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#a8a8a899',
                                borderRadius: '5px',
                            },
                          }}>

                            {productObj.ingredients.map((value) => {
                                
                                const checkbox = getCheckboxProps({ value });
                                return (
                                    <ModalIngredient key={value} {...checkbox} value={value} icon={indredientsIcon[value]}/>
                                );
                            })}

                        </Flex>
                        
                        <DoughRadio/>
                        <SizeRadio/>

                        <Text mt={4} mb={3} 
                        fontSize={'md'}
                        fontWeight={500}>
                            Добавити до піци
                        </Text>

                        <Flex overflowX='scroll' 
                        css={{
                            '&::-webkit-scrollbar': {
                                height: '10px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#a8a8a899',
                                borderRadius: '5px',
                            },
                          }}
                        mb={{base: 24, md: 0}}>

                            {productObj.ingredients.map((value) => {
                                const { getCheckboxProps } = useCheckboxGroup({
                                    onChange: setCheckedAdd
                                  });
                                const checkbox = getCheckboxProps({ value });
                                return (
                                    <ModalAddIngredient key={value} {...checkbox} value={value} icon={indredientsIcon[value]}/>
                                );
                            })}

                        </Flex>

                        <Flex justify='space-between' w='100%' py={{base: 3, md: 0}} mt={3} pr={{base: 3, md: 0}} bottom={{base: '0px', md: 'auto'}} position={{base: 'fixed', md: 'relative'}} bg={{base: '#fff', md: 'none'}}  mb={{base: 0, md: 4}} borderTopWidth={{base: '1px', md: 0}} borderTopColor='#F0F0F0'>
                            <Text fontWeight='700' color='#FF7010' fontSize={'xl'}>
                                Ціна: {cost} ₴
                            </Text>
                            
                            <Button right={4} px={8} backgroundColor='#FF7010'
                            _hover={{ bg: 'orange.500' }} 
                            _active={{
                                bg: 'orange.300',
                                borderColor: 'orange.500',
                            }}
                            _focus={{boxShadow: 'none'}}
                            color='white'>
                                Добавити
                            </Button>
                        </Flex>

                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

ItemModal.defaultProps = {newBadge: 'hidden'}

export default ItemModal