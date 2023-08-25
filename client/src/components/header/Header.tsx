import { Dispatch, SetStateAction, useState } from 'react'
import Burger from '../../assets/Burger'
import CloseBtn from '../../assets/CloseBtn'
import styles from './header.module.css'
import Chip from '../chip/Chip'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAllFeedback } from '../../lib/getAllFeedback'

export default function Header({
    filters,
    setFilters
}: {
    filters: string[]
    setFilters: Dispatch<SetStateAction<string[]>>
}) {
    const [menuVisible, setMenuVisible] = useState(false)

    const { data: items } = useQuery({
        queryFn: getAllFeedback,
        queryKey: ['feedback']
    })

    const handleClick = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header
            className={styles.header}
        >

            <div
                className={styles.title}
            >

                <div
                    className={styles.title_text}
                >

                    <h2>
                        Frontend Mentor
                    </h2>

                    <p>
                        Feedback Board
                    </p>

                </div>

                <button
                    className={styles.burger}
                    data-open={menuVisible}
                    onClick={handleClick}
                >

                    <Burger />

                    <CloseBtn />

                </button>

            </div>

            <nav
                className={styles.nav}
                aria-hidden={!menuVisible}
            >

                <div
                    className={styles.filters}
                >

                    <Chip
                        selected={filters.length === 0}
                        setFilters={setFilters}
                    />

                    <Chip
                        filterTerm='UI'
                        selected={filters.includes('UI')}
                        setFilters={setFilters}
                    />

                    <Chip
                        filterTerm='UX'
                        selected={filters.includes('UX')}
                        setFilters={setFilters}
                    />

                    <Chip
                        filterTerm='Enhancement'
                        selected={filters.includes('Enhancement')}
                        setFilters={setFilters}
                    />

                    <Chip
                        filterTerm='Bug'
                        selected={filters.includes('Bug')}
                        setFilters={setFilters}
                    />

                    <Chip
                        filterTerm='Feature'
                        selected={filters.includes('Feature')}
                        setFilters={setFilters}
                    />

                </div>

                <div
                    className={styles.roadmap}
                >

                    <div
                        className={styles.link}
                    >

                        <h3>
                            Roadmap
                        </h3>

                        <Link
                            to='/roadmap'
                            aria-disabled={!items?.filter(item => (
                                [
                                    'Planned',
                                    'In-Progress',
                                    'Live'
                                ].includes(item.status)
                            )).length}
                        >
                        
                            View
                        
                        </Link>

                    </div>

                    <div
                        className={styles.stat_container}
                    >

                        <div
                            className={styles.stat}
                        >

                            <span>
                                Planned
                            </span>

                            <p>
                                {items?.filter(item => item.status === 'Planned').length || 0}
                            </p>

                        </div>

                        <div
                            className={styles.stat}
                        >

                            <span>
                                In-Progress
                            </span>

                            <p>
                                {items?.filter(item => item.status === 'In-Progress').length || 0}
                            </p>

                        </div>

                        <div
                            className={styles.stat}
                        >

                            <span>
                                Live
                            </span>

                            <p>
                                {items?.filter(item => item.status === 'Live').length || 0}
                            </p>

                        </div>

                    </div>

                </div>

            </nav>

        </header>
    )
}