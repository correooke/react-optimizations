import React, {PureComponent} from 'react';

class ItemPure extends PureComponent {
    render() {
        const {image, title, details, secondLevel} = this.props;
        console.log("Renderizando Item PureComponent");
        return (
            <div className='item pure'>
                <img src={image} alt=""/>
                <div className="text">
                    <h3>{title}</h3>
                    <p>{details}</p>
                    <strong>{secondLevel.data}</strong>                    
                </div>
            </div>
        );
    }
}

export default ItemPure;
