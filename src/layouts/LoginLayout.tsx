import LoginNavbar from '../components/LoginNavbar'
import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <>
      <LoginNavbar />
      <Outlet />
    </>
  )
}
