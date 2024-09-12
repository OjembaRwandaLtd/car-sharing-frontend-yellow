import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (
    <div className="min-h-screen bg-moni-indigo-800">
      <NavBar className="h-16" />
      <Outlet />
    </div>
  )
}
