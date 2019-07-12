import React from 'react';
import { Container } from 'react-bootstrap';
import LatestPosts from './components/LatestPosts';
import PostDetails from './components/PostDetails';
import './App.css';

function App() {
  return (
    <Container>
      <PostDetails />
      <LatestPosts />
    </Container>
  );
}

export default App;
