import { useState } from 'react'
import styles from './comments.module.css'
import TextArea from '../textArea/TextArea'
import Button from '../button/Button'

export default function CommentContent({
    feedbackId,
    name,
    handle,
    comment,
    profileImg,
    replyTo
}: {
    feedbackId: string
    name: string
    handle: string
    comment: string
    profileImg?: string
    replyTo?: string
}) {
    const [userComment, setUserComment] = useState('')
    const [replyOpen, setReplyOpen] = useState(false)

    const openReply = () => {
        setReplyOpen(!replyOpen)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!userComment) {
            return
        }

        const newReply: FeedbackCommentReply = {
            comment: userComment,
            user: {
                name: 'Elijah Moss',
                handle: '@hexagon.bestagon',
                profileImg: ''
            },
            replyTo: handle
        }

        // FIXME add API call
        console.log(newReply, feedbackId)

        setUserComment('')
        setReplyOpen(false)
    }

    return (
        <>
        
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

                {replyTo && (
                    <span
                        className={styles.purple_text}
                    >
                        {replyTo}&nbsp;
                    </span>
                )}

                {comment}

            </p>

            {
                replyOpen && (
                    <form
                        onSubmit={handleSubmit}
                        className={styles.reply_form}
                    >

                        <TextArea
                            userComment={userComment}
                            setUserComment={setUserComment}
                            placeholder
                        />

                        <Button
                            color='purple'
                        >
                            Post Reply
                        </Button>

                    </form>
                )
            }
        
        </>
    )
}