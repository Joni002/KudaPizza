import clientPromise from '../lib/mongodb'
import { SimpleGrid } from '@chakra-ui/react'
import ItemCard from '../components/Content/Item/itemCard'

const test = ({ isConnected, products }) => {
    return(
        <div>
            {isConnected ? (
                <SimpleGrid columns={{base: 1, sm: 2, md: 3, lg: 4}} spacing={{base: 0, sm: 6, md: 9, lg: 6}} pb={12}>
                    {
                        products.map(product => (
                            <ItemCard key={product._id} title={product.title} img={product.img} newBadge={product.newBadge} ingredients={product.ingredients} cost={product.cost} productObj={product}/>
                        ))
                    }
                </SimpleGrid>
            ) : (
                <h2 className="subtitle">
                You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
                for instructions.
                </h2>
            )}
        </div>
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