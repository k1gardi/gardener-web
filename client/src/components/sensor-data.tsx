import {
  // Grid,
  // Card,
  // CardContent,
  Typography,
  Paper,
  Box} from "@mui/material";

export const SensorData = () => {
  return (
    <div>
      <Typography variant="h3" component="h2">
        Sensor Data
      </Typography>
      <Paper elevation={12}>
        <Box p={2}>
          <Typography variant="subtitle1" component="p">
            Coming Soon!
          </Typography>
          {/* <Grid container spacing={2}>
            <Grid item width="50%">
              <Card>
                <CardContent>
                  <Typography>Sensor 1</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item width="50%">
              <Card>
                <CardContent>
                  <Typography>Sensor 2</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item width="50%">
              <Card>
                <CardContent>
                  <Typography>Sensor 3</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item width="50%">
              <Card>
                <CardContent>
                  <Typography>Sensor 4</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid> */}
        </Box>
      </Paper>
    </div>
  );
};
