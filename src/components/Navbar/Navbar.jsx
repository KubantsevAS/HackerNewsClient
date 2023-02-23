import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <NavLink to='/top'>top stories</NavLink>
            <NavLink to='/new'>latest stories</NavLink>
            <NavLink to='/best'>best stories</NavLink>
        </div>
    )
}
