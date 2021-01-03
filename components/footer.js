import styles from '../styles/footer.module.css'

export default function Footer() {
  const vk = 'realgreysoul';
  const instagram = 'realgreysoul';
  const twitch = 'realgreysoul';
  const blog = 'mislisolya';
  
  const spacer = " • "

  return (
      <footer className={styles.footer}>
        <a href={`https://vk.com/${vk}`} target="_blank">VK</a>{spacer}
        <a href={`https://www.instagram.com/${instagram}/`} target="_blank">Instagram</a>{spacer}
        <a href={`https://www.twitch.tv/${twitch}`} target="_blank">Twitch</a>{spacer}
        <a href={`https://t.me/${blog}`} target="_blank">Blog</a>
      </footer>
  )
}
