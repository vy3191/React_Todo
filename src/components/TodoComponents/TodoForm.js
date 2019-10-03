import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor(props) {
     super(props);
     this.state = {
        userName: ''
     }
  }
  handleInput = (event) => {
     this.setState({
        [event.target.name]: event.target.value
     })
  }
  handleSubmit = (event) => {
     event.preventDefault();
     console.log('working, itemName')
     this.props.addItem(event,this.state.userName);
     this.setState({
        userName:''
     })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Your Name Here:</label>
          <input name='userName'
                 value={this.state.userName}
                 onChange={this.handleInput} />
          <button type='submit'>Add</button>   
          <button>Clear All</button>    
        </form>
      </div>
    )
  }
}

