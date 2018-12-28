import React from 'react';

const ItemMemo = React.memo(({ image, title, details, secondLevel}) => {
    console.log("Renderizando Item Memo");

    return (
        <div className='item memo'>
            <img src={image} alt=""/>
            <div className="text">
                <h3>{title}</h3>
                <p>{details}</p>
                <strong>{secondLevel.data}</strong>                
            </div>
        </div>
    );
});

export default ItemMemo;