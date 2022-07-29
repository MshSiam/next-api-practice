import { useState } from "react"
import styles from "../../styles/comment.module.css"

function CommentPage() {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")

  const fetchComments = async () => {
    const response = await fetch("/api/comments")
    const data = await response.json()
    setComments(data)
    console.log(data)
  }

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "content-type": "application/json"
      }
    })
    const data = await response.json()
    console.log(data)
  }

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE"
    })
    const data = await response.json()
    console.log(data)
    fetchComments(data)
  }
  return (
    <>
      <input
        type="text"
        placeholder="Your Comment"
        onChange={(e) => setComment(e.target.value)}
      />
      <br />
      <button onClick={submitComment}>Submit Comment</button>
      <br />
      <br />
      <br />
      <button className={styles.btn} onClick={fetchComments}>
        Load All Comments
      </button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h1>{comment.id}</h1>
            <h2>{comment.text}</h2>
            <button className="dlt" onClick={() => deleteComment(comment.id)}>
              Delete
            </button>
          </div>
        )
      })}
    </>
  )
}

export default CommentPage
