import { comments } from "../../../data/comments"

export default function handler(req, res) {
  const { commentId } = req.query
  if (req.methode === "GET") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    )
    console.log(comment)
    res.status(200).json(comment)
  } else if (req.methode === "DELETE") {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    )
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    )
    comments.splice(index, 1)
    console.log(deletedComment)
    res.status(200).json(deletedComment)
  }
}
