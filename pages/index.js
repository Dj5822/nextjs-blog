import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Nyanyame nyanyajyuunyanya-do no nyarabi de nyakunyaku inyanyaku nyanyahan nyanyadai nyanynaku nyarabete nyaganyagame.</p>
        <p>
          にゃにゃめにゃにゃじゅうにゃにゃどのにゃらびでにゃくにゃくいにゃにゃくにゃにゃはんにゃにゃだいにゃんにゃくにゃらべてにゃがにゃがめ
        </p>
        <Link href="/posts/first-post"><a>Next page</a></Link>
      </section>
    </Layout>
  )
}