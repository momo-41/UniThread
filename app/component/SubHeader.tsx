import { Box, AppBar, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
const SubHeader = () => {
return (<Box sx={{ flexGrow: 1 }}>
<AppBar position="static" elevation={0} sx={{backgroundColor:"#31A5B1"}}>
<Toolbar variant="dense"sx={{minHeight: 42}}>
<Button color="inherit" size="large" sx={{'&:hover': {backgroundColor: '#0B737F',borderRadius: 0}}} href="/thread">スレッド</Button>
<Button color="inherit" size="large" sx={{'&:hover': {backgroundColor: '#0B737F',borderRadius: 0}}} href="/article">みんなの記事</Button>
<Button color="inherit" size="large" sx={{'&:hover': {backgroundColor: '#0B737F',borderRadius: 0}}} href="/question">質問</Button>
</Toolbar>
</AppBar>
</Box>
)}
export default SubHeader