import {WeatherForecast} from "./components/weather-forecast";
import {SensorData} from "./components/sensor-data";
import {Controls} from "./components/controls";
import "./App.css";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
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
