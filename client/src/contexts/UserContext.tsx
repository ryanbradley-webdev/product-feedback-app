import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createContext, ReactNode, useState } from 'react'
import { toggleUpvote } from '../lib/toggleUpvote'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseInit'
import { getLoginInfo } from '../lib/getLoginInfo'

export const UserContext = createContext({} as UserContext)

export default function UserContextProvider({
    children
}: {
    children: ReactNode
}) {
    const [user, setUser] = useState<User | null>(null)

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: ({
            newLikedFeedback,
            feedbackId,
            upvotes
        }: {
            newLikedFeedback: string[]
            feedbackId: string
            upvotes: number
        }) => toggleUpvote(newLikedFeedback, user?.handle, feedbackId, upvotes),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['feedback'] })
    })

    const toggleFeedbackLike = (feedbackId: string, upvotes: number) => {
        if (!user) return

        const newLikedFeedback =
            user.likedFeedback.includes(feedbackId)
            ?
            user.likedFeedback.filter(id => id !== feedbackId) 
            :
            [ ...user.likedFeedback, feedbackId ]

        mutate({
            newLikedFeedback,
            feedbackId,
            upvotes
        })
        
        setUser({
            ...user,
            likedFeedback: newLikedFeedback
        })
    }

    const login = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async userCredential => {
                const userId = userCredential.user.uid

                const userData = await getLoginInfo(userId)

                if (userData) {
                    setUser(userData)
                }
            })
            .catch(() => setUser(null))
    }

    const value = {
        user,
        login,
        toggleFeedbackLike
    }

    return (
        <UserContext.Provider
            value={value}
        >
            {children}
        </UserContext.Provider>
    )
}
