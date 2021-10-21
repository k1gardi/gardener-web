import {useState} from "react";
import type {ChangeEvent} from "react";
import {Paper, Box, Typography, TextField} from "@mui/material";

export const Controls = () => {
  const [timer, setTimer] = useState<string | null>(null);
  const [inputError, setInputError] = useState<boolean>(false);

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
  return (
    <div>
      <h2>Controls</h2>
      <Paper elevation={24}>
        <Box p={2}>
          <Typography>Hello</Typography>
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
        </Box>
      </Paper>
    </div>
  );
};
