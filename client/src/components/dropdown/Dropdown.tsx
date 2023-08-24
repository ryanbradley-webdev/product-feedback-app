import styles from './dropdown.module.css'

export default function Dropdown({
    selectedOption,
    options,
    visible,
    fullWidth,
    selectOption
}: {
    selectedOption: string
    options: string[]
    visible: boolean
    fullWidth?: boolean
    selectOption: (arg: string) => void
}) {
    return (
        <div
            className={styles.dropdown}
            style={{
                height: visible ? options.length * 48 + 'px' : '',
                width: fullWidth ? '100%' : ''
            }}
            data-fullwidth={fullWidth || false}
            aria-hidden={!visible}
        >

            {
                options.map(option => (
                    <button
                        key={crypto.randomUUID()}
                        className={styles.option}
                        data-selected={selectedOption === option}
                        onClick={() => selectOption(option)}
                    >
                        {option}
                    </button>
                ))
            }

        </div>
    )
}