import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { Navigate } from 'react-router-dom';
import BubbleSort from './pages/bubble/BubbleSort';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='/' element={
                <Home/>
                } />
            <Route path='bubble' element={<BubbleSort/>}/>

        </Routes>
    )
}
export default AppRoutes