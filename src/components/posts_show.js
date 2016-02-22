import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    this.props.fetchPost(this.props.params.id)
  }

  handleDeleteClick(){
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/')
      })
  }

  render(){
    return (
      <div>
        <Link to='/'>Back to index</Link>
        <button className='btn btn-danger pull-xs-right'
        onClick={handleDeleteClick.bind(this)}>
        Delete Post</button>
          <h3>{this.props.post.title}</h3>
          <h4>Categories:{this.props.post.categories}</h4>
          <p>{this.props.post.content}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    post: state.posts.post
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
