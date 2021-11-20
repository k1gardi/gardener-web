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
import sunnyIcon from "../assets/sunny.png";
import cloudyIcon from "../assets/cloudy.png";
import partlyCloudyIcon from "../assets/partly-cloudy.png";
import rainyIcon from "../assets/rainy.png";

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

const getWeatherIcon = (iconId: number) => {
  if (iconId <= 5) {
    return sunnyIcon;
  }
  if (iconId <= 11) {
    return cloudyIcon;
  }
  if (iconId <= 18) {
    return rainyIcon;
  }
  return partlyCloudyIcon;
};

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
              <Typography>No weather data found</Typography>
            ) : (
              weatherData.map((day, index) => {
                return (
                  <Grid item width="20%" key={`weather-card-${index}`}>
                    <Card>
                      <CardHeader
                        title={`${
                          months[
                            (day.date.slice(5, 7) as unknown as number) - 1
                          ]
                        } ${day.date.slice(-2)}`}
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
                            src={getWeatherIcon(day.icon)}
                            alt=""
                            style={{objectFit: "contain"}}
                          />
                          <div>
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
