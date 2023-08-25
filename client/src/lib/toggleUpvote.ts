import { db } from '../firebase/firebaseInit'
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'

export const toggleUpvote = async (likedFeedback: string[], userHandle: string | undefined, id: string, upvotes: number) => {
    if (!userHandle) return

    const feedbackRef = doc(collection(db, 'feedback'), id)

    const usersRef = collection(db, 'users')

    const q = query(usersRef, where('handle', '==', userHandle))

    const querySnapshot = await getDocs(q)

    if (querySnapshot.docs.length > 0) {
        querySnapshot.forEach(doc => {
            const docData = doc.data()
    
            if (docData.handle === userHandle) {
                updateDoc(doc.ref, {
                    likedFeedback
                })
            }
        })
    }

    return await updateDoc(feedbackRef, {
        upvotes
    })
}