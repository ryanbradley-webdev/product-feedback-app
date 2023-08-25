import { useContext } from 'react'
import styles from './comments.module.css'
import { UserContext } from '../../contexts/UserContext'

export default function CommentContent({
    name,
    handle,
    comment,
    profileImg,
    replyTo,
    toggleReply
}: {
    name: string
    handle: string
    comment: string
    profileImg?: string
    replyTo?: string
    toggleReply: (selectedReplyTo: string) => void
}) {
    const {
        user
    } = useContext(UserContext)

    const openReply = () => {
        toggleReply(handle)
    }

    return (
        <>
        
            <div
                className={styles.user_info}
            >

                {
                    profileImg ? (
                        <img
                            src={profileImg}
                            alt=""
                            className={styles.img}
                        />
                    ) : (
                        <div className={styles.img_placeholder}></div>
                    )
                }

                <div>

                    <h5>
                        {name}
                    </h5>

                    <p>
                        {handle}
                    </p>

                </div>

                <button
                    onClick={openReply}
                    disabled={!user}
                >
                    Reply
                </button>

            </div>

            <p>

                {replyTo && (
                    <span
                        className={styles.purple_text}
                    >
                        {replyTo}&nbsp;
                    </span>
                )}

                {comment}

            </p>
        
        </>
    )
}