import {createTheme} from "@mui/material/styles";
import {ThemeProvider, Container, Typography, Paper, Box} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {WeatherForecast} from "./components/weather-forecast";
import {SensorData} from "./components/sensor-data";
import {Controls} from "./components/controls";
import {WeatherProvider} from "./common/weather-query-provider";
import "./App.css";
import {TimerProvider} from "./common/use-timer";
// import {FirebaseProvider} from "./common/firebase-provider";
// import {initializeApp} from "firebase/app";
// import {getDatabase, ref, get, child} from "firebase/database";
// import {firebaseConfig} from "./common/firebase-config";

// const firebaseApp = initializeApp(firebaseConfig);
// const database = getDatabase(firebaseApp);
// const databaseRef = ref(database);

// export const useFirebaseConfig = () => ({
//   firebaseApp,
//   database,
//   databaseRef,
// });

const darkTheme = createTheme({
  palette: {
    mode: "light",
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
        {/* <FirebaseProvider> */}
          <TimerProvider>
            <Container>
              {/* <header>
          </header> */}
              <Typography variant="h2" component="h1">
                The Garden Project
              </Typography>
              <Paper elevation={24}>
                <Box p={4}>
                  <WeatherForecast />
                  <SensorData />
                  <Controls />
                </Box>
              </Paper>
            </Container>
          </TimerProvider>
        {/* </FirebaseProvider> */}
      </WeatherProvider>
    </ThemeProvider>
  );
};
