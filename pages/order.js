import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, Image, Input, Radio, RadioGroup, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea } from "@chakra-ui/react"
import Link from 'next/link'
import Head from "next/head"
import { useSelector } from "react-redux"
import ItemCardMini from "../components/Content/Item/itemCardMini"
import Footer from "../components/Footer/footer"
import Navbar from "../components/Header/navbar"
import { useState } from "react"

const Order = () => {

    //States
    //name, tel, mail
    const [name, setName] = useState('')
    const nameHandleChange = (event) => setName(event.target.value)

    const [tel, setTel] = useState('')
    const telHandleChange = (event) => setTel(event.target.value)

    const [mail, setMail] = useState('')
    const mailHandleChange = (event) => setMail(event.target.value)
    //------

    //delivery
    const [street, setStreet] = useState('')
    const streetHandleChange = (event) => setStreet(event.target.value)

    const [house, setHouse] = useState('')
    const houseHandleChange = (event) => setHouse(event.target.value)

    const [entrance, setEntrance] = useState('')
    const entranceHandleChange = (event) => setEntrance(event.target.value)
    
    const [floor, setFloor] = useState('')
    const floorHandleChange = (event) => setFloor(event.target.value)

    const [flat, setFlat] = useState('')
    const flatHandleChange = (event) => setFlat(event.target.value)

    const [intercom, setIntercom] = useState('')
    const intercomHandleChange = (event) => setIntercom(event.target.value)
    //------

    //pickup

    //------

    //payment
    const [paymentType, setPaymentType] = useState('Готівкою')

    const [card, setCard] = useState('')
    const cardHandleChange = (event) => setCard(event.target.value)

    const [validity, setValidity] = useState('')
    const validityHandleChange = (event) => setValidity(event.target.value)

    const [cvv, setCvv] = useState('')
    const cvvHandleChange = (event) => setCvv(event.target.value)
    //------

    //comment
    const [comment, setComment] = useState('')
    const commentHandleChange = (event) => setComment(event.target.value)
    //------
    //

    const Orders = useSelector((state) => state.cart.orders)
    let allPrise = 0
    
    Orders.map(order => allPrise += (order.newCost ? order.newCost : order.productObj.cost))

    return(
    <Box as='main' minH='100vh' className='main' bg='#F9F9F9' display='flex' flexDirection='column'>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>LikePizza | Замовлення</title>
      </Head>

      <Navbar/>

      <Container maxW='container.md' pt={14} minH='100vh'>

        <Heading size='lg' mt={6} mb={4}>Ваше замовлення</Heading>

        {Orders.length != 0 ? 
            (<>

            {Orders.map(order => <ItemCardMini key={order.id} title={order.productObj.title} img={order.productObj.img} cost={order.newCost ? order.newCost : order.productObj.cost} dought={order.dought ? order.dought : 'Традиційне'} size={order.size ? order.size : '33 см'}/>)}
            
            <Flex justifyContent={{base: 'center', sm: 'flex-end'}}>
                <Text fontSize={{base: 'xl', sm: 'lg'}} color='#FF7010' fontWeight='700' mr={3}>До сплати: {allPrise} ₴</Text>
            </Flex>

            {/* About you */}
            <Heading size='md' mt={6} mb={4}>Про вас</Heading>

            <Flex mb={4} flexDirection={{base: 'column', sm: 'row'}}>
                <Box w={{base: '100%', sm: '33%'}} mr={3}>
                    <Text mb='4px' fontSize='sm' color='#A5A5A5'>Ім&apos;я*</Text>
                    <Input
                        value={name}
                        onChange={nameHandleChange}
                        placeholder='Олексій'
                        size='sm'
                        h={10}
                        bg='#fff'
                        borderRadius='md'
                    />
                </Box>
                <Box w={{base: '100%', sm: '33%'}} mr={3}>
                    <Text mb='4px' fontSize='sm' color='#A5A5A5'>Номер телефона*</Text>
                    <Input
                        value={tel}
                        onChange={telHandleChange}
                        placeholder='+380 00 000-00-00'
                        size='sm'
                        h={10}
                        bg='#fff'
                        borderRadius='md'
                    />
                </Box>
                <Box w={{base: '100%', sm: '33%'}}>
                    <Text mb='4px' fontSize='sm' color='#A5A5A5'>Почта</Text>
                    <Input
                        value={mail}
                        onChange={mailHandleChange}
                        placeholder='mail@gmail.com'
                        size='sm'
                        h={10}
                        bg='#fff'
                        borderRadius='md'
                    />
                </Box>
            </Flex>
            {/* --------- */}

            <Divider />

            {/* delivery */}
            <Flex my={4} w='100%'>

                <Tabs variant='unstyled' w='100%'>
                    <Flex justifyContent='space-between' flexDirection={{base: 'column', sm: 'row'}}>
                        <Heading size='md' mb={{base: 3, sm: 0}}>Доставка</Heading>

                        <TabList bg='#fff'
                        spacing='0px' 
                        borderWidth='1px'
                        borderColor='#F0F0F0'
                        borderRadius='md'
                        w={{base: '100%', sm: '40%'}}>
                            <Tab w='50%' borderRadius='md' _focus={{boxShadow: 'none'}} _selected={{ color: 'white', bg: '#FF7010' }}>Доставка</Tab>
                            <Tab w='50%' borderRadius='md' _focus={{boxShadow: 'none'}} _selected={{ color: 'white', bg: '#FF7010' }}>Самовивіз</Tab>
                        </TabList>
                    </Flex>
                    <TabPanels align='start'>
                        <TabPanel p={0} mt={4}>
                        <Grid templateColumns={{base: 'repeat(6, 1fr)', sm: 'repeat(5, 1fr)'}} gap={4}>
                            <GridItem rowSpan={1} colSpan={{base: 4, sm: 5}}>
                                <Text mb='4px' fontSize='sm' color='#A5A5A5'>Вулиця*</Text>
                                <Input
                                    value={street}
                                    onChange={streetHandleChange}
                                    placeholder='Хмельницька'
                                    size='sm'
                                    h={10}
                                    bg='#fff'
                                    borderRadius='md'
                                />
                            </GridItem>

                            <GridItem colSpan={{base: 2, sm: 1}}>
                                <Text mb='4px' fontSize='sm' color='#A5A5A5'>Дім</Text>
                                <Input
                                    value={house}
                                    onChange={houseHandleChange}
                                    size='sm'
                                    h={10}
                                    bg='#fff'
                                    borderRadius='md'
                                />
                            </GridItem>
                            <GridItem colSpan={{base: 3, sm: 1}}>
                                <Text mb='4px' fontSize='sm' color='#A5A5A5'>Підїзд</Text>
                                <Input
                                    value={entrance}
                                    onChange={entranceHandleChange}
                                    size='sm'
                                    h={10}
                                    bg='#fff'
                                    borderRadius='md'
                                />
                            </GridItem>
                            <GridItem colSpan={{base: 3, sm: 1}}>
                                <Text mb='4px' fontSize='sm' color='#A5A5A5'>Поверх</Text>
                                <Input
                                    value={floor}
                                    onChange={floorHandleChange}
                                    size='sm'
                                    h={10}
                                    bg='#fff'
                                    borderRadius='md'
                                />
                            </GridItem>
                            <GridItem colSpan={{base: 3, sm: 1}}>
                                <Text mb='4px' fontSize='sm' color='#A5A5A5'>Квартира</Text>
                                <Input
                                    value={flat}
                                    onChange={flatHandleChange}
                                    size='sm'
                                    h={10}
                                    bg='#fff'
                                    borderRadius='md'
                                />
                            </GridItem>
                            <GridItem colSpan={{base: 3, sm: 1}}>
                                <Text mb='4px' fontSize='sm' color='#A5A5A5'>Домофон</Text>
                                <Input
                                    value={intercom}
                                    onChange={intercomHandleChange}
                                    size='sm'
                                    h={10}
                                    bg='#fff'
                                    borderRadius='md'
                                />
                            </GridItem>
                        </Grid>
                        </TabPanel>
                        <TabPanel p={0} mt={4}>
                            <Select bg='#fff' variant='outline' placeholder='Виберіть ресторан' />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>

            <Divider mb={4}/>

            <Heading size='md' mb={4}>Оплата</Heading>

            <RadioGroup onChange={setPaymentType} value={paymentType} mb={4}>
                <Accordion display='flex' flexDirection={{base: 'column', sm: 'row'}} w='100%'>
                        <AccordionItem border='none' >
                            <AccordionButton _hover='none'>
                                <Radio colorScheme='orange' _focus={{boxShadow: 'none'}} value='Готівкою'>Готівкою</Radio>
                            </AccordionButton>
                        </AccordionItem>

                        <AccordionItem border='none'>
                            <AccordionButton _hover='none'>
                                <Radio colorScheme='orange' _focus={{boxShadow: 'none'}} value='Карткою'>Карткою</Radio>
                            </AccordionButton>
                            <AccordionPanel w='360px' pb={4}>
                                <Box p={4} w='100%' h='200px' borderWidth={2} borderRadius='xl' borderColor='#F0F0F0'>
                                    
                                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                                        <GridItem colSpan={4}>
                                            <Text mb='4px' fontSize='sm' color='#A5A5A5'>Номер картки</Text>
                                            <Input
                                                value={card}
                                                onChange={cardHandleChange}
                                                placeholder='•••• •••• •••• ••••'
                                                size='sm'
                                                h={10}
                                                bg='#fff'
                                                borderRadius='md'
                                            />
                                        </GridItem>

                                        <GridItem colSpan={2}>
                                            <Text mb='4px' fontSize='sm' color='#A5A5A5'>Термін дії</Text>
                                            <Input
                                                value={validity}
                                                onChange={validityHandleChange}
                                                placeholder='MM/YY'
                                                size='sm'
                                                h={10}
                                                bg='#fff'
                                                borderRadius='md'
                                            />
                                        </GridItem>
                                        <GridItem colSpan={2}>
                                            <Text mb='4px' fontSize='sm' color='#A5A5A5'>CVV2</Text>
                                            <Input
                                                value={cvv}
                                                onChange={cvvHandleChange}
                                                placeholder='•••'
                                                size='sm'
                                                h={10}
                                                bg='#fff'
                                                borderRadius='md'
                                            />
                                        </GridItem>
                                    </Grid>

                                </Box>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem border='none'>
                            <AccordionButton _hover='none'>
                                <Radio colorScheme='orange' _focus={{boxShadow: 'none'}} value='Apple Pay'>Apple Pay</Radio>
                            </AccordionButton>
                        </AccordionItem>
                </Accordion>
            </RadioGroup>

            <Divider mb={4}/>

            <Heading size='md' mb={4}>Коментар</Heading>

            <Textarea placeholder='Додати коментар?' 
                mb={4} 
                bg='#fff' 
                value={comment}
                onChange={commentHandleChange}/>

            <Divider mb={4}/>

            <Flex alignItems='center' justifyContent='space-between' mb={20}>
                <Text fontSize={{base: 'xl', sm: 'lg'}} color='#FF7010' fontWeight='700' mr={3}>До сплати: {allPrise} ₴</Text>
                <Button backgroundColor='#FF7010' size='lg' color='#fff' 
                    _hover={{ bg: 'orange.500' }} 
                    _active={{
                        bg: 'orange.300',
                        borderColor: 'orange.500',
                    }}
                    _focus={{boxShadow: 'none'}}>Оформити замовлення</Button>
            </Flex>


            </>

            ) : 
            
            <Flex h='80%' flexDirection='column' align='center' justifyContent='center'>
                <Text fontSize='xl' mb={12}>Ваша карзина порожня:(</Text>
                <Image src='https://i.ibb.co/YjsC9WQ/NoCart.png' style={{opacity: 0.4}} width={{base: '70%', sm: '50%'}} />
                <Link href='/'>
                    <Button mt={24} backgroundColor='#FF7010' size='lg' color='#fff' 
                    _hover={{ bg: 'orange.500' }} 
                    _active={{
                        bg: 'orange.300',
                        borderColor: 'orange.500',
                    }}
                    _focus={{boxShadow: 'none'}}>Повернутись на головну</Button>
                </Link>
            </Flex>
        }
        
      </Container>
      <Footer/>

    </Box>
    )
}

export default Order