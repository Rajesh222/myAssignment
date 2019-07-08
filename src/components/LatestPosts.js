import React, { Component } from 'react';

export default class LatestPosts extends Component {
  render() {
    const posts = this.props.posts;
    console.log('posts: ', posts);
    const renderposts = posts.map(post => {
      return <img key={post.id} src={post.thumbnail_url} alt={post.title} />;
    });

    return <div>{renderposts}</div>;
  }
}
