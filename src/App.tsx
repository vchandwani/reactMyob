import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Blog from './container/Blog';
import ThemeWrapper from './utils/ThemeWrapper';

function App() {
  return (
    <ThemeWrapper>
      <Container title="mainDiv" data-testid="mainDiv">
        <Blog />
      </Container>
    </ThemeWrapper>
  );
}

export default App;
