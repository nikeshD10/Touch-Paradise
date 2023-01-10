import HomePage from "../src/pages/HomePage";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/theme";
import "./components/components.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App ">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
