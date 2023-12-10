import SingleEvents from '@/src/components/events/single-events'
import { ref, get } from 'firebase/database'
import { database } from '@/utils/firebase'
const EventPage = ({ data }) => {
    return (
        <SingleEvents data={data} />
    )
}
export default EventPage

const allEventsRef = ref(database, 'allEvents')
const snapshot = await get(allEventsRef)
const allEvents = snapshot.val()
export async function getStaticPaths() {
    // const data = await import('/data/data.json');
    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city,
                id: path.id
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    // const {allEvents} = await import('/data/data.json')
    const id = context?.params.id;
    const eventData = allEvents.find(ev => (id === ev.id))
    return {
        props: { data: eventData }
    }
}