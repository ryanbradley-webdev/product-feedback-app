import { db } from "../firebase/firebaseInit"
import { collection, getDocs, query, where } from "firebase/firestore"
import { docIsUser } from "./typecheck"

export const getLoginInfo = async (userId: string) => {
    const usersRef = collection(db, 'users')

    const q = query(usersRef, where('userId', '==', userId))

    const querySnapshot = await getDocs(q)

    if (querySnapshot.docs.length === 1) {
        const docData = querySnapshot.docs[0].data()

        if (docIsUser(docData)) {
            return {
                ...docData,
                userId
            }
        }
    }
}