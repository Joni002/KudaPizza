import { Flex, useCheckboxGroup } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import ModalAddIngredient from "./modalAddIngredient";
import { addIngredient } from '../../../../redux/order'
import { useState } from "react";

const AddIngredients = (props) => {
    const { productObj, indredientsIcon } = props
    const [checkedAdd, setCheckedAdd] = useState();
    const { getCheckboxProps } = useCheckboxGroup({
        onChange: setCheckedAdd
    });
    const dispatch = useDispatch();
    dispatch(addIngredient({checkedAdd}))

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
                    <ModalAddIngredient key={value} {...checkbox} value={value} icon={indredientsIcon[value]}/>
                );
            })}
        </Flex>
    )
}
export default AddIngredients