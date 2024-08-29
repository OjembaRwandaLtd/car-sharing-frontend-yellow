import GuestNavbar from '../components/GuestNavbar'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (
    <div className="min-h-screen bg-primary-indigo">
      <GuestNavbar />
      <Outlet />
    </div>
  )
}
