import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
   return (
      <>
         <div style={{
            display: "flex",
            background: 'black',
            padding: '5px 0 5px 5px',
            fontSize: '20px'
         }}>
            <div style={{ margin: '10px' }}>
               <NavLink to="/" style={({ isActive }) => ({
                  color: isActive ? 'greenyellow' : 'white'
               })}>
                  Home
               </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
               <NavLink to="/notes" style={({ isActive }) => ({
                  color: isActive ? 'greenyellow' : 'white'
               })}>
                  Notes
               </NavLink>
            </div>
         </div>
         <Outlet />
      </>
   )
}

export default Navbar