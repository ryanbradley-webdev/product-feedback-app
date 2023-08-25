import { useState } from 'react'
import Dropdown from '../dropdown/Dropdown'
import styles from './select.module.css'

export default function Select({
    options,
    selectedOption,
    setOption
}: {
    options: string[]
    selectedOption: string
    setOption: (arg: string) => void
}) {
    const [optionsVisible, setOptionsVisible] = useState(false)

    const toggleOptionsVisible = () => {
        setOptionsVisible(!optionsVisible)
    }

    const selectOption = (option: string) => {
        setOption(option)
        toggleOptionsVisible()
    }

    return (
        <div
            className={styles.select}
            onClick={toggleOptionsVisible}
        >

            <p>
                {selectedOption}
            </p>
            
            <Dropdown
                selectedOption={selectedOption}
                options={options}
                visible={optionsVisible}
                selectOption={selectOption}
                fullWidth
            />

        </div>
    )
}