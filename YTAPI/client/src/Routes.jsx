import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from "./Home";
import Videos from './Videos';

class Router extends Component {
    render(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:q" element={<Videos />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;