import { Menu, MenuButton, MenuItems, MenuItem as HUMenuItem } from '@headlessui/react'
import MenuItem from './MenuItem'
import CarIcon from '../assets/CarIcon'
import ListIcon from '../assets/ListIcon'
import BookingsIcon from '../assets/BookingsIcon'
import CarsIcon from '../assets/CarsIcon'
import CarPlusIcon from '../assets/CarPlusIcon'
import LogoutIcon from '../assets/LogoutIcon'
import { links } from '../routes/router'

export default function MenuList() {
  const generalDetails = [
    { icon: <CarIcon />, title: 'Book A Car', path: links.newBooking },
    { icon: <BookingsIcon />, title: 'Bookings', path: links.myBookings },
  ]
  const myCarsDetails = [
    { icon: <CarsIcon />, title: 'See my Cars', path: links.myCars },
    { icon: <ListIcon />, title: "My Car's Bookings", path: links.manageBookings },
    { icon: <CarPlusIcon />, title: 'Add New Car', path: links.addCar },
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

  return (
    <Menu>
      <MenuButton className="bg-primary-blue text-white">
        {({ active }) => <span> {active ? 'Close' : 'Menu'}</span>}
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="ml-4 mt-10 w-56 rounded-lg bg-secondary-indigo px-6 pb-6"
      >
        <div className="flex flex-col gap-4 pt-4">{generalItems}</div>
        <div className="my-4 flex flex-col gap-4 border-y py-4">
          <h3 className="font-semibold text-white">My cars</h3>
          {myCarsItems}
        </div>
        <HUMenuItem>
          <MenuItem icon={<LogoutIcon />} path="login" title="Log Out" />
        </HUMenuItem>
      </MenuItems>
    </Menu>
  )
}
