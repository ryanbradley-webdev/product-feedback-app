import styles from './upvote.module.css'

export default function Upvote({
    upvotes,
    grid
}: {
    upvotes: number
    grid?: boolean
}) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
    }

    return (
        <button
            className={styles.upvote}
            onClick={handleClick}
            data-absolute={grid ? false : true}
        >

            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/>
            </svg>

            <span>
                {upvotes}
            </span>

        </button>
    )
}