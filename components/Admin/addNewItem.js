import { Box, Button, Center, Divider, Flex, Image, Spacer, Text, useToast } from "@chakra-ui/react"

const AddNewItem = (props) => {
    const { productObj } = props
    const toast = useToast()
    const lengthIngredients = productObj.title ? (productObj.title.length <= 23 ? 2 : 1) : 2
    
    return(
        <>
            <Box>
                <Box  
                h={{base: '130px', sm: '380px'}}
                w={{base: '100%', sm: '230px'}}
                bg='white'
                borderWidth='1px'
                borderColor='#F0F0F0'
                borderRadius='xl' 
                overflow='hidden'
                mb={{base: 3, sm: 0}}
                fontSize={'sm'}
                display='flex'
                flexDirection={{base: 'row', sm: 'column'}}>

                    <Box bg='#E23535' position='absolute' py={{base: '3px', sm: 1}} px={{base: 2, sm: 3}} borderRightRadius='lg' mt={{base: 2, sm: 3}} visibility={productObj.newBadge}>
                        <Center textTransform='uppercase' color='white'>
                            new
                        </Center>
                    </Box>

                    <Box h={{base: '100px', sm: '230px'}} 
                    minW='100px' 
                    m={{base: 3, sm: 0}}>
                        <Image src={productObj.img != '' ? productObj.img : 'https://i.pinimg.com/564x/42/a5/9b/42a59bb118aaa50f3fb798356898bf17.jpg'} boxSize='100%'/>
                        <Divider display={{base: 'none', sm: 'flex'}}/>
                    </Box>

                    <Flex flexDirection='column' p={3} h='100%'>
                        <Box>
                            <Text fontSize='md' 
                            fontWeight='500' 
                            mb={{base: 0, sm: 1}}>

                                {productObj.title ? productObj.title : 'Назва продукту'}

                            </Text>
                            <Text noOfLines={lengthIngredients} fontSize={{base: 'sm', md: 'md'}}>{productObj.ingredients ? productObj.ingredients.map(ingredient => (`${ingredient}, `)) : ''}</Text>
                        </Box>
                        <Spacer />
                        <Flex>
                            <Button onClick={e => {
                            toast({
                                title: 'Тост!',
                                description: `Так виглядає сповіщення`,
                                status: 'success',
                                position: 'bottom-right',
                                duration: 3000,
                                isClosable: true,
                            })}} 
                            display={{base: 'none', sm: 'inline-block'}} backgroundColor='#FF7010'
                            size={'md'}
                            _hover={{ bg: 'orange.500' }} 
                            _active={{
                                bg: 'orange.300',
                                borderColor: 'orange.500',
                            }}
                            _focus={{boxShadow: 'none'}}
                            px={7}
                            color='white'
                            fontSize='sm'
                            fontWeight='400'>

                                Вибрати

                            </Button>

                            <Spacer display={{base: 'none', sm: 'inline-block'}}/>

                            <Box display='flex' 
                            alignItems='center' 
                            py={{base: 1, sm: 0}} 
                            px={{base: 4, sm: 0}} 
                            borderRadius={{base: 5, sm: 0}} 
                            bg={{base: '#FFEEE2', sm: 'none'}}>

                                <Text fontSize={{base: 'sm', sm: 'md'}} color='#FF7010' fontWeight='500'>від {productObj.cost ? productObj.cost : '0'} ₴</Text>

                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
      </>
    )
}

export default AddNewItem