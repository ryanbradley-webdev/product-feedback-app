import { useState } from 'react'
import styles from './comments.module.css'
import Button from '../button/Button'
import CommentPost from './CommentPost'

export default function Comments({
    comments
}: {
    comments: FeedbackComment[]
}) {
    const [userComment, setUserComment] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length > 250) {
            return
        }

        setUserComment(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <>

            <section
                className={styles.comments}
            >
                
                <h3>
                    {comments.length} Comment{comments.length !== 1 && 's'}
                </h3>

                {
                    comments.map(comment => (
                        <CommentPost
                            key={comment.id}
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

                <textarea
                    name="comment"
                    id="comment"
                    rows={3}
                    cols={30}
                    onChange={handleChange}
                    value={userComment}
                    placeholder='Type your comment here'
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