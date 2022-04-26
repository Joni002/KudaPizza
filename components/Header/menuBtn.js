import { ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Modal,
    IconButton, 
    Menu,
    MenuButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from '../logo'

const MenuBtn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const openFunc = () => onOpen()

    return(
        <Menu>
            <MenuButton onClick={() => openFunc()} as={IconButton} icon={<HamburgerIcon/>} variant='outline' aria-label='Options' _focus={{boxShadow: 'none'}}/>

            <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader onClick={onClose}><Logo/></ModalHeader>
                    <ModalCloseButton size={'lg'} _focus={{boxShadow: 'none'}}/>
                    <ModalBody>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Menu>
    )
}

export default MenuBtn