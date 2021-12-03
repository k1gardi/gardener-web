import {createTheme} from "@mui/material/styles";
import {ThemeProvider, Container, Typography, Paper, Box} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {UseSwitchesCustom} from "./components/theme-toggle";
import {WeatherForecast} from "./components/weather-forecast";
import {SensorData} from "./components/sensor-data";
import {Controls} from "./components/controls";
import {WeatherProvider} from "./common/weather-query-provider";
import "./App.css";
import {TimerProvider} from "./common/use-timer";
import {FirebaseProvider} from "./common/firebase-provider";
import {initializeApp} from "firebase/app";
import {getDatabase, ref} from "firebase/database";
import {firebaseConfig} from "./common/firebase-config";
import {useCallback, useState} from "react";

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const databaseRef = ref(database);

export const useFirebaseConfig = () => ({
  firebaseApp,
  database,
  databaseRef,
});

const universalThemes = {
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0 0 0 0",
        },
      },
    },
  },
};
const lightTheme = createTheme({
  ...universalThemes,
  palette: {
    mode: "light",
  },
});
const darkTheme = createTheme({
  ...universalThemes,
  palette: {
    mode: "dark",
  },
});

export const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleToggleTheme = useCallback(() => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <WeatherProvider>
        <FirebaseProvider>
          <TimerProvider>
            <Container>
              <header>
                <Typography variant="h2" component="h1">
                  The Garden Project
                </Typography>
                <UseSwitchesCustom
                  checked={darkMode}
                  onChange={handleToggleTheme}
                />
              </header>
              <Paper elevation={24}>
                <Box p={4}>
                  <WeatherForecast />
                  <SensorData />
                  <Controls />
                </Box>
              </Paper>
            </Container>
          </TimerProvider>
        </FirebaseProvider>
      </WeatherProvider>
    </ThemeProvider>
  );
};
