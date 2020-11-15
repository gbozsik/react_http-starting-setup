import React, { Component } from 'react';

import Posts from './Posts/Posts';
import './Blog.css';
import { Route, NavLink } from 'react-router-dom';
import NewPost from '../../containers/Blog/NewPost/NewPost'
import FullPost from '../../containers/Blog/FullPost/FullPost'

class Blog extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                            activeClassName='my-active'
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }} 
                            to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",  // whit match.url build relative path /new-post will be appended to current path
                                hash: '#submit',    // append for exaple id after path
                                search: '?quik-submit=true' //query param
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1>} />
                <Route path='/' exact render={() => <h1>Home 2</h1>} /> */}
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' exact component={NewPost} />
                <Route path='/:postId' exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;