import { Flex } from "@chakra-ui/react"
import { css } from "@emotion/react"
import Link from "next/link"
import PromoCard from "./promoCard"

const PromoBlock = () => {
    return(
        <Flex my={{base: 5, md: 5}}
         width='100%'
         overflowX={{base: 'scroll', lg: 'scroll', xl: 'hiden'}}
         align='center'
         css={css(`
            -ms-overflow-style: none;
            scrollbar-width: none;
        
            &::-webkit-scrollbar {
                width: 0;
                height: 0;
            }
          `
        )}>
            <Link href='/post/1'>
                <a>
                    <PromoCard imgSrc='https://i.ibb.co/0KDJVHb/Group-737.png' text='3 средні піци від 290 гривень'/>
                </a>
            </Link>
            <Link href='/post/2'>
                <a>
                    <PromoCard imgSrc='https://i.ibb.co/c8xmfp6/Group-738.png' text='Кэшбек 10% на самовивоз'/>
                </a>
            </Link>
            <Link href='/post/3'>
                <a>
                    <PromoCard imgSrc='https://i.ibb.co/0KDJVHb/Group-737.png' text='3 средні піци від 290 гривень'/>
                </a>
            </Link>
            <Link href='/post/4'>
                <a>
                    <PromoCard imgSrc='https://i.ibb.co/c8xmfp6/Group-738.png' text='Кэшбек 10% на самовивоз' mr={0}/>
                </a>
            </Link>
        </Flex>
    )
}

export default PromoBlock