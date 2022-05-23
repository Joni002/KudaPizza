import { Flex, useCheckboxGroup } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import ModalAddIngredient from "./modalAddIngredient";
import { addIngredient } from '../../../../redux/order'
import { newCost } from '../../../../redux/order'
import { useState } from "react";

const AddIngredients = (props) => {
    const { productObj, indredientsIcon, cost } = props
    const [checkedAdd, setCheckedAdd] = useState();
    const [NewCost, setNewCost] = useState(cost)
    const { getCheckboxProps } = useCheckboxGroup({
        onChange: (prop) => {setCheckedAdd(prop), setNewCost(cost + prop.length * 50)},
    });
    const dispatch = useDispatch();
    dispatch(addIngredient({checkedAdd}))
    dispatch(newCost(NewCost))

    return(
        <Flex my={4} pb={{base: 14, md: 0}} overflowX='scroll'
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