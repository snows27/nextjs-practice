import { FirstLetterCapitalize } from '@/utils/StringUtil';
import Link from 'next/link'

const CatEvent = ({ data, pageName }) => {
const capitalizedPageName = FirstLetterCapitalize(pageName)
  return (
    <div className="cat_events">
         <h1>Events in {capitalizedPageName}</h1>
         <div className="content">
            {data.map(ev => (<Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
                <div className="card">
                <img src={ev.image} width={500} height={500} alt={ev.title} />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
                </div>
            </Link>))}

         </div>
     </div>
  )
}

export default CatEvent