import React from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

const LoginGuard = ({ children }: Props) => {
  const isLogin = localStorage.getItem('isLogin')
  // isLogin != 'true' && <Navigate to={'/auth/login'} />
  if(!isLogin) return <Navigate to={'/auth/login'} />
  return children
}

export default LoginGuard
