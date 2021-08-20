import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../Pokemon.jpg';
import { connect } from 'react-redux';

class Home extends Component{    
    render(){
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post=>{
                return (
                <div className="post-content" key={post.id}>
                    <img src={Pokemon}></img>
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
const mapStateToProps = (state) =>{
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home);