import {
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  Box,
  CardHeader,
} from "@mui/material";
import {useFirebase} from "../common/firebase-provider";

export const SensorData = () => {
  const {sensorData} = useFirebase();

  return (
    <Box p={2}>
      <Typography variant="h3" component="h2">
        Sensor Data
      </Typography>
      <Paper elevation={6}>
        <Box p={2}>
          <Grid container spacing={2}>
            {sensorData ? (
              sensorData.map((data) => (
                <Grid item  key={data.sensorName}>
                  <Card>
                    <CardHeader title={data.sensorName} subheader={data.timeStamp}/>
                    <CardContent sx={{padding: "16px 16px 24px 16px"}}>
                      <Typography variant="body1">{data.measurement}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="subtitle1" component="p">
                Sensor data unavailable
              </Typography>
            )}
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};
