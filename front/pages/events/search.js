import Link from "next/link";
import Layout from "../../components/Layout";
import EventItem from "../../components/EventItem/EventItem";
import { API_URL } from "../../config";
var qs = require("qs");

function SearchPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt}/>
      ))}

      <Link href="/about">about</Link>
    </Layout>
  )
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify(
    {
      filters: {
        $or: [
          {
            performers: {
              $containsi: term,
            },
          },
          {
            name: {
              $containsi: term,
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: false, // prettify URL
    }
  )

  const res = await fetch(
    `${API_URL}/api/events?${query}&[populate]=*`
  );
  const events = await res.json();

  return {
    props: {
      events: events.data
    }
  }
}

export default SearchPage;
