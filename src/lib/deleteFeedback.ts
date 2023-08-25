import { db } from "../firebase/firebaseInit"
import { collection, deleteDoc, doc } from "firebase/firestore"

export const deleteFeedback = async (id: string) => {
    if (!id) return

    const docRef = doc(collection(db, 'feedback'), id)

    return await deleteDoc(docRef)
}