import { useState } from 'react'
import Header from '../../components/header/Header'
import styles from './suggestions.module.css'
import FeedbackSort from '../../components/feedbackSort/FeedbackSort'

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

                <FeedbackSort
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