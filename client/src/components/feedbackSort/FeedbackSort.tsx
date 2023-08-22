import { Dispatch, SetStateAction, useState } from 'react'
import { capitalize } from '../../../util/capitalize'
import styles from './feedbackSort.module.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import DownCaret from '../../assets/DownCaret'

export default function FeedbackList({
    sortTerm,
    setSortTerm
}: {
    sortTerm: SortOptions
    setSortTerm: Dispatch<SetStateAction<SortOptions>>
}) {
    const [optionsVisible, setOptionsVisible] = useState(false)

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible)
    }

    const selectOption = (option: SortOptions) => {
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

            <div
                className={styles.sort_option_container}
                aria-hidden={!optionsVisible}
            >

                <button
                    className={styles.sort_option}
                    data-selected={sortTerm === 'most-upvotes'}
                    onClick={() => selectOption('most-upvotes')}
                >
                    Most Upvotes
                </button>

                <button
                    className={styles.sort_option}
                    data-selected={sortTerm === 'least-upvotes'}
                    onClick={() => selectOption('least-upvotes')}
                >
                    Least Upvotes
                </button>

                <button
                    className={styles.sort_option}
                    data-selected={sortTerm === 'most-comments'}
                    onClick={() => selectOption('most-comments')}
                >
                    Most Comments
                </button>

                <button
                    className={styles.sort_option}
                    data-selected={sortTerm === 'least-comments'}
                    onClick={() => selectOption('least-comments')}
                >
                    Least Comments
                </button>

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

        </div>
    )
}