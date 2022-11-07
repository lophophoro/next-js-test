import { FaExclamationTriangle } from 'react-icons/fa'
import Link from "next/link"
import Layout from "../components/Layout"
import styles from "../styles/404.module.css"

// this 404.js is automatically recognized by next as a 404 page
function NotFoundPage() {
  return (
    <Layout>
      <div className={styles.error}>
        <h1><FaExclamationTriangle/> 404</h1>
        <h4>sorry, there's nothing to be seen here</h4>
        <Link href="/"></Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
