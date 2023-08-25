import { useContext, useState } from 'react'
import styles from './comments.module.css'
import Button from '../button/Button'
import CommentPost from './CommentPost'
import { getCommentLength } from '../../util/getCommentLength'
import TextArea from '../textArea/TextArea'
import { UserContext } from '../../contexts/UserContext'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addComment } from '../../lib/addComment'

export default function Comments({
    id,
    comments,
    updateReplies
}: {
    id: string
    comments: FeedbackComment[]
    updateReplies: (comments: FeedbackComment[]) => void
}) {
    const { user } = useContext(UserContext)

    const [userComment, setUserComment] = useState('')

    const commentCount = getCommentLength(comments)

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: (newComment: FeedbackComment) => addComment(newComment, id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['feedback'] })
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!userComment || !user) {
            return
        }

        const newComment: FeedbackComment = {
            user,
            comment: userComment,
            replies: []
        }

        mutate(newComment)

        setUserComment('')
    }

    const updateComments = (updatedComment: FeedbackComment) => {
        const updatedComments = comments.map(comment => {
            if (comment.comment === updatedComment.comment) {
                return updatedComment
            }

            return comment
        })

        updateReplies(updatedComments)
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
                            key={crypto.randomUUID()}
                            updateComments={updateComments}
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