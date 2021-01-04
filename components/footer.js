import styles from '../styles/footer.module.css'

export default function Footer() {
  const vk = 'realgreysoul';
  const instagram = 'realgreysoul';
  const twitch = 'realgreysoul';
  const blog = 'mislisolya';
  
  const spacer = ", "
  const spacer2 = " & "

  return (
      <footer className={styles.footer}>
        <h1 class="layout_header__1OJ41">Socials</h1>
        <a href={`https://vk.com/${vk}`} target="_blank">VK</a>{spacer}
        <a href={`https://www.instagram.com/${instagram}/`} target="_blank">Instagram</a>{spacer}
        <a href={`https://www.twitch.tv/${twitch}`} target="_blank">Twitch</a>{spacer2}
        <a href={`https://t.me/${blog}`} target="_blank">Blog</a>
      </footer>
  )
}
