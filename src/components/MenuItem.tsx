import { forwardRef } from 'react'
import { NavLink } from 'react-router-dom'

interface MenuItemProps {
  icon: React.ReactNode
  title: string
  path: string
}

const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(function (
  { icon, title, path },
  ref,
) {
  return (
    <NavLink ref={ref} to={path} className="flex items-center gap-3 font-inter text-white">
      <span className="w-6 h-6 object-contain">{icon}</span>
      <span>{title}</span>
    </NavLink>
  )
})

MenuItem.displayName = 'MenuItem'

export default MenuItem
