import Hero from '../../components/hero/Hero'
import WIshListUl from '../../modules/wishlist/WIshListUl'
import { FC } from 'react'

const WishList: FC = () => {
	return (
		<>
			<Hero title='WishList' />
			<WIshListUl />
		</>
	)
}

export default WishList
