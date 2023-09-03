import { productsService } from '../api/getAllProducts'
import { useQuery } from '@tanstack/react-query'

export const useProductById = (id: string | undefined) => {
	return useQuery(['product', id], () => productsService.getProductById(id!), {
		select: ({ data }) => data,
		enabled: !!id,
	})
}
