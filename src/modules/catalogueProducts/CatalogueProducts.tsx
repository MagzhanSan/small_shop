import AllProducts from './components/AllProducts'
import { useProduct } from './helpers/useProduct'
import { FC } from 'react'

const CatalogueProducts: FC = () => {
	const { isLoading, error, data, isFetching } = useProduct()

	return (
		<>
			{isFetching && <div>Updating...</div>}
			{isLoading ? (
				<div>Loading...</div>
			) : (
				data && <AllProducts products={data} />
			)}
		</>
	)
}

export default CatalogueProducts
