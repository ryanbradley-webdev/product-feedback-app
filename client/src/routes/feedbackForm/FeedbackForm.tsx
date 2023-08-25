import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from '../../components/button/Button'
import styles from './feedbackForm.module.css'
import NewIcon from '/icon-new-feedback.svg'
import EditIcon from '/icon-edit-feedback.svg'
import React, { useContext, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import Select from '../../components/select/Select'
import TextArea from '../../components/textArea/TextArea'
import { getAllFeedback } from '../../lib/getAllFeedback'
import { saveFeedback } from '../../lib/saveFeedback'
import Modal from '../../components/modal/Modal'
import { UserContext } from '../../contexts/UserContext'
import { deleteFeedback } from '../../lib/deleteFeedback'

export default function FeedbackForm() {
    const {
        user
    } = useContext(UserContext)

    const [searchParams] = useSearchParams()

    const editId = searchParams.get('id')

    const navigate = useNavigate()

    const { data: items } = useQuery({
        queryFn: getAllFeedback,
        queryKey: ['feedback']
    })

    const {
        mutate: save,
        isLoading: saving
    } = useMutation({
        mutationFn: ({
            feedback,
            id
        }: {
            feedback: FeedbackDraft,
            id: string | null
        }) => saveFeedback(feedback, id),
        onSuccess: id => navigate('/' + id)
    })

    const {
        mutate: remove,
        isLoading: removing
    } = useMutation({
        mutationFn: (id: string) => deleteFeedback(id),
        onSuccess: () => navigate('/')
    })

    const selectedFeedback = items?.find(feedback => feedback.id === editId)

    const [title, setTitle] = useState(selectedFeedback?.title || '')
    const [description, setDescription] = useState(selectedFeedback?.description || '')
    const [category, setCategory] = useState(selectedFeedback?.category || 'UI')
    const [status, setStatus] = useState(selectedFeedback?.status || 'Planned')

    const [titleInvalid, setTitleInvalid] = useState(false)
    const [descriptionInvalid, setDescriptionInvalid] = useState(false)

    const [deleteModalVisible, setDeleteModalVisible] = useState(false)
    const [cancelModalVisible, setCancelModalVisible] = useState(false)

    const toggleModal = (modal: 'delete' | 'cancel') => {
        if (modal === 'delete') {
            setDeleteModalVisible(!deleteModalVisible)
        }

        if (modal === 'cancel') {
            setCancelModalVisible(!cancelModalVisible)
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
        if (!editId || !user) return

        remove(editId)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!user) return

        const newFeedback: FeedbackDraft = {
            title,
            description,
            category,
            status: editId ? status : 'Suggestion',
            upvotes: editId && selectedFeedback ? selectedFeedback.upvotes : 0,
            comments: editId && selectedFeedback ? selectedFeedback.comments : [],
            authorId: user.id
        }

        save({
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
                        onClick={() => navigate('/')}
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
                            disabled={!user}
                        >
                            {
                                saving 
                                ? 
                                'Saving...'
                                :
                                editId
                                ?
                                'Save Changes'
                                :
                                'Add Feedback'
                            }
                        </Button>

                        <Button
                            color='grey-blue'
                            type='button'
                            onClick={() => toggleModal('cancel')}
                        >
                            Cancel
                        </Button>

                        {
                            editId && (
                                <Button
                                    color='red'
                                    type='button'
                                    onClick={() => toggleModal('delete')}
                                    disabled={!user}
                                >
                                    Delete
                                </Button>
                            )
                        }

                    </div>

                </form>
                
            </main>

            <Modal
                visible={cancelModalVisible}
            >

                <h3>
                    Discard {editId ? 'changes' : 'feedback'}?
                </h3>

                <div
                    className={styles.btn_div}
                >

                    <Button
                        color='grey-blue'
                        onClick={() => toggleModal('cancel')}
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

            </Modal>

            {
                editId && (
                    <Modal
                        visible={deleteModalVisible}
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
                                onClick={() => toggleModal('delete')}
                            >
                                Cancel
                            </Button>

                            <Button
                                color='red'
                                onClick={handleDelete}
                            >
                                {removing ? 'Deleting' : 'Delete'}
                            </Button>

                        </div>

                    </Modal>
                )
            }

        </>
    )
}