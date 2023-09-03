import { productsService } from '../api/getAllProducts'
import { IProduct } from '../constants'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useAddWishList = () => {
	const navigate = useNavigate()

	return useMutation((data: IProduct) => productsService.addToWishList(data), {
		onSuccess: () => {
			alert('Added to wishlist')
			navigate('/wishlist')
		},
	})
}
