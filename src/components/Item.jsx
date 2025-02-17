
import { Link } from 'react-router';
function Item ({producto}){
    return(
        <div className='producto'>
                <img src={producto.images} alt={producto.title}/>
                <h1>{producto.title}</h1>
                <Link to={`item/${producto.id}`}><button >Ver más</button></Link>
            </div>
    )
}

export default Item;