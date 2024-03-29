import { Dispatch, SetStateAction, useContext, useState } from 'react'
import { capitalize } from '../../util/capitalize'
import styles from './feedbackSort.module.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import DownCaret from '../../assets/DownCaret'
import Dropdown from '../dropdown/Dropdown'
import { useQuery } from '@tanstack/react-query'
import { getAllFeedback } from '../../lib/getAllFeedback'
import { UserContext } from '../../contexts/UserContext'

export default function FeedbackList({
    sortTerm,
    setSortTerm
}: {
    sortTerm: string
    setSortTerm: Dispatch<SetStateAction<string>>
}) {
    const {
        user
    } = useContext(UserContext)

    const [optionsVisible, setOptionsVisible] = useState(false)

    const { data: items } = useQuery({
        queryFn: getAllFeedback,
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

        </div>
    )
}