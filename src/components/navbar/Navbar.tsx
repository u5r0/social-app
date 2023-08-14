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

import './navbar.scss'
import { Avatar } from '../../assets'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>devsocial</span>
        </Link>
        <MdOutlineHome size={22} />
        <MdOutlineDarkMode size={22} />
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