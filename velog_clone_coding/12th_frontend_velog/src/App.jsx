import { styled, ThemeProvider } from "styled-components";

import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar"
import Information from "./components/Information";

const Wrapper = styled.div`
  width: 80vw;
  height: 100vh;
  background-color: #f5f5f5;

  * {
    border: 0;
  }
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <TopBar></TopBar>
        <NavBar></NavBar>
        <Information></Information>
        <Outlet />
      </Wrapper>
    </>
  );
};

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
