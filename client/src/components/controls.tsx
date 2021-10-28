import {Paper, Typography} from "@mui/material";
import { Box } from "@mui/system";
import {ManualTimer} from "./manual-control";

export const Controls = () => {
  return (
    <Box p={2}>
      <Typography variant="h3" component="h2">
        Controls
      </Typography>
      <Paper elevation={6}>
        <ManualTimer />
      </Paper>
    </Box>
  );
};
