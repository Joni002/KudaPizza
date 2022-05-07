import { Flex, useCheckboxGroup } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import ModalIngredient from "./modalIngredient";
import { delIngredient } from '../../../../redux/order'
import { useState } from "react";

const DelIngredients = (props) => {
    const { productObj, indredientsIcon } = props
    const [checkedDel, setCheckedDel] = useState();
    const { getCheckboxProps } = useCheckboxGroup({
        onChange: setCheckedDel
    });
    const dispatch = useDispatch();
    dispatch(delIngredient({checkedDel}))

    return(
        <Flex my={4} overflowX='scroll'
        css={{
            '&::-webkit-scrollbar': {
                height: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#a8a8a899',
                borderRadius: '5px',
            },
            }}>
            {productObj.ingredients.map((value) => {
                const checkbox = getCheckboxProps({ value });
                return (
                    <ModalIngredient key={value} {...checkbox} value={value} icon={indredientsIcon[value]}/>
                );
            })}
        </Flex>
    )
}
export default DelIngredients