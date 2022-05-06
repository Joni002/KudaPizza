import ItemsBlock from "../components/Content/Item/itemsBlock"
import clientPromise from "../lib/mongodb"

const test = ({ isConnected, products }) => {
  // const item = {
  //   title: "Чікен Солодкий Чілі",
  //   img: "https://i.ibb.co/DYdXKSt/Rectangle-4.png",
  //   ingredients: ["Курка", "Гриби", "Перець Халапеньо", "Сир Моцарелла", "Томатний соуc"],
  //   cost: "120"
  // }
    return(
      <ItemsBlock isConnected={isConnected} products={products}/>
    )
}
export default test

export async function getServerSideProps() {
  try {
      const client = await clientPromise
      const db = client.db("KudaPizza")
      // `await clientPromise` will use the default database passed in the MONGODB_URI
      // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the folloing code:
      //
      // `const client = await clientPromise`
      // `const db = client.db("myDatabase")`
      //
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands
      
      const products = await db
      .collection("pizzas")
      .find({})
      .toArray();

      return {
          props: { 
              isConnected: true,
              products: JSON.parse(JSON.stringify(products)),
          }
      }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}