import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Footer from '../components/footer'
import styles from '../styles/footer.module.css'

export default function Footer() {
  const vk = 'realgreysoul';
  const instagram = 'realgreysoul';
  const twitch = 'realgreysoul';
  const blog = 'mislisolya';
  
  const spacer = ", "
  const spacer2 = " & "

  return (
    <Layout>
      <Head>
        <title>Projects — {siteTitle}</title>
          <meta name="og:title" content="Projects — Greysoul" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <footer className={styles.footer}>
        <h1 class="layout_header__1OJ41">Socials</h1>
        <a href={`https://vk.com/${vk}`} target="_blank">VK</a>{spacer}
        <a href={`https://www.instagram.com/${instagram}/`} target="_blank">Instagram</a>{spacer}
        <a href={`https://www.twitch.tv/${twitch}`} target="_blank">Twitch</a>{spacer2}
        <a href={`https://t.me/${blog}`} target="_blank">Blog</a>
      </footer>
      </section>
    </Layout>
  )
}
