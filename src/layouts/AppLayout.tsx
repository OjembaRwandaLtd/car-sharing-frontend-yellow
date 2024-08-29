import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-primary-indigo">
      <NavBar />
      <Outlet />
    </div>
  )
}
