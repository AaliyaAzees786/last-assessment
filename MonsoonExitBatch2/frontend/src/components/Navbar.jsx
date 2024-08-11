
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Stack,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
import AddBox from '@mui/icons-material/AddBox';
  
  const Navbar = () => {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                EmployeeApp
              </Typography>
              <Button>
              <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/"}
                >
              <Stack direction="row" spacing={3}>
                <HomeIcon />
            </Stack>
            </Link>
              </Button>
              <Button>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/add"}
                >
                  <Stack direction="row" spacing={3}>
      <AddBox />
    </Stack>
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  };
  
  export default Navbar;
  


