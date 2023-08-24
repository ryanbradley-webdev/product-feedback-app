import { useQuery } from '@tanstack/react-query'
import styles from './feedbackList.module.css'
import NoFeedback from '../../assets/NoFeedback'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

import { SAMPLE_FEEDBACK } from '../../sampleData/feedback'
import FeedbackCard from '../feedbackCard/FeedbackCard'

export default function FeedbackList({
    filters
}: {
    filters: string[]
}) {
    const { data: items } = useQuery({
        queryFn: () => SAMPLE_FEEDBACK,
        queryKey: ['feedback']
    })

    const filteredItems = 
        filters.length > 0
        ? 
        items?.filter(item => filters.includes(item.category))
        : 
        items

    return (
        <section
            className={styles.list}
        >
            
            {
                filteredItems?.length ? (
                    filteredItems.map(item => (
                        <FeedbackCard
                            key={item.id}
                            {...item}
                        />
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