import { SetStateAction, Dispatch } from 'react'
import styles from './textArea.module.css'

export default function TextArea({
    userComment,
    setUserComment,
    placeholder
}: {
    userComment: string
    setUserComment: Dispatch<SetStateAction<string>>
    placeholder?: boolean
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
            placeholder={placeholder ? 'Type your comment here' : ''}
            className={styles.textarea}
        />
    )
}