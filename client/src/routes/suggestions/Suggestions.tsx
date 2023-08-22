import { useState } from 'react'
import Header from '../../components/header/Header'
import styles from './suggestions.module.css'
import FeedbackList from '../../components/feedbackList/FeedbackList'

export default function Suggestions() {
    const [filters, setFilters] = useState<string[]>([])
    const [sortTerm, setSortTerm] = useState<SortOptions>('most-upvotes')

    return (
        <>
        
            <Header
                filters={filters}
                setFilters={setFilters}
            />

            <main
                className={styles.main}
            >

                <FeedbackList
                    sortTerm={sortTerm}
                    setSortTerm={setSortTerm}
                />

            </main>

            <footer>
                Footer
            </footer>
        
        </>
    )
}