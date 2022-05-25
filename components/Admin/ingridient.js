import { Box, Center, Text, Icon, Tooltip, useCheckbox, Flex, Image } from "@chakra-ui/react"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Ingredient = (props) => {

    const { getInputProps, getCheckboxProps } = useCheckbox(props);
    const { value, icon } = props

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return(
        <Box as="label"  display='flex' flexDirection='column'>
            <input {...input} />

            <Center {...checkbox}
            position='relative'
            _hover={{bg:'#fafafa'}}
            _checked={{
                borderColor: '#FF7010'
            }}
            w='65px' h='65px'
            borderWidth='1px' 
            borderColor='#F0F0F0'
            borderRadius={'xl'} 
            cursor='pointer' 
            color='#FF7010'
            bg='#fff'
            >
                <Icon as={IoIosCheckmarkCircleOutline} {...checkbox} position='absolute' mr='-40px' mt='-40px' color='#fff' _checked={{color: '#FF7010'}}/>

                <Image width={6} src={icon}/>
            </Center>

            <Tooltip label={value} bg='#FF7010'>
                <Flex direction='column' {...checkbox}>
                    <Text mt={1} 
                    maxW='65px' 
                    isTruncated
                    align='center' 
                    fontSize='sm' 
                    fontWeight='500' 
                    lineHeight={5}>
                        {value}
                    </Text>
                </Flex>
            </Tooltip>
        </Box>
    )
}
export default Ingredient