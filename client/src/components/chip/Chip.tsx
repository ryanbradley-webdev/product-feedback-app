import { Dispatch, SetStateAction } from 'react'
import styles from './chip.module.css'

interface ChipProps extends React.HTMLAttributes<HTMLLabelElement> {
    selected?: boolean
    filterTerm?: 'UI' | 'UX' | 'Enhancement' | 'Bug' | 'Feature'
    setFilters?: Dispatch<SetStateAction<string[]>>
}

export default function Chip({
    selected,
    filterTerm,
    setFilters,
    ...props
}: ChipProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!setFilters) return

        if (e.target.checked) {
            if (filterTerm) {
                setFilters(prevFilters => ([
                    ...prevFilters,
                    filterTerm
                ]))
            } else {
                setFilters([])
            }
        } else {
            if (filterTerm) {
                setFilters(prevFilters => prevFilters.filter(term => (
                    term !== filterTerm
                )))
            } else {
                e.target.checked = true
            }
        }
    }

    return (
        <label
            className={styles.chip}
            {...props}
        >

            <span>
                {filterTerm || 'All'}
            </span>

            <input
                type="checkbox"
                value={filterTerm?.toLowerCase() || 'all'}
                onChange={setFilters ? handleChange : undefined}
                checked={selected}
                disabled={!setFilters}
            />

        </label>
    )
}