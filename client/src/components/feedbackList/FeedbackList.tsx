import { useQuery } from '@tanstack/react-query'
import styles from './feedbackList.module.css'
import NoFeedback from '../../assets/NoFeedback'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

export default function FeedbackList() {
    const { data: items } = useQuery({
        queryFn: () => [],
        queryKey: ['feedback']
    })

    return (
        <section
            className={styles.list}
        >
            
            {
                items?.length ? (
                    items.map(() => (
                        <p key={crypto.randomUUID()}>
                            hello
                        </p>
                    ))
                ) : (
                    <div
                        className={styles.no_feedback}
                    >
                    
                        <NoFeedback />

                        <h3>
                            There is no feedback yet.
                        </h3>

                        <p>
                            Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
                        </p>

                        <Link
                            to='/new'
                        >

                            <Button
                                color='purple'
                            >
                                &#43; Add Feedback
                            </Button>

                        </Link> 
                    
                    </div>
                )
            }

        </section>
    )
}