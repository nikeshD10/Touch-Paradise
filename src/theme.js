import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#f7f4f2",
      darker: "#053e85",
    },
    secondary: {
      main: "#8a2ded",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});
