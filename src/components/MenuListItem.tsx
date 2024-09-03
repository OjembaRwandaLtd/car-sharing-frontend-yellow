import { NavLink } from 'react-router-dom'
import { MenuItem } from '@headlessui/react'

interface MenuListItemProps {
  icon: React.ReactNode
  title: string
  path: string
  ariaLabel: string
}

export default function MenuListItem({ icon, title, path, ariaLabel }: MenuListItemProps) {
  return (
    <MenuItem>
      <NavLink
        to={path}
        aria-label={ariaLabel}
        className="flex items-center gap-3 rounded-md p-1 font-inter text-white hover:bg-blue-100/50 focus:bg-blue-100/50"
      >
        <span className="h-6 w-6">{icon}</span>
        <span>{title}</span>
      </NavLink>
    </MenuItem>
  )
}
