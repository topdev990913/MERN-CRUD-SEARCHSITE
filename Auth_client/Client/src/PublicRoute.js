import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from './utils/useAuth'


const PublicRoute = () => {
    
    const {authenticated} = useAuth()
    
    return authenticated ? <Navigate to={'/Admin'} /> : <Outlet />
}

export default PublicRoute