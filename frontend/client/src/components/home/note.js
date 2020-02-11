import React from 'react'
import { Paper, Typography } from '@material-ui/core'

export default function note(props) {
    return (
        <div>
            <Paper style={{marginTop : 30 , height : 50 , padding : 20 , width : "80vw"}}>
                <Typography>
                    {props.note.title}
                </Typography>
            </Paper>
        </div>
    )
}
