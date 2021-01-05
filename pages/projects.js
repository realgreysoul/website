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
        <a href="https://beats.greysoul.ru/" target="_blank">Greysoul Beats</a>
        </div>
        <small>
        <ul class="utils_list__S7_pe">
        <li class="utils_listItem__2eJpJ">
        </li>
        </ul>
        </small>
        </li>
        <li class="utils_listItem__2eJpJ">
        <div class="utils_listItemHeading__iji17">
        <a href="https://vk.com/x1xbuch" target="_blank">X1xBuch (Music Distribution and Artist Management)</a>
        </div>
        <small>
        <ul class="utils_list__S7_pe">
        <li class="utils_listItem__2eJpJ">
        </li>
        </ul>
        </small>
        </li>
        <li class="utils_listItem__2eJpJ">
        <div class="utils_listItemHeading__iji17">
        <a href="https://vk.com/angie_is_so_sexy" target="_blank">Angie (Music Distribution and Artist Management)</a>
        </div>
        <small>
        <ul class="utils_list__S7_pe">
        <li class="utils_listItem__2eJpJ">
        </li>
        </ul>
        </small>
        </li>
        <li class="utils_listItem__2eJpJ">
        <div class="utils_listItemHeading__iji17">
        <a href="https://www.youtube.com/channel/UCfBYBmvY2JgKNA6prrfFqhw" target="_blank">грейсоль</a>
        </div>
        <small>
        <ul class="utils_list__S7_pe">
        <li class="utils_listItem__2eJpJ">
        </li>
        </ul>
        </small>
        </li>
        <li class="utils_listItem__2eJpJ">
        <div class="utils_listItemHeading__iji17">
        <s><a href="https://gamejolt.com/@greysoulgames" target="_blank">Greysoul Games</a></s>
        </div>
        <small class="utils_lightText__12Ckm"><p>The project is closed</p></small>
        <small>
        <ul class="utils_list__S7_pe">
        <li class="utils_listItem__2eJpJ">
        </li>
        </ul>
        </small>
        </li>
        <li class="utils_listItem__2eJpJ">
        <div class="utils_listItemHeading__iji17">
        <s>Greysoul Publishing</s>
        </div>
        <small class="utils_lightText__12Ckm"><p>The project is closed</p></small>
        <small>
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
