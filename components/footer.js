import styles from '../styles/footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <small class="utils_lightText__12Ckm">
        <p>© 2020-2021 <strong>Greysoul</strong></p>
        <p>Based on the open-source <a href={`https://github.com/mwesterby/michaelwesterby.com`} target="_blank"><strong>repository</strong></a> from <a href={`https://michaelwesterby.com/`} target="_blank"><strong>Michael Westerby</strong></a></p>
        </small>
      </footer>
  )
}
