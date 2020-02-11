import React from 'react'
import Axios from 'axios'
import { useSelector } from 'react-redux'
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';



export default function SingleNote(props) {
    
    const token = useSelector(state=>state.authenticate.login);
    const [note , setNote] = React.useState(null);
    const options = {
        headers:{
            'token' : token
        }
    }

    React.useEffect(()=>{
        Axios.get(`http://localhost:4000/notes/notes/${props.match.params.id}`,options)
        .then(data=>{
            // console.log(data.data);
            if(data.data.success){
                setNote(data.data.data)
            }else{
                alert("Error While Fetching data");
            }
        }).catch(err=>{
            alert(err);
        })
    },[])

    if(!token){
        return <Redirect to="/login" />
    }
    else if(note){
        return (
            <div className="ql-editor container" >
                <Paper>
                    <Typography variant="h4" style={{textAlign : "center"}}>
                        {note.title}
                    </Typography>
                    <div style={{marginTop : 15}}>
                            <div dangerouslySetInnerHTML={{__html : note.data}} />
                    </div>
                </Paper>
            </div>
        )
    }else{
        return(
            <div>
                <Paper>
                   Loading
                </Paper>
            </div>
        )
    }
}
