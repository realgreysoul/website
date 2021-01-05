import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

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
        <small class="utils_lightText__12Ckm"><p>Beats for all kinds of performers</p></small>
        <small>
        <ul class="utils_list__S7_pe">
        <li class="utils_listItem__2eJpJ">
        </li>
        </ul>
        </small>
        </li>
        <li class="utils_listItem__2eJpJ">
        <div class="utils_listItemHeading__iji17">
        <a href="https://vk.com/x1xbuch" target="_blank">X1xBuch</a>
        </div>
        <small class="utils_lightText__12Ckm"><p>Music Distribution and Artist Management</p></small>
        <small>
        <ul class="utils_list__S7_pe">
        <li class="utils_listItem__2eJpJ">
        </li>
        </ul>
        </small>
        </li>
        <li class="utils_listItem__2eJpJ">
        <div class="utils_listItemHeading__iji17">
        <a href="https://vk.com/angie_is_so_sexy" target="_blank">Angie</a>
        </div>
        <small class="utils_lightText__12Ckm"><p>Music Distribution and Artist Management</p></small>
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
        <small class="utils_lightText__12Ckm"><p>A YouTube channel with content that even I don't know</p></small>
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
