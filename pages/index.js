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
      <section className={utilStyles.headingMd}>
        <h2>Hello!</h2>
        <p>I'm a regular person who does beatmaking and sound engineering. I used to be into indie game development and was on many development teams.</p>
      </section>
    </Layout>
  )
}
