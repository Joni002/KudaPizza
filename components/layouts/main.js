import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../Header/navbar'
import Footer from '../Footer/footer'

const MainLayout = ({children}) => {
    return (
        <Box as='main' minH='100vh' className='main' display='flex' flexDirection='column'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Kuda Pizza | Home</title>
            </Head>

            <Navbar/>

            <Container maxW='container.lg' pt={14} >
                { children }
            </Container>

            <Footer/>
        </Box>
    )
}
export default MainLayout