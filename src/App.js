import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import data from './Data';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
     super();
     this.state = {
        items: [
          {
            name: "Joshua",
            id: Date.now(),
            completed: false
          }
         
        ]  
     }
  }

   toggleItem = (event,itemId) => {
     event.preventDefault();  
    this.setState({
      items: this.state.items.map( (item) => {
        if(item.id == itemId) {
           return {
              ...item, completed:!item.completed
           }
        } else {
           return item;
        }
      })
    })
    console.log('line 44', itemId)

  }

  addItem = (event,itemName) => {
    event.preventDefault();
    console.log('working in App.js');
      const newItem = {
         id: Date.now(),
         name: itemName,
         completed: false
      }
      console.log(newItem)
      if(itemName) {
      this.setState({
          items: [newItem, ...this.state.items]
      });
    }
  }
  
  clearPurchasedItem = () => {
    //  event.preventDefault();
     this.setState({
        items: this.state.items.filter( item => !item.completed)
     })
  }
  render() {
    console.log(this.state.items)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} clearPurchasedItem={this.clearPurchasedItem}/>
        <TodoList items={this.state.items} toggleItem={this.toggleItem} />        
      </div>
    );
  }
}

export default App;
