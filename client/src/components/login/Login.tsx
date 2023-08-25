import { useContext, useRef } from 'react'
import { UserContext } from '../../contexts/UserContext'
import Button from '../button/Button'
import styles from './login.module.css'
import Modal from '../modal/Modal'

export default function Login({
    visible,
    closeModal
}: {
    visible: boolean
    closeModal: () => void
}) {
    const {
        user,
        login
    } = useContext(UserContext)

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!emailRef.current || !passwordRef.current) return

        const email = emailRef.current.value
        const password = passwordRef.current.value

        if (!email || !password) return

        login(email, password)
    }
    
    return (
        <Modal
            visible={visible}
        >

            <h5>
                Enter your information to log in
            </h5>

            <form
                onSubmit={handleSubmit}
                className={styles.form}
                aria-hidden={!visible}
            >

                <label
                    htmlFor="email"
                >

                    <span>
                        Email
                    </span>

                    <input
                        type="email"
                        ref={emailRef}
                    />

                </label>

                <label
                    htmlFor="password"
                >

                    <span>
                        Password
                    </span>

                    <input
                        type="password"
                        ref={passwordRef}
                    />

                </label>

                <div>

                    <Button
                        color='red'
                        type='button'
                        onClick={closeModal}
                    >
                        Cancel
                    </Button>

                    <Button
                        color='blue'
                    >
                        Log In
                    </Button>

                </div>

            </form>

        </Modal>
    )
}