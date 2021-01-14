import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function Projects({ allProjectsData }) {

  return (
    <Layout>
      <Head>
        <title>Донат — {siteTitle}</title>
          <meta name="og:title" content="Донат — Greysoul" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>Донат</h1>
        <a href={`https://donate.stream/greysoul`} target="_blank"><strong>Donate.Stream</strong></a>
        <br>
        </br>
        <a href={`https://qiwi.com/n/GREYSOUL`} target="_blank"><strong>QIWI Кошелёк</strong></a>
        <br>
        </br>
        <a href={`https://yoomoney.ru/to/410018468894777`} target="_blank"><strong>ЮMoney (Яндекс.Деньги)</strong></a>
        <br>
        </br>
        <strong>WebMoney - P535282857177</strong>
      </section>
    </Layout>
  )
}
