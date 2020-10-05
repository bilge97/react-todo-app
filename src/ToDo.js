import React from 'react';
import logo from './logo.svg';
import './ToDo.css';
import ListItems from './ListItems';
import SetAlarm from './SetAlarm';
import Popup from './popup/Popup';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash,faClock} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter, Route, Link} from "react-router-dom";


library.add(faTrash);
library.add(faClock);

class ToDo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:'',
        time:''
      },
      showPopup: false
    }

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.setAlarm = this.setAlarm.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text !== ""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items:filteredItems
    })
  }

  setUpdate(text, key){
    const items = this.state.items;
    items.map(item => {
      if(item.key===key){
        item.text=text;
      }
    })

    this.setState({
      items: items
    })
  }
  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
 }  
 setAlarm(){
  var myLink ="/setalarm";
  window.location.pathname=myLink;
 }

  render(){
    return (
      <div className="App">
      
        <header>
          <form id= "to-do-form" onSubmit={this.addItem}>
            <input type="text" 
            placeholder = "Enter text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}></input>
            
            <button type="submit">add</button>
            
            <button onClick={this.togglePopup}>search</button>

            {this.state.showPopup ?  
              <Popup  
                        text='SEARCH IMAGE'  
                        closePopup={this.togglePopup.bind(this)}
                   
              />  

              : null  
            } 
          </form>

          
        </header>
        <ListItems items = {this.state.items}
        deleteItem = {this.deleteItem}
        setUpdate = {this.setUpdate}
        setAlarm = {this.setAlarm}></ListItems>

        
      </div>
    );
  }
}

export default ToDo;
