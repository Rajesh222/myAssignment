import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Post extends Component {

    render() {
        const posts = this.props.LatestPostsData;
        const renderposts = posts.map(post => {
          return <Row className="latest-post" key={post.id}>
          <Col xs={4}>
            <img height="250" width="300" src={post.thumbnail_url} alt={post.title}></img>
          </Col>
          <Col xs={8}>
          <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </Col>
          </Row>
        });
        return (
            <div>
                {renderposts}
            </div>
        )
    }
}
