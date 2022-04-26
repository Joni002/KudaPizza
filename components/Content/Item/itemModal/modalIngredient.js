import { Box, Center, Text, Icon, Tooltip, useCheckbox, Image } from "@chakra-ui/react"

import { IoIosCloseCircleOutline } from "react-icons/io";

const ModalIngredient = (props) => {

    const { getInputProps, getCheckboxProps } = useCheckbox(props);
    const { value, icon } = props

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return(
        <Box as="label"  display='flex' flexDirection='column' >
            <input {...input} />

            <Center {...checkbox}
            position='relative'
            _hover={{bg:'#fafafa'}}
            _checked={{
                color: "#A5A5A5",
            }}
            w='80px' h='80px' 
            borderWidth='1px' 
            borderColor='#F0F0F0' 
            borderRadius={'xl'} 
            mr={4} 
            cursor='pointer' 
            color='#FF7010'
            >
                <Icon as={IoIosCloseCircleOutline} {...checkbox} position='absolute' mr='-50px' mt='-50px' color='#fff' _checked={{color: '#A5A5A5'}}/>

                <Image width={9} {...checkbox} _checked={{filter: 'grayscale(80%)'}} src={icon} />
            </Center>

            <Tooltip label={value} bg='#FF7010'>
                <Text mt={1} 
                maxW='80px' 
                noOfLines={2} 
                align='center' 
                fontSize='sm' 
                fontWeight='500' 
                lineHeight={5}
                {...checkbox}
                _checked={{
                    color: "#A5A5A5",
                }}
                >
                    {value}
                </Text>
            </Tooltip>
        </Box>
    )
}
export default ModalIngredient