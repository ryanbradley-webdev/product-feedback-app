import { useContext, useRef } from 'react'
import styles from './footer.module.css'
import { UserContext } from '../../contexts/UserContext'
import Button from '../button/Button'

export default function Footer() {
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
        <footer
            className={styles.footer}
        >

            {
                !user && (
                    <>
                    
                        <h3>
                            Log in to add to the conversation
                        </h3>

                        <form
                            onSubmit={handleSubmit}
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

                            <Button>
                                Log In
                            </Button>

                        </form>
                    
                    </>
                )
            }

        </footer>
    )
}