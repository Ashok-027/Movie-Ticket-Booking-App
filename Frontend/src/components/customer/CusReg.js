import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



function CusReg() {
    const paperStyle = { padding: 20, height: 'auto', width: 280, margin: "75px 600px" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0', paddingBottom: 5 }
    const initialValues = { firstname: "", lastname: "", emailId: "", loginId: "", password: "" ,confirmpassword: "" , mobileNo: ""};
    const [user, setUser] = useState(initialValues);
    const [userErrors, setUserErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user)
      };

      
      const handleSubmit = (e) => {
        e.preventDefault();
        setUserErrors(validate(user));
        setIsSubmit(true);
        const firstname = user.firstname;
        const lastname = user.lastname;
        const emailId = user.emailId;
        const loginId = user.loginId;
        const password = user.password;
        const confirmPassword = user.confirmpassword;
        const mobileNo = user.mobileNo;
        const users = { firstname,lastname, emailId,loginId,password,confirmPassword, mobileNo }
      
        fetch("http://localhost:8080/api/public/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users)
    }).then(() => {
      console.log("New User Added!")


    })

      
    }
      
      useEffect(() => {
        console.log(userErrors);
        if (Object.keys(userErrors).length === 0 && isSubmit) {
          console.log(user);
        }
      }, [userErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const name = /^[a-zA-Z]+$/i;
        if (!values.firstname) {
          errors.username = "Firstname is required!";
        } else if (!name.test(values.firstname)) {
          errors.firstname = "Firstname should contain only alphabets";
        }
        if (!values.lastname) {
            errors.username = "Lastname is required!";
          } else if (!name.test(values.lastname)) {
            errors.lastname = "Lastname should contain only alphabets";
          }
        if (!values.mobileNo) {
          errors.mobileNo = "Mobile Number required";
        } else if (values.mobileNo.length < 10) {
          errors.mobileNo = "Mobile number must be in 10 Digits";
        } else if (values.mobileNo.length > 10) {
          errors.mobileNo = "Mobile number cannot exceed more than 10 characters";
        }
        if (!values.emailId) {
          errors.emailId = "Email is required!";
        } else if (!regex.test(values.emailId)) {
          errors.emailId = "This is not a valid email format!";
        }
        if (!values.loginId) {
          errors.address = "LoginId is required!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }

        if (!values.confirmpassword) {
            errors.password = "ConfirmPassword is required";
          } else if (values.confirmpassword.length < 4) {
            errors.confirmpassword = "ConfirmPassword must be more than 4 characters";
          } else if (values.confirmpassword.length > 10) {
            errors.confirmpassword = "ConfirmPassword cannot exceed more than 10 characters";
          }
        return errors;
      };
    
    return(
        <>
        <Grid>
        <Paper elevation={10} style={paperStyle}>

<Grid align='center'>
  <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
  <h2>SignUp</h2>
</Grid>

<form onSubmit={handleSubmit}>

  <TextField label='Firstname' name="firstname" placeholder='Enter Firstname' style={{ paddingBottom: 1 }} value={user.firstname} onChange={handleChange} fullWidth />
  <p style={{ color: "red" }}>{userErrors.firstname}</p>
  <TextField label='Lastname' name="lastname" placeholder='Enter Lastname' style={{ paddingBottom: 1 }} value={user.lastname} onChange={handleChange} fullWidth />
  <p style={{ color: "red" }}>{userErrors.lastname}</p>
  
  <TextField label='Email' name="emailId" placeholder='abc@123@gmail.com' style={{ paddingBottom: 1 }} value={user.emailId} onChange={handleChange} fullWidth />
  <p style={{ color: "red" }}>{userErrors.emailId}</p>
  <TextField label='LoginId' name="loginId" placeholder='' style={{ paddingBottom: 1 }} value={user.loginId} onChange={handleChange} fullWidth />
  <p style={{ color: "red" }}>{userErrors.loginId}</p>
  <TextField label='Password' name="password" placeholder='' type='password' style={{ paddingBottom: 1 }} value={user.password} onChange={handleChange} fullWidth />
  <p style={{ color: "red" }}>{userErrors.password}</p>
  <TextField label='confirmPassword' name="confirmpassword" placeholder='' type='password' style={{ paddingBottom: 1 }} value={user.confirmpassword} onChange={handleChange} fullWidth />
  <p style={{ color: "red" }}>{userErrors.confirmpassword}</p>
  
  <TextField label='MobileNo' name="mobileNo" placeholder='987654321' style={{ paddingBottom: 1 }} value={user.mobileNo} onChange={handleChange} fullWidth />
  <p style={{ color: "red" }}>{userErrors.mobileNo}</p>
  
  <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>
</form>
{Object.keys(userErrors).length === 0 && isSubmit ? (
  window.location.href = "/login"
  ) : (
  ""
)}


</Paper>

</Grid>
</>
)
}  
export default CusReg;