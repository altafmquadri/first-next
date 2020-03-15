import React, { Component } from 'react';
import fetch from 'node-fetch'

class Blog extends Component {
    render() {
        console.log(this.props)
        return (
            <ul>
                {this.props.posts.title}
                {/* {this.props.posts.map(post => (
                    <li>{post.title}</li>
                ))} */}
            </ul>
        )

    }
}


export const getStaticProps = async () => {
    // Call an external API endpoint to get posts.
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const posts = await res.json()
    return {
        props: {
            posts
        },
    }

}

export default Blog