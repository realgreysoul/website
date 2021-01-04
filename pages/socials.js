import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function Projects({ allProjectsData }) {

  return (
    <Layout>
      <Head>
        <title>Socials — {siteTitle}</title>
          <meta name="og:title" content="Socials — Greysoul" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>Socials</h1>
        <a href={`https://vk.com/realgreysoul`} target="_blank"><strong>VK</strong></a>
        <br>
        <a href={`https://www.instagram.com/realgreysoul/`} target="_blank"><strong>Instagram</strong></a>
        <br>
        <a href={`https://t.me/greysoul`} target="_blank"><strong>Telegram</strong></a>
        <br>
        <a href={`https://t.me/mislisolya`} target="_blank"><strong>Blog</strong></a>
        <br>
        <a href={`https://steamcommunity.com/id/realgreysoul/`} target="_blank"><strong>Steam</strong></a>
        <br>
        <a href={`https://socialclub.rockstargames.com/member/RealGreysoul/`} target="_blank"><strong>Social Club</strong></a>
      </section>
    </Layout>
  )
}
