import { ReactNode } from 'react'
import styles from './modal.module.css'

export default function Modal({
    visible,
    children
}: {
    visible: boolean
    children: ReactNode
}) {
    return (
        <div
            className={styles.modal_wrapper}
            style={{
                display: visible ? '' : 'none'
            }}
        >

            <div
                className={styles.modal}
            >

                {children}

            </div>

        </div>
    )
}