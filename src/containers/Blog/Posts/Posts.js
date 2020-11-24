import React, { Component } from 'react'
import axiosInstance from '../../../axios'
// import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import './Posts.css'
import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'



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
        // this.props.history.push('/' + id)
        this.props.history.push({ pathname: '/posts/' + id })
    }

    render() {
        let posts = <p style={{ testAlign: 'center' }}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/' + post.id} key={post.id} >
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postClickedHandler(post.id)} />
                    // </Link>
                )
            })
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:postId'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts