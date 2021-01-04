import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <small class="utils_lightText__12Ckm">
        <p>© 2021 Greysoul</p>
        <p>Based on the Michael Westerby <Link href='https://github.com/mwesterby/michaelwesterby.com'><a>repository</a></Link></p>
        </small>
      </footer>
  )
}
