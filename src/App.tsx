import Header from './components/header/Header'
import SingleProduct from './modules/catalogueProducts/components/singleProduct/singleProduct'
import Cart from './pages/cart/Cart'
import Catalogue from './pages/catalogue/Catalogue'
import WishList from './pages/wishList/WishList'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Catalogue />} />
				<Route path='/wishlist' element={<WishList />} />
				<Route path='/catalogue'>
					<Route index element={<Catalogue />} />
					<Route path=':id' element={<SingleProduct />} />
				</Route>
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<h1>ТАКОЙ СТРАНИЦЫ НЕТУ, ДУРАК!</h1>} />
			</Routes>
		</>
	)
}

export default App
