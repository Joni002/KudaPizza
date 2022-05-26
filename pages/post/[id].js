import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import PromoCard from '../../components/Content/Promo/promoCard'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Header/navbar'

const Post = () => {
    const router = useRouter()

    if(router.query.id == 1 || router.query.id == 3){
        return(
            <Box as='main' minH='100vh' className='main' bg='#F9F9F9' display='flex' flexDirection='column'>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>LikePizza | Пост #{router.query.id}</title>
                </Head>

                <Navbar/>

                <Container maxW='container.lg' mt={14}>

                    <Flex mt={{base: 8, sm: 16}} flexDirection={{base: 'column', sm: 'row'}}>
                        <Flex justifyContent={{base: 'center', sm: 'normal'}}>
                            <PromoCard imgSrc='https://i.ibb.co/0KDJVHb/Group-737.png' text='3 средні піци від 290 гривень'/>
                        </Flex>
                        <Flex flexDirection='column' w={{sm: '80%'}} ml={4}>
                            <Box align='center'>
                                <Heading size='md' mt={{base: 8, sm: 0}}>Пост №{router.query.id}</Heading>
                            </Box>
                            <Box>
                                <Text mt={4} mb={{base: 20, sm: 0}}>Це текст {router.query.id} поста, тут може знаходитись щось звязане з {router.query.id} постом)</Text>
                            </Box>
                        </Flex>
                    </Flex>

                    <Link href='/'>
                        <Button leftIcon={<ArrowBackIcon/>} 
                                backgroundColor='#FF7010'
                                _hover={{ bg: 'orange.500' }} 
                                _active={{
                                    bg: 'orange.300',
                                    borderColor: 'orange.500',
                                }}
                                _focus={{boxShadow: 'none'}}
                                color='white'  my={8}>Повернутись назад</Button>
                    </Link>

                </Container>

                <Footer/>
            </Box>
        )}
    if (router.query.id == 2 || router.query.id == 4) {
        return(
            <Box as='main' minH='100vh' className='main' bg='#F9F9F9' display='flex' flexDirection='column'>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>LikePizza | Пост #{router.query.id}</title>
                </Head>

                <Navbar/>

                <Container maxW='container.lg' mt={14}>

                    <Flex mt={{base: 8, sm: 16}} flexDirection={{base: 'column', sm: 'row'}}>
                        <Flex justifyContent={{base: 'center', sm: 'normal'}}>
                            <PromoCard imgSrc='https://i.ibb.co/c8xmfp6/Group-738.png' text='Кэшбек 10% на самовивоз'/>
                        </Flex>
                        <Flex flexDirection='column' w={{sm: '80%'}} ml={4}>
                            <Box align='center'>
                                <Heading size='md' mt={{base: 8, sm: 0}}>Пост №{router.query.id}</Heading>
                            </Box>
                            <Box>
                                <Text mt={4} mb={{base: 20, sm: 0}}>Це текст {router.query.id} поста, тут може знаходитись щось звязане з {router.query.id} постом)</Text>
                            </Box>

                        </Flex>
                    </Flex>

                    <Link href='/'>
                        <Button leftIcon={<ArrowBackIcon/>} 
                                backgroundColor='#FF7010'
                                _hover={{ bg: 'orange.500' }} 
                                _active={{
                                    bg: 'orange.300',
                                    borderColor: 'orange.500',
                                }}
                                _focus={{boxShadow: 'none'}}
                                color='white'  my={8}>Повернутись назад</Button>
                    </Link>

                </Container>

                <Footer/>
            </Box>
        )} 
    else {
        return(
            <Box as='main' minH='100vh' className='main' bg='#F9F9F9' display='flex' flexDirection='column'>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>LikePizza | Пост #{router.query.id}</title>
                </Head>

                <Navbar/>

                <Container maxW='container.lg' mt={14} align='center' margin='auto'>

                    <Flex flexDirection='column'>
                        <Heading size='md' mt={{base: 8, sm: 0}}>Поста №{router.query.id} неіснує:(</Heading>

                        <Link href='/'>
                            <Button leftIcon={<ArrowBackIcon/>} 
                                    backgroundColor='#FF7010'
                                    _hover={{ bg: 'orange.500' }} 
                                    _active={{
                                        bg: 'orange.300',
                                        borderColor: 'orange.500',
                                    }}
                                    _focus={{boxShadow: 'none'}}
                                    color='white'  my={8}>Повернутись назад</Button>
                        </Link>
                    </Flex>
                </Container>
            </Box>
        )
    }
}

export default Post