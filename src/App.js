// import './App.css';
import { Container } from "./App.style";
import { Routes, Route, NavLink } from 'react-router-dom';

import styled from "styled-components";

import Home from "./components/pages/Home";
import Tweets from "./components/pages/Tweets";
import NotFound from "./components/pages/NotFound";

const StyledLink = styled(NavLink)`
display: inline-block;
text-decoration: none;
padding: 12px;
font-weight: 500;
color: #2a363b;
border-bottom: 1px solid #1976D2;
}

&.active {
color: white;
background-color: #1976D2;
}
`;

function App() {
  return (
    <Container>
      <nav>
        <StyledLink to="/" end>Home</StyledLink>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
