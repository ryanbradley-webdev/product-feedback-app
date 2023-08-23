import { Link } from 'react-router-dom'
import styles from './feedbackCard.module.css'
import Chip from '../chip/Chip'
import Upvote from '../upvote/Upvote'
import CommentChip from '../commentChip/CommentChip'

export default function FeedbackCard({
    id,
    title,
    description,
    category,
    upvotes,
    comments
}: Feedback) {
    return (
        <Link
            to={'/' + id}
            className={styles.card}
        >

            <div
                className={styles.content}
            >
            
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
                    upvotes={upvotes}
                />

                <CommentChip
                    commentCount={comments.length}
                />

            </div>

        </Link>
    )
}