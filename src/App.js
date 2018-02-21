//understanding React Component Lifecycle Methods
//when component is added to the DOM it is called mounting
//when component is removed from the DOM it is called unmounting
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update() {
    this.setState({val: this.state.val + 1})
  }
  componentWillMount() {//fires right before it's mounted into the DOM, et's us know it guarantees it gets tot the DOM
    console.log('component will mount');
    this.setState({m: 2});
  }
  render() {
    console.log('render');
    return <button onClick={this.update}>
    {this.state.val * this.state.m}
    </button>
  }
  componentDidMount() {//fires once component has been mounted to the DOM
    //here we have access to the DOM
    console.log('component did mount');
    this.inc = setInterval(this.update, 500);
  }
  componentWillUnmount() {//fires once component is about to leave the DOM
    //we have access to states and props but do not have access to the DOM because it hasn't been placed in the DOM
    //here we can clean up any running processes that we might need to
    console.log('component will unmount');
    clearInterval(this.inc);
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    );
  }
}
 

export default Wrapper;
