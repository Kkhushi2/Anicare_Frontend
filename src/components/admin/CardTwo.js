import { useStyles } from "./MainContainercss";
import { Divider, Grid } from '@mui/material';
import { Avatar } from "@mui/material";
import Slider from "react-slick";

export default function CardTwo() {
   const classes = useStyles()

   return (

      <div className={classes.boxtwo}>
         <div className={classes.boxtwoin}>
            <Grid container spacing={0} style={{ display: 'flex', alignItems: 'center' }}>
               <Grid item xs={12} md={1}style={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
                  <Avatar
                     alt="Remy Sharp"
                     src="paws.jpg"
                     sx={{ width: 58, height: 58 }}
                  />
               </Grid>
               <Grid item xs={12} md={11}>
                  <div style={{ alignItems: 'center', padding: 10, flexDirection: 'column', display: 'flex', justifyContent: 'center' }}><b>Progressive Animal Welfare Society (paws) <Divider color="#363636" /> </b>
                     <div style={{ alignItems: 'center', padding: 10, flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
                        We have great news about this animal! They are currently meeting
                        with potential adopters and our fingers and PAWS are crossed it’s
                        a good match. Unfortunately, we aren’t able to answer inquiries about adoption pending animals.</div>
                  </div>
               </Grid>
            </Grid>
            {/* <div style={{ fontSize: 17, color: '#000', flexDirection: 'row', display: 'flex' }}>

               
            </div> */}
         </div>
      </div>

   )
}