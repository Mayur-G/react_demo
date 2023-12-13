    import React, { Component } from 'react';

    class ComponentDidMountDemo extends Component {
        
    constructor(props){
        console.log('constructor');
        super(props);
        this.state = {
        data: 'Sonia Pahuja'
        }
   
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
            data: 'Hello World!'
            })
         }, 1000)

        console.log('componentDidMount');
    }

    render() {
        console.log('Render');
        return(
            <div>
            {this.state.data}
            </div>
        )
    }

    }
    export default ComponentDidMountDemo;