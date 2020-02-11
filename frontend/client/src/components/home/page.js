import React from 'react'
import { useSelector } from 'react-redux'

export default function Page() {
    const token = useSelector(state=>state.authenticate.login);

    return (
        <div>
            Home Component
        </div>
    )
}
