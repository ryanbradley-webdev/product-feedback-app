import { collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseInit'

export const upvoteFeedback = async (id: string, upvotes: number) => {
    const feedbackRef = doc(collection(db, 'feedback'), id)

    return await updateDoc(feedbackRef, {
        upvotes
    })
}