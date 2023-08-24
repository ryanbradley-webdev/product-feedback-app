import { useState } from 'react'
import Header from '../../components/header/Header'
import styles from './suggestions.module.css'
import FeedbackSort from '../../components/feedbackSort/FeedbackSort'
import FeedbackList from '../../components/feedbackList/FeedbackList'

export default function Suggestions() {
    const [filters, setFilters] = useState<string[]>([])
    const [sortTerm, setSortTerm] = useState<string>('Most Upvotes')

    return (
        <>
        
            <Header
                filters={filters}
                setFilters={setFilters}
            />

            <main
                className={styles.main}
            >

                <FeedbackSort
                    sortTerm={sortTerm}
                    setSortTerm={setSortTerm}
                />

                <FeedbackList
                    filters={filters}
                />

            </main>

            <footer>
                Footer
            </footer>
        
        </>
    )
}