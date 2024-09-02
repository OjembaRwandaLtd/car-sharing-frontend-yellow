import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import MenuList from '../components/MenuList'
import ProfileIcon from '../assets/ProfileIcon'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-primary-indigo">
      <NavBar MenuList={<MenuList />} ProfileIcon={<ProfileIcon />} />
      <Outlet />
    </div>
  )
}
