import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{ background: "purple", padding: 20, margin: 0, color: 'white', fontWeight: 'bold' }}>
            <ul style={{ display: "flex", gap: 20, listStyle: "none" }}>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/dashboard"
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                        };
                    }}
                >
                    <li>Dashboard</li>
                </NavLink>
                <li>Products </li>
                <li>login</li>
            </ul>
        </div>
    )
}

export default Navbar;
