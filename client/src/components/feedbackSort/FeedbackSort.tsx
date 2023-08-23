import { Dispatch, SetStateAction, useState } from 'react'
import { capitalize } from '../../util/capitalize'
import styles from './feedbackSort.module.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import DownCaret from '../../assets/DownCaret'
import Dropdown from '../dropdown/Dropdown'

export default function FeedbackList({
    sortTerm,
    setSortTerm
}: {
    sortTerm: string
    setSortTerm: Dispatch<SetStateAction<string>>
}) {
    const [optionsVisible, setOptionsVisible] = useState(false)

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
                
            <Button
                color='dark-blue'
                onClick={toggleOptions}
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