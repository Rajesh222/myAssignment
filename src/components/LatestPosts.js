import React, { Component } from 'react';
import Post from './Post';
import LatestPostsData from '../data/latest_posts.json';
export default class LatestPosts extends Component {
  render() {
    return <div><Post LatestPostsData={LatestPostsData} ></Post></div>;
  }
}
