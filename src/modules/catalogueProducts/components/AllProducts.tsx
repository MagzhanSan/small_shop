import { IProduct } from '../constants'
import './style.css'
import { Button } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const AllProducts: FC<IProduct[]> = ({ products }: any) => {
	const navigate = useNavigate()
	const location = useLocation()
	const queryClient = useQueryClient()

	const singleProduct = (id: number) => {
		if (location.pathname === '/catalogue')
			navigate(`${location.pathname}/${id}`)
	}

	return (
		<>
			<Button
				variant='contained'
				color='primary'
				onClick={() => queryClient.invalidateQueries(['products'])}
			>
				Refresh data
			</Button>
			<div className='products'>
				{products.map((product: IProduct) => (
					<div
						key={product.id}
						className='product__image'
						onClick={() => singleProduct(product.id)}
					>
						<img src={product.image} alt={product.name} />
						<div className='product__name'>{product.name}</div>
						<div className='product__name'>{product.price} $</div>
					</div>
				))}
			</div>
		</>
	)
}

export default AllProducts
