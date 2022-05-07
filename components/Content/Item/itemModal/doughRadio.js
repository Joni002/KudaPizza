import { HStack, useRadioGroup } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { dought } from "../../../../redux/order"
import ModalRadio from "./modalRadio"


const DoughRadio = () => {
  const options = ['Традиційне', 'Тонке']

  const [pizzaDought, setPizzaDought] = useState()
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'dought',
    defaultValue: 'Традиційне',
    onChange: setPizzaDought,
  })
  const dispatch = useDispatch()
  dispatch(dought({pizzaDought}))

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