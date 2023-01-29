import { useStyles } from "./MainContainercss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";


export default function CardThree() {
  const classes = useStyles()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  }

  var dogsList = [{ 'id': 1, 'name': 'Whiskey', 'pic': '1.jpg' },
  { 'id': 2, 'name': 'Jimmy', 'pic': '2.jpg' },
  { 'id': 3, 'name': 'Sky', 'pic': '3.jpg' },
  { 'id': 4, 'name': 'Tequila', 'pic': '4.jpg' },
  { 'id': 5, 'name': 'scotch', 'pic': '5.jpg' },
  { 'id': 6, 'name': 'Blue', 'pic': '6.jpg' },
  { 'id': 7, 'name': 'Kookie', 'pic': '7.jpg' },
  { 'id': 8, 'name': 'Tommy', 'pic': '8.jpg' },
  ]

  const dogView = () => {
    return dogsList.map((item) => {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
          <div style={{  }}>
            <div className={classes.boxdogimg}>
              <img src={`${item.pic}`} width="80" />
              <div style={{ fontSize: 10 }}>{item.name}</div>
            </div>
          </div>
        </div>
      )

    })

  }


  return (
    <div className={classes.boxthree}>

      <Grid container spacing={0} style={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={12} md={3}>
          <div style={{ /*flexDirection: 'column', display: 'flex', marginRight: 200, marginBottom: 40, marginTop: 10 */padding: '5% 1% 5% 1%' }}><b>Rescued Floofs</b>
            <div style={{ marginTop: 20 }}>"say cheese" floofballs</div><div>meet our floofballs</div></div>
        </Grid>
        <Grid item xs={12} md={9}>
          <div style={{ width: '95%',padding:'2%' }}>
            <Slider {...settings}>
              {dogView()}
            </Slider>
          </div>
        </Grid>
      </Grid>
    </div>

    // <div className={classes.boxthree}>

    //   <div style={{ flexDirection: 'column', display: 'flex', marginRight: 200, marginBottom: 40, marginTop: 10 }}><b>Rescued Floofs</b>
    //     <div style={{ marginTop: 20 }}>"say cheese" floofballs</div><div>meet our floofballs</div></div>

    //     <div style={{ width: '50%' }} >

    //     <Slider {...settings}>

    //       {dogView()}
    //     </Slider>
    //   </div>
    // </div>

  )
}
