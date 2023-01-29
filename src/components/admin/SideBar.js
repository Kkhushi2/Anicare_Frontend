import React from 'react'
import { useStyles } from "./SideBarcss.js"
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import HouseIcon from '@mui/icons-material/House';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PetsIcon from '@mui/icons-material/Pets';
import { Box, Drawer } from "@mui/material";


export default function SideBar(props) {
  const drawerWidth = 185;
  const classes = useStyles()
  const { window } = props;
  const { mobileOpen, setMobileOpen } = props;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div style={{ background: '#f1f2f6', borderRadius: 30 }}>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <div className={classes.rootDiv}>
            <div className={classes.logoStyle} style={{ marginBottom: 70, marginRight: 70, padding: 2, marginLeft: 42 }}>


            </div>

            <div className={classes.divStyle}>
              <Stack direction="row" spacing={1} >
                <Avatar
                  alt="Remy Sharp"
                  src="user1.jpg"
                  sx={{ width: 58, height: 58 }}
                />
              </Stack>
            </div>
            <div className={classes.dashboardTextStyle} style={{ marginLeft: 30, marginBottom: 40 }}>
              <b>Khushi Sappal</b>
              <div style={{ marginLeft: 30, color: '#dcdde1' }}>CEO</div>
            </div>


            <MenuList>

              <MenuItem>

                <HouseIcon />

                <ListItemText style={{ padding: 5 }}>Dashboard</ListItemText>

              </MenuItem>


              <MenuItem>
                <SupportAgentIcon />
                <ListItemText style={{ padding: 5 }}>Rescue Requests</ListItemText>
              </MenuItem>

              <MenuItem>
                <PetsIcon />
                <ListItemText style={{ padding: 5 }}>Previous Requests</ListItemText>
              </MenuItem>
            </MenuList>
          </div>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <div className={classes.rootDiv}>


            <div className={classes.divStyle}>
              <Stack direction="row" spacing={1} >
                <Avatar
                  alt="Remy Sharp"
                  src="user1.jpg"
                  sx={{ width: 58, height: 58 }}
                />
              </Stack>
            </div>
            <div className={classes.dashboardTextStyle} style={{ marginLeft: 30, marginBottom: 40 }}>
              <b>Khushi Sappal</b>
              <div style={{ marginLeft: 30, color: '#dcdde1' }}>CEO</div>
            </div>


            <MenuList>

              <MenuItem>

                <HouseIcon />

                <ListItemText style={{ padding: 5 }}>Dashboard</ListItemText>

              </MenuItem>


              <MenuItem>
                <SupportAgentIcon />
                <ListItemText style={{ padding: 5 }}>Rescue Requests</ListItemText>
              </MenuItem>

              <MenuItem>
                <PetsIcon />
                <ListItemText style={{ padding: 5 }}>Previous Requests</ListItemText>
              </MenuItem>




            </MenuList>

          </div>
        </Drawer>
      </Box>

    </div>
  )
}