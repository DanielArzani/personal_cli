import styled, { keyframes } from 'styled-components';

function App() {
  return (
    <Wrapper>
      <H1>Welcome</H1>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// Define keyframes for color animation
const colorChange = keyframes`
  0% { color: #f06; }
  25% { color: #0bf; }
  50% { color: #fb0; }
  75% { color: #0fb; }
  100% { color: #f06; }
`;

const H1 = styled.h1`
  font-size: 6.25rem;
  animation: ${colorChange} 8s infinite alternate;
`;
