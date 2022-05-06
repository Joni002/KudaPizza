import { Box, Button, Center, Divider, Flex, Image, Spacer, Text, useDisclosure } from "@chakra-ui/react"
import { useDispatch } from 'react-redux';
import { initProduct } from '../../../redux/order'
import {InfoOutlineIcon} from '@chakra-ui/icons'
import ItemModal from "./itemModal/itemModal"

const ItemCard = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { newBadge, title, img, ingredients, cost, productObj } = props
    const lengthIngredients = title.length <= 23 ? 2 : 1
    const dispatch = useDispatch();
    

    //() => {dispatch(initProduct({productObj}))}

    return(
        <>
            <Box onClick={onOpen}>
                <Box onClick={() => {dispatch(initProduct({productObj})); onOpen}} 
                cursor='pointer' 
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

                    <Box bg='#E23535' position='absolute' py={{base: '3px', sm: 1}} px={{base: 2, sm: 3}} borderRightRadius='lg' mt={{base: 2, sm: 3}} visibility={newBadge}>
                        <Center textTransform='uppercase' color='white'>
                            new
                        </Center>
                    </Box>

                    <Box h={{base: '100px', sm: '230px'}} 
                    minW='100px' 
                    m={{base: 3, sm: 0}}>
                        <Image src={img} boxSize='100%'/>
                        <Divider display={{base: 'none', sm: 'flex'}}/>
                    </Box>

                    <Flex flexDirection='column' p={3} h='100%'>
                        <Box>
                            <Text fontSize='md' 
                            fontWeight='500' 
                            mb={{base: 0, sm: 1}}>

                                {title}

                            </Text>
                            <Text noOfLines={lengthIngredients} fontSize={{base: 'sm', md: 'md'}}>{ingredients.map(ingredient => (`${ingredient}, `))}</Text>
                        </Box>
                        <Spacer />
                        <Flex>
                            <Button onClick={e => e.stopPropagation()} display={{base: 'none', sm: 'inline-block'}} backgroundColor='#FF7010'
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

                                <Text fontSize={{base: 'sm', sm: 'md'}} color='#FF7010' fontWeight='500'>від {cost} ₴</Text>

                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Box>

            <ItemModal isOpen={isOpen} onClose={onClose} productObj={productObj} title={title} img={img} newBadge={newBadge} ingredients={ingredients} cost={cost}/>
      </>
    )
}

ItemCard.defaultProps = {newBadge: 'hidden'}

export default ItemCard