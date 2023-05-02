import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

import Link from "next/link";

const NavBar = () => {

  const theme = useTheme();

    return ( 
        <Box sx={{ flexGrow: 1, backgroundColor:"#fff", boxShadow:"0px 5px 5px 1px rgba(0,0,0,0.01),0px 5px 5px 1px rgba(0,0,0,0.01),0px 5px 5px 1px rgba(0,0,0,0.01)" }}>
        <AppBar position="static" sx={{p:"5px 0px", boxShadow:"0", backgroundColor:"#fff" }}>
          <Toolbar>
           
            <Typography variant="h4" component="div" sx={{ 
              flexGrow: 1, color:"#000", fontWeight:"600",
              [theme.breakpoints.down('lg')]: {
                fontSize:"25px"
              },
              }}>
            <Link href={"/"} >
              Where in the World?
              </Link>
            </Typography>
            
            {/* <Button sx={{  color:"#000", fontWeight:"500" }}>Dark Mode</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
     
export default NavBar;