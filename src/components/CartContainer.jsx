import {useCart} from '../context/cartContext';
import CartItem from './CartItem';
import '../styles/Carrito.css';
import {Link} from 'react-router';

function CartContainer (){
    const {cart} = useCart()

    if(cart.length === 0){
        return(
            <div className='Cart'>
            <h1>Cuando selecciones tus productos, los veras aqui</h1>
            </div>
        )
    }
    return(
        <div className='Cart'>

            <h1>Tu Carrito</h1>
            <div className="container">
                {cart.map((product) => 
                    <CartItem key={product.id} product={product} />
                )}
            </div>
            <Link to="/checkout"><button>Comprar</button></Link>
        </div>
        
    )
}

export default CartContainer;