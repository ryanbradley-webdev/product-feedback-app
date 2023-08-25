import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './feedback.module.css'
import { useQuery } from '@tanstack/react-query'
import FeedbackCard from '../../components/feedbackCard/FeedbackCard'
import Button from '../../components/button/Button'
import Comments from '../../components/comments/Comments'
import { getAllFeedback } from '../../lib/getAllFeedback'

export default function Feedback() {
    const { id } = useParams()

    const { data: items } = useQuery({
        queryFn: getAllFeedback,
        queryKey: ['feedback']
    })

    const feedback = items?.find(item => item.id === id)

    const navigate = useNavigate()

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
                >
                
                    <Button
                        color='blue'
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
                        />

                    </>
                ) : (
                    'No feedback found'
                )
            }

        </main>
    )
}