import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

const ProductGrid = (props) => {
    const { itemsList } = props;

    const [clickedItem, setClickedItem] = useState(null);

    const moreDetails = () => {
        setClickedItem(itemsList)
    };

    return (
        <div className='grid-cont'>             
            <img className='img' src={itemsList.image} alt={itemsList.title}/>
            <p className='title'> {itemsList.title}</p>
            <p className='price'> {`Price $${itemsList.price}/-`}</p>
            <button onClick={moreDetails} className='view-more'> View More </button>
            {clickedItem && <Navigate to='/details' state={{ item: clickedItem }} />}
        </div>
    );
};

export default ProductGrid;
