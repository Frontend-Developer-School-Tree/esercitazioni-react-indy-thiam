import React from 'react'
import './App.css'
import BasiUseEffect from './componentHooks/BasiUseEffect'
import BasiUseState from './componentHooks/BasiUseState'
import Contatore from './componentHooks/Contatore'

function AppH() {
    return (
        <div>
            <BasiUseState />
            <Contatore />
            <BasiUseEffect />
        </div>
    )
}

export default AppH

