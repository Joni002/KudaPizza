import { SimpleGrid, useCheckboxGroup } from "@chakra-ui/react";
import Ingredient from "./ingridient";

const AddIngredientToNewItem = (props) => {
    const indredientsIcon = {
        "Курка": "https://i.ibb.co/80YV34s/chicken.png",
        "Цибуля": "https://i.ibb.co/JxQwzRT/zibula.png",
        "Перець Халапеньо": "https://i.ibb.co/RDTtt6X/perezh.png",
        "Соус": "https://i.ibb.co/3MLtSPm/souse.png",
        "Сир Моцарелла": "https://i.ibb.co/PjMqf6C/cheese.png",
        "Томатний соуc": "https://i.ibb.co/3MLtSPm/souse.png",
        "Бекон": "https://i.ibb.co/pJtrj5y/becon.png",
        "Гриби": "https://i.ibb.co/PZLTwd2/gribi.png",
    }
    const ingredients = ["Курка", "Цибуля", "Перець Халапеньо", "Соус", "Сир Моцарелла", "Томатний соуc", "Бекон", "Гриби"]
    const { getCheckboxProps } = useCheckboxGroup({
        onChange: (e) => props.setCheckedAdd(e),
    });

    return(
        <SimpleGrid columns={{base: 4, md: 8}} gap={4}>
            {ingredients.map((value) => {
                const checkbox = getCheckboxProps({ value });
                return (
                    <Ingredient key={value} {...checkbox} value={value} icon={indredientsIcon[value]}/>
                );
            })}
        </SimpleGrid>
    )
}
export default AddIngredientToNewItem