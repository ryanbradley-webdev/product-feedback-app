import { db } from '../firebase/firebaseInit'
import { collection, doc, setDoc, updateDoc } from 'firebase/firestore'

export const saveFeedback = async (feedback: FeedbackDraft, id: string | null) => {
    const feedbackRef = collection(db, 'feedback')

    const docRef = id ? doc(feedbackRef, id) : doc(feedbackRef)

    const res = id ? await updateDoc(docRef, feedback) : await setDoc(docRef, feedback)

    return res
}