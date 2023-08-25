import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from '../../components/button/Button'
import styles from './feedbackForm.module.css'
import NewIcon from '/icon-new-feedback.svg'
import EditIcon from '/icon-edit-feedback.svg'
import React, { useRef, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import Select from '../../components/select/Select'
import TextArea from '../../components/textArea/TextArea'
import { getAllFeedback } from '../../lib/getAllFeedback'
import { saveFeedback } from '../../lib/saveFeedback'

export default function FeedbackForm() {
    const [searchParams] = useSearchParams()

    const editId = searchParams.get('id')

    const { data: items } = useQuery({
        queryFn: getAllFeedback,
        queryKey: ['feedback']
    })

    const { mutate } = useMutation({
        mutationFn: ({
            feedback,
            id
        }: {
            feedback: FeedbackDraft,
            id: string | null
        }) => saveFeedback(feedback, id)
    })

    const selectedFeedback = items?.find(feedback => feedback.id === editId)

    const [title, setTitle] = useState(selectedFeedback?.title || '')
    const [description, setDescription] = useState(selectedFeedback?.description || '')
    const [category, setCategory] = useState(selectedFeedback?.category || 'UI')
    const [status, setStatus] = useState(selectedFeedback?.status || 'Planned')

    const [titleInvalid, setTitleInvalid] = useState(false)
    const [descriptionInvalid, setDescriptionInvalid] = useState(false)

    const deleteRef = useRef<HTMLDivElement>(null)
    const cancelRef = useRef<HTMLDivElement>(null)

    const navigate = useNavigate()

    const toggleModal = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            if (ref.current.style.display) {
                ref.current.style.display = ''
            } else {
                ref.current.style.display = 'none'
            }
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setTitleInvalid(true)
        } else {
            setTitleInvalid(false)
        }

        setTitle(e.target.value)
    }

    const handleDelete = () => {

    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newFeedback = {
            title,
            description,
            category,
            status: editId ? status : 'Suggestion',
            upvotes: editId && selectedFeedback ? selectedFeedback.upvotes : 0,
            comments: editId && selectedFeedback ? selectedFeedback.comments : []
        }

        mutate({
            feedback: newFeedback,
            id: editId
        })
    }

    return (
        <>

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
                            onChange={handleChange}
                            aria-invalid={titleInvalid}
                        />

                        {
                            titleInvalid && (
                                <p
                                    data-invalid={true}
                                >
                                    Can&apos;t be empty
                                </p>
                            )
                        }

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
                                        'Suggestion',
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
                            invalid={descriptionInvalid}
                            setInvalid={setDescriptionInvalid}
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
                            onClick={() => toggleModal(cancelRef)}
                        >
                            Cancel
                        </Button>

                        {
                            editId && (
                                <Button
                                    color='red'
                                    type='button'
                                    onClick={() => toggleModal(deleteRef)}
                                >
                                    Delete
                                </Button>
                            )
                        }

                    </div>

                </form>
                
            </main>

            <div
                ref={cancelRef}
                className={styles.modal_wrapper}
                style={{
                    display: 'none'
                }}
            >

                <div
                    className={styles.modal}
                >

                    <h3>
                        Discard {editId ? 'changes' : 'feedback'}?
                    </h3>

                    <div
                        className={styles.btn_div}
                    >

                        <Button
                            color='grey-blue'
                            onClick={() => toggleModal(cancelRef)}
                        >
                            Cancel
                        </Button>

                        <Button
                            color='red'
                            onClick={() => navigate(-1)}
                        >
                            Discard
                        </Button>

                    </div>

                </div>

            </div>

            {
                editId && (
                    <div
                        ref={deleteRef}
                        className={styles.modal_wrapper}
                        style={{
                            display: 'none'
                        }}
                    >

                        <div
                            className={styles.modal}
                        >

                            <h3>
                                Delete feedback?
                            </h3>

                            <p>
                                This can not be undone.
                            </p>

                            <div
                                className={styles.btn_div}
                            >

                                <Button
                                    color='grey-blue'
                                    onClick={() => toggleModal(deleteRef)}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    color='red'
                                    onClick={handleDelete}
                                >
                                    Delete
                                </Button>

                            </div>

                        </div>

                    </div>
                )
            }

        </>
    )
}