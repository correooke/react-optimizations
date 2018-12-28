import React from 'react';
import Item from './ItemSCU';

const List = ({ items }) => {
    return (
        <div className='list'>
            {
                items.map((item, i) => <Item key={item.title} {...item} />)
            }
        </div>
    );
};

export default List;