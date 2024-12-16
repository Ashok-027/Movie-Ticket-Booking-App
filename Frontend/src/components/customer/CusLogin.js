import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link} from '@material-ui/core'
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './CusLogin.css';




function CusLogin() {
    const paperStyle = { padding: 20, height: '60vh', width: 300, margin: "100px 600px" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' , paddingBottom : 5}
    const[loginId,setLoginId]=useState('')
    const[password,setPassword]=useState('')
    const[msg,setMsg]=useState('');
    const API_URL = "http://localhost:8080/";
    
    localStorage.setItem("isLogged",false);
     

    {/*const handleClick= async(e)=>{

       e.preventDefault();
       return axios
       .post(API_URL + "authenticate", {
         username,
         password,
       })
       .then((response) => {
        console.log(response.data.token)
         if (response.data.token) {
           
           localStorage.setItem("token", JSON.stringify(response.data.token));
           localStorage.setItem("id", JSON.stringify(response.data.id));
           localStorage.setItem("username", JSON.stringify(response.data.username));
           localStorage.setItem("isLogged", true)
         }
         if (response.status === 200) {
            window.location.href = "/CustomerHomepage";
            window.alert("Login successfull")
            return;
          }
          else {
              setMsg("Invaid username or password")
              return;
          }
        });
      

   };*/}

    return (
        <>
    
        < Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}></Avatar>
                    <h2>Customer Login</h2>
                </Grid>
                <TextField label='LoginId' placeholder='Enter loginId' style={{paddingBottom : 5}} value={loginId}  onChange={(e)=>setLoginId(e.target.value)}fullWidth required />
                <TextField label='Password' placeholder='Enter password' type='password' style={{paddingBottom : 15}} value={password} onChange={(e)=>setPassword(e.target.value)} fullWidth required />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>
                
                <Typography > Do you have an account ?
                    <Link href="/signup" >
                        Sign Up
                    </Link>
                </Typography>
                <div>
                    <h4 style={{color:"red",textAlign:'center',marginTop:'20px'}}>{msg}</h4>
                </div>
            </Paper>
            </Grid>
            </>

    )
}
export default CusLogin;
