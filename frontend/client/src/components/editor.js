import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Typography } from '@material-ui/core';
import Axios from 'axios';
import {Add_Note} from '../components/redux/actions/action'
import { Redirect } from 'react-router-dom';


var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];


export default function Editor() {

    const modules = {
        toolbar : toolbarOptions
    }

    const [note,setNote] = React.useState(null);

    const handleChange = (e)=>{
        setNote(e);
    }

    const [title , setTitle] = React.useState(null);

    const handleTitle = (e)=>{
        setTitle(e.target.value)
        console.log(title);
    }

    const dispatch = useDispatch();
    
    const token = useSelector(state=>state.authenticate.login)
    const option ={headers : {'token':token} }
    const handleSave = (e)=>{
        Axios.post('http://localhost:4000/notes/postnote',{
            title : title,
            data : note
        },option
        ).then(data=>{
            console.log(data.data);
            dispatch(Add_Note(title,note));
        }).catch(err=>{
            console.log(err);
        })
    }

    if(token){

    return (
        <React.Fragment>
                <Typography variant="h2">
                    Make a note
                </Typography>
                <TextField onChange={handleTitle} label="Title of the note" variant="outlined" style={{width : "70vw"}} />
                <ReactQuill onChange={handleChange} className="editor" modules={modules} style={{height : "100vh" , width : "70vw" , margin : "auto" , marginTop: 10 , marginLeft : "15vw" }} />
        </React.Fragment>
    )
    }else{
        return <Redirect to="/" />
    }
}
