import Link from "next/link"
import Image from "next/image"
import styles from "./EventItem.module.css"

function EventItem({ evt: { attributes } }) {
  //console.log("imagen", attributes)
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={attributes ? attributes.image.data.attributes.formats.medium.url : "/images/event-default.png"} width={170} height={100}
        ></Image>
      </div>

      <div className={styles.info}>
        <span>
          {attributes.date} at {attributes.time}
        </span>
      </div>

      <div className={styles.link}>
        <Link className='btn' href={`/events/${attributes.slug}`}>Details</Link>
      </div>
    </div>
  )
}

export default EventItem
