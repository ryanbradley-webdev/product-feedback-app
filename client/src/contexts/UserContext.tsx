import { useMutation } from '@tanstack/react-query'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { toggleUpvote } from '../lib/toggleUpvote'

export const UserContext = createContext({} as UserContext)

export default function UserContextProvider({
    children
}: {
    children: ReactNode
}) {
    const [user, setUser] = useState<User | null>(null)

    const { mutate } = useMutation({
        mutationFn: (likedFeedback: string[]) => toggleUpvote(likedFeedback, user?.handle)
    })

    const toggleFeedbackLike = (feedbackId: string) => {
        if (!user) return

        const newLikedFeedback =
            user.likedFeedback.includes(feedbackId)
            ?
            user.likedFeedback.filter(id => id !== feedbackId) 
            :
            [ ...user.likedFeedback, feedbackId ]

        mutate(newLikedFeedback)
        
        setUser({
            ...user,
            likedFeedback: newLikedFeedback
        })
    }

    const value = {
        user,
        toggleFeedbackLike
    }

    useEffect(() => {
        setUser({
            name: 'Ryan',
            handle: '@ryan',
            profileImg: '',
            likedFeedback: []
        })
    }, [])

    return (
        <UserContext.Provider
            value={value}
        >
            {children}
        </UserContext.Provider>
    )
}
