import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function Projects({ allProjectsData }) {

  return (
    <Layout>
      <Head>
        <title>Projects — {siteTitle}</title>
          <meta name="og:title" content="Projects — Greysoul" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>Projects</h1>
        <a href={`https://beats.greysoul.ru/`} target="_blank"><strong>Greysoul Beats</strong></a>
        <br>
        </br>
        <a href={`https://www.youtube.com/channel/UCfBYBmvY2JgKNA6prrfFqhw`} target="_blank"><strong>грейсоль</strong></a>
        <br>
        </br>
        <a href={`https://vk.com/x1xbuch`} target="_blank"><strong>Music Distribution and Management of the artist X1xBuch</strong></a>
        <br>
        </br>
        <a href={`https://vk.com/angie_is_so_sexy`} target="_blank"><strong>Music Distribution and Management of the artist Angie</strong></a>
        <br>
        </br>
        <a href={`https://gamejolt.com/@greysoulgames`} target="_blank"><strong>Greysoul Games</strong></a> (2015-2020)
        <br>
        </br>
        <strong>Greysoul Publishing</strong> (2019-2020)
      </section>
    </Layout>
  )
}
