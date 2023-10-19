import React from "react"
import Home from '../Pages/Home'
import { createBrowserRouter } from "react-router-dom"


const routes = createBrowserRouter([
    {
        path: "/",
        element : <Home />
    }
])

export default routes