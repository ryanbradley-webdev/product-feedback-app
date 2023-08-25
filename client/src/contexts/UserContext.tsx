import { createContext, ReactNode, useEffect, useState } from 'react'

export const UserContext = createContext({} as UserContext)

export default function UserContextProvider({
    children
}: {
    children: ReactNode
}) {
    const [user, setUser] = useState<User | null>(null)

    const value = {
        user
    }

    useEffect(() => {
        setUser({
            name: 'Ryan',
            handle: '@ryan',
            profileImg: ''
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
