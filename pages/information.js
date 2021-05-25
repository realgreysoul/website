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
        <h3 className={utilStyles.headingXL}>Проекты</h3>
        <ul className={utilStyles.list}>
        <li class="utils_listItem__2eJpJ">
        <div class="utils_listItemHeading__iji17">
        <a href="https://r.greysoul.ru/pw-vk-gsb" target="_blank">Greysoul Beats</a>
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
        <a href="https://r.greysoul.ru/pw-vk-x" target="_blank">X1xBuch</a>
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
        <a href="https://r.greysoul.ru/pw-yt" target="_blank">грейсоль</a>
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
        <a href="https://r.greysoul.ru/pw-vk-a" target="_blank">Angie</a>
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
        <s><a href="https://r.greysoul.ru/pw-gj" target="_blank">Greysoul Games</a></s>
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
        <h3 className={utilStyles.headingXL}>Соц-сети и другие платформы</h3>
        <a href={`https://r.greysoul.ru/pw-vk`} target="_blank"><strong>ВКонтакте</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/pw-ig`} target="_blank"><strong>Instagram</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/pw-tg`} target="_blank"><strong>Telegram</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/pw-tg-ms`} target="_blank"><strong>Блог</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/pw-t`} target="_blank"><strong>Twitch</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/pw-s`} target="_blank"><strong>Steam</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/pw-sc`} target="_blank"><strong>Social Club</strong></a>
        <h3 className={utilStyles.headingXL}>Мои плейлисты в ВКонтакте</h3>
        <a href={`https://r.greysoul.ru/pw-vk-ltp`} target="_blank"><strong>Любимые треки</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/pw-vk-llft`} target="_blank"><strong>Любимые Lo-Fi треки</strong></a>
        <h3 className={utilStyles.headingXL}>Донат</h3>
        <a href={`https://r.greysoul.ru/pw-da`} target="_blank"><strong>DonationAlerts</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/pw-q`} target="_blank"><strong>QIWI Кошелёк</strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/pw-ym`} target="_blank"><strong>ЮMoney <i>(Яндекс.Деньги)</i></strong></a>
        <br>
        </br>
        <a href={`https://r.greysoul.ru/pw-vkp`} target="_blank"><strong>VK Pay</strong></a>
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
