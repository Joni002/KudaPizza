import { Box, Button, Flex, Spacer, Image, Text, useNumberInput, Input } from "@chakra-ui/react"

const ItemCardMini = (props) => {
    const { title, img, cost } = props

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 99,
    })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return(
        <Box h='120px'
            w='100%'
            bg='white'
            borderWidth='1px'
            borderColor='#F0F0F0'
            borderRadius='xl' 
            overflow='hidden'
            mb={3}
            fontSize={'sm'}
            display='flex'>

                <Box h='95px' 
                minW='95px' 
                m={3}>
                    <Image src={img} boxSize='100%'/>
                </Box>

                <Flex flexDirection='column' p={3} w='100%'>
                    <Box>
                        <Text fontSize='md' 
                        fontWeight='500' 
                        noOfLines={1}
                        mb={1}>

                            {title}

                        </Text>
                        <Text noOfLines={2} fontSize='sm'>Тонке тісто, 33 см</Text>
                    </Box>
                    <Spacer />
                    <Flex justifyContent='space-between'>
                        <Box display='flex' 
                        alignItems='center' 
                        borderRadius={5} 
                        bg='#FFEEE2'>

                            <Button {...dec} bgColor='inherit' h='100%' size='xs' _focus='none' _hover='nune' borderRightRadius={0} color='#FF7010'>-</Button>
                            <Input {...input} textAlign='center' border='nune' size='xs' mx={2} my='5px' maxW='30px' fontSize='sm' _focus='none' fontWeight={600} color='#FF7010'/>
                            <Button {...inc} bgColor='inherit' h='100%' size='xs' _focus='none' _hover='nune' borderLeftRadius={0} color='#FF7010'>+</Button>

                        </Box>

                        <Text fontSize={{base: 'sm', sm: 'md'}} color='#FF7010' fontWeight='500'>{cost} ₴</Text>
                    </Flex>
                </Flex>
            </Box>

    )
}

export default ItemCardMini