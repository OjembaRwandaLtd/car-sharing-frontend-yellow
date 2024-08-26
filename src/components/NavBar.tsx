import Logo from '../assets/Logo'
import ProfileIcon from '../assets/ProfileIcon'

export default function NavBar() {
  return (
    <header className="relative z-20 flex justify-between p-5 text-gray-100 rounded-b-lg shadow-lg font-inter bg-primary-blue">
      <button>Menu</button>
      <div className="absolute px-2 pb-3 -translate-x-1/2 rounded-full shadow-lg bg-primary-blue left-1/2">
        <button>
          <Logo />
        </button>
      </div>
      <button>
        <ProfileIcon />
      </button>
    </header>
  )
}
