import React, { Component } from 'react';

import Posts from './Posts/Posts';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent'

const AsyncNewPost = asyncComponent(() => {
    return import ('./NewPost/NewPost')
})

class Blog extends Component {

    state = {
        auth: true
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        let authenticated = this.state.auth
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
                                to="/posts/" exact>Posts</NavLink></li>
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
                <Switch>
                    {authenticated ? <Route path='/new-post' exact component={AsyncNewPost} /> : null}
                    <Route path='/posts/' component={Posts} />
                    <Route render={() => <h1>Not found</h1>}/>
                    {/* <Redirect from='/' to='/posts/' /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;