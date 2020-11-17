import React from 'react'
import ReactDOM from 'react-dom'

class ChildComponent extends React.Component{
    render () {
        console.log(this.renderCounter)
        if (!this.renderCounter)
        this.renderCounter = 0;
        this.renderCounter += 1;
        return(
            <h3>HELLO GUYS - componenti figlio {this.renderCounter}</h3>
        )
    }
}

class Component extends React.Component{
    constructor(props){
        super(props)
        setInterval(() => {
            this.forceUpdate()
        }, 1000)
    }
    render () {
        
        console.log(this.renderCounter)
        if (!this.renderCounter)
            {
                this.renderCounter = 0; 
            }
        this.renderCounter += 0.5;

        return(
            <div>
                <h1>HELLO GUYS - componente padre {this.renderCounter}</h1>
                <ChildComponent />
            </div>
        )
    }
}

export default Component;