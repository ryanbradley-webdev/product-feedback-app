import { Dispatch, SetStateAction, useState } from 'react'
import styles from './upvote.module.css'
import { useMutation } from '@tanstack/react-query'
import { upvoteFeedback } from '../../lib/upvoteFeedback'

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
    const [isUpvoted, setIsUpvoted] = useState(false)

    const { mutate } = useMutation({
        mutationFn: () => upvoteFeedback(id, upvotes)
    })

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        mutate()

        if (isUpvoted) {
            setUpvotes(prev => prev - 1)
        } else {
            setUpvotes(prev => prev + 1)
        }

        setIsUpvoted(!isUpvoted)
    }

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