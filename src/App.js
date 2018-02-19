//use React ref to get a Reference to specific components
//to to reference a node or specific import
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {a: ''}
  }
  update(e) {
    this.setState({
      a: this.a.refs.input.value,//a is our component, input is our input field
      b: this.refs.b.value//ref returns back the node we are referrencing
    })//value from our input field
  }
  render() {
    return (
      <div>
        <Input
          ref={ component => this.a = component}//example of a callback
          update={this.update.bind(this)}
        /> {this.state.a}
        <hr />
        <input
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
        /> {this.state.b}
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return <div><input ref="input" type="text" onChange={this.props.update} /></div>
  }
}

export default App;
