import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import {setSearchField, requestMutants} from '../actions';

const mapStateToProps = state =>{
  return {
    searchfield: state.searchMutants.searchfield,
    mutants: state.requestMutants.mutants,
    isPending: state.requestMutants.isPending,
    error: state.requestMutants.error
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestMutants: () => dispatch(requestMutants())
  }
}

class App extends Component {
  
  componentDidMount(){
    this.props.onRequestMutants();
  }

  render() {
    const {searchfield, onSearchChange, mutants, isPending} = this.props;
    const filteredMutants = mutants.filter(mutant => {
      return mutant.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return isPending ?
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
