import { Link, useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import FeedbackCard from '../../components/feedbackCard/FeedbackCard'
import Button from '../../components/button/Button'
import Comments from '../../components/comments/Comments'
import { getAllFeedback } from '../../lib/getAllFeedback'
import { addReply } from '../../lib/addReply'
import { UserContext } from '../../contexts/UserContext'
import styles from './feedback.module.css'
import { useContext } from 'react'

export default function Feedback() {
    const {
        user
    } = useContext(UserContext)

    const { id } = useParams()

    const { data: items } = useQuery({
        queryFn: getAllFeedback,
        queryKey: ['feedback']
    })

    const feedback = items?.find(item => item.id === id)

    const navigate = useNavigate()

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: (comments: FeedbackComment[]) => addReply(comments, id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['feedback'] })
    })

    const updateReplies = (comments: FeedbackComment[]) => {
        mutate(comments)
    }

    return (
        <main
            className={styles.main}
        >
            <header
                className={styles.header}
            >

                <Button
                    back
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </Button>

                <Link
                    to={'/edit?id=' + id}
                    aria-disabled={!user || user.id !== feedback?.authorId}
                >
                
                    <Button
                        color='blue'
                        disabled={!user || user.id !== feedback?.authorId}
                    >
                        Edit Feedback
                    </Button>

                </Link>

            </header>

            {
                feedback ? (
                    <>
                    
                        <FeedbackCard
                            {...feedback}
                        />

                        <Comments
                            id={feedback.id}
                            comments={feedback.comments}
                            updateReplies={updateReplies}
                        />

                    </>
                ) : (
                    'No feedback found'
                )
            }

        </main>
    )
}