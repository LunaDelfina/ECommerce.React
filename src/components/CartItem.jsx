import Cerrar from '../assets/close.png';
import {useCart} from '../context/cartContext';

function CartItem({ product }) {
    const { id, name, quantity, image } = product;
    const {deletefromCart} =useCart();

    return (
        <div className='Item'>
            <img src={Array.isArray(image) ? image[0] : image} />
            <h2>{name || "Sin título"}</h2>
            <p>{quantity || 1}</p>
            <button onClick={()=> deletefromCart(id)}><img className='icono' src={Cerrar}/></button>
        </div>
    );

}

export default CartItem;
