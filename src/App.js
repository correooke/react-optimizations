import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import data from './data';
import Item from './components/Item';
import ItemMemo from './components/ItemMemo';
import ItemPure from './components/ItemPure';
import ItemSCU from './components/ItemSCU';


const ItemTypes = {
  'Item': Item,
  'ItemMemo': ItemMemo,
  'ItemPure': ItemPure,
  'ItemSCU': ItemSCU,
}

class App extends Component {

  state = {
    renderType: 'Item',
    items: data.map(d => ({ ...d, title: `(${0}) - ${d.title}`})),
    random: 0,
  }

  onChange = e => {
    this.setState({ renderType: e.target.value });
  }

  onUpdate = () => {
    const { random } = this.state;
    const items = data.map(d => ({ ...d, title: `(${random}) - ${d.title}`}));
    this.setState({ items: [...items] });
  }

  onModify = () => {
    const random = Math.floor((Math.random() * 100) + 1);
    const items = data.map(d => ({ ...d, title: `(${random}) - ${d.title}`}));
    this.setState({ items, random });
  } 
  
  onModifySegLevelBad = () => {
    const random = Math.floor((Math.random() * 100) + 1);
    const { items } = this.state;
    items[0].secondLevel.data = `Modificado (${random})`;
    this.setState({ items });

    /*
    Otra forma de hacer mal las cosas...
    const [oldItem, ...items] = this.state.items;
    const item = {...oldItem};
    item.secondLevel.data = `Modificado (${random})`;
    const newItems = [item, ...items];
    console.log("Nuevo item correcto", newItems[0] !== this.state.items[0]);
    this.setState({ items: newItems });
    */
  }    

  onModifySegLevelGood = () => {
    const random = Math.floor((Math.random() * 100) + 1);
    
    const [oldItem, ...items] = this.state.items;
    const item = {...oldItem, secondLevel: { data: `Modificado (${random})`}};
    const newItems = [item, ...items];
    this.setState({ items: newItems });
  }    

  renderItem = params => {
    const ItemType = ItemTypes[this.state.renderType];
    return <ItemType key={params.title} {...params} />;
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Aprender Optimizaciones</h1>
        </div>

        <div className="configuration">
          <div>
            <p>Abrir la consola de desarrollador y ver las impresiones por consola</p>
          </div>
          <span>Tipo de optimización </span>
          <select onChange={this.onChange}>
              <option value="Item">Ninguna</option>
              <option value="ItemMemo">Memo</option>
              <option value="ItemSCU">ShouldComponentUpdate</option>
              <option value="ItemPure">React.PureComponent</option>
          </select>
          <div>
            <button onClick={this.onUpdate}>setState([datos sin modificar]</button>
            <button onClick={this.onModify}>setState([datos modificados])</button>
            <button onClick={this.onModifySegLevelBad}>setState([modifico item MAL])</button>
            <button onClick={this.onModifySegLevelGood}>setState([modifico item BIEN])</button>            
          </div>
        </div>        
        <List items={this.state.items} renderItem={this.renderItem} />
      </div>
    );
  }
}

export default App;
