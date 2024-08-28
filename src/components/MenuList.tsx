import { Menu, MenuButton, MenuItems, MenuItem as HUMenuItem } from '@headlessui/react'
import MenuItem from './MenuItem'
import CarIcon from '../assets/CarIcon'
import ListIcon from '../assets/ListIcon'
import BookingsIcon from '../assets/BookingsIcon'
import CarsIcon from '../assets/CarsIcon'
import CarPlusIcon from '../assets/CarPlusIcon'
import LogoutIcon from '../assets/LogoutIcon'
import { useState } from 'react'

export default function MenuList() {
  const [menuText, setMenuText] = useState<string>('Menu')
  const generalDetails = [
    { icon: <CarIcon />, title: 'Book A Car', path: '' },
    { icon: <BookingsIcon />, title: 'Bookings', path: '' },
  ]
  const myCarsDetails = [
    { icon: <CarsIcon />, title: 'See my Cars', path: '' },
    { icon: <ListIcon />, title: "My Car's Bookings", path: '' },
    { icon: <CarPlusIcon />, title: 'Add New Car', path: '' },
  ]
  const generalItems = generalDetails.map(generalDetail => (
    <HUMenuItem key={generalDetail.title}>
      <MenuItem {...generalDetail} />
    </HUMenuItem>
  ))
  const myCarsItems = myCarsDetails.map(myCarsDetail => (
    <HUMenuItem key={myCarsDetail.title}>
      <MenuItem {...myCarsDetail} />
    </HUMenuItem>
  ))

  function handleMenuClick() {
    setMenuText(previousText => (previousText === 'Menu' ? 'Close' : 'Menu'))
  }

  return (
    <Menu>
      <MenuButton className=" bg-primary-blue text-white" onClick={handleMenuClick}>
        {menuText}
      </MenuButton>
      <MenuItems>
        <div className="w-56 rounded-lg bg-secondary-indigo px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">{generalItems}</div>
          <div className="my-4 flex flex-col gap-4 border-y py-4">
            <h3 className="font-semibold text-white">My cars</h3>
            {myCarsItems}
          </div>
          <HUMenuItem>
            <MenuItem icon={<LogoutIcon />} path="/login" title="Log Out" />
          </HUMenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
