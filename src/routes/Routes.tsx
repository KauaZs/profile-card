import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

import React from "react"
import Card from "../pages/Card"
import Home from '../pages/Home'
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <RouterRoutes>
                 <Route path='/u/:user' element={<Card />} />
                 <Route path='*' element={<Home />} /> 
                 <Route path='/home' element={<Home />} /> 
                </RouterRoutes>
            </Fragment>
        </BrowserRouter>
    )
}

export default AppRoutes
