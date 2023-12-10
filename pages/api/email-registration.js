// import path from 'path';
// import fs from 'fs'
import {set, get, ref} from 'firebase/database'
import {database} from '@/utils/firebase'


// function buildPath() {
//     return path.join(process.cwd(), 'data', 'data.json')
// }

// function extractData(filePath) {
//     const jsonData = fs.readFileSync(filePath);
//     const data = JSON.parse(jsonData)
//     return data
// }

async function fetchData(){
    const events_categoriesRef = ref(database, 'events_categories')
    const allEventsRef = ref(database, 'allEvents')

    const events_categoriesSnapshot = await get(events_categoriesRef)
    const allEventsSnapshot = await get(allEventsRef)
    const events_categories = events_categoriesSnapshot.val()
    const allEvents = allEventsSnapshot.val()
    return {events_categories, allEvents}

}


export default async function handler(req, res) {
    const { method } = req;
    // const filePath = buildPath();
    const { events_categories, allEvents } = await fetchData();
    if (!allEvents) {
        return res.status(404).json({
            message: 'Events data not found'
        })
    }

    if (method === "POST") {
        const { email, eventId } = req.body

        if(!email || !email.includes('@')){
            res.status(422).json({message: 'Invalid email address'})
            return
        }

        const newAllEvents = allEvents.map(ev => {
            if (ev.id === eventId) {
                if (ev.emails_registered.includes(email)) {
                    res.status(409).json({ message: 'This email has already been registered' });
                    return ev;
                }
                return {
                    ...ev, emails_registered: [...ev.emails_registered, email]
                }
            }
            return ev;
        });
        const allEventsRef = ref(database, 'allEvents')
        set(allEventsRef, newAllEvents)

        res.
            status(200).
            json({ message: `You has been registred successfully with the email: ${email} for the event: ${eventId}` })
    }
}