import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styles from '../styles/banner.module.css'
import Image from 'next/image'

export default function Banner({home, name}) {
  const homeBanner = (<>
    <Image
      src="/images/profile.jpg"
      width={162}
      height={162}
      className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
      alt="Greysoul"
    />
    <h1 className={utilStyles.heading2Xl}>{name}</h1>
  </>)
  
  const secondaryBanner = (<>
    <Link href="/">
      <a>
        <Image
          src="/images/profile.jpg"
          width={108}
          height={108}
          className={`${styles.headerImage} ${utilStyles.borderCircle}`}
          alt="Greysoul"
        />
      </a>
    </Link>
    <h2 className={utilStyles.headingLg}>
      <Link href="/">
        <a className={utilStyles.colorInherit}>{name}</a>
      </Link>
    </h2>
  </>)

  return (<>
      { home ? homeBanner : secondaryBanner}
    </>)
}
