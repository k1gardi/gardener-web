import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {WeatherForecast} from "./components/weather-forecast";
import {SensorData} from "./components/sensor-data";
import {Controls} from "./components/controls";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        {/* <header>
        </header> */}
        <WeatherForecast />
        <SensorData />
        <Controls />
      </div>
    </ThemeProvider>
  );
};
