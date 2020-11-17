import React from 'react';
import './App.css';

function Pizza (props) {
    return (
    <div>
        <h1>PIZZEE</h1>
        <strong>{props.nome}</strong>
    </div>
    )
}

function AppNuova () {
    return (
        <div>
            eLENCO Pizze:
            <Pizza nome="margherita"/>
        </div>
    )
}

export default AppNuova