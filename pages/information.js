import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function Projects({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>Информация обо мне — {siteTitle}</title>
          <meta name="og:title" content="Информация обо мне — Greysoul" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>Информация обо мне</h1>
        <h3 className={utilStyles.headingXL}>Проекты</h3>
        <ul className={utilStyles.list}>
        <li class="utils_listItem__2eJpJ">
        <div class="utils_listItemHeading__iji17">
        <a href="https://beats.greysoul.ru/" target="_blank">Greysoul Beats</a>
        </div>
        <small class="utils_lightText__12Ckm"><p>Биты на любой вкус и цвет</p></small>
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
        <small class="utils_lightText__12Ckm"><p>Дистрибуция музыки и менеджмент артиста</p></small>
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
        <small class="utils_lightText__12Ckm"><p>YouTube-канал, на котором я выкладываю всё подряд</p></small>
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
        <small class="utils_lightText__12Ckm"><p>Дистрибуция музыки и менеджмент артиста</p></small>
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
        <small class="utils_lightText__12Ckm"><p>Проект закрыт</p></small>
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
        <small class="utils_lightText__12Ckm"><p>Проект закрыт</p></small>
        <small>
        <ul class="utils_list__S7_pe">
        <li class="utils_listItem__2eJpJ">
        </li>
        </ul>
        </small>
        </li>
        </ul>
        <h3 className={utilStyles.headingXL}>Соц-сети</h3>
        <a href={`https://vk.com/realgreysoul`} target="_blank"><strong>ВКонтакте</strong></a>
        <br>
        </br>
        <a href={`https://www.instagram.com/realgreysoul/`} target="_blank"><strong>Instagram</strong></a>
        <br>
        </br>
        <a href={`https://t.me/greysoul`} target="_blank"><strong>Telegram</strong></a>
        <br>
        </br>
        <a href={`https://t.me/greysoul2`} target="_blank"><strong>Telegram (второй аккаунт)</strong></a>
        <br>
        </br>
        <a href={`https://t.me/mislisolya`} target="_blank"><strong>Блог</strong></a>
        <br>
        </br>
        <a href={`https://steamcommunity.com/id/realgreysoul/`} target="_blank"><strong>Steam</strong></a>
        <br>
        </br>
        <a href={`https://socialclub.rockstargames.com/member/RealGreysoul/`} target="_blank"><strong>Social Club</strong></a>
        <h3 className={utilStyles.headingXL}>Донат</h3>
        <a href={`https://donate.stream/greysoul`} target="_blank"><strong>Donate.Stream</strong></a>
        <br>
        </br>
        <a href={`https://qiwi.com/n/GREYSOUL`} target="_blank"><strong>QIWI Кошелёк</strong></a>
        <br>
        </br>
        <a href={`https://yoomoney.ru/to/410018468894777`} target="_blank"><strong>ЮMoney (Яндекс.Деньги)</strong></a>
        <br>
        </br>
        <strong>WebMoney - P535282857177</strong>
      </section>
    </Layout>
  )
}
