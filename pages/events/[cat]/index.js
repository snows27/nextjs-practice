import CatEvent from '@/src/components/events/catEvent';
import { ref, get } from 'firebase/database'
import { database } from '@/utils/firebase'
import { FirstLetterCapitalize } from '@/utils/StringUtil';

const CategoryPage = ({ data, pageName }) => {

    return (
        <CatEvent data={data} pageName={pageName} />
    )
}
export default CategoryPage

export async function getStaticPaths() {

    // const {events_categories} = await import('/data/data.json')
    const events_categoriesRef = ref(database, 'events_categories')
    const snapshot = await get(events_categoriesRef)
    const events_categories = snapshot.val()
    const allPaths = events_categories.map((ev) => {
        return {
            params: {
                cat: ev.id.toString()
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    }
};

export async function getStaticProps(context) {
    // const {allEvents} = await import('/data/data.json')
    const id = context?.params.cat
    const allEventsRef = ref(database, 'allEvents')
    const snapshot = await get(allEventsRef)
    const allEvents = snapshot.val()
    const data = allEvents.filter(ev => FirstLetterCapitalize(ev.city) === FirstLetterCapitalize(id))
    return { props: { data, pageName: id } }
}