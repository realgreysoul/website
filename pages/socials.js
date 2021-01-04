import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function Projects({ allProjectsData }) {
  const vk = 'realgreysoul';
  const instagram = 'realgreysoul';
  const twitch = 'realgreysoul';
  const blog = 'mislisolya';
  
  const spacer = ", "
  const spacer2 = " & "
  
  return (
    <Layout>
      <Head>
        <title>Socials — {siteTitle}</title>
          <meta name="og:title" content="Socials — Greysoul" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>Socials</h1>
        <a href={`https://vk.com/${vk}`} target="_blank">VK</a>{spacer}
        <a href={`https://www.instagram.com/${instagram}/`} target="_blank">Instagram</a>{spacer}
        <a href={`https://www.twitch.tv/${twitch}`} target="_blank">Twitch</a>{spacer2}
        <a href={`https://t.me/${blog}`} target="_blank">Blog</a>
      </section>
    </Layout>
  )
}
