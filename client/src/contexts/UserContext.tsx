import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { toggleUpvote } from '../lib/toggleUpvote'

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
