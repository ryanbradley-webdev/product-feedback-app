import styles from './comments.module.css'

export default function CommentContent({
    name,
    handle,
    comment,
    profileImg,
    replyTo,
    openReply
}: {
    name: string
    handle: string
    comment: string
    profileImg?: string
    replyTo?: string
    openReply: () => void
}) {
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