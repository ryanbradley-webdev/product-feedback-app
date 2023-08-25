import { db } from '../firebase/firebaseInit'
import { collection, getDocs, query, updateDoc, where } from 'firebase/firestore'

export const toggleUpvote = async (likedFeedback: string[], userHandle: string | undefined) => {
    if (!userHandle) return

    const usersRef = collection(db, 'users')

    const q = query(usersRef, where('handle', '==', userHandle))

    const querySnapshot = await getDocs(q)

    if (querySnapshot.docs.length === 0) {
        return
    }

    querySnapshot.forEach(doc => {
        const docData = doc.data()

        if (docData.handle === userHandle) {
            updateDoc(doc.ref, {
                likedFeedback
            })
        }
    })
}