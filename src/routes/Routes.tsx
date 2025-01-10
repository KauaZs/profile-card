import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

import React from "react"
import Card from "../pages/Card"
import Home from '../pages/Home'
import HallFame from "../pages/HallFame"
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <RouterRoutes>
                 <Route path='/u/:user' element={<Card />} />
                 <Route path='*' element={<Home />} /> 
                 <Route path='/home' element={<Home />} /> 
                 <Route path='/hallfame' element={<HallFame />} /> 
                </RouterRoutes>
            </Fragment>
        </BrowserRouter>
    )
}

export default AppRoutes
