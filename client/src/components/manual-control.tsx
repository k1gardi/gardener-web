import {useState} from "react";
import type {ChangeEvent} from "react";
import {
  Box,
  Alert,
  TextField,
  FormGroup,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Countdown from "react-countdown";

const validateInput = (minutes: string) => {
  const pattern = new RegExp(/^[0-9]*/);
  return minutes.match(pattern) && Number(minutes) <= 30;
};

export const ManualTimer = () => {
  const [input, setInput] = useState<string | null>(null);
  const [waterTime, setWaterTime] = useState<number>(0);
  const [inputError, setInputError] = useState<boolean>(false);
  const [startSnackOn, setStartSnack] = useState<boolean>(false);
  const [timerActive, setTimerActive] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rawinput = event.target.value;

    if (validateInput(rawinput)) {
      setInputError(false);
      setInput(rawinput);
    } else {
      setInputError(true);
    }
  };

  const handleStart = () => {
    if (input && validateInput(input)) {
      setStartSnack(true);
      setTimerActive(true);
      setWaterTime(Number(input));
    } else {
      setInputError(true);
    }
  };

  const handleAbort = () => {
    // Todo: show abort snack
    setStartSnack(false);
    setTimerActive(false);
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
      <FormGroup row>
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
        {timerActive ? (
          <Button variant="contained" color="error" onClick={handleAbort}>
            Abort
          </Button>
        ) : (
          <Button variant="contained" color="success" onClick={handleStart}>
            Start
          </Button>
        )}
        {timerActive && waterTime && (
          <Countdown date={Date.now() + waterTime * 60 * 1000} />
        )}

        <Snackbar
          open={startSnackOn}
          autoHideDuration={5000}
          onClose={handleCloseSnack}
          action={snackAction}
        >
          <Alert severity="success" onClose={handleCloseSnack}>
            This is a success message!
          </Alert>
        </Snackbar>
      </FormGroup>
    </Box>
  );
};
