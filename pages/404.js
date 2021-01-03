import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404: Page Not Found — {siteTitle}</title>
          <meta name="og:title" content="404: Page Not Found — Greysoul" />
      </Head>
        <section className={utilStyles.headingMd}>
      <h1>404: Page Not Found</h1>
      <p>If you reached this page by mistake, go to the <Link href={`/`}><a>home page</a></Link></p>
        </section>
    </Layout>
  )
}
