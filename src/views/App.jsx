import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

  static propTypes = {};

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
      <div></div>
    );
  }
}

const mapStateToProps = (state) => state;

export default App = connect(mapStateToProps, actions)(App);
