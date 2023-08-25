export const getCommentLength = (comments: FeedbackComment[]) => {
    const { length } = comments

    const replyLength = comments.map(comment => comment.replies.length).reduce((prev, curr) => prev + curr, 0)

    return length + replyLength
}