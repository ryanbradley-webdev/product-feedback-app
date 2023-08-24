import { Link } from 'react-router-dom'
import styles from './feedbackCard.module.css'
import Chip from '../chip/Chip'
import Upvote from '../upvote/Upvote'
import CommentChip from '../commentChip/CommentChip'
import { getCommentLength } from '../../util/getCommentLength'
import { useState } from 'react'

export default function FeedbackCard({
    id,
    title,
    description,
    category,
    upvotes,
    status,
    comments,
    statused
}: Feedback & {
    statused?: boolean
}) {
    const [localUpvotes, setLocalUpvotes] = useState(upvotes)

    return (
        <Link
            to={'/' + id}
            className={styles.card}
            data-status={status}
        >

            <div
                className={styles.content}
            >

                {
                    statused && (
                        <p
                            className={styles.status}
                        >
                            {status}
                        </p>
                    )
                }
            
                <h5>
                    {title}
                </h5>

                <p>
                    {description}
                </p>
                
                <Chip
                    filterTerm={category}
                />

            </div>

            <div
                className={styles.interactions}
            >

                <Upvote
                    upvotes={localUpvotes}
                    setUpvotes={setLocalUpvotes}
                    grid={statused}
                />

                <CommentChip
                    commentCount={getCommentLength(comments)}
                />

            </div>

        </Link>
    )
}