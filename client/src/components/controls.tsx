import {useState} from "react";
import type {ChangeEvent} from "react";
import {
  Paper,
  Box,
  Alert,
  TextField,
  FormGroup,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const Controls = () => {
  const [timer, setTimer] = useState<string | null>(null);
  const [inputError, setInputError] = useState<boolean>(false);
  const [snackOn, setSnack] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const pattern = new RegExp(/^[0-9]*/);
    const input = event.target.value;

    if (input.match(pattern) && (input as unknown as number) <= 30) {
      setInputError(false);
      setTimer(input);
    } else {
      setInputError(true);
    }
  };

  const handleStart = () => {
    setSnack(true);
  };

  const handleCloseSnack = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnack(false);
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
    <div>
      <h2>Controls</h2>
      <Paper elevation={24}>
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
            <Button variant="contained" onClick={handleStart}>
              Start
            </Button>
            <Snackbar
              open={snackOn}
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
      </Paper>
    </div>
  );
};
