import { Link } from 'react-router';

function Item({ producto }) {

    return (
        <div className='producto'>
            <img src={producto.image} alt={producto.name} />
            <h1>{producto.name}</h1>
            <Link to={`/item/${producto.id}`}><button>Ver más</button></Link>
        </div>
    );
}

export default Item;