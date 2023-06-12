import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const ThemeButton = (props) => {


    const theme = useContext(ThemeContext);

    return (
        <button style={{...theme}} onClick={props.toggleTheme}>Toggle theme</button>
    )
}

export default ThemeButton;