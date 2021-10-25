import {Paper, Box, Typography} from "@mui/material";

export const WeatherForecast = () => {
  return (
    <div>
      <h2>Weather Forecast</h2>
      <Paper elevation={24}>
        <Box p={2}>
          <Typography>Datas</Typography>
        </Box>
      </Paper>
    </div>
  );
};
