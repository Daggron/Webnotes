import React from 'react'
import Axios from 'axios'
import {useSelector, useDispatch } from 'react-redux'
import {Add_All} from '../redux/actions/action';
import AlertDialog from '../login/Alert';

export default function Notes() {

    const [open,setOpen] = React.useState(false);

    const [message , setMessage] = React.useState(null);
    
    const token = useSelector(state=>state.authenticate.login);

    const options = {
        headers : {'token':token}
    }

    const dispatch = useDispatch();

    const handleClose=()=>{
        setOpen(false);
    }

    React.useEffect(()=>{
        Axios.get('http://localhost:4000/notes/notes',options)
        .then(data=>{
            console.log(data.data);
            dispatch(Add_All(data.data.data))
            
        }).catch(err=>{
            
            setMessage("Network Error Has Occured Please Try After Some Time");
            setOpen(true);
        })
    })


    return (
        <div>
            <AlertDialog open={open} handleClose={handleClose} message={message} />
            Hello World
        </div>
    )
}
