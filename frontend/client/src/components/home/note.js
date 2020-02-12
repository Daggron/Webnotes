import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function note(props) {
    return (
        <div style={{cursor : 'pointer'}}>
            <Link to={`/notes/${props.note._id}`}>
                <Paper style={{marginTop : 30 , height : 50 , padding : 20 , width : "80vw" , textAlign : "center"}}>
                    <Typography>
                        {props.note.title}
                    </Typography>
                </Paper>
            </Link>
        </div>
    )
}
