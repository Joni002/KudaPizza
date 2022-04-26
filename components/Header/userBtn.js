import { Button, 
    Popover, 
    PopoverTrigger, 
    PopoverArrow, 
    PopoverCloseButton, 
    PopoverHeader, 
    PopoverBody, 
    PopoverContent, 
    PopoverFooter, 
    Icon 
} from '@chakra-ui/react'

const CircleIcon = () => (
    <Icon width="22" height="21" viewBox="0 0 22 22">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C7.35804 0 5.20825 2.14979 5.20825 4.79176C5.20825 7.43372 7.35803 9.58333 10 9.58333C12.642 9.58333 14.7918 7.43372 14.7918 4.79176C14.7918 2.14979 12.642 0 10 0ZM6.2755 4.79176C6.2755 2.73768 7.94613 1.06724 10 1.06724C12.0539 1.06724 13.7245 2.73768 13.7245 4.79176C13.7245 6.84566 12.0539 8.51609 10 8.51609C7.94614 8.51609 6.2755 6.84566 6.2755 4.79176Z" fill="#FF7010"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96381 11.6665C3.59468 11.6665 1.66663 13.6453 1.66663 16.0768V19.4881C1.66663 19.7705 1.89005 19.9998 2.1652 19.9998H17.8347C18.1099 19.9998 18.3333 19.7705 18.3333 19.4881V16.0768C18.3333 13.6453 16.4052 11.6665 14.0361 11.6665H5.96381ZM2.66378 16.0768C2.66378 14.2092 4.14412 12.6899 5.96381 12.6899H14.0361C15.8558 12.6899 17.3361 14.2092 17.3361 16.0768V18.9764H2.66378V16.0768Z" fill="#FF7010"/>
    </Icon>
)

const UserBtn = () => {
    return(
        <Popover>
            <PopoverTrigger>
                <Button
                    colorScheme='orange'
                    variant='outline'
                    borderRadius={'full'}
                    px={'.55rem'}
                    _focus={{boxShadow:'0'}}>
                    <CircleIcon/>
                </Button>
            </PopoverTrigger>
            
            <PopoverContent align='start' w={'16rem'} _focus={{boxShadow:'0'}} userSelect='none'>
                <PopoverArrow />
                <PopoverCloseButton />
                
                <PopoverHeader color='orange.500' fontWeight='500' m={1} cursor='pointer' _hover={{bg: 'blackAlpha.200', borderRadius: 'md'}}>100 бонусів</PopoverHeader>
                <PopoverBody cursor='pointer' m={1} _hover={{bg: 'blackAlpha.200', borderRadius: 'md'}}>Історія замовлень</PopoverBody>
                <PopoverBody cursor='pointer' m={1} _hover={{bg: 'blackAlpha.200', borderRadius: 'md'}}>Налаштування</PopoverBody>
                <PopoverFooter color='blackAlpha.600' cursor='pointer' m={1} _hover={{bg: 'blackAlpha.200', borderRadius: 'md'}}>Вийти із аккаунта</PopoverFooter>
            </PopoverContent>
        </Popover>
    )
}

export default UserBtn