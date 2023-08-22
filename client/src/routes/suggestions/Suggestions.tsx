import { useState } from 'react'
import Header from '../../components/header/Header'
import styles from './suggestions.module.css'

export default function Suggestions() {
    const [filters, setFilters] = useState<string[]>([])

    return (
        <>
        
            <Header
                filters={filters}
                setFilters={setFilters}
            />

            <main
                className={styles.main}
            >

                Main

            </main>

            <footer>
                Footer
            </footer>
        
        </>
    )
}