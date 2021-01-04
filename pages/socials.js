import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { getSortedProjectsData } from '../lib/projects'
import Footer from './footer'

export default function Projects({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>Socials — {siteTitle}</title>
          <meta name="og:title" content="Socials — Greysoul" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Footer />
      </section>
    </Layout>
  )
}
