import { useContext, useState } from 'react'
import CommentContent from './CommentContent'
import styles from './comments.module.css'
import Button from '../button/Button'
import TextArea from '../textArea/TextArea'
import { UserContext } from '../../contexts/UserContext'

export default function CommentPost({
    commenter,
    replies,
    comment,
    updateComments
}: {
    commenter: User
    replies: FeedbackCommentReply[]
    comment: string
    updateComments: (comment: FeedbackComment) => void
}) {
    const {
        user
    } = useContext(UserContext)

    const [replyOpen, setReplyOpen] = useState(false)
    const [replyTo, setReplyTo] = useState(commenter.handle)
    const [replyComment, setReplyComment] = useState('')

    const addReply = (e: React.FormEvent) => {
        e.preventDefault()

        if (!user) return

        const newReply: FeedbackCommentReply = {
            comment: replyComment,
            user,
            replyTo
        }

        updateComments({
            comment,
            user: commenter,
            replies: [
                ...replies,
                newReply
            ]
        })
    }

    const toggleReply = (selectedReplyTo: string) => {
        if (selectedReplyTo === replyTo) {
            setReplyOpen(!replyOpen)
        } else {
            setReplyTo(selectedReplyTo)
        }
    }

    return (
        <div
            className={styles.comment}
        >

            <CommentContent
                comment={comment}
                toggleReply={toggleReply}
                {...commenter}
            />

            {
                replies?.length > 0 && (
                    <div
                        className={styles.replies}
                    >

                        {replies.map(reply => (
                            <CommentContent
                                key={crypto.randomUUID()}
                                toggleReply={toggleReply}
                                {...reply.user}
                                {...reply}
                            />
                        ))}

                    </div>
                )
            }

            {
                replyOpen && (
                    <form
                        onSubmit={addReply}
                        className={styles.reply_form}
                    >

                        <TextArea
                            userComment={replyComment}
                            setUserComment={setReplyComment}
                            placeholder={'Replying to ' + replyTo}
                        />

                        <Button
                            color='purple'
                        >
                            Post Reply
                        </Button>

                    </form>
                )
            }

        </div>
    )
}