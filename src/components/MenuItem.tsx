import { NavLink } from 'react-router-dom'

interface MenuItemProps {
  icon: React.ReactNode
  title: string
  path: string
}

export default function MenuItem({ icon, title, path }: MenuItemProps) {
  return (
    <NavLink to={path} className="flex items-center gap-3 font-inter text-white">
      {icon}
      <span>{title}</span>
    </NavLink>
  )
}
