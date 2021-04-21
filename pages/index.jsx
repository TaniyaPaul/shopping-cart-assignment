import React from 'react';
import { connect } from 'react-redux';
import Home from '../pages/Home';
import { decrementCounter, incrementCounter } from '../redux_store/actions/counterActions';

class HomePage extends React.Component {

      static getInitialProps({ store }) {

      }

      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <Home/>
                  // <div>
                  //       <button onClick={this.props.incrementCounter}>Increment</button>
                  //       <button onClick={this.props.decrementCounter}>Decrement</button>
                  //       <h1>{this.props.counter}</h1>
                  // </div>
            );
      }
}

const mapStateToProps = state => ({
      counter: state.counter.value
});

const mapDispatchToProps = {
      incrementCounter: incrementCounter,
      decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);