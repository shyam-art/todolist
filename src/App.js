import React from 'react';
import './App.css';
import ListItems from './list-item'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })
  }
  onButtonClickHandler = () => {
    this.setState({items: []});
  }


 render(){
  return (
    <div className="App">
      <div className="text1">
      <header id="header3">
        <h1>Indecison</h1>
         Put Your life in jands of a computer
      </header>
      </div>
      <body className="body">
        <div id ="box2">
          <h1 id="header2">What Should I do ?</h1>
        </div>
        <div id="task1">
          <p id="listdisplay">
            <div><span id="options">Your Options</span>
              <input type="button" id="remove" value="Remove All" onClick={this.onButtonClickHandler} />
            </div>
            <br />
            <hr/>
            <div align="center">
              <span id="listitems">
                <ListItems items={this.state.items} deleteItem={this.deleteItem} />
              </span>
              <form id="to-do-form" onSubmit={this.addItem}>
                <span id="text2">
                Enter valid value to add item
                </span>
                <br />
                <input type="textarea" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
                <button type="submit">Add Option</button>
              </form>
            </div>
          </p>
        </div>
      </body>
    </div>
  );
 }
}


export default App;