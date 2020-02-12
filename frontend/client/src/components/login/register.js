import React from 'react';
import {TextField, Button} from '@material-ui/core';
import AlertDialog from './Alert';
import Axios from 'axios';
const Register = ()=>{

    const [name , setName] = React.useState(null);
    const [email , setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [open , setOpen] = React.useState(false);
    const [message , setMessage] = React.useState(null);
    

    const handleClose = ()=>{
        setOpen(false);
    }


    const handleName = e=>{
        setName(e.target.value);
    }

    const handleEmail = e =>{
        setEmail(e.target.value)
    }

    const handlePassword = e =>{
        setPassword(e.target.value)
    }

    const handleSave = ()=>{
        const test = email;
        if(test.indexOf('@')<test.lastIndexOf('.')){
            Axios.post(`http://localhost:4000/users/register`,{
                name : name,
                email : email,
                password : password
            }).then(data=>{
                if(data.data){
                    setOpen(true);
                    setMessage(data.data.message);
                }
            }).catch(err=>{
                setOpen(true);
                setMessage('Error while posting data to server this is notified to the developer we will fix it soon')
                console.log(err);
            })
        }else{
            setOpen(true)
            setMessage('Please Enter a valid mail');
        }
    }

    return(
        <div style={{display : "flex" , justifyContent : "center" , alignContent : "center" , flexDirection: "column" , flexWrap : "wrap"}}>
            <AlertDialog open={open} handleClose={handleClose} message={message} />
            <TextField onChange={handleName} type="text" required label="Fullname" variant="outlined" style={{marginTop:"20px"}} />
            <TextField onChange={handleEmail} type="email" required label="Email" variant="outlined" style={{marginTop:"20px"}} />
            <TextField onChange={handlePassword} type="password" required label="Password" variant="outlined" style={{marginTop:"20px"}} />
            <Button onClick={handleSave} style={{marginTop:"20px"}} variant="contained" color="primary" >
                Register
            </Button>
        </div>
    )
}

export default Register;