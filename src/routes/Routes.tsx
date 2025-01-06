import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

import React from "react"
import Card from "../pages/Card"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <RouterRoutes>
                 <Route path='/u' element={<Card />} />
                 <Route path='*' element={<Card />} /> 
                </RouterRoutes>
            </Fragment>
        </BrowserRouter>
    )
}

export default AppRoutes
