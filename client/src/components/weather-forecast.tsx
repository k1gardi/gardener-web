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
import {css} from "@emotion/react";

export const WeatherForecast = () => {
  const weatherData = useWeather();

  return (
    <div>
      <Typography variant="h3" component="h2">
        Weather Forecast
      </Typography>
      <Paper elevation={12}>
        <Box p={2}>
          <Grid container spacing={2}>
            {weatherData.length === 0 ? (
              <Typography>Unable to fetch weather data</Typography>
            ) : (
              weatherData.map((day, index) => {
                return (
                  <Grid item xs={1}>
                    {/* <p key={`weather-tile-${index}`}>
                      {`${day.high}, ${day.low}, ${day.icon}, ${day.precip}, `}
                    </p> */}
                    <Card>
                      <CardHeader title={day.day} sx={{padding: "0 8 0 8"}} />
                      <CardContent>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: 'space-between',
                          }}
                        >
                          <img
                            src={day.icon}
                            alt=""
                            style={{objectFit: "contain"}}
                          />
                          <div style={{}}>
                            <Typography sx={{textAlign: 'right'}}>Hi: {day.high}</Typography>
                            <Typography sx={{textAlign: 'right'}}>Low: {day.low}</Typography>
                          </div>
                        </div>
                        <p style={{margin: 0, textAlign: "center"}}>
                          {day.precip}
                        </p>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })
            )}
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};
