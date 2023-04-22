import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login'
import Timer from './timer'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/timer' element={<Timer/>}/>
            </Routes>
        </div>
    )
}

export default Routing