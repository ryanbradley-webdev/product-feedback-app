import { useState } from 'react'
import { SAMPLE_FEEDBACK } from '../../sampleData/feedback'
import FeedbackCard from '../feedbackCard/FeedbackCard'
import styles from './roadmapGrid.module.css'
import { useQuery } from '@tanstack/react-query'

export default function RoadmapGrid() {
    const [selectedStatus, setSelectedStatus] = useState('Planned')

    const { data: items } = useQuery({
        queryFn: () => SAMPLE_FEEDBACK,
        queryKey: ['feedback']
    })

    const plannedFeedback = items?.filter(item => item.status === 'Planned')
    const inProgressFeedback = items?.filter(item => item.status === 'In-Progress')
    const liveFeedback = items?.filter(item => item.status === 'Live')

    return (
        <section
            className={styles.roadmap}
        >

            <div
                className={styles.status_bar}
            >

                <button
                    data-selected={selectedStatus === 'Planned'}
                    onClick={() => setSelectedStatus('Planned')}
                >
                    <h5>
                        Planned ({plannedFeedback?.length || 0})
                    </h5>
                </button>

                <button
                    data-selected={selectedStatus === 'In-Progress'}
                    onClick={() => setSelectedStatus('In-Progress')}
                >
                    <h5>
                        In-Progress ({inProgressFeedback?.length || 0})
                    </h5>
                </button>

                <button
                    data-selected={selectedStatus === 'Live'}
                    onClick={() => setSelectedStatus('Live')}
                >
                    <h5>
                        Live ({liveFeedback?.length || 0})
                    </h5>
                </button>

            </div>

            <div
                className={styles.grid}
                data-selected={selectedStatus === 'Planned'}
            >

                <div
                    className={styles.grid_head}
                >

                    <h3>
                        Planned ({plannedFeedback?.length || 0})
                    </h3>

                    <p>
                        Ideas prioritized for research
                    </p>

                </div>

                {
                    plannedFeedback?.map(item => (
                        <FeedbackCard
                            key={item.id}
                            {...item}
                            statused
                        />
                    ))
                }

            </div>

            <div
                className={styles.grid}
                data-selected={selectedStatus === 'In-Progress'}
            >

                <div
                    className={styles.grid_head}
                >

                    <h3>
                        In-Progress ({inProgressFeedback?.length || 0})
                    </h3>

                    <p>
                        Currently being developed
                    </p>

                </div>

                {
                    inProgressFeedback?.map(item => (
                        <FeedbackCard
                            key={item.id}
                            {...item}
                            statused
                        />
                    ))
                }

            </div>

            <div
                className={styles.grid}
                data-selected={selectedStatus === 'Live'}
            >

                <div
                    className={styles.grid_head}
                >

                    <h3>
                        Live ({liveFeedback?.length || 0})
                    </h3>

                    <p>
                        Released features
                    </p>

                </div>

                {
                    liveFeedback?.map(item => (
                        <FeedbackCard
                            key={item.id}
                            {...item}
                            statused
                        />
                    ))
                }

            </div>

        </section>
    )
}