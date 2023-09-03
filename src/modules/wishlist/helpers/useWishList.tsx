import { wishListService } from '../api/wishlist'
import { useQuery } from '@tanstack/react-query'

export const useWishList = () => {
	return useQuery(['wishList'], () => wishListService.getAllWishlist(), {
		select: ({ data }) => data,
	})
}
