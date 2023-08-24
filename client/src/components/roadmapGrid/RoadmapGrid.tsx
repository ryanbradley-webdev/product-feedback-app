import { useState } from 'react'
import { SAMPLE_FEEDBACK } from '../../sampleData/feedback'
import FeedbackCard from '../feedbackCard/FeedbackCard'
import styles from './roadmapGrid.module.css'

export default function RoadmapGrid() {
    const [selectedStatus, setSelectedStatus] = useState('Planned')

    return (
        <section>

            <div
                className={styles.status_bar}
            >

                <button
                    data-selected={selectedStatus === 'Planned'}
                    onClick={() => setSelectedStatus('Planned')}
                >
                    <h5>
                        Planned (2)
                    </h5>
                </button>

                <button
                    data-selected={selectedStatus === 'In-Progress'}
                    onClick={() => setSelectedStatus('In-Progress')}
                >
                    <h5>
                        In-Progress (3)
                    </h5>
                </button>

                <button
                    data-selected={selectedStatus === 'Live'}
                    onClick={() => setSelectedStatus('Live')}
                >
                    <h5>
                        Live (1)
                    </h5>
                </button>

            </div>

            <FeedbackCard
                {...SAMPLE_FEEDBACK[0]}
                statused
            />

            <FeedbackCard
                {...SAMPLE_FEEDBACK[1]}
                statused
            />

            <FeedbackCard
                {...SAMPLE_FEEDBACK[2]}
                statused
            />

        </section>
    )
}