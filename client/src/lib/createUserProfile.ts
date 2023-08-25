import { db } from "../firebase/firebaseInit"
import { collection, doc, setDoc } from "firebase/firestore"

export const createUserProfile = async (id: string, name: string, handle: string, profileImg: string) => {
    if (!id || !name || !handle) {
        throw new Error('Missing user data')
    }

    const newUserRef = doc(collection(db, 'users'))

    const newUserData: User = {
        userId: id,
        name,
        handle,
        profileImg,
        likedFeedback: []
    }

    await setDoc(newUserRef, newUserData)

    return newUserData
}