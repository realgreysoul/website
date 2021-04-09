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
        <p>Я являюсь битмейкером и звукорежиссёром, а также являлся разработчиком инди-игр и участником многих команд по их разработке.</p>
        <p>На этом сайте имеется вся информация о моих проектах, соц-сетях и донате.</p>
        <p>Если вы хотите что-то написать мне, или обратится ко мне за сотрудничеством, то напишите, пожалуйста, на мою почту - <a href={`mailto:admin@greysoul.ru`}><strong>admin@greysoul.ru</strong></a>.</p>
      </section>
    </Layout>
  )
}
