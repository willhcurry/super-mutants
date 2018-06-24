import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from "./Scroll";
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      mutants: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://my-json-server.typicode.com/willhcurry/mutants/mutants')
      .then(response => response.json())
      .then(mutants => this.setState({mutants: mutants}));

  }

  onSearchChange = (event) => {
      this.setState({searchField: event.target.value})

  }

  render() {
    const filteredMutants = this.state.mutants.filter(mutants => {
      return mutants.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    if(this.state.mutants.length === 0){
      return <h1 className="tc">Loading..</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Fallout Super Mutants</h1>
          <SearchBox searchChange ={this.onSearchChange}/>
            <Scroll>
              <CardList mutants={filteredMutants}/>
            </Scroll>
        </div>
      );
    }
  }
}


export default App;
