import Link from 'next/link'

export const HomePage = ({data}) => 
     (
        <div className="home_body">
        {data.map((e) => <Link className="card" key={e.id} href={`/events/${e.id}`} passHref>
          <div className="image">
          <img src={e.image} width={600} height={400}/>.
          </div>
          <div className="content">
          <h2> {e.title} </h2>
          <p> {e.description} </p>
          </div>
        </Link>)}
      </div>
      
    )
