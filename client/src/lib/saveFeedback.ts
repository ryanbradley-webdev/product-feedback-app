import { db } from '../firebase/firebaseInit'
import { collection, doc, setDoc, updateDoc } from 'firebase/firestore'

export const saveFeedback = async (feedback: FeedbackDraft, id: string | null) => {
    const feedbackRef = collection(db, 'feedback')

    const docRef = id ? doc(feedbackRef, id) : doc(feedbackRef)

    if (id) {
        await updateDoc(docRef, feedback)
    } else {
        await setDoc(docRef, feedback)
    }

    return docRef.id
}