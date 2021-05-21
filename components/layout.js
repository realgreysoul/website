import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Navbar from './navbar'
import Banner from './banner'
import Footer from './footer'

const name = 'Greysoul'
export const siteTitle = name

export default function Layout({ children, home }) {
  return (
    <>
      <Navbar home={home}/>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Сайт битмейкера и звукорежиссёра, а также бывшего разработчика инди-игр и бывшего участника многих команд по их разработке" />
          <meta name="author" content={siteTitle} />
          <meta property="og:site_name" content={siteTitle} />
          <meta name="og:title" content={siteTitle} />
          <meta name="og:image" content="https://greysoul.ru/images/seo.jpg" />
          <!-- Cloudflare Web Analytics -->
          <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "9c5cbe7a5e4c40f1954c457b3e93c93a"}'></script>
          <!-- End Cloudflare Web Analytics -->
        </Head>
        <header className={styles.header}>
          <Banner home={home} name={name}/>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
