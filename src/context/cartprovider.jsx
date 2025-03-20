import {cartContext} from './cartContext';
import {useState} from 'react';

function CartProvider({children} ){
    const [cart, setCart]=useState([])

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
    
            if (existingProduct) {
                // Si el producto ya está en el carrito, actualiza su cantidad
                return prevCart.map(item => 
                    item.id === product.id 
                    ? { ...item, quantity: item.quantity + product.quantity } 
                    : item
                );
            } else {
                // Si no está en el carrito, agrégalo
                return [...prevCart, product];
            }
        });
    };

    const getQuantity =()=>{
        const quantities=cart.map(product=>product.quantity)
        const result= quantities.reduce((acc,current)=> acc+current,0)

        return result
    }

    const getTotal =()=>{
        const prices=cart.map(item=>item.price*item.quantity)
        const total =prices.reduce((acc,current) =>acc+current,0)

        return total
    }

    const deletefromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };
    
    const clearCart = () => {
        setCart([]);
    };

    return (
        <cartContext.Provider value={{addToCart,getQuantity, deletefromCart, getTotal, clearCart, cart}}>
        {children}
        </cartContext.Provider>
    )
}

export default CartProvider;