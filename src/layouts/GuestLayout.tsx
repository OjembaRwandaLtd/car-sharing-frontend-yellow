import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (
    <div className="min-h-screen bg-primary-indigo">
      <NavBar className="h-16" />
      <Outlet />
    </div>
  )
}
