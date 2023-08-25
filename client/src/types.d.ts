type SortOption = 'Most Upvotes' | 'Least Upvotes' | 'Most Comments' | 'Least Comments'

type User = {
    userId: string
    name: string
    handle: string
    profileImg?: string
    likedFeedback: string[]
}

type BasicComment = {
    user: User
    comment: string
}

type FeedbackComment = BasicComment & {
    replies: FeedbackCommentReply[]
}

type FeedbackCommentReply = BasicComment & {
    replyTo: string
}

type FeedbackDraft = {
    title: string
    description: string
    upvotes: number
    category: string
    status: string
    comments: FeedbackComment[]
    authorId: string
}

type Feedback = FeedbackDraft & {
    id: string
}

type UserContext = {
    user: User | null,
    signup: (email: string, password: string, passwordConfirm: string, name: string, handle: string, profileImg: string) => void
    signupError: string
    login: (email: string, password: string) => void
    loginError: string
    logout: () => void
    toggleFeedbackLike: (feedbackId: string, upvotes: number) => void
}