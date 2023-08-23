import { useState } from 'react'
import styles from './comments.module.css'

export default function CommentPost({
    user,
    replies,
    comment
}: FeedbackComment) {
    const {
        name,
        handle,
        profileImg
    } = user

    const [replyOpen, setReplyOpen] = useState(false)

    const openReply = () => {
        setReplyOpen(!replyOpen)
    }

    return (
        <div
            className={styles.comment}
        >

            <div
                className={styles.user_info}
            >

                {
                    profileImg ? (
                        <img
                            src={profileImg}
                            alt=""
                            className={styles.img}
                        />
                    ) : (
                        <div className={styles.img_placeholder}></div>
                    )
                }

                <div>

                    <h5>
                        {name}
                    </h5>

                    <p>
                        {handle}
                    </p>

                </div>

                <button
                    onClick={openReply}
                >
                    Reply
                </button>

            </div>

            <p>
                {comment}
            </p>

            {
                replies && (
                    replies.map(reply => (
                        <CommentPost
                            key={reply.id}
                            {...reply}
                        />
                    ))
                )
            }

        </div>
    )
}