//using map to create react components
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {items: []};
  }
  componentWillMount() {
    fetch('https://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then(({results: items}) => this.setState({items}))
  }
  render() {
    let items = this.state.items
    //for each item the map iterates over
    //place that item inbetween h4 tags
    return (
      <div>
        {items.map(item => <h4 key={item.name}>{item.name}</h4>)}
      </div>
    )
  }

}

export default App
