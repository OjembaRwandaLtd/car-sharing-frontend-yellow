import NavbarTemplate from '../components/NavbarTemplate'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
      <NavbarTemplate />
      <Outlet />
    </>
  )
}
