import {createTheme} from "@mui/material/styles";
import {ThemeProvider, Container} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {WeatherForecast} from "./components/weather-forecast";
import {SensorData} from "./components/sensor-data";
import {Controls} from "./components/controls";
import {WeatherProvider} from "./common/weather-query-provider";
import "./App.css";
import {TimerProvider} from "./common/use-timer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0 0 0 0",
        },
      },
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <WeatherProvider>
        <TimerProvider>
          <Container>
            {/* <header>
          </header> */}
            <WeatherForecast />
            <SensorData />
            <Controls />
          </Container>
        </TimerProvider>
      </WeatherProvider>
    </ThemeProvider>
  );
};
