import React from 'react';

//state is meant to be passed and updated by the component
class App extends React.Component {//always render in a class component that returns DOM representation of our component
  constructor() {
    super();//super gives keyword this the context within our component rather than it's parent class
    this.state = {
      txt: 'Get em Sticks!'
    }
  }
  update(e) {
    this.setState({ txt: e.target.value })
  }
  render() {
    return (//only allowed to return a single node, adjacent JSX must be wrapped in an enclosing tag 
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
      </div>
    );
  }
}

//passing this in as a prop, when we type the child component will update the parent component
const Widget = (props) =>
  <input type="text" onChange={props.update} />


App.defaultProps = {
  txt: 'And you can take that to the bank.'
}

export default App;
