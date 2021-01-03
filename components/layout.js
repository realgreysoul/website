import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Footer from './footer'
import Navbar from './navbar'
import Banner from './banner'

const name = 'Greysoul'
export const siteTitle = name
export const OGImage = /images/seo.jpg

export default function Layout({ children, home }) {
  return (
    <>
      <Navbar home={home}/>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="I'm a regular person who does beatmaking and sound engineering. I used to be into indie game development and was on many development teams." />
          <meta name="og:title" content={siteTitle} />
          <meta name="og:image" content={OGImage} />
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
