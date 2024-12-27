import React, { useContext, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { GameContext } from "../game/GameContext";

export const Connect = () => {
  const { connectDialog, handleConnectDialogClose, handleConnect, handleConnectRoom } =
    useContext(GameContext);
  const input = useRef();

  return (
    <Dialog open={connectDialog} onClose={() => handleConnectDialogClose()}>
      <DialogTitle>Connect to room</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ pb: 2 }}>
          Enter the ID of the user your wish to connect with.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="ID"
          fullWidth
          inputRef={input}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleConnectDialogClose()} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => handleConnectRoom(input.current.value)}
          color="primary"
        >
          Connect
        </Button>
      </DialogActions>
    </Dialog>
  );
};
