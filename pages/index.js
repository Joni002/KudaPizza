import { Box, Heading } from '@chakra-ui/react'
import ItemsBlock from '../components/Content/Item/itemsBlock'
import OrderMenu from '../components/Content/OrderMenu/orderMenu'
import PromoBlock from '../components/Content/Promo/promoBlock'
import clientPromise from '../lib/mongodb'

function Home({ isConnected, products }) {
  return (
    <>
      <OrderMenu />
      <PromoBlock />  
      <Box py={5}><Heading>Піца</Heading></Box>
      <ItemsBlock isConnected={isConnected} products={products}/>
    </>
  )
}
export default Home


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