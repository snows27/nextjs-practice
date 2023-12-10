import AllEvents from '@/src/components/events/events-page'
import { ref, get } from "firebase/database";
import { database } from '@/utils/firebase'


const EventPage = ({data}) => {
     return <AllEvents data={data}/>
 }
 export default EventPage

export async function getStaticProps() {
    const events_categoriesRef = ref(database, 'events_categories')
    const snapshot = await get(events_categoriesRef)
    const events_categories = snapshot.val()
    return {
        props: {
            data: events_categories
        }
    }
}