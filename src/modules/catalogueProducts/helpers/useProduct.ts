import { productsService } from '../api/getAllProducts'
import { useQuery } from '@tanstack/react-query'

export const useProduct = () => {
	return useQuery(['products'], () => productsService.getAllProducts(), {
		select: ({ data }) => data,
	})
}
