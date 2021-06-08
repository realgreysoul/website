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
        <p>Здравствуйте, добро пожаловать на мой личный сайт!</p>
        <p>На этом сайте имеется вся информация о моих проектах, соц-сетях и донате.</p>
        <p>Я увлекаюсь созданием битов, а также сведением и мастерингом треков. Я являлся разработчиком инди-игр и участником многих команд по их разработке.</p>
        <p>Если вы хотите написать мне просто так или по поводу сотрудничества, то, пожалуйста, пишите на эту почту - <a href={`mailto:to@greysoul.ru`}><strong>to@greysoul.ru</strong></a>.</p>
      </section>
    </Layout>
  )
}
