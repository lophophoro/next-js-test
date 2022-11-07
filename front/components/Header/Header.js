import Link from 'next/link'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>DJ events</Link>
      </div>

      <nav>
        <ul>
          <li><Link href='/events'>Events</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header