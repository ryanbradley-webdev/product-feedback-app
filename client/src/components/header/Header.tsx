import { Dispatch, SetStateAction, useState } from 'react'
import Burger from '../../assets/Burger'
import CloseBtn from '../../assets/CloseBtn'
import styles from './header.module.css'
import Chip from '../chip/Chip'

export default function Header({
    filters,
    setFilters
}: {
    filters: string[]
    setFilters: Dispatch<SetStateAction<string[]>>
}) {
    const [menuVisible, setMenuVisible] = useState(false)

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

                <div></div>

            </nav>

        </header>
    )
}