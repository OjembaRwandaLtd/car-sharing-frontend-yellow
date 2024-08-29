import GuestNavbar from '../components/GuestNavbar'
import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <>
      <GuestNavbar />
      <Outlet />
    </>
  )
}
