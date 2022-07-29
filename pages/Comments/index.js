import { useState } from "react"

function CommentPage() {
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    const response = await fetch("/api/comments")
    const data = await response.json()
    setComments(data)
    console.log(data)
  }
  return (
    <>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h1>{comment.id}</h1>
            <h2>{comment.text}</h2>
          </div>
        )
      })}
    </>
  )
}

export default CommentPage
