import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'

      <Head>
        <title>404: Page Not Found — {siteTitle}</title>
          <meta name="og:title" content="404: Page Not Found — Greysoul" />
      </Head>

export default function Custom404() {
  return (
    <div>
      <p className={utilStyles.heading2Xl}>404: Page Not Found</p>
    </div>
  )
}
