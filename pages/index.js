import Link from "next/link"

function Home() {
  return (
    <>
      <h1>This is Next Api CRUD practice.</h1>

      <button>
        <Link href="/Comments">Comments</Link>
      </button>
    </>
  )
}
export default Home
