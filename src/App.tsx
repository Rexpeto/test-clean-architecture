import { Provider } from "react-redux";
import { Navbar } from "./components";
import { Home } from "./pages";
import "./App.css";
import { LayoutContainer } from "./styled-components";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  );
};

export default App;
