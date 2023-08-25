import BackCaret from '../../assets/BackCaret'
import styles from './button.module.css'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color?: 'purple' | 'blue' | 'dark-blue' | 'grey-blue' | 'red'
    back?: boolean
    type?: 'button'
    disabled?: boolean
}

export default function Button({
    color,
    back,
    type,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            className={styles[color || 'bare']}
            type={type}
            disabled={disabled}
            {...props}
        >

            {back && <BackCaret />}

            {props.children}

        </button>
    )
}