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
          <meta name="description" content="Раньше я увлекался разработкой инди-игр и был во многих командах по их разработке, но с 2018-ого года я увлекаюсь битмейкингом и звукорежиссурой." />
          <meta name="og:title" content={siteTitle} />
          <meta name="og:image" content="https://greysoul.ru/images/seo.jpg" />
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
