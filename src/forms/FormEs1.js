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

    handleUsername = (e) => {
        const value = e.target.value
        this.setState ({
            username: value
        })
    }
    handleEmail = (e) => {
        const value = e.target.value
        this.setState ({
            email: value
        })
    }
    handlePassword = (e) => {
        const value = e.target.value
        this.setState ({
            password: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(initialState);
        console.log(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} noValidate>
            <h2> FORM 1 - Esempio </h2>
            <div className="formGroup">
                    <label>Username </label>
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUsername} />
                </div><br/>
                <div className="formGroup">
                    <label>Email </label>
                    <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmail} />
                </div><br/>
                <div className="formGroup">
                    <label>Password </label>
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.handlePassword} />
                </div><br/>
                <button type="submit">INVIA DATI</button>
            </form>
        )
    }
}

export default FormEs1
