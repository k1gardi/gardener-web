import {useState} from "react";
import type {ChangeEvent} from "react";
import {
  Box,
  Grid,
  Alert,
  TextField,
  FormGroup,
  FormLabel,
  Button,
  Snackbar,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {useTimer} from "../common/use-timer";

const validateInput = (minutes: string) => {
  const pattern = new RegExp(/^[0-9]*/);
  return minutes.match(pattern) && Number(minutes) <= 30;
};

const padZeros = (number: number) => {
  return String(number).padStart(2, "0");
};

export const ManualTimer = () => {
  const [input, setInput] = useState<string | null>(null);
  // const [waterTime, setWaterTime] = useState<number>(0);
  const [inputError, setInputError] = useState<boolean>(false);
  const [startSnackOn, setStartSnack] = useState<boolean>(false);
  // const [timerActive, setTimerActive] = useState<boolean>(false);
  const timer = useTimer();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rawinput = event.target.value;

    if (validateInput(rawinput)) {
      setInputError(false);
      setInput(rawinput);
    } else {
      setInputError(true);
      setInput(rawinput);
    }
  };

  const handleStart = () => {
    if (input && validateInput(input)) {
      setStartSnack(true);
      timer.setTimer(Number(input));
      timer.startTimer();
    } else {
      setInputError(true);
    }
  };

  const handleAbort = () => {
    // Todo: show abort snack
    setStartSnack(false);
    timer.stopTimer();
  };

  const handleCloseSnack = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setStartSnack(false);
  };

  const snackAction = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleCloseSnack}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid
          item
          width="50%"
          component="form"
          sx={{
            // "& .MuiTextField-root": {m: 1, width: "50%"},
            "& .MuiFormGroup-row": {m: 1},
          }}
        >
          <FormLabel sx={{marginBottom: "16px"}} component="legend">
            Enter a time in minutes to water your garden for
          </FormLabel>
          <FormGroup
            row
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              helperText={inputError ? "Time must be <= 30 minutes" : ""}
              error={inputError}
              label="Duration"
              type="number"
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{inputMode: "numeric", min: 1, pattern: "[0-9]"}}
            />
            {timer.isTimerActive ? (
              <Button variant="contained" color="error" onClick={handleAbort}>
                Abort
              </Button>
            ) : (
              <Button variant="contained" color="success" onClick={handleStart}>
                Start
              </Button>
            )}
            <Snackbar
              open={startSnackOn}
              autoHideDuration={4000}
              onClose={handleCloseSnack}
              action={snackAction}
            >
              <Alert severity="success" onClose={handleCloseSnack}>
                Timer succesfully started
              </Alert>
            </Snackbar>
          </FormGroup>
        </Grid>
        {timer.isTimerActive ? (
          <Grid
            item
            width="50%"
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" component="p">
              {padZeros(timer.getMinutes())}:{padZeros(timer.getSeconds())}
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </Box>
  );
};
