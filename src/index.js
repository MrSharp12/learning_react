import React from 'react';//this is the library that allows us to build React components
import ReactDOM from 'react-dom';//library that allows us to place our components and work with them in the DOM
import App from './App';

//props allow us to pass data into components
//components can access props by interpolating
ReactDOM.render(
<App txt="I'm gonna keep coming back until someone REMEMBERS seeing Richie." />, 
document.getElementById('root')
);

