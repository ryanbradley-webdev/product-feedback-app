import styles from './button.module.css'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color: 'purple' | 'blue' | 'dark-blue' | 'grey-blue' | 'red' | undefined
    back?: boolean
}

export default function Button({
    color,
    back,
    ...props
}: ButtonProps) {
    return (
        <button
            className={styles[color || 'bare']}
        >

            {back && '<'}

            {props.children}

        </button>
    )
}