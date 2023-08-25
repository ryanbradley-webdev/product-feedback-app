import Button from '../button/Button'
import styles from './footer.module.css'

export default function Footer({
    toggleModal
}: {
    toggleModal: () => void
}) {
    return (
        <footer
            className={styles.footer}
        >

            <p>
                <Button
                    onClick={toggleModal}
                >
                    Log in
                </Button>
                
                &nbsp;to add to the conversation
            </p>

            <p>
                Don&apos;t have an account?&nbsp;
                
                <Button
                    onClick={toggleModal}
                >
                    Create new account
                </Button>
            </p>

        </footer>
    )
}