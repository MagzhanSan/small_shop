import { useRemoveWish } from './helpers/useRemoveWish'
import { useWishList } from './helpers/useWishList'
import { Button } from '@mui/material'
import { FC } from 'react'

const WIshListUl: FC = () => {
	const { isLoading, data, error } = useWishList()
	if (error) return <div>Something went wrong...</div>
	const { mutate, isLoading: isLoadingRemove } = useRemoveWish()

	const removeWishlist = (id: string) => {
		mutate(id)
	}

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div
					style={{
						display: 'flex',
						gap: '50px',
						justifyContent: 'center',
						alignItems: 'center',
						flexWrap: 'wrap',
					}}
				>
					{data &&
						data.map(item => (
							<div key={item.id}>
								<h2>{item.name}</h2>
								<img
									style={{ width: '280px', height: '450px' }}
									src={item.image}
									alt={item.name}
								/>
								<div style={{ fontSize: '30px' }}>{item.price} $</div>
								<Button
									variant='contained'
									color='primary'
									onClick={() => removeWishlist(item.id.toString())}
								>
									Remove this shit from Wishlist
								</Button>
							</div>
						))}
				</div>
			)}
		</>
	)
}

export default WIshListUl
