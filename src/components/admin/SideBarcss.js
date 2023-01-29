import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    rootDiv: {
       marginTop:10,
       boxShadow: `rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px`
        
      },
    divStyle: {
        display:'flex',
        flexDirection:'row',
        padding:5,
        justifyContent:'left',
        marginLeft:50,
       
        
      },
  dashboardTextStyle: {
    flexGrow: 1,
    fontSize: 16,
    letterSpacing: 1,
    color: '#000'
    
  },
  avatarStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
    fontSize: 20,
    color: "#273c75",
    padding: 2



  },
  logoStyle: {
    flexGrow: 1,
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: 'bold',
    color: '#000'
  },
  
  userNameStyle: {
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: 'bold',
    color: 'black',
    padding: 2



  }

});


export { useStyles }