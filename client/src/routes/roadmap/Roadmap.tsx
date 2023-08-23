import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import styles from './roadmap.module.css'

export default function Roadmap() {
    return (
        <main
            className={styles.main}
        >

            <header
                className={styles.header}
            >

                <div>

                    <Button
                        back
                    >
                        Go Back
                    </Button>

                    <h3>
                        Roadmap
                    </h3>

                </div>

                <Link
                    to='/new'
                >
                    <Button
                        color='purple'
                    >
                        &#43; Add Feedback
                    </Button>
                </Link>

            </header>

        </main>
    )
}