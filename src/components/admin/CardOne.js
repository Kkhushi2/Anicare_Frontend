import { Avatar } from "@mui/material";
import { useStyles } from "./MainContainercss";
import { green, pink, blue } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function CardOne() {
   const classes = useStyles()

   return (
      <div className={classes.mainContainer}>
         <div className={classes.box}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
               <div style={{ fontSize: 17, color: '#ffffff', padding: 2, marginBottom: 30 }}>
                  Rescue Statistics
               </div>
               <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 10 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                     <div style={{ fontSize: 24, color: '#ffffff' }}>40%</div>
                     <div style={{ color: '#636e72', fontSize: 10, marginBottom: 30 }}>Rescued</div>
                  </div>
                  <div style={{ height: 30, width: 1, background: '#636e72', marginBottom: 30 }}></div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                     <div style={{ fontSize: 24, color: '#ffffff' }}>30%</div>
                     <div style={{ color: '#636e72', fontSize: 10, marginBottom: 30 }}>Rescued</div>
                  </div>
               </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
               <div className={classes.iconStyle}>
                  <Avatar sx={{ bgcolor: green[500] }}>
                     <AssignmentIcon />
                  </Avatar>
                  <div style={{ marginLeft: 20 }}><b>100 dogs</b>  were rescued</div>
               </div>
               <div className={classes.iconStyle}>
                  <Avatar sx={{ bgcolor: pink[500] }}>
                     <AssignmentIcon />
                  </Avatar>
                  <div style={{ marginLeft: 20 }}><b>100 dogs</b>  were rescued</div>
               </div>
               <div className={classes.iconStyle}>
                  <Avatar sx={{ bgcolor: blue[500] }}>
                     <AssignmentIcon />
                  </Avatar>
                  <div style={{ marginLeft: 20 }}><b>100 dogs</b>  were rescued</div>
               </div>
            </div>
         </div>
      </div>
   )
}
