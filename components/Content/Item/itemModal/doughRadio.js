import { HStack, useRadioGroup } from "@chakra-ui/react"
import ModalRadio from "./modalRadio"


const DoughRadio = () => {
  const options = ['Традиційне', 'Тонке']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'dought',
    defaultValue: 'Традиційне',
    onChange: console.log,
  })

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