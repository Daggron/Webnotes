import React from 'react'
import Axios from 'axios'
import {useSelector, useDispatch } from 'react-redux'
import {Add_All} from '../redux/actions/action';
import AlertDialog from '../login/Alert';
import Note from './note';
import {Redirect} from 'react-router-dom'

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
        //eslint-disable-next-line
    },[])

    const notes = useSelector(state=>state.add_note)

    if(!token){
        return <Redirect to="/login" />
    }
    return (
        <div>
            <AlertDialog open={open} handleClose={handleClose} message={message} />
            <div style={{ height : "100%" , width : "80vw" , marginLeft : "10vw",display : "flex" , justifyContent : "center" , alignItems : "center" , alignContent:"center" ,flexDirection : "column" , flexWrap : "wrap"}}>
                {
                    notes.map(eachNote=>{
                        return <Note note={eachNote} key={eachNote._id} />
                    })
                }
            </div>
        </div>
    )
}
