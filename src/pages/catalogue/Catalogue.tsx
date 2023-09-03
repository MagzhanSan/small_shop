import Hero from '../../components/hero/Hero'
import CatalogueProducts from '../../modules/catalogueProducts/CatalogueProducts'
import { FC } from 'react'

const Catalogue: FC = () => {
	return (
		<>
			<Hero title='Catalogue' />
			<CatalogueProducts />
		</>
	)
}

export default Catalogue
