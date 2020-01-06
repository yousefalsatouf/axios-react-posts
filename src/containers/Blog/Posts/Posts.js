import React, {Component} from 'react';
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import './Posts.css';

class Posts extends Component
{
    state = {
        posts: [],
        selectPostId: null,
        error: false
    };

    componentDidMount()
    {
        axios.get('/posts')
            .then(response => {
                const data = response.data.slice(0, 4);// get four posts ...
                const updatePosts = data.map(post => {
                    return {
                        ...post,
                        author: "Yousef"
                    }
                });
                this.setState({posts: updatePosts});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    postClickedHandler = (id) => {
        this.setState({selectPostId: id})
    };


    render()
    {

        let posts = <p style={{textAlign: 'center', color: 'red'}}>Something went wrong !</p>
        if(!this.state.error)
        {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={()=>this.postClickedHandler(post.id)}
                />;
            });
        }

        return (
            <section className="Posts">
                { posts }
            </section>
        );
    }
}

export default Posts;