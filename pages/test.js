import ItemCardMini from '../components/Content/Item/itemCardMini'

const test = () => {
  const item = {
    title: "Чікен Солодкий Чілі",
    img: "https://i.ibb.co/DYdXKSt/Rectangle-4.png",
    ingredients: ["Курка", "Гриби", "Перець Халапеньо", "Сир Моцарелла", "Томатний соуc"],
    cost: "120"
  }
    return(

      <ItemCardMini title={item.title} img={item.img} ingredients={item.ingredients} cost={item.cost}/>
    )
}
export default test