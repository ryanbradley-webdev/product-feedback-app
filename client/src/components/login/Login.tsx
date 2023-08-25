import { Dispatch, SetStateAction, useContext, useRef } from 'react'
import { UserContext } from '../../contexts/UserContext'
import Button from '../button/Button'
import styles from './login.module.css'
import Modal from '../modal/Modal'

export default function Login({
    visible,
    closeModal,
    variant,
    setVariant
}: {
    visible: boolean
    closeModal: () => void
    variant: 'login' | 'create'
    setVariant: Dispatch<SetStateAction<'login' | 'create'>>
}) {
    const {
        login
    } = useContext(UserContext)

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const passwordConfirmRef = useRef<HTMLInputElement>(null)

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
                {variant === 'login' && 'Enter your information to log in'}
                {variant === 'create' && 'Enter your email and choose a password'}
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
                        placeholder='e.g. johndoe@email.com'
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

                {
                    variant === 'create' && (
                        <label
                            htmlFor="password-confirm"
                        >

                            <span>
                                Confirm Password
                            </span>

                            <input
                                type="password"
                                ref={passwordConfirmRef}
                            />

                        </label>
                    )
                }

                <div
                    className={styles.btn_div}
                >

                    <Button
                        color='blue'
                    >
                        {variant === 'login' && 'Log in'}
                        {variant === 'create' && 'Create Account'}
                    </Button>

                    <Button
                        color='red'
                        type='button'
                        onClick={closeModal}
                    >
                        Cancel
                    </Button>

                </div>

                <div
                    className={styles.switch_div}
                >

                    {variant === 'login' && (
                        <p
                            className={styles.switch}
                        >
                            Need an account?
                            <Button
                                onClick={() => setVariant('create')}
                            >
                                Create an account
                            </Button>
                        </p>
                    )}

                    {variant === 'create' && (
                        <p
                            className={styles.switch}
                        >
                            Already have an account?
                            <Button
                                onClick={() => setVariant('login')}
                            >
                                Log in
                            </Button>
                        </p>
                    )}

                </div>

            </form>

        </Modal>
    )
}