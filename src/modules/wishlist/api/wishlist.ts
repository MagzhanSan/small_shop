import { IWishList } from '../constants/intex'
import axios from 'axios'

export const wishListService = {
	getAllWishlist: async () => {
		return await axios.get<IWishList[]>('http://localhost:3001/wishlist')
	},
	removeWishlist: async (id: string) => {
		return await axios.delete<IWishList>(`http://localhost:3001/wishlist/${id}`)
	},
}
