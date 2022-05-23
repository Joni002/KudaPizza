import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react"
import Link from 'next/link'
import Head from "next/head"
import { useSelector } from "react-redux"
import ItemCardMini from "../components/Content/Item/itemCardMini"
import Footer from "../components/Footer/footer"
import Navbar from "../components/Header/navbar"

const order = () => {

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

      <Container maxW='container.md' pt={14} h='100vh'>

        <Heading size='lg' mt={6} mb={4}>Ваше замовлення</Heading>

        {Orders.length != 0 ? 
            (Orders.map(order => <ItemCardMini title={order.productObj.title} img={order.productObj.img} cost={order.newCost ? order.newCost : order.productObj.cost}/>),

            <Box display='flex' flexDirection='row' justifyContent={{base: 'center', md: 'flex-end'}}>
                <Text fontSize={{base: 'xl', sm: 'lg'}} color='#FF7010' fontWeight='700' mr={3}>До сплати: {allPrise} ₴</Text>
            </Box>
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

export default order