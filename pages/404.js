import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404: Страница не найдена — {siteTitle}</title>
          <meta name="og:title" content="404: Страница не найдена — Greysoul" />
      </Head>
        <section className={utilStyles.headingMd}>
      <h1>404: Страница не найдена</h1>
      <p>Если вы попали на эту страницу по ошибке, то перейдите на <Link href={`/`}><a><strong>главную страницу</strong></a></Link>.</p>
        </section>
    </Layout>
  )
}
