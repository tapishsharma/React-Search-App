import React,{Component} from 'react'

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component{
constructor(){
  super();
  this.state={
    monsters : [],
    searchField:''
  };
}
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
    //used Arrow Function to avoid specifying function in constructor using bind
    handleChange = mon=>{
      this.setState({searchField:mon.target.value})
    }

  render(){
    const {monsters,searchField}=this.state;
    const filteredMonsters = monsters.filter(monster=>
     monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return(
    <div className='App'>
     <h1 className='title'>Monsters Rolodex</h1>
      <SearchBox 
       handleChange={this.handleChange}
       placeholder="Enter Monster"
      />
      <CardList monsters={filteredMonsters}/>
    

    
      
    </div>
    );
  }

}
export default App;
