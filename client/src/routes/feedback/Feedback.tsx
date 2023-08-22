import { useParams } from 'react-router-dom'
import styles from './feedback.module.css'

export default function Feedback() {
    const { id } = useParams()

    return (
        <main
            className={styles.main}
        >

            { id }

        </main>
    )
}