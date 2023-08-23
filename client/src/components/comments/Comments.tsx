import { useState } from 'react'
import styles from './comments.module.css'
import Button from '../button/Button'
import CommentPost from './CommentPost'
import { getCommentLength } from '../../util/getCommentLength'
import TextArea from '../textArea/TextArea'

export default function Comments({
    id,
    comments
}: {
    id: string
    comments: FeedbackComment[]
}) {
    const [userComment, setUserComment] = useState('')

    const commentCount = getCommentLength(comments)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!userComment) {
            return
        }

        const newComment: FeedbackComment = {
            id: crypto.randomUUID(),
            user: {
                id: '5432',
                name: 'Elijah Moss',
                handle: '@hexagon.bestagon',
                profileImg: ''
            },
            comment: userComment,
            replies: []
        }

        console.log(newComment) // FIXME add API call

        setUserComment('')
    }

    return (
        <>

            <section
                className={styles.comments}
            >
                
                <h3>
                    {commentCount} Comment{commentCount !== 1 && 's'}
                </h3>

                {
                    comments.map(comment => (
                        <CommentPost
                            key={comment.id}
                            feedbackId={id}
                            {...comment}
                        />
                    ))
                }

            </section>

            <form
                className={styles.add_comment}
                onSubmit={handleSubmit}
            >

                <h3>
                    Add Comment
                </h3>

                <TextArea
                    userComment={userComment}
                    setUserComment={setUserComment}
                    placeholder
                />

                <div>

                    <p>
                        {250 - userComment.length} Characters left
                    </p>

                    <Button
                        color='purple'
                    >
                        Post Comment
                    </Button>

                </div>

            </form>

        </>
    )
}