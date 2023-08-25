import { db } from '../firebase/firebaseInit'
import { collection, doc, updateDoc } from 'firebase/firestore'

export const addReply = async (comments: FeedbackComment[], id: string | undefined) => {
    if (!id) return

    const feedbackRef = doc(collection(db, 'feedback'), id)

    return await updateDoc(feedbackRef, {
        comments
    })
}