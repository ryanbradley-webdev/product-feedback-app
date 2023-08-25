type SortOption = 'Most Upvotes' | 'Least Upvotes' | 'Most Comments' | 'Least Comments'

type User = {
    name: string
    handle: string
    profileImg?: string
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
}

type Feedback = FeedbackDraft & {
    id: string
}

type UserContext = {
    user: User | null
}