import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import styles from './roadmap.module.css'
import RoadmapGrid from '../../components/roadmapGrid/RoadmapGrid'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export default function Roadmap() {
    const {
        user
    } = useContext(UserContext)

    const navigate = useNavigate()

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
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </Button>

                    <h3>
                        Roadmap
                    </h3>

                </div>

                <Link
                    to='/new'
                    aria-disabled={!user}
                >
                    <Button
                        color='purple'
                        disabled={!user}
                        title={user ? '' : 'You must be logged in to add feedback'}
                    >
                        &#43; Add Feedback
                    </Button>
                </Link>

            </header>

            <RoadmapGrid />

        </main>
    )
}