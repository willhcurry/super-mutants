import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import {setSearchField} from '../actions';

const mapStateToProps = state =>{
  return {
    searchfield: state.searchfield
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      mutants: []
    }
  }

  componentDidMount(){
    fetch('https://my-json-server.typicode.com/willhcurry/mutants/mutants')
      .then(response => response.json())
      .then(mutants => this.setState({mutants: mutants}));

  }

  render() {
    const {mutants} = this.state;
    const {searchfield, onSearchChange} = this.props;
    const filteredMutants = mutants.filter(mutant => {
      return mutant.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !mutants.length ?
      <h1 className="tc">Loading..</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Fallout Super Mutants</h1>
          <SearchBox searchChange ={onSearchChange}/>
            <Scroll>
              <ErrorBoundry>
                <CardList mutants={filteredMutants}/>
              </ErrorBoundry>
            </Scroll>
        </div>
      );
  }
}


export default connect(mapStateToProps, mapDispatchtoProps)(App);
