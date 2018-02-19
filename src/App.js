//adding custom propType validation to React components
import React from 'react';

class App extends React.Component {
  render() {
    return <Title text="Mason Storm"/>
  }
}

  const Title = (props) => <h1>Title: {props.text}</h1>

  Title.propTypes = {
    text(props, propName, component) {
      if(!(propName in props)) {//means the prop name has not been provided
        return new Error(`missing ${propName}`);
      }
      if(props[propName].length < 6) {
        return new Error(`${propName} is too short.`)
      }
    }
  }

export default App;
