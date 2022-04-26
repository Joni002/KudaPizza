import { Box, Image, Text } from "@chakra-ui/react"

const PromoCard = (props) => {
    const {imgSrc, text, mr} = props
    return(
        <Box h='270px'
         w='230px' 
         minW={{base: '230px', md: '0px'}}
         borderRadius='xl'
         position='relative'
         display='inline-block'
         mr={mr}>

            <Image boxSize='100%'
             borderRadius='xl'
             objectFit='cover'
             src={imgSrc}/>

            <Text w='80%' position='absolute' bottom='15px' left='15px' color='white' fontSize='18px'>{text}</Text>
            
        </Box>
    )
}

PromoCard.defaultProps = {mr: {base: 4, md: 6}}

export default PromoCard