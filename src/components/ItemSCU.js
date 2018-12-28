import React, {Component} from 'react';

class ItemSCU extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.title !== this.props.title;
    }

    render() {
        const {image, title, details, secondLevel} = this.props;
        console.log("Renderizando Item con shouldComponentUpdate");
        return (
            <div className='item scu'>
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

export default ItemSCU;