import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{backgroundColor:"#31A5B1"}}>
  <Toolbar variant="dense"sx={{height: 42, minHeight: 42}}>
    <Button color="inherit" size="large" sx={{'&:hover': {backgroundColor: '#0B737F',borderRadius: 0}}} href="/thread">スレッド</Button>
    <Button color="inherit" size="large" sx={{'&:hover': {backgroundColor: '#0B737F',borderRadius: 0}}} href="/article">みんなの記事</Button>
    <Button color="inherit" size="large" sx={{'&:hover': {backgroundColor: '#0B737F',borderRadius: 0}}} href="/question">質問</Button>
  </Toolbar>
</AppBar>
    </Box>
  );
}