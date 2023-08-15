import {
  MdGridView,
  MdOutlineHome,
  MdOutlineEmail,
  MdOutlineSearch,
  MdPersonOutline,
  MdOutlineWbSunny,
  MdOutlineDarkMode,
  MdOutlineNotifications
} from 'react-icons/md'
import { Link } from "react-router-dom"
import { useAtomValue } from 'jotai'

import './navbar.scss'
import { Avatar } from '../../assets'
import { initialTheme } from '../../atoms/themeAtom'

const Navbar = ({ toggleTheme }) => {
  const isDarkTheme = useAtomValue(initialTheme)

  return (
    <div className="navbar">
      <div className="left">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>dev.social</span>
        </Link>
        <MdOutlineHome size={22} />
        
        {isDarkTheme ? (
          <MdOutlineWbSunny size={22} onClick={toggleTheme} />
        ) : (
          <MdOutlineDarkMode size={22} onClick={toggleTheme} />
        )}

        <MdGridView size={22} />

        <div className="search">
          <MdOutlineSearch size={22} />
          <input type="text" placeholder='Search...' />
        </div>
      </div>
      <div className="right">
        <MdPersonOutline size={22} />
        <MdOutlineEmail size={22} />
        <MdOutlineNotifications size={22} />
        <div className="user">
          <img src={Avatar} alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar