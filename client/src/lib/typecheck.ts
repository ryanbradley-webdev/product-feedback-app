import { DocumentData } from "firebase/firestore"

export const docIsFeedback = (doc: DocumentData): doc is Feedback => {
    const keys = Object.keys(doc)

    return keys.includes('title') && keys.includes('description')
}