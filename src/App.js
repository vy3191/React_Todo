import React from 'react';
import data from './Data';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
     super();
     this.state = {
        items: data
     }
  }

  addItem = (event,itemName) => {
      const newId = this.state.items.length+1;
      const newItem = {
         id: newId,
         item: itemName,
         completed: false
      }
      this.setState({
          items: [newItem, ...this.state.items]
      })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList />
        <TodoList />
      </div>
    );
  }
}

export default App;
