import styles from '../styles/footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <small class="utils_lightText__12Ckm">
        <p>© 2021 Greysoul</p>
        <p>Based on the Michael Westerby <a href={`https://github.com/mwesterby/michaelwesterby.com`} target="_blank">repository</a></p>
        </small>
      </footer>
  )
}
