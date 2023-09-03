import { wishListService } from '../api/wishlist'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useRemoveWish = () => {
	const queryClient = useQueryClient()
	const { mutate, isLoading } = useMutation(
		(wishId: string) => wishListService.removeWishlist(wishId),
		{
			onSuccess: () => {
				alert('Удалено)')
				queryClient.invalidateQueries(['wishList'])
			},
		}
	)
	return { mutate, isLoading }
}
