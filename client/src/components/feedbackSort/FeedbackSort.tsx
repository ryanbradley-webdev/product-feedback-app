import { Dispatch, SetStateAction, useState } from 'react'
import { capitalize } from '../../util/capitalize'
import styles from './feedbackSort.module.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import DownCaret from '../../assets/DownCaret'
import Dropdown from '../dropdown/Dropdown'
import { useQuery } from '@tanstack/react-query'
import { SAMPLE_FEEDBACK } from '../../sampleData/feedback'

export default function FeedbackList({
    sortTerm,
    setSortTerm
}: {
    sortTerm: string
    setSortTerm: Dispatch<SetStateAction<string>>
}) {
    const [optionsVisible, setOptionsVisible] = useState(false)

    const { data: items } = useQuery({
        queryFn: () => SAMPLE_FEEDBACK,
        queryKey: ['feedback']
    })

    const suggestionCount = items?.filter(item => item.status === 'Suggestion').length

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible)
    }

    const selectOption = (option: string) => {
        setSortTerm(option)
        toggleOptions()
    }

    return (
        <div
            className={styles.sort}
        >

            <div
                className={styles.count}
            >

                <h3>
                    {suggestionCount || 0} Suggestions
                </h3>

            </div>
                
            <Button
                color='dark-blue'
                onClick={toggleOptions}
                aria-disabled={!suggestionCount}
            >

                <span>
                    Sort by :&nbsp;
                </span>
                {capitalize(sortTerm.replace('-', ' '))}

                <DownCaret />
            
            </Button>

            <Dropdown
                selectedOption={sortTerm}
                options={[
                    'Most Upvotes',
                    'Least Upvotes',
                    'Most Comments',
                    'Least Comments'
                ]}
                selectOption={selectOption}
                visible={optionsVisible}
            />

            <Link
                to='/new'
            >
                <Button
                    color='purple'
                >
                    &#43; Add Feedback
                </Button>
            </Link>

        </div>
    )
}