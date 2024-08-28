import { NavLink } from 'react-router-dom'

interface MenuItemProps {
  icon: React.ReactNode
  title: string
  path: string
}

export default function MenuItem({ icon, title, path }: Readonly<MenuItemProps>) {
  return (
    <NavLink to={path} className="flex items-center gap-3 font-inter text-white ">
      <span className="h-6 w-6 object-contain">{icon}</span>
      <span>{title}</span>
    </NavLink>
  )
}
