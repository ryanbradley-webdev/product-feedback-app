import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import styles from './roadmap.module.css'
import RoadmapGrid from '../../components/roadmapGrid/RoadmapGrid'

export default function Roadmap() {
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
                >
                    <Button
                        color='purple'
                    >
                        &#43; Add Feedback
                    </Button>
                </Link>

            </header>

            <RoadmapGrid />

        </main>
    )
}