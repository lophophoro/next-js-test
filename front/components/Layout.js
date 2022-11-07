import { useRouter } from "next/router"
import Head from "next/head"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Showcase from "./Showcase/Showcase"

import styles from './Layout.module.css'

export default function Layout({ title, keywords, description, children }) {

  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
      </Head>

      <Header></Header>
      {router.pathname==='/' && <Showcase/>}
      
			<div className={styles.container}>
	      {children}
			</div>
      <Footer></Footer>
    </div>
  )
}

Layout.defaultProps = {
  title: "mi titulo",
  description: "mi descripcion",
  keywords: "bla bla bla",
}
