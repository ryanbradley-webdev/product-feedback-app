import { Dispatch, SetStateAction } from 'react'
import Button from '../button/Button'
import styles from './footer.module.css'

export default function Footer({
    toggleModal,
    setVariant
}: {
    toggleModal: () => void
    setVariant: Dispatch<SetStateAction<'create' | 'login'>>
}) {
    const openLoginModal = () => {
        setVariant('login')
        toggleModal()
    }

    const openCreateModal = () => {
        setVariant('create')
        toggleModal()
    }

    return (
        <footer
            className={styles.footer}
        >

            <p>
                <Button
                    onClick={openLoginModal}
                >
                    Log in
                </Button>
                
                &nbsp;to add to the conversation
            </p>

            <p>
                Don&apos;t have an account?&nbsp;
                
                <Button
                    onClick={openCreateModal}
                >
                    Create new account
                </Button>
            </p>

        </footer>
    )
}