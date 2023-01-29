
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { useStyles } from "./MainContainercss"
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { Divider } from '@mui/material';
import { green, pink, blue } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Avatar from '@mui/material/Avatar';
import CardOne from "./CardOne"
import CardTwo from "./CardTwo"
import CardThree from "./CardThree"
import { useState } from "react";

export default function DashBoard() {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#fff',boxShadow:"none" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              display: { xs: 'block', sm: 'none' },
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography  style={{color:'#000'}}variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AniCare
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <TopBar />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '15%', background: '#f1f2f6', borderRadius: 30 }}>
          <SideBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        </div>
        <div style={{ width: '85%', background: '#f1f2f6', borderRadius: 30 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={3}>
              <CardOne />
            </Grid>

            <Grid item xs={12} md={9} style={{ display: 'grid' }}>
              <CardTwo />
            </Grid>

            <Grid item xs={12}>
              <CardThree />
            </Grid>
          </Grid>
        </div>
      </div>
    </div >
  )
}