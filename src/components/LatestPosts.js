import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import { Spinner } from 'react-bootstrap';
// import LatestPostsData from '../data/latest_posts.json';

export default class LatestPosts extends Component {
  state = {
    loading: true,
    latestPosts: []
  };
  getLatestPosts = async () => {
    this.setState({ loading: true });
    const latestPostsData = await axios.get('/latest_posts.json');
    await this.setState({ latestPosts: latestPostsData.data });
    this.setState({ loading: false });
  };

  componentDidMount() {
    this.getLatestPosts();
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner
            animation="border"
            variant="primary"
            role="status"
            style={{ marginLeft: '50%', marginTop: 300 }}
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Post LatestPostsData={this.state.latestPosts} />
        )}
      </div>
    );
  }
}
