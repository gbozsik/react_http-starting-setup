import React, { Component } from 'react'
import axiosInstance from '../../../axios'
import { Link } from 'react-router-dom'

import './Posts.css'
import Post from '../../../components/Post/Post'



class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        console.log(this.props)
        axiosInstance.get('https://jsonplaceholder.typicode.com/posts/').then(response => {
            const posts = response.data.slice(0, 4)
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'max'
                }
            })
            this.setState({ posts: updatedPosts })
        })
            .catch(error => {
                this.setState({ error: true })
            })
    }

    postClickedHandler = (id) => {
        this.setState({ selectedPostId: id })
    }

    render() {
        let posts = <p style={{ testAlign: 'center' }}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Link
                    to={'/' + post.id}
                    key={post.id} >
                    <Post
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postClickedHandler(post.postId)} />
                </Link>
            })
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts