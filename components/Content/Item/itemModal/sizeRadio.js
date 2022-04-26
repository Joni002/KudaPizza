import { HStack, useRadioGroup } from "@chakra-ui/react"
import ModalRadio from "./modalRadio"


const SizeRadio = () => {
    const options = ['20 см', '28 см', '33 см']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'dought',
    defaultValue: '33 см',
    onChange: console.log,
  })

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