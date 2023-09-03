import Hero from '../../../../components/hero/Hero'
import { IProduct } from '../../constants'
import { useAddWishList } from '../../helpers/useMutate'
import { useProductById } from '../../helpers/useProductById'
import { Button } from '@mui/material'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct: FC = () => {
	const params = useParams()
	const id = params.id
	const {
		isLoading: isLoadingProduct,
		isFetching,
		data,
		error,
	} = useProductById(id)

	const {
		mutate,
		isLoading: isLoadingWishList,
		error: errorWishList,
	} = useAddWishList()

	const AddToWishList = (data: IProduct) => {
		if (errorWishList) return alert('Там уже есть такой')
		mutate(data)
		return isLoadingWishList && <div>Loading...</div>
	}

	if (error) return <div>Something went wrong...</div>

	return (
		<>
			{isLoadingProduct ? (
				<Hero title='Hero' />
			) : (
				data && <Hero title={data.name} />
			)}
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}
			>
				{isFetching && <div>Updating...</div>}
				{isLoadingProduct ? (
					<div>Loading...</div>
				) : (
					data && (
						<div className='product__image'>
							<img src={data.image} alt={data.name} />
							<div className='product__name'>{data.name}</div>
							<div className='product__name'>{data.price} $</div>
						</div>
					)
				)}
			</div>
			<div className='add__wishlist'>
				<Button
					variant='contained'
					color='primary'
					onClick={() =>
						data ? AddToWishList(data) : alert('Something went wrong...')
					}
				>
					Add to wishlist
				</Button>
			</div>
		</>
	)
}

export default SingleProduct
