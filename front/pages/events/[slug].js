import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import { FaPencilAlt, FaTimes } from "react-icons/fa"

import Layout from "../../components/Layout"

import { API_URL } from "../../config"
import styles from "./[slug].module.css"

export default function EventPage({ evt }) {
  const router = useRouter()
  const { slug } = router.query

  // the route /slug/abc?foo=bar will have the following query object:
  // { "foo": "bar", "slug": "abc" }
  console.log("evt", evt.image.data.attributes.formats.medium.url)

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <FaPencilAlt />
            Edit event
          </Link>
          <Link
            href="#"
            className={styles.delete}
            onClick={(e) => {
              console.log("borrar evento", e)
            }}
          >
            <FaTimes />
            Delete event
          </Link>
        </div>

        <span>
          {evt.date} at {evt.time}
        </span>

        <h1>{evt.name}</h1>

        {evt.image && (
          <div>
            <Image src={evt.image.data.attributes.formats.medium.url} width={960} height={600}></Image>
          </div>
        )}
        
        <h3>Performers:</h3>
        <p>{evt.performers}</p>

        <Link href={`/events/`}>
            {'<'} Go Back
        </Link>
        
      </div>
    </Layout>
  )
}

// Static Site Generation
export async function getStaticPaths() {
  //console.log("entra")
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()
  const paths = events.data.map((evt) => ({
    params: { slug: evt.attributes.slug },
  }))
  //console.log("paths", paths)

  // fallback: false, muestra 404 si  el recurso no se encuentra
  // fallback: true, fuerza el request si el recurso no se encuentra
  return {
    paths,
    fallback: false,
  }

  // estructura del return
  /* return {
    paths: [
      { params: { slug: 'throwback-thursdays-with-dj-manny-duke' } },
      { params: { slug: 'boom-dance-festival-experience' } },
    ], 
    fallback: false
  } */
}

// no se puede usar getStaticProps sin getStaticPaths en una ruta dinamica [slug].js
export async function getStaticProps({
  params: { slug: slugFromPaths }, // este viene de getStaticPaths
}) {
  const res = await fetch(`${API_URL}/api/events?filters[slug][$eq]=${slugFromPaths}&populate=*`)
  const events = await res.json()

  return {
    props: {
      evt: events.data[0].attributes, // se pasa como prop al componente EventPage({ evt })
    },
  }
}

/* Both getStaticProps and getStaticPaths run only at build time. 
That is the purpose of these functions. In development mode next dev, however, 
getStaticProps and getStaticPaths run on every request. */
