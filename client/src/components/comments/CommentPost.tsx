import styles from './comments.module.css'
import CommentContent from './CommentContent'

export default function CommentPost({
    feedbackId,
    user,
    replies,
    comment
}: FeedbackComment & {
    feedbackId: string
}) {
    return (
        <div
            className={styles.comment}
        >

            <CommentContent
                feedbackId={feedbackId}
                comment={comment}
                {...user}
            />

            {
                replies?.length > 0 && (
                    <div
                        className={styles.replies}
                    >

                        {replies.map(reply => (
                            <CommentContent
                                feedbackId={feedbackId}
                                key={reply.id}
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