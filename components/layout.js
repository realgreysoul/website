import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Footer from './footer'
import Navbar from './navbar'
import Banner from './banner'

const name = 'Greysoul'
export const siteTitle = name

export default function Layout({ children, home }) {
  return (
    <>
      <Navbar home={home}/>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <script type="text/javascript" >
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}}
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          ym(70946869, "init", {
          clickmap}true,
          trackLinks}true,
          accurateTrackBounce}true
          });
          </script>
          <noscript><div><img src="https://mc.yandex.ru/watch/70946869" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
          <meta name="description" content="I'm a regular person who does beatmaking and sound engineering. I used to be into indie game development and was on many development teams." />
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
