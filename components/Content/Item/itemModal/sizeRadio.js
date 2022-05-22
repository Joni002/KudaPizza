import { HStack, useRadioGroup } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { newCost, size } from "../../../../redux/order"
import ModalRadio from "./modalRadio"


const SizeRadio = (props) => {
  const { Cost } = props


  const options = ['20 см', '28 см', '33 см']

  const [NewCost, setNewCost] = useState(Cost)

  const [pizzaSize, setPizzaSize] = useState('33 см')
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'dought',
    defaultValue: '33 см',
    onChange: (prop) => {setPizzaSize(prop), setNewCost(NewCost - 20)}
  })
  const dispatch = useDispatch();
  dispatch(size(pizzaSize))
  dispatch(newCost(NewCost))


  const group = getRootProps()

  return (
    <HStack {...group} spacing='0px' mt={3} borderWidth='1px'
    borderColor='#F0F0F0'
    borderRadius='md'>
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <ModalRadio key={value} {...radio} w='100%'>
            {value}
          </ModalRadio>
        )
      })}
    </HStack>
  )
}


export default SizeRadio