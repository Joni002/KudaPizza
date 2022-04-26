import { Box, Flex, Center, Icon } from "@chakra-ui/react"

const MenuCard = (props) => {
    const {icon, iconcolor, text, textColor, mr} = props
    return (
        <Center mr={mr} 
         py={{base: 2}}
         px={{base: 5}}
         h={{base: '40px', md: '88px'}}
         w={{base: '110px', md: '125px'}} 
         minW={{base: '109px', md: '75px', lg: '105px'}} 
         userSelect='none'
         bg='white'
         borderRadius={'xl'} 
         borderWidth='1px' 
         borderColor='#F0F0F0'>

            <Flex flexDirection={{base: 'row', md: 'column'}} align='center'>
                <Icon as={icon} color={iconcolor} boxSize={{base: 7, md: 7, lg: 8}}/>
                <Box mt={{base: 0, md: 1}} ml={{base: 2, md: 0}} fontSize={{base: '16px', md: '14px', lg: '16px'}} fontWeight='500' color={textColor}>{text}</Box>
            </Flex>
        </Center>
    )
}

MenuCard.defaultProps = {iconcolor: '#FF7010', mr: {base: 4, lg: 5}}

export default MenuCard