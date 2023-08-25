import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebaseInit"
import { docIsFeedback } from "./typecheck"

export const getAllFeedback = async () => {
    const feedbackRef = collection(db, 'feedback')

    const feedbackSnapshot = await getDocs(feedbackRef)

    const feedback: Feedback[] = []

    feedbackSnapshot.forEach(doc => {
        const docData = doc.data()

        if (docIsFeedback(docData)) {
            feedback.push({
                ...docData,
                id: doc.id
            })
        }
    })

    return feedback
}