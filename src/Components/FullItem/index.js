import { Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './index.css'

const FullItem = () => {
    const location = useLocation();
    const { item } = location.state; 
    const [navigateToHome, setNavigateToHome] = useState(false);
    
    const onClickedBack = () => {
        setNavigateToHome(true);
    };

    if (navigateToHome) {
        return <Navigate to="/" />;
    }
    
    return (
        <div className='full-item'>
            <h2 className='tit'>{item.title}</h2>
            
            <img className='img1' src={item.image} alt={item.title} />
            <p className='desc'> {`About product: ${item.description}`}</p>
            <p> {`Category: ${item.category}`}  </p>
            <p>{`Price: $${item.price}`}</p>
            <p>{`Rating: ${item.rating.rate}`}</p>
            <p> {`Total Ratings: ${item.rating.count} `}</p>
            <button onClick={onClickedBack} className='view-more'> Back to Products </button>
             
           
            
            
        </div>
    );
};

export default FullItem;
