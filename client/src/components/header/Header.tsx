import { useState } from 'react'
import Burger from '../../assets/Burger'
import CloseBtn from '../../assets/CloseBtn'
import styles from './header.module.css'

export default function Header() {
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

        </header>
    )
}