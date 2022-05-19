import { HStack, useRadioGroup } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { dought, newCost } from "../../../../redux/order"
import ModalRadio from "./modalRadio"


const DoughRadio = (props) => {
  const { cost } = props
  const options = ['Традиційне', 'Тонке']

  const [NewCost, setNewCost] = useState(cost)

  const [pizzaDought, setPizzaDought] = useState('Традиційне')
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'dought',
    defaultValue: 'Традиційне',
    onChange: (prop) => {setPizzaDought(prop), setNewCost(NewCost - 20)},
  })
  const dispatch = useDispatch()
  dispatch(dought({pizzaDought}))
  dispatch(newCost(NewCost))

  const group = getRootProps()

  return (
    <HStack {...group} spacing='0px' 
    borderWidth='1px'
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


export default DoughRadio