import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postAction';

class Post extends Component{
    handleClick = () => {
        const id = this.props.post.id;
        this.props.deletePost(id);
        this.props.history.push('/');
    }
    render(){
        const modifiedPost = this.props.post ? (
            <div className="post-content">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <button onClick={this.handleClick}>Delete Post</button>
            </div>
        ): (
            <div>Loading Post...</div>
        )
        return (
            <div className="post-container">
                {modifiedPost}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProp) =>{
    console.log(state, ownProp)
    return {
        post: state.posts.find(post => post.id == ownProp.match.params.post_id)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);