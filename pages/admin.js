import { Box, Button, Center, Container, Flex, Heading, Input, InputGroup, InputRightAddon, InputRightElement, Spacer, Switch, Text } from "@chakra-ui/react"
import clientPromise from "../lib/mongodb"
import Head from "next/head"
import { useState } from "react"
import Logo from "../components/logo"
import AdminItemsBlock from "../components/Admin/adminItemsBlock"
import { AddIcon, ArrowBackIcon, CheckIcon } from "@chakra-ui/icons"
import AdminItemCard from "../components/Admin/adminItemCard"
import AddNewItem from "../components/Admin/addNewItem"
import AddIngredientToNewItem from "../components/Admin/addIngridientToNewItem"

const admin = ({ isConnected, products }) => {

    const [logined, setLogined] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [adding, setAdding] = useState(false)
    const [newItem, setNewItem] = useState(
        {
            title: '',
            img: '',
            newBadge: 'hidden',
            ingredients: [],
            cost: 0
        }
    )
    const pNewItem = newItem

    // auth
    const [login, setLogin] = useState('')
    const loginHandleChange = (event) => setLogin(event.target.value)

    const [pass, setPass] = useState('')
    const passHandleChange = (event) => setPass(event.target.value)
    // -----

    // addItem
    const [img, setImg] = useState('')
    const imgHandleChange = (event) => setImg(event.target.value)

    const [newBadge, setNewBadge] = useState('visible')

    const [title, setTitle] = useState('')
    const titleHandleChange = (event) => setTitle(event.target.value)
    pNewItem.title = title

    const [checkedAdd, setCheckedAdd] = useState();
    pNewItem.ingredients = checkedAdd

    const [cost, setCost] = useState('')
    const costHandleChange = (event) => setCost(event.target.value)
    pNewItem.cost = cost
    // -----

    if(logined == false){
    return(
        <Box as='main' minH='100vh' className='main' bg='#F9F9F9' display='flex' flexDirection='column'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>LikePizza | Admin</title>
            </Head>
            <Box position='fixed' as='nav' w='100%' bg='#ffffff' zIndex={1}>
                <Container display='flex' p={2} maxW='container.lg' alignItems='center' justifyContent='space-between'>
                    <Logo/>
                    <Heading size='md'>Панель адміністрування</Heading>
                </Container>
            </Box>

            <Container maxW='container.lg' pt={14} align='center' margin='auto'>
                <Box width={{base: '90%', md: '70%'}} h={{base: '500px', sm: '400px'}} borderWidth={1} borderColor='#F0F0F0' borderRadius='xl' bg='#fff' marginTop='-40px' display='flex' flexDirection='column'>
                    <Heading size='md' mt={4}>Вхід до панелі адміністратора:</Heading>
                    <Box mx={14} mt={14} align='start'>
                        <Text mb='6px'>Логін:</Text>
                        <Input
                            isInvalid={invalid}
                            value={login}
                            type='password'
                            onChange={(e) => {loginHandleChange(e), setInvalid(false)}}
                            placeholder='Введіть логін'
                            size='sm'
                        />
                    </Box>
                    <Box mx={14} mt={4} mb={6} align='start'>
                        <Text mb='6px'>Пароль:</Text>
                        <Input
                            isInvalid={invalid}
                            value={pass}
                            type='password'
                            onChange={(e) => {passHandleChange(e), setInvalid(false)}}
                            placeholder='Введіть пароль'
                            size='sm'
                        />
                    </Box>
                    <Text align='start' mx={14} color='red'>{invalid == true ? 'Неправильні логін або пароль!': ''}</Text>
                    <Spacer/>
                    <Box display='flex' flexDirection='row' justifyContent='flex-end'>
                        <Button onClick={
                            () => login && pass != 'Admin' ? 
                            (setLogined(false), setInvalid(true))
                            : setLogined(true)
                        }
                        w='32' 
                        size='md'
                        mb={8} 
                        mr={8}>Увійти</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
        
    )}
    else{
        return(
            <Box as='main' minH='100vh' className='main' bg='#F9F9F9' display='flex' flexDirection='column'>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>LikePizza | Admin</title>
                </Head>
                <Box position='fixed' as='nav' w='100%' bg='#ffffff' zIndex={1}>
                    <Container display='flex' p={2} maxW='container.lg' alignItems='center' justifyContent='space-between'>
                        <Logo/>
                        <Heading size='md'>Панель адміністрування</Heading>
                    </Container>
                </Box>
                {adding == false ? (
                    <Container maxW='container.lg' mt={14}>
                        <Button onClick={() => setAdding(true)}
                        leftIcon={<AddIcon/>} 
                        size='lg'
                        backgroundColor='#FF7010'
                        _hover={{ bg: 'orange.500' }} 
                        _active={{
                            bg: 'orange.300',
                            borderColor: 'orange.500',
                        }}
                        _focus={{boxShadow: 'none'}}
                        color='white'  my={8}>Добавити елемент</Button>
                        <AdminItemsBlock isConnected={isConnected} products={products}/>
                    </Container>)
                : 
                    (<Container maxW='container.lg' mt={10}>
                        <Button onClick={() => setAdding(false)}
                            leftIcon={<ArrowBackIcon/>} 
                            backgroundColor='#FF7010'
                            _hover={{ bg: 'orange.500' }} 
                            _active={{
                                bg: 'orange.300',
                                borderColor: 'orange.500',
                            }}
                            _focus={{boxShadow: 'none'}}
                            color='white'  my={8}>Повернутись назад</Button>
                        <Flex flexDirection={{base: 'column', sm: 'row'}}>
                            <Box>
                                <AddNewItem productObj={newItem}/>
                            </Box>

                            <Box w='100%'>
                                <Flex flexDirection='column' ml={{base: 0, sm: '10%'}}>
                                    <Box>
                                        <Text mb='4px' fontSize='sm' color='#A5A5A5'>URL картинки</Text>
                                        <InputGroup size='md'>
                                            <Input
                                                value={img}
                                                onChange={imgHandleChange}
                                                placeholder='https://img.com'
                                                size='sm'
                                                h={10}
                                                bg='#fff'
                                                borderRadius='md'
                                            />
                                            <InputRightElement width='4.5rem'>
                                                <Button h='1.75rem' size='sm' 
                                                backgroundColor='#FF7010'
                                                _hover={{ bg: 'orange.500' }} 
                                                _active={{
                                                    bg: 'orange.300',
                                                    borderColor: 'orange.500',
                                                }}
                                                _focus={{boxShadow: 'none'}}
                                                color='white' onClick={(e) => {pNewItem.img = img, setNewItem(pNewItem), imgHandleChange(e)}}>
                                                    <CheckIcon/>
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </Box> 

                                    <Flex alignItems='center' mt={4}>
                                        <Text mb='4px' fontSize='sm' color='#A5A5A5' mr={4}>URL картинки</Text>
                                        <Box bg='#E23535' py={'3px'} px={2} borderRadius='lg'>
                                            <Center textTransform='uppercase' color='white'>
                                                new
                                            </Center>
                                        </Box>
                                    </Flex>
                                    <Switch onChange={() => {newBadge == 'hidden' ? setNewBadge('visible') : setNewBadge('hidden'), pNewItem.newBadge = newBadge, setNewItem(pNewItem)}} colorScheme='orange' size='lg'/>

                                    <Box my={4}>
                                        <Text mb='4px' fontSize='sm' color='#A5A5A5'>Назва продукту</Text>
                                        <Input
                                                value={title}
                                                onChange={titleHandleChange}
                                                placeholder='Папероні :)'
                                                size='sm'
                                                h={10}
                                                bg='#fff'
                                                borderRadius='md'
                                            />
                                    </Box>
                                    
                                    <Text mb='4px' fontSize='sm' color='#A5A5A5'>Інгрідієнти</Text>
                                    <AddIngredientToNewItem setCheckedAdd={setCheckedAdd}/>

                                    <Flex flexDirection={{base: 'column', sm: 'row'}} alignItems={{base: 'normal', sm: 'end'}} justifyContent='space-between'>
                                        <Box>
                                            <Text mb='4px' mt={4} fontSize='sm' color='#A5A5A5'>Ціна</Text>
                                            <InputGroup>
                                                <Input
                                                        value={cost}
                                                        onChange={costHandleChange}
                                                        placeholder='100'
                                                        size='sm'
                                                        h={10}
                                                        bg='#fff'
                                                        borderRadius='md'
                                                />
                                                <InputRightAddon children={'₴'}/>
                                            </InputGroup>
                                        </Box>

                                        <Button 
                                        mt={{base: 4, sm: 0}}
                                        size='lg'
                                        backgroundColor='whatsapp.600'
                                        _hover={{ bg: 'whatsapp.500' }} 
                                        _active={{
                                            bg: 'whatsapp.300',
                                            borderColor: 'whatsapp.500',
                                        }}
                                        _focus={{boxShadow: 'none'}}
                                        color='white'>Додати продукт</Button>

                                    </Flex>

                                </Flex>
                            </Box>
                        </Flex>
                    </Container>)
                }
            </Box>
        )
    }
}

export default admin

export async function getServerSideProps() {
    try {
        const client = await clientPromise
        const db = client.db("KudaPizza")
        // `await clientPromise` will use the default database passed in the MONGODB_URI
        // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the folloing code:
        //
        // `const client = await clientPromise`
        // `const db = client.db("myDatabase")`
        //
        // Then you can execute queries against your database like so:
        // db.find({}) or any of the MongoDB Node Driver commands
        
        const products = await db
        .collection("pizzas")
        .find({})
        .toArray();
  
        return {
            props: { 
                isConnected: true,
                products: JSON.parse(JSON.stringify(products)),
            }
        }
    } catch (e) {
      console.error(e)
      return {
        props: { isConnected: false },
      }
    }
  }