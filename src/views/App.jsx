import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ExampleFunctionalComponent from '../components/ExampleFunctionalComponent';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //
  }

  componentDidMount() {
    //
  }

  componentWillUpdate() {
    //
  }

  componentDidUpdate() {
    //
  }

  componentWillUnmount() {
    //
  }

  render() {

    return (
      <div className='container full-height'>
        <div className='row u-full-width full-height'>
          <ExampleFunctionalComponent onClick={this.props.exampleAction}>
            <h3 style={{textAlign: 'center'}}>Hello World!</h3>
          </ExampleFunctionalComponent>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default App = connect(mapStateToProps, actions)(App);
