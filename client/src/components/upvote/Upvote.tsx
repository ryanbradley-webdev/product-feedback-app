import { Dispatch, SetStateAction, useState, useContext, useEffect } from 'react'
import styles from './upvote.module.css'
import { UserContext } from '../../contexts/UserContext'

export default function Upvote({
    id,
    upvotes,
    setUpvotes,
    grid
}: {
    id: string
    upvotes: number
    setUpvotes: Dispatch<SetStateAction<number>>
    grid?: boolean
}) {
    const {
        user,
        toggleFeedbackLike
    } = useContext(UserContext)

    const [isUpvoted, setIsUpvoted] = useState(user?.likedFeedback.includes(id) || false)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        const newUpvotes = isUpvoted ? upvotes - 1 : upvotes + 1

        toggleFeedbackLike(id, newUpvotes)

        if (isUpvoted) {
            setUpvotes(prev => prev - 1)
        } else {
            setUpvotes(prev => prev + 1)
        }

        setIsUpvoted(!isUpvoted)
    }

    useEffect(() => {
        if (user) {
            setIsUpvoted(user.likedFeedback.includes(id))
        }
    }, [user, id])

    return (
        <button
            className={styles.upvote}
            onClick={handleClick}
            data-absolute={grid ? false : true}
            data-upvoted={isUpvoted}
        >

            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/>
            </svg>

            <span>
                {upvotes}
            </span>

        </button>
    )
}