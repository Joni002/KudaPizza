import Logo from '../logo'
import MenuBtn from './menuBtn'
import CartBtn from './cartBtn'
import UserBtn from './userBtn'
import { Container, Box, Flex } from '@chakra-ui/react'
// import styled from '@emotion/styled'

const Navbar = () => {
    return(
        <Box position='fixed' as='nav' w='100%' bg='#ffffff'  zIndex={1}>
            <Container display='flex' p={2} maxW='container.lg' wrap='wrap' align='center' justify='spase-between'>
                <Flex align='center' mr={16}>
                    <Logo/>
                </Flex>

                <CartBtn/>

                <Box ml={6} display={{base: 'none', lg: 'inline-block'}}>
                    <UserBtn/>
                </Box>

                <Box ml={2} display={{base: 'inline-block', lg: 'none'}}>
                    <MenuBtn/>
                </Box>

            </Container>
        </Box>
    )
}
export default Navbar

