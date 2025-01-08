import styles from './Header.module.css';
import Navigation from "../Navigation/Navigation";

const navItems = [
  { label: 'Home', href: '/'},
  { label: 'About', href: '/about'},
  { label: 'Blog', href: '/blog'}
]

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation navLinks={navItems} />
    </header>
  )
}
