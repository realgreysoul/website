import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { getSortedProjectsData } from '../lib/projects'
import Date from '../components/date'


function Project (project) {
  const { 
    id,
    startDate,
    endDate,
    title,
    contentHtml,
    link
  } = project

  return (
    <li className={utilStyles.listItem} key={id}>
      <div className={utilStyles.listItemHeading}><a href={link} target="_blank">{title}</a></div>
      <small className={utilStyles.lightText}>
        <Date dateString={startDate} dateFormat={'LLLL yyyy'} /> - {(endDate == 'Present') ? endDate : <Date dateString={endDate} dateFormat={'LLLL yyyy'} /> }
      </small>
      <small>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </ul>
      </small>
    </li>
  )
}

export default function Projects({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>Projects — {siteTitle}</title>
          <meta name="og:title" content="Projects — Greysoul" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>Projects</h1>
        <ul className={utilStyles.list}>
<li class="utils_listItem__2eJpJ">
<div class="utils_listItemHeading__iji17">
<a href="https://vk.com/angie_is_so_sexy" target="_blank">Distribution and management of the artist Angie</a>
</div>
<small class="utils_lightText__12Ckm"><p>2019-2020</p></small><small>
<ul class="utils_list__S7_pe">
<li class="utils_listItem__2eJpJ">
</li>
</ul>
</small>
</li>
          </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allProjectsData = await getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}
