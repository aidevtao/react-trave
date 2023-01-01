import React, { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface PropsType {
  user: string,
  redirectPath: string,
  children: ReactNode
}

export const ProtectedRoute: FC<PropsType> = ({ user, redirectPath, children }): JSX.Element => {
  if (!user) return <Navigate to={redirectPath} replace />
  return <>{children}</>
}
