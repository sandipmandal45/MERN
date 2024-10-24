import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaUser, FaRegListAlt, FaHome, FaRocketchat } from "react-icons/fa";

const AdminLayout = () => {
  return (
    <>
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/admin/users"><FaUser /> Users</NavLink>
            </li>
            <li>
            <NavLink to="/admin/contacts"><FaRocketchat /> Contact</NavLink>
            </li>
            <li>
            <NavLink to="/service"><FaRegListAlt /> Services</NavLink>
            </li>
            <li>
            <NavLink to="/"><FaHome /> Home</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <Outlet/>
    </>
  )
}

export default AdminLayout

