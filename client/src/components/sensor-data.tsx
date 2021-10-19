import {Grid, Card, CardContent, Typography} from "@mui/material";

export const SensorData = () => {
  return (
    <div>
      <div>
        <h2>Sensor Data</h2>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>Sensor 1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>Sensor 2</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>Sensor 3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>Sensor 4</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
