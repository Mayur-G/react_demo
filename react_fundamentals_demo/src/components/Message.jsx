import React, { Component } from 'react'

//for class , we always have to use this keyword
class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: 'Welcome visitor'
    }

    //subscribe4
    //this.clickHandler = this.clickHandler.bind(this)
  }

//   changeMessage() {
//     this.setState({
//       message: 'Thank you for subscribing!'
//     })
//   }

  clickHandler()
  {
    this.setState({
        message: 'Thank you for subscribing!'
    })
    //console.log('clicked the button')
    console.log(this)  //undefined
  }

  clickHandler = () => {
    this.setState({
        message: 'Goodbye!'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        
        {/* <button onClick={() => this.changeMessage()}>Subscribe</button> 
        <br/>
        <button onClick={this.clickHandler}>Subscribe2</button>
        <br/>
        <button onClick={this.clickHandler.bind(this)}>Subscribe3  </button>
        <br/> */}
        <button onClick={this.clickHandler}>Subscribe4  </button>
      </div>
    )
  }
}

export default Message