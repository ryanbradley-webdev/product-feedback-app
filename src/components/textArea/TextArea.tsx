import { SetStateAction, Dispatch } from 'react'
import styles from './textArea.module.css'

export default function TextArea({
    userComment,
    setUserComment,
    placeholder,
    invalid,
    setInvalid
}: {
    userComment: string
    setUserComment: Dispatch<SetStateAction<string>>
    placeholder?: boolean | string
    invalid?: boolean
    setInvalid?: Dispatch<SetStateAction<boolean>>
}) {
    const placeholderMsg = placeholder ? typeof placeholder === 'string' ? placeholder : 'Type your comment here' : ''

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length > 250) {
            return
        }

        if (setInvalid) {
            if (!e.target.value) {
                setInvalid(true)
            } else {
                setInvalid(false)
            }
        }

        setUserComment(e.target.value)
    }

    return (
        <>
            <textarea
                name="comment"
                id="comment"
                rows={3}
                cols={30}
                onChange={handleChange}
                value={userComment}
                placeholder={placeholderMsg}
                className={styles.textarea}
                aria-invalid={invalid}
            />

            {
                invalid && (
                    <p
                        data-invalid={true}
                    >
                        Can&apos;t be empty
                    </p>
                )
            }
        </>
    )
}