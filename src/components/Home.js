import axios from 'axios';
import React ,{Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    state = {
        posts: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            this.setState({
                posts: res.data.slice(0,10)
            });
        })
    }
    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post=>{
                return (<div className="post-content" key={post.id}>
                    <Link to={'/'+post.id}>
                        <span className="post-title">{post.title}</span>                 
                    </Link>                    
                    <p>{post.body}</p>
                </div>)
            })           
        ) : (
                <div>
                    No Post yet!
                </div>
        )
        return (
            <div className="Home">
                <h3>Home Content</h3>
                {postList}
            </div>
        )
    }
}
export default Home;