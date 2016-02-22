import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';


class PostIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }

  renderList(){
    return this.props.posts.map((post, key)=>{
      return (
        <Link to={`posts/${post.id}`} key={key}>
          <li className='list-group-item' >
            <span className='pull-xs-right'>{post.categories}</span>
            <strong>{post.title}</strong>
          </li>
        </Link>
      )
    })
  }

  render(){
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>Add Post!</Link>
        </div>
        <ul className='list-group'>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts.all
  }
}


export default connect(mapStateToProps, { fetchPosts })(PostIndex);
