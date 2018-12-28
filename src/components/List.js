import React from 'react';

const List = ({ items, renderItem }) => {
    return (
        <div className='list'>
            {
                items.map(item => renderItem(item))
            }
        </div>
    );
};

export default List;