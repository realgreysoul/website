import styles from '../styles/navbar.module.css'
import Link from 'next/link'

function NavLink({label, address}) {
  const home = label === 'Главная'
  return (
    <div className={home ? "" : styles.navbarItem}>
      <Link href={address}>
        <a className={home ? styles.navbarHomeLink : styles.navbarLink}>{label}</a>
      </Link>
    </div>
  )
}

export default function Navbar({home}) {
  return (
    <div className={styles.navbar}>
      <NavLink label='Донат' address='/donate'/>
      <NavLink label='Проекты' address='/projects'/>
      <NavLink label='Соц-сети' address='/socials'/>
      <NavLink label='Главная' address='/'/>
    </div>
  )
}
