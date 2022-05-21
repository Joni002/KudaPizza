import { Button, useToast } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../../../../redux/cart";


const PushButton = (props) => {
    const {onClose} = props
    const dispatch = useDispatch();
    const PushProduct = useSelector((state) => state.order.pushProduct)
    const toast = useToast()

    return(
        <Button onClick={() => { dispatch(addToOrder(PushProduct)), 
            onClose(), 
            toast({
                title: 'Піца добавленна!',
                description: "Піца добавленна до вашого замовлення:)",
                status: 'success',
                position: 'bottom-right',
                duration: 9000,
                isClosable: true,
            })}}
        right={4} px={8} 
        backgroundColor='#FF7010'
        _hover={{ bg: 'orange.500' }} 
        _active={{
            bg: 'orange.300',
            borderColor: 'orange.500',
        }}
        _focus={{boxShadow: 'none'}}
        color='white'>
            Добавити
        </Button>
    )
}

export default PushButton