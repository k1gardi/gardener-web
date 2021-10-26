import {Paper, Typography} from "@mui/material";
import {ManualTimer} from "./manual-control";

export const Controls = () => {
  return (
    <div>
      <Typography variant="h3" component="h2">
        Controls
      </Typography>
      <Paper elevation={12}>
        <ManualTimer />
      </Paper>
    </div>
  );
};
