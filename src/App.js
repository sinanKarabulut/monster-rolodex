import react,{Component} from 'react';
import logo from './logo.svg';
import  './App.css';
import { render } from '@testing-library/react';
// import {CardList} from './components/card-list';
import {CardList} from './components/card-list'; 
import { SearchBox } from './components/search-box/search-box';
class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField:''
    }

    //this.handleChange = this.handleChange.bind(this);
  }

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users').
   then(res =>  res.json()).
   then(users => { 
    debugger; 
    this.setState({"monsters" : users});
  
  });
 }
 
 handleChange = (e) => {
  this.setState({searchField:e.target.value})
 }

  render() {
    debugger;
    const {monsters,searchField} = this.state;

    const filteredMonsters = monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())      
      );

      debugger;
    return (
      <div className="App"> 
          <h1>Monster Rolodex</h1>      
         <SearchBox 
         placeholder='search monster'
         handleChange={this.handleChange}
         />
        <CardList monsters={filteredMonsters}>
        </CardList>
        {/* {
          this.state.monsters.map(monster=><h1 key={monster.id}>{monster.name}</h1>)
        } */}
        
      </div>
    );
  }
}



export default App;
