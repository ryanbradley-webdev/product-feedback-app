import { useQuery } from '@tanstack/react-query'
import styles from './feedbackList.module.css'
import NoFeedback from '../../assets/NoFeedback'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

import { SAMPLE_FEEDBACK } from '../../sampleData/feedback'
import FeedbackCard from '../feedbackCard/FeedbackCard'
import { getCommentLength } from '../../util/getCommentLength'

export default function FeedbackList({
    filters,
    sortTerm
}: {
    filters: string[]
    sortTerm: string
}) {
    const { data: items } = useQuery({
        queryFn: () => SAMPLE_FEEDBACK,
        queryKey: ['feedback']
    })

    const sortedItems = items?.sort((a, b) => {
        switch (sortTerm) {
            case 'Least Upvotes':
                return a.upvotes - b.upvotes

            case 'Most Comments':
                return getCommentLength(b.comments) - getCommentLength(a.comments)

            case 'Least Comments':
                return getCommentLength(a.comments) - getCommentLength(b.comments)

            case 'Most Upvotes':
            default: 
                return b.upvotes - a.upvotes               
        }
    })

    const filteredItems = 
        filters.length > 0
        ? 
        sortedItems?.filter(item => filters.includes(item.category) && item.status === 'Suggestion')
        : 
        sortedItems?.filter(item => item.status === 'Suggestion')

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