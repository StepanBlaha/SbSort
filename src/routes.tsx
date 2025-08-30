import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SortList from './pages/sortList/SortList';
import { Navigate } from 'react-router-dom';
import BubbleSort from './pages/bubble/BubbleSort';
import SelectionSort from './pages/selection/SelectionSort';
import InsertionSort from './pages/insertion/InsertionSort';
import MergeSort from './pages/merge/MergeSort';
import HeapSort from './pages/heap/HeapSort';
import QuickSort from './pages/quick/QuickSort';
import CountingSort from './pages/counting/CountingSort';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='/' element={
                <Home/>
                } />
            <Route path='list' element={<SortList/>}/>
            <Route path='bubble' element={<BubbleSort />} />
            <Route path='selection' element={<SelectionSort />} />
            <Route path='insertion' element={<InsertionSort />} />
            <Route path='merge' element={<MergeSort />} />
            <Route path='heap' element={<HeapSort />} />
            <Route path='quick' element={<QuickSort />} />
            <Route path='counting' element={<CountingSort/>}/>

        </Routes>
    )
}
export default AppRoutes