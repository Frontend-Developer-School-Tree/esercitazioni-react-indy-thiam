import React, { Component } from 'react'

const initialState = {
    username:'',
    email: '',
    password: ''
}


export class FormEs1 extends Component {
    constructor(props){
        super(props)
        this.state= initialState
    }
    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name)
        this.setState ({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <h2> FORM 2 - Esempio </h2>
                <div className="formGroup">
                    <label>Username</label>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange} />
                </div><br/>
            </div>
        )
    }
}

export default FormEs1
