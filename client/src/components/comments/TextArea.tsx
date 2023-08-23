import { SetStateAction, Dispatch } from 'react'
import styles from './comments.module.css'

export default function TextArea({
    userComment,
    setUserComment
}: {
    userComment: string
    setUserComment: Dispatch<SetStateAction<string>>
}) {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length > 250) {
            return
        }

        setUserComment(e.target.value)
    }

    return (
        <textarea
            name="comment"
            id="comment"
            rows={3}
            cols={30}
            onChange={handleChange}
            value={userComment}
            placeholder='Type your comment here'
            className={styles.textarea}
        />
    )
}