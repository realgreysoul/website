import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'

export default function Custom404() {
  return (
      <Head>
        <title>404: Page Not Found — {siteTitle}</title>
          <meta name="og:title" content="404: Page Not Found — Greysoul" />
      </Head>
    <div>
      <p className={utilStyles.heading2Xl}>404: Page Not Found</p>
    </div>
  )
}
