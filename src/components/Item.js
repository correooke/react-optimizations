import React from 'react';

const Item = ({ image, title, details, secondLevel}) => {
    console.log("Renderizando Item Basico");
    return (
        <div className='item'>
            <img src={image} alt=""/>
            <div className="text">
                <h3>{title}</h3>
                <p>{details}</p>
                <strong>{secondLevel.data}</strong>
            </div>
        </div>
    );
};

export default Item;