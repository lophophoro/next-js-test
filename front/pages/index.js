import Link from 'next/link'
import Layout from "../components/Layout"
import EventItem from "../components/EventItem/EventItem"
import { API_URL } from '../config'

export default function Home({ events }) {

  // este console se ejecuta en el lado del cliente
  // console.log(events)

  return (
    <Layout>
      <h1>Upcomming events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt}/>
      ))}

      {events.length>0 && (
        <Link href='/events' className='btn-secondary'>View all events</Link>
      )}

      <Link href="/about">about</Link>
    </Layout>
  )
}

// getServerSideProps -> se ejecuta en cada request
// getStaticProps -> se ejecuta durante el build-time
// export async function getServerSideProps(){
export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/events?[populate]=*&sort[0]=date%3Aasc&pagination[page]=1&pagination[pageSize]=3`)
  const events = await res.json()

  // este console se ejecuta en el lado del servidor
  // console.log("events 37", events.data)

  return {
    props: { events: events.data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}