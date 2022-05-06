import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Icon, Text } from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react';
import ItemCardMini from "../Content/Item/itemCardMini";

const CircleIcon = () => (
    <Icon width="19" height="19" viewBox="0 0 24 22">
        <path d="M7.78125 14.5001H20.4846C20.7991 14.5001 21.0751 14.293 21.1602 13.9922L23.9729 4.1921C24.0333 3.98083 23.9919 3.75388 23.8588 3.57833C23.7255 3.40333 23.5183 3.29998 23.2971 3.29998H6.15802L5.6554 1.04833C5.58398 0.72768 5.29834 0.5 4.96875 0.5H0.703125C0.314575 0.5 0 0.813174 0 1.19999C0 1.587 0.314575 1.89999 0.703125 1.89999H4.40442L6.94354 13.2749C6.19647 13.5983 5.67188 14.3386 5.67188 15.2001C5.67188 16.358 6.61816 17.3 7.78125 17.3H20.4846C20.8733 17.3 21.1877 16.987 21.1877 16.6C21.1877 16.2132 20.8733 15.9 20.4846 15.9H7.78125C7.39398 15.9 7.07813 15.5863 7.07813 15.2001C7.07813 14.8138 7.39398 14.5001 7.78125 14.5001Z" fill="white"/>
        <path d="M7.07812 19.3998C7.07812 20.5579 8.02441 21.4998 9.18768 21.4998C10.3508 21.4998 11.2971 20.5579 11.2971 19.3998C11.2971 18.2419 10.3508 17.2998 9.18768 17.2998C8.02441 17.2998 7.07812 18.2419 7.07812 19.3998Z" fill="white"/>
        <path d="M16.9689 19.3998C16.9689 20.5579 17.9152 21.4998 19.0782 21.4998C20.2415 21.4998 21.1876 20.5579 21.1876 19.3998C21.1876 18.2419 20.2415 17.2998 19.0782 17.2998C17.9152 17.2998 16.9689 18.2419 16.9689 19.3998Z" fill="white"/>
    </Icon>
  )

const CartBtn = () => {
    const item = {
        title: "Чікен Солодкий Чілі",
        img: "https://i.ibb.co/DYdXKSt/Rectangle-4.png",
        ingredients: ["Курка", "Гриби", "Перець Халапеньо", "Сир Моцарелла", "Томатний соуc"],
        cost: "120"
      }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
        <Box flex={1} align='right'>
            <Button ref={btnRef}
                    onClick={onOpen}
                    backgroundColor='#FF7010'
                    _hover={{ bg: 'orange.500' }} 
                    _active={{
                        bg: 'orange.300',
                        borderColor: 'orange.500',
                    }}
                    _focus={{boxShadow: 'none'}}
                    color='white' 
                    leftIcon={<CircleIcon/>}>
            {/* value */}
                0 ₴

            </Button>
        </Box>
        
        <Drawer
            size='sm'
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay backdropFilter={'blur(10px) brightness(110%)'}/>
            <DrawerContent>
            <DrawerCloseButton size='lg' _focus={'nune'} mt={3}/>
            <DrawerHeader mt={3} fontSize='2xl'>Ваше замовлення</DrawerHeader>

            <DrawerBody>
                
                <ItemCardMini title={item.title} img={item.img} ingredients={item.ingredients} cost={item.cost}/>

            </DrawerBody>

            <Divider/>
            <DrawerFooter display='flex' justifyContent='space-between' py='3' px='4'>
                <Text fontWeight='600' color='#FF7010'>Разом: 450 ₴</Text>
                <Button colorScheme='orange' bg='#FF7010'fontWeight='normal' fontSize='sm'>Оформити замовлення</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default CartBtn