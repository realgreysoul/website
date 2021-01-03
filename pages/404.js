import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'

export default function Custom404() {
  return (
    <div>
    <Layout>
      <Head>
        <title>404: Page Not Found — Greysoul</title>
        <meta name="og:title" content="404: Page Not Found — Greysoul" />
      </Head>
      <h1 className={utilStyles.heading2Xl}>404</h1>
      <h2 className={utilStyles.headingMd}>Page Not Found</h2>
      <p className={utilStyles.headingMd}>If you reached this page by mistake, return to the <Link href={`/`}>home page</Link></p>
    </Layout>
    </div>
  )
}
