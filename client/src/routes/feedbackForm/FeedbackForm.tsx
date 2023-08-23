import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from '../../components/button/Button'
import styles from './feedbackForm.module.css'
import NewIcon from '/icon-new-feedback.svg'
import EditIcon from '/icon-edit-feedback.svg'
import { useState } from 'react'
import { SAMPLE_FEEDBACK } from '../../sampleData/feedback'
import { useQuery } from '@tanstack/react-query'
import Select from '../../components/select/Select'
import TextArea from '../../components/textArea/TextArea'

export default function FeedbackForm() {
    const [searchParams] = useSearchParams()

    const editId = searchParams.get('id')

    const { data: items } = useQuery({
        queryFn: () => SAMPLE_FEEDBACK,
        queryKey: ['feedback']
    })

    const selectedFeedback = items?.find(feedback => feedback.id === editId)

    const [title, setTitle] = useState(selectedFeedback?.title || '')
    const [description, setDescription] = useState(selectedFeedback?.description || '')
    const [category, setCategory] = useState(selectedFeedback?.category || 'UI')
    const [status, setStatus] = useState('Planned')

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <main
            className={styles.main}
        >
            
            <header
                className={styles.header}
            >

                <Button
                    back
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </Button>

            </header>

            <form
                onSubmit={handleSubmit}
                className={styles.form}
            >

                <img
                    src={editId ? EditIcon : NewIcon}
                />

                <h3>
                    {editId ? 'Editing \'' + title + '\'' : 'Create New Feedback'}
                </h3>

                <div
                    className={styles.field}
                >

                    <h5>
                        Feedback Title
                    </h5>

                    <p>
                        Add a short, descriptive headline
                    </p>

                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                </div>

                <div
                    className={styles.field}
                >

                    <h5>
                        Category
                    </h5>

                    <p>
                        Choose a category for your feedback
                    </p>

                    <Select
                        selectedOption={category}
                        options={[
                            'UI',
                            'UX',
                            'Feature',
                            'Enhancement',
                            'Bug'
                        ]}
                        setOption={setCategory}
                    />

                </div>

                {
                    editId && (
                        <div
                            className={styles.field}
                        >

                            <h5>
                                Update Status
                            </h5>

                            <p>
                                Change feature state
                            </p>

                            <Select
                                selectedOption={status}
                                options={[
                                    'Planned',
                                    'In-Progress',
                                    'Live'
                                ]}
                                setOption={setStatus}
                            />

                        </div>
                    )
                }

                <div
                    className={styles.field}
                >

                    <h5>
                        Feedback Detail
                    </h5>

                    <p>
                        Include any specific comments on what should be improved, added, etc.
                    </p>

                    <TextArea
                        userComment={description}
                        setUserComment={setDescription}
                    />

                </div>

                <div
                    className={styles.btn_div}
                >

                    <Button
                        color='purple'
                    >
                        {editId ? 'Save Changes' : 'Add Feedback'}
                    </Button>

                    <Button
                        color='grey-blue'
                        type='button'
                    >
                        Cancel
                    </Button>

                    {
                        editId && (
                            <Button
                                color='red'
                                type='button'
                            >
                                Delete
                            </Button>
                        )
                    }

                </div>

            </form>
            
        </main>
    )
}