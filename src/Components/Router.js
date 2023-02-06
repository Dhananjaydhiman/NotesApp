import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Notes from './Notes'


const Router = () => {
   return (
      <>
         <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
               <Route path="/" element={<Navbar />} >
                  <Route path="/" element={<Home />} />
                  <Route path="/notes" element={<Notes />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default Router