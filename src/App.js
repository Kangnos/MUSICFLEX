import React, { Component } from 'react'; 

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>WEB</h1>
        world wide WEB!
      </header>
    );
  }
}


class App extends Component { // making component
  render(){
    return (
      <div className="App">
        <Subject></Subject>
      </div>
    );
  }
}

export default App;
