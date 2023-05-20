import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from './utils/useAuth'

const ProtectedRoute = () => {

    const {authenticated} = useAuth()
    // const location = useLocation()
    if (!authenticated) {
        return (
            <Navigate
                to={`/LOGIN`}
                replace
            />
        )
    }

    return <Outlet />
}

export default ProtectedRoute