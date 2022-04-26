import { Box, useRadio } from "@chakra-ui/react"


const ModalRadio = (props) => {

    const { getInputProps, getCheckboxProps } = useRadio(props)

    const {w} = props

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return(
        <Box as='label' display='flex' w='100%'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderRadius='md'
                textAlign='center'
                _hover={{bg:'#fafafa'}}
                _checked={{
                bg: '#FF7010',
                color: 'white',
                }}
                w={w}
                mx={0}
                py={2}
            >
                {props.children}
            </Box>
        </Box>
    )
}

export default ModalRadio