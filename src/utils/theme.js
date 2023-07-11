import { createTheme } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0F1A4E",
        },
        secondary: {
            main: "#2C2C2C",
        },
        background: {
            default: "white"
        }

    },

});

export default theme;