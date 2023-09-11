import { Navbar } from "./components";
import { Home } from "./pages";
import "./App.css";
import { LayoutContainer } from "./styled-components";

const App = () => {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </>
  );
};

export default App;
