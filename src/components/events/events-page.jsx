import Link from 'next/link'
const AllEvents = ({data}) => {
    
    return (
         <div className="events_page">
            {data.map(ev => (<Link key={ev.id} href={`/events/${ev.id}`}>
                <div className="card">
                <img src={ev.image} alt={ev.title} width={500} height={500}/>
                <h2>{ev.title}</h2>
                </div>
            </Link>))}
         </div>
     
    )
 }
 export default AllEvents