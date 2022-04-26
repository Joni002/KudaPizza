import { Flex } from "@chakra-ui/react"
import { css } from "@emotion/react"
import MenuCard from "./menuCard"
import {MdLocalFireDepartment, MdFastfood} from 'react-icons/md'
import {GiFullPizza, GiSushis, GiWaterBottle, GiCupcake, GiFrenchFries} from 'react-icons/gi'
import {CgBowl} from 'react-icons/cg'


const OrderMenu = () => {
    return(
        <Flex my={{base: 5, md: 5}}
         width='100%'
         overflowX={{base: 'scroll', lg: 'hiden'}}
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
            <MenuCard icon={MdLocalFireDepartment} iconcolor='#E23535' text='Акції' textColor='#E23535'/>
            <MenuCard icon={GiFullPizza} text='Піца'/>
            <MenuCard icon={GiSushis} text='Суші'/>
            <MenuCard icon={GiWaterBottle} text='Напої'/>
            <MenuCard icon={GiFrenchFries} text='Закуски'/>
            <MenuCard icon={MdFastfood} text='Комбо'/>
            <MenuCard icon={GiCupcake} text='Десерти'/>
            <MenuCard icon={CgBowl} text='Соуси' mr={0}/>
        </Flex>
    )
}

export default OrderMenu