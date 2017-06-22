import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import ActionHome from 'material-ui/svg-icons/action/home'
import IconButton from 'material-ui/IconButton/IconButton'
import Avatar from 'material-ui/Avatar'
import { NavLink } from 'common'
import styles from './navbar.scss'

export default function Navbar() {
  return (
    <div className={ styles.navbar }>
      <div className={ styles.navlinks }>
        <ul>
          <li><NavLink to='/cv'>CV</NavLink></li>
          <li><NavLink to='/github'>Github</NavLink></li>
          <li><NavLink to='/mailTo'>Email</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
