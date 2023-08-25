import styles from './comments.module.css'
import CommentContent from './CommentContent'

export default function CommentPost({
    user,
    replies,
    comment,
    updateComments
}: FeedbackComment & {
    updateComments: (comment: FeedbackComment) => void
}) {
    const addReply = (newReply: FeedbackCommentReply) => {
        updateComments({
            comment,
            user,
            replies: [
                ...replies,
                newReply
            ]
        })
    }

    return (
        <div
            className={styles.comment}
        >

            <CommentContent
                comment={comment}
                addReply={addReply}
                {...user}
            />

            {
                replies?.length > 0 && (
                    <div
                        className={styles.replies}
                    >

                        {replies.map(reply => (
                            <CommentContent
                                addReply={addReply}
                                key={crypto.randomUUID()}
                                {...reply.user}
                                {...reply}
                            />
                        ))}

                    </div>
                )
            }

        </div>
    )
}