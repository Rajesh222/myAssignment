import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class Post extends Component {
  render() {
    const posts = this.props.LatestPostsData;
    const renderposts = posts.map(post => {
      return (
        <Row className="latest-post" key={post.id}>
          <Col sm={12} xs={12} md={4}>
            <img
              height="100%"
              width="100%"
              src={post.thumbnail_url}
              alt={post.title}
            />
          </Col>
          <Col sm={12} xs={12} md={8}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={`/postdetails/${post.id}`}>Read More ...</Link>
          </Col>
        </Row>
      );
    });
    return <div>{renderposts}</div>;
  }
}
