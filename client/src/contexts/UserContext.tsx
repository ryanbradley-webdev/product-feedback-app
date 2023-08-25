import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createContext, ReactNode, useState } from 'react'
import { toggleUpvote } from '../lib/toggleUpvote'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebaseInit'
import { getLoginInfo } from '../lib/getLoginInfo'
import { createUserProfile } from '../lib/createUserProfile'

export const UserContext = createContext({} as UserContext)

export default function UserContextProvider({
    children
}: {
    children: ReactNode
}) {
    const [user, setUser] = useState<User | null>(null)
    const [loginError, setLoginError] = useState('')
    const [signupError, setSignupError] = useState('')

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
                setLoginError('')

                const userId = userCredential.user.uid

                const userData = await getLoginInfo(userId)

                if (userData) {
                    setUser(userData)
                }
            })
            .catch(e => {
                setLoginError(e.message)
                setUser(null)
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
    }

    const signup = (email: string, password: string, passwordConfirm: string, name: string, handle: string, profileImg: string) => {
        if (password !== passwordConfirm) {
            return setSignupError('password-mismatch')
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setSignupError('')

                createUserProfile(userCredential.user.uid, name, handle, profileImg)
                    .then(user => setUser(user))
                    .catch(() => setUser(null))
            })
            .catch(e => {
                console.log(e.message)

                setSignupError(e.message)
                setUser(null)
            })
    }

    const value = {
        user,
        signup,
        signupError,
        login,
        loginError,
        logout,
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
