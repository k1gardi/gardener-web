import {useState, useCallback} from "react";
import {Paper, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {ManualTimer} from "./manual-control";
import {AutoWater} from "./auto-water";
import {useTimer} from "../common/use-timer";

export const Controls = () => {
  const [autoMode, setAutoMode] = useState<boolean>(false);
  const {stopTimer} = useTimer();

  const toggleAutoMode = useCallback(() => {
    setAutoMode(!autoMode);
    stopTimer();
  }, [autoMode, stopTimer]);

  return (
    <Box p={2}>
      <Typography variant="h3" component="h2">
        Controls
      </Typography>
      <Paper elevation={6}>
        <AutoWater autoMode={autoMode} toggleAutoMode={toggleAutoMode} />
        {!autoMode && <ManualTimer />}
      </Paper>
    </Box>
  );
};
