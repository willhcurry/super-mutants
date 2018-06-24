import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
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
    const { mutants, searchField } = this.state;
    const filteredMutants = mutants.filter(mutant => {
      return mutant.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !mutants.length ?
      <h1 className="tc">Loading..</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Fallout Super Mutants</h1>
          <SearchBox searchChange ={this.onSearchChange}/>
            <Scroll>
              <ErrorBoundry>
                <CardList mutants={filteredMutants}/>
              </ErrorBoundry>
            </Scroll>
        </div>
      );
  }
}


export default App;
