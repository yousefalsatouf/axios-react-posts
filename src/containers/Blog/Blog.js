import React, { Component } from 'react';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import './Blog.css';
import {Route, Link} from "react-router-dom";

class Blog extends Component
{

    render ()
    {

        return (
            <div>
                <header>
                    <nav className="Nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-post">Add Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;