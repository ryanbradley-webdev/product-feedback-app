type SortOptions = 'most-upvotes' | 'least-upvotes' | 'most-comments' | 'least-comments'

type User = {
    id: string
    name: string
    handle: string
    profileImg?: string
}

type BasicComment = {
    id: string
    user: User
    comment: string
}

type FeedbackComment = BasicComment & {
    replies: FeedbackCommentReply[]
}

type FeedbackCommentReply = BasicComment & {
    replyTo: string
}

type Feedback = {
    id: string
    title: string
    description: string
    upvotes: number
    category: 'Feature' | 'UI' | 'UX' | 'Enhancement' | 'Bug'
    comments: FeedbackComment[]
}