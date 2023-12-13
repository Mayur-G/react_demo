import React, { Component } from 'react'
import './App.css'
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
//import Message from './components/Message'
// import ParentComponent from './components/ParentComponent'
//import LifecycleA from './components/LifecycleA'
import ComponentDidMountDemo from './components/ComponentDidMountDemo'

class App extends Component {
  render() {
    return (

      //props , (it is immutable)
      /*
      <div className="App">
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
      </div>
      */

      //state , (it is mutable)
      /* 
      <div className="App">
         <Message/>
      </div>
      */

      /*
      <div className="App">
           <ParentComponent />
      </div>
      */

      //lifecycle
      /*
      <div className="App">
          <LifecycleA />
      </div>
      */

      <div className="App">
        <ComponentDidMountDemo />
      </div>
  
      
    )
  }
}

export default App