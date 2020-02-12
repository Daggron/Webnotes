import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { TextField, Button, makeStyles  } from '@material-ui/core'
import Axios from 'axios'
import AlertDialog from './Alert';
import {Add_Auth} from '../redux/actions/action'


const usestyles = makeStyles({
    conatiner : {
        display : "flex",
        justifyContent : "center",
        flexDirection : "column",
        alignItems : "center",
        flexGrow : 1,
        padding : 50,
        alignContent : "space-between"
    }
})

export default function Log() {

    const styles = usestyles();

    const [username , setUsername] = React.useState(null);
    const [password , setPassword] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [message , setMessage ] = React.useState(null);

    const dispatch = useDispatch();


    const handleUsername = (event)=>{
        setUsername(event.target.value);
    }

    const handlePassword = (event)=>{
        setPassword(event.target.value);
    }

   
    
    const handleClose = () => {
      setOpen(false);
    };
  


    const handleLogin = async ()=>{
        try{
        let data = await Axios.post('http://localhost:4000/users/login',{
                email : username,
                password : password
            })
            if(data){
               if(data.data.success){
                   setOpen(true);
                   setMessage(data.data.message);
                   localStorage.setItem('authToken' , data.data.token);
                   dispatch(Add_Auth(data.data.token))
               }
            }
        }
        catch(Err){
            alert(Err)
        }
    }

        const authtoken = useSelector(state=>state.authenticate.login);

        if(authtoken){
            return <Redirect to="/" />
        }else{
    
            return (
                <div className={styles.conatiner}>
                    <AlertDialog open={open} handleClose={handleClose} message={message}/>
                <TextField label="Username" value={username} variant="outlined" onChange={handleUsername} style={{margin : 10}} />
                <TextField label="Password" value={password} variant="outlined" onChange={handlePassword}  style={{margin : 10}} />
                <Button variant="contained" color="primary" onClick={handleLogin}>
                    Login
                </Button>
                </div>
            )
        }
    
}
