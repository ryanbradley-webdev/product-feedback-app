import { useState } from 'react'
import styles from './comments.module.css'
import CommentContent from './CommentContent'

export default function CommentPost({
    user,
    replies,
    comment
}: FeedbackComment) {

    const [replyOpen, setReplyOpen] = useState(false)

    const openReply = () => {
        setReplyOpen(!replyOpen)
    }

    return (
        <div
            className={styles.comment}
        >

            <CommentContent
                comment={comment}
                openReply={openReply}
                {...user}
            />

            {
                replies?.length > 0 && (
                    <div
                        className={styles.replies}
                    >

                        {replies.map(reply => (
                            <CommentContent
                                key={reply.id}
                                openReply={openReply}
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