import {FC} from 'react'
import { Route, Routes } from 'react-router-dom'
import { arrRoutes } from '../routes/routes'

const AppRoutes:FC = () => {
  return (
    <Routes>
      {arrRoutes.map(route => <Route  key={route.path} path={route.path} Component={route.component}   />  )}
    </Routes>
  )
}

export default AppRoutes
