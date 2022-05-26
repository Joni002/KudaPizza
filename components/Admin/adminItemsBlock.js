import { SimpleGrid } from '@chakra-ui/react'
import AdminItemCard from './adminItemCard'

const AdminItemsBlock = ({ isConnected, products }) => {

    return(
        <>
            {isConnected ? (
                <SimpleGrid columns={{base: 1, sm: 2, md: 3, lg: 4}} spacing={{base: 0, sm: 6, md: 9, lg: 6}} pb={12}>
                    {
                        products.map(product => (
                            <AdminItemCard key={product._id} id={product._id} title={product.title} img={product.img} newBadge={product.newBadge} ingredients={product.ingredients} cost={product.cost} productObj={product}/>
                        ))
                    }
                </SimpleGrid>
            ) : (
                <h2>
                You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
                for instructions.
                </h2>
            )}
        </>
    )
}
export default AdminItemsBlock
