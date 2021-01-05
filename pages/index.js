import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingHd}>
        <p>Привет, меня зовут Александр Казаков!</p>
        <p>Раньше я увлекался разработкой инди-игр и был во многих командах по их разработке, но с 2018-ого года я увлекаюсь битмейкингом и звукорежиссурой.</p>
      </section>
    </Layout>
  )
}
