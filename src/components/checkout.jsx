import '../styles/carrito.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'
import {createOrder} from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'
import {useNavigate} from 'react-router'

function Checkout(){
    const navigate= useNavigate()
    const {cart, getTotal, clearCart}= useContext(cartContext)
    const MySwal=withReactContent(Swal)

    const handleSubmit=async (e)=>{
        e.preventDefault()

        const form =e.target
        const email=form.email.value
        const name=form.name.value
        const phone=form.number.value

        const order={
            items: cart,
            user:{ fullname:name ,email, phone},
            time:serverTimestamp(),
            total: getTotal()
        }
        const id= await createOrder(order)

        clearCart()

        MySwal.fire({
            title:<p>Gracias por tu compra ♥</p>,
            text :`El ID de tu orden es ${id}`,
        }).then(()=> navigate('/'))
    }

    return(
    <form className='formulario' onSubmit={handleSubmit}>
        <h2>Nombre completo</h2>
        <input type="text" name='name' required/>

        <h2>Correo electronico</h2>
        <input type="text" name='email' required/>

        <h2>Número Télefonico</h2>
        <input type="number" name='number' required/>

        <button>Finalizar la compra 🎉</button>

    </form>
    )
}

export default Checkout;