import { IProduct } from '../constants'
import axios from 'axios'

export const productsService = {
	getAllProducts: async () => {
		return await axios.get<IProduct[]>('http://localhost:3001/products')
	},

	getProductById: async (id: string) => {
		return await axios.get<IProduct>(`http://localhost:3001/products/${id}`)
	},

	addToWishList: async (data: IProduct | undefined) => {
		return await axios.post<IProduct, any, IProduct>(
			`http://localhost:3001/wishlist`,
			data
		)
	},
}
