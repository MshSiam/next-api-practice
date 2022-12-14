import { comments } from "../../../data/comments"

function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments)
  } else if (req.method === "POST") {
    const comment = req.body.comment
    const newComment = {
      id: Date.now(),
      text: comment
    }
    console.log(newComment)
    comments.push(newComment)
    res.status(201).json(newComment)
  }
}
export default handler
