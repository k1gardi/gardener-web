import {
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from "@mui/material";
import {useWeather} from "../common/weather-query-provider";
import placeholderIcon from "../assets/sunny.png";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const WeatherForecast = () => {
  const weatherData = useWeather();

  return (
    <Box p={2}>
      <Typography variant="h3" component="h2">
        Weather Forecast
      </Typography>
      <Paper elevation={6}>
        <Box p={2}>
          <Grid container spacing={1}>
            {weatherData.length === 0 ? (
              <Typography>Unable to fetch weather data</Typography>
            ) : (
              weatherData.map((day, index) => {
                return (
                  <Grid item width="20%" key={`weather-card-${index}`}>
                    <Card>
                      <CardHeader
                        title={`${months[(day.date.slice(5, 7) as unknown as number) - 1]} ${day.date.slice(-2)}`}
                        sx={{padding: "8px 8px 8px 8px", textAlign: "center"}}
                      />
                      <CardContent
                        sx={{
                          padding: "0px 8px 0px 8px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            padding: "8px 0px 8px 0px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <img
                            src={placeholderIcon}
                            alt=""
                            style={{objectFit: "contain"}}
                          />
                          <div style={{}}>
                            <Typography
                              variant="subtitle2"
                              component="p"
                              sx={{textAlign: "right"}}
                            >
                              High: {day.high}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              component="p"
                              sx={{textAlign: "right"}}
                            >
                              Low: {day.low}
                            </Typography>
                          </div>
                        </div>
                        <Typography
                          variant="subtitle2"
                          component="p"
                          style={{margin: 0, textAlign: "center"}}
                        >
                          Precipitation: {day.precipitation}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })
            )}
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};
