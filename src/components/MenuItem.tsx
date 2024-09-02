import { forwardRef } from 'react'
import { NavLink } from 'react-router-dom'

interface MenuItemProps {
  icon: React.ReactNode
  title: string
  path: string
  ariaLabel: string
}

const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(function (
  { icon, title, path, ariaLabel },
  ref,
) {
  return (
    <NavLink
      ref={ref}
      to={path}
      aria-label={ariaLabel}
      className="flex items-center gap-3 rounded-md p-1 font-inter text-white hover:bg-blue-100/50 focus:bg-blue-100/50"
    >
      <span className="h-6 w-6">{icon}</span>
      <span>{title}</span>
    </NavLink>
  )
})

MenuItem.displayName = 'MenuItem'

export default MenuItem
