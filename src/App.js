//updating lifecycle methods in our components

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {increasing: false};//determine if the new prop of val is increasing from the previous prop
  }
  update() {
    ReactDOM.render(
    <App val={this.props.val + 1}/>, 
    document.getElementById('root'))
  }

  componentWillReceiveProps(nextProps) {//this means new properties are coming in
    //we get access to those props from nextProps
    this.setState({increasing: nextProps.val > this.props.val}) 

  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  render() {
    console.log(this.state.increasing);//first time through should not be true, every other render it should be
    return(
      <button onClick={this.update.bind(this)}>
        {this.props.val}
      </button>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`);
  }

} 

App.defaultProps = {val: 0}

export default App
