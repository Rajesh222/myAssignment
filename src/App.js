import React from 'react';
import { Container } from 'react-bootstrap';
import LatestPostsData from './data/latest_posts.json';
import LatestPosts from './components/LatestPosts';
import './App.css';

function App() {
  return (
    <Container>
      <LatestPosts posts={LatestPostsData} />
    </Container>
  );
}

export default App;
