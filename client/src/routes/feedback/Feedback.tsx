import { Link, useParams } from 'react-router-dom'
import styles from './feedback.module.css'
import { useQuery } from '@tanstack/react-query'
import { SAMPLE_FEEDBACK } from '../../sampleData/feedback'
import FeedbackCard from '../../components/feedbackCard/FeedbackCard'
import Button from '../../components/button/Button'
import Comments from '../../components/comments/Comments'

export default function Feedback() {
    const { id } = useParams()

    const { data: items } = useQuery({
        queryFn: () => SAMPLE_FEEDBACK,
        queryKey: ['feedback']
    })

    const feedback = items?.find(item => item.id === id)

    return (
        <main
            className={styles.main}
        >
            <header
                className={styles.header}
            >

                <Button
                    back
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