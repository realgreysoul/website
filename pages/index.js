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
        <p>Привет, вы попали на мой личный сайт!</p>
        <p>На этом сайте имеется вся информация о моих соц-сетях и моих проектах.</p>
        <p>Если вы хотите что-то написать мне, или обратится ко мне за сотрудничеством, то напишите, пожалуйста, на <a href={`mailto:admin@greysoul.ru`}><strong>эту почту</strong></a>.</p>
      </section>
    </Layout>
  )
}
