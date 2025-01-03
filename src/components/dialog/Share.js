import React, { useState, useContext, useRef, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  ThemeProvider,
} from "@mui/material";
import { GameContext } from "../game/GameContext";
import { theme } from "../../Theme";

export const Share = () => {
  const { shareDialog, handleShareDialogClose, player, roomCode, startListenerRoom, shouldContinueListenRoom } =
    useContext(GameContext);
  const [id, setId] = useState("");
  const [code, setCode] = useState("");
  const [urlCode, setUrlCode] = useState("");
  const input = useRef();
  const inputURL = useRef();

  useEffect(() => {
    setId(player.id);
  }, [player]);

  useEffect(() => {
    setCode(roomCode);
    const fullUrl = window.location.href;
    setUrlCode(`${fullUrl}?code=${roomCode}`)
  }, [roomCode]);

  // Start listener for room messages
  useEffect(() => {
    if(shareDialog && !shouldContinueListenRoom){
      startListenerRoom()
    }
  }, [shareDialog]);

  return (
    <Dialog open={shareDialog} onClose={() => handleShareDialogClose()}>
      <ThemeProvider theme={theme}>
        <DialogTitle>Share</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Share this Code with anyone you want to connect with.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="ID"
            fullWidth
            value={code}
            onChange={(e) => setId(e.target.value)}
            InputProps={{
              readOnly: true,
            }}
            inputRef={input}
          />
          <DialogContentText sx={{ mb: 2 }}>
            or this link.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="ID"
            fullWidth
            value={urlCode}
            onChange={(e) => setId(e.target.value)}
            InputProps={{
              readOnly: true,
            }}
            inputRef={inputURL}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleShareDialogClose()} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              input.current.select();
              document.execCommand("copy");
              handleShareDialogClose();
            }}
            color="primary"
          >
            Copy
          </Button>
        </DialogActions>
      </ThemeProvider>
    </Dialog>
  );
};
