import styles from '../styles/footer.module.css'
import Link from 'next/link'

const today = new Date();

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <small class="utils_lightText__12Ckm">
        <p>© {today.getFullYear()} <strong>Greysoul</strong></p>
        <p>Сайт основан на <a href={`https://github.com/mwesterby/michaelwesterby.com`} target="_blank"><strong>репозитории</strong></a> с открытым исходным кодом, работает на фреймворке <a href={`https://nextjs.org/`} target="_blank"><strong>Next.js</strong></a> и хостится на платформе <a href={`https://vercel.com/`} target="_blank"><strong>Vercel</strong></a></p>
        </small>
      </footer>
  )
}
