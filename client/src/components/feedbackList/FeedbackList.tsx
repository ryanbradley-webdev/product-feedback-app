import { Dispatch, SetStateAction, useState } from 'react'
import { capitalize } from '../../../util/capitalize'
import styles from './feedbackList.module.css'
import Button from '../button/Button'

export default function FeedbackList({
    sortTerm,
    setSortTerm
}: {
    sortTerm: SortOptions
    setSortTerm: Dispatch<SetStateAction<SortOptions>>
}) {
    const [optionsVisible, setOptionsVisible] = useState(false)

    const handleClick = () => {
        setOptionsVisible(!optionsVisible)
    }

    return (
        <div
            className={styles.sort}
        >

            <p>
                Sort by :&nbsp;
                <button
                    onClick={handleClick}
                >

                    {capitalize(sortTerm.replace('-', ' '))}
                
                </button>
            </p>

            <div
                className={styles.sort_option_container}
                aria-hidden={!optionsVisible}
            >

                <button
                    className={styles.sort_option}
                    data-selected={sortTerm === 'most-upvotes'}
                    onClick={() => setSortTerm('most-upvotes')}
                >
                    Most Upvotes
                </button>

                <button
                    className={styles.sort_option}
                    data-selected={sortTerm === 'least-upvotes'}
                    onClick={() => setSortTerm('least-upvotes')}
                >
                    Least Upvotes
                </button>

                <button
                    className={styles.sort_option}
                    data-selected={sortTerm === 'most-comments'}
                    onClick={() => setSortTerm('most-comments')}
                >
                    Most Comments
                </button>

                <button
                    className={styles.sort_option}
                    data-selected={sortTerm === 'least-comments'}
                    onClick={() => setSortTerm('least-comments')}
                >
                    Least Comments
                </button>

            </div>

            <Button
                color='purple'
            >
                &#43; Add Feedback
            </Button>

        </div>
    )
}