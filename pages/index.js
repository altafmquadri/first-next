import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react';
import Link from 'next/link'

class Index extends Component {
    render() {
        const { posts } = this.props
        return (
            <div>
                <h1>Our Index Page!!</h1>
                <ul>
                    {posts.map(p => (
                        <li key={p.id}>
                            <Link href={`/post?id=${p.id}`}><a>{p.title}</a></Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
// as={`/p/${p.id}`}

export const getStaticProps = async () => {
    // Call an external API endpoint to get posts.
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    console.log('i am here')
    return {
        props: {
            posts,
        },
    }
}

// functional approach
// const Index = ({ posts }) => {
//     return (
//         <div>
//             <h1>Our Index Page!!</h1>
//             <ul>
//                 {posts.map(p => (
//                     <li key={p.id}>{p.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


export default Index

