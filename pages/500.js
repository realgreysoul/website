  import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function Custom500() {
  return (
    <Layout>
      <Head>
        <title>505: Ошибка на стороне сервера — {siteTitle}</title>
          <meta name="og:title" content="505: Ошибка на стороне сервера" />
      </Head>
        <section className={utilStyles.headingMd}>
      <h1>505: Ошибка на стороне сервера</h1>
      <p>Пожалуйста, подождите.</p>
        </section>
    </Layout>
  )
}
