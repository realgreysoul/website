import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function Projects({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>Информация обо мне — {siteTitle}</title>
          <meta name="og:title" content="Информация обо мне" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>Информация обо мне</h1>
        <h2 className={utilStyles.headingXL}>Проекты</h2>
        <h3 className={utilStyles.headingXL}>Действующие</h3>
        <ul className={utilStyles.list}>
        <li class="utils_listItem__2eJpJ">
        <div class="utils_listItemHeading__iji17">
        <a href="https://r.greysoul.ru/074la" target="_blank">Greysoul Beats</a>
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
        <a href="https://r.greysoul.ru/clyxl" target="_blank">X1xBuch</a>
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
        <a href="https://r.greysoul.ru/56bq8" target="_blank">грейсоль</a>
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
        <a href="https://r.greysoul.ru/1jqhd" target="_blank">Angie</a>
        </div>
        <small class="utils_lightText__12Ckm"><p>Дистрибуция музыки и менеджмент артиста</p></small>
        <small>
        <ul class="utils_list__S7_pe">
        <li class="utils_listItem__2eJpJ">
        </li>
        </ul>
        </small>
        </li>
        <h3 className={utilStyles.headingXL}>Закрытые</h3>
        <li class="utils_listItem__2eJpJ">
        <div class="utils_listItemHeading__iji17">
        <s><a href="https://r.greysoul.ru/xqes5" target="_blank">Greysoul Games</a></s>
        </div>
        <small class="utils_lightText__12Ckm"><p>Игры, которые сейчас вызывают у меня чувство стыда</p></small>
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
        <small class="utils_lightText__12Ckm"><p>Платная публикация музыки различных артистов во все известные музыкальные сервисы</p></small>
        <small>
        <ul class="utils_list__S7_pe">
        <li class="utils_listItem__2eJpJ">
        </li>
        </ul>
        </small>
        </li>
        </ul>
        <h2 className={utilStyles.headingXL}>Соц-сети и другие платформы</h2>
        <a href={`https://r.greysoul.ru/ei24g`} target="_blank"><strong>ВКонтакте</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/wtn2x`} target="_blank"><strong>Instagram</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/ngcv9`} target="_blank"><strong>Telegram</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/9baxg`} target="_blank"><strong>Блог</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/pqckb`} target="_blank"><strong>Twitch</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/3vlkn`} target="_blank"><strong>Steam</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/skx54`} target="_blank"><strong>Social Club</strong></a>
        <h2 className={utilStyles.headingXL}>Мои плейлисты в ВКонтакте</h2>
        <a href={`https://r.greysoul.ru/xm34y`} target="_blank"><strong>Любимые треки</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/5iazo`} target="_blank"><strong>Любимые Lo-Fi треки</strong></a>
        <h2 className={utilStyles.headingXL}>Донат</h2>
        <a href={`https://r.greysoul.ru/e7r9v`} target="_blank"><strong>DonationAlerts</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/fiw0w`} target="_blank"><strong>QIWI Кошелёк</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/h1s13`} target="_blank"><strong>ЮMoney <i>(Яндекс.Деньги)</i></strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/tkouu`} target="_blank"><strong>VK Pay</strong></a>
        <br>
        </br>
        Кошельки <strong>WebMoney</strong>:
        <br>
        </br>
        1. <strong>R464312826829</strong>
        <br>
        </br>
        2. <strong>Z020618529666</strong>
      </section>
    </Layout>
  )
}
