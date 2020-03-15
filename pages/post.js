import fetch from 'isomorphic-unfetch'

const Post = ({ id, comments }) => {
    return (
        <div>
            <h1>Comments for Post {id} </h1>
            {comments.map(comment => (
                <Comment key={comment.id} {...comment} />
            ))}
        </div>
    );
}

const Comment = ({ email, body }) => (
    <div>
        <h5>{email}</h5>
        <p>{body}</p>
    </div>
)

export default Post;

export async function getServerSideProps({ query }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
    const data = await res.json()
    return {
        props: {
            ...query, comments: data
        }, // will be passed to the page component as props
    }
}

