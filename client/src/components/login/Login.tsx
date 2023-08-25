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
        login,
        signup
    } = useContext(UserContext)

    const nameRef = useRef<HTMLInputElement>(null)
    const handleRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const passwordConfirmRef = useRef<HTMLInputElement>(null)

    const addDemoCred = () => {
        if (emailRef.current && passwordRef.current) {
            emailRef.current.value = 'johndoe@email.com'
            passwordRef.current.value = 'asdfasdf'
        }
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        if (!emailRef.current || !passwordRef.current) return

        const email = emailRef.current.value
        const password = passwordRef.current.value

        if (!email || !password) return

        login(email, password)
    }

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault()

        if (!emailRef.current || !passwordRef.current || !passwordConfirmRef.current || !nameRef.current || !handleRef.current) return

        const email = emailRef.current.value
        const password = passwordRef.current.value
        const passwordConfirm = passwordConfirmRef.current.value
        const name = nameRef.current.value
        const handle = handleRef.current.value
        const profileImg = ''

        if (!email || !password || password !== passwordConfirm) return

        signup(email, password, name, handle, profileImg)
    }
    
    return (
        <Modal
            visible={visible}
        >

            <h5>
                {variant === 'login' && 'Enter your information to log in'}
                {variant === 'create' && 'Create a new account'}
            </h5>

            <form
                onSubmit={variant === 'login' ? handleLogin : handleCreate}
                className={styles.form}
                aria-hidden={!visible}
            >

                {
                    variant === 'create' && (
                        <>
                        
                            <label
                                htmlFor="name"
                            >

                                <span>
                                    Full Name
                                </span>

                                <input
                                    type="text"
                                    placeholder='e.g. John Doe'
                                    required
                                    ref={nameRef}
                                />

                            </label>
                        
                            <label
                                htmlFor="name"
                            >

                                <span>
                                    Username
                                </span>

                                <input
                                    type="text"
                                    placeholder='e.g. @johndoe'
                                    required
                                    ref={handleRef}
                                />

                            </label>
                        
                        </>
                    )
                }

                <label
                    htmlFor="email"
                >

                    <span>
                        Email
                    </span>

                    <input
                        type="email"
                        placeholder='e.g. johndoe@email.com'
                        required
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
                        required
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
                                required
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

                {
                    variant === 'login' && (
                        <Button
                            onClick={addDemoCred}
                            type='button'
                        >
                            Click here to use demo login credentials
                        </Button>
                    )
                }

            </form>

        </Modal>
    )
}