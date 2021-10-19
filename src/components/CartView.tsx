import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { actions } from '../features/cartReducer'

const CartView = () => {
	const dispatch = useDispatch()
	const cart = useSelector((state: RootState) => state.cart)

	let countMessage = 'The cart is empty'
	if( cart.length > 0 ) {
		countMessage = `You have ${cart.length} items in the cart.`
	}

	const handleRemove = (productName: string) => dispatch(actions.removeProduct(productName))

	return (
		<div className="cart">
			<h2> {countMessage} </h2>
			<div className="items">
				{cart.map(item => (
					<div key={item.product.name}>
						{item.product.name} ..... {item.count}
						<button onClick={() => handleRemove(item.product.name)}> 🗑️ </button>
					</div>
				))}
			</div>
		</div>
	)
}

export default CartView
