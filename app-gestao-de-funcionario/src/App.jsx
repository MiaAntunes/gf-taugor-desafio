import { GlobalStyle } from "./GlobalStyles";
import { GlobalState } from "./components/context/GlobalState";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <GlobalState>
        <GlobalStyle/>
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
