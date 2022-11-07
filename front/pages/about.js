import Link from 'next/link'
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout title='about'>
      <div>About</div>
      <Link href="/">home</Link>
    </Layout>
  )
}
