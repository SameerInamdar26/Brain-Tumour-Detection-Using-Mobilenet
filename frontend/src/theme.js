import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" }, // Blue
    secondary: { main: "#9c27b0" }, // Purple
    background: { default: "#f0f2f5" }, // Light gray
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h6: { fontWeight: 600 },
  },
});

export default theme;
