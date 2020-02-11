import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';

export default function Page() {
    const token = useSelector(state=>state.authenticate.login);

    if(token){
        return <Redirect to="/editor" />
    }
    return (
        <div>
            
        </div>
    )
}
