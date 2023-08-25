import { db } from '../firebase/firebaseInit'
import { arrayUnion, collection, doc, updateDoc } from 'firebase/firestore'

export const addComment = async (newComment: FeedbackComment, id: string) => {
    const feedbackRef = doc(collection(db, 'feedback'), id)

    return await updateDoc(feedbackRef, {
        comments: arrayUnion(newComment)
    })
}