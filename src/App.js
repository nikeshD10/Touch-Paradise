import HomePage from "../src/pages/HomePage";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App bg-slate-800">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
