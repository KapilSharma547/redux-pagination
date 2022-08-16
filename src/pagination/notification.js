import React from 'react'
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

const Notification = () => {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.Uireducer)
    // console.log(notification)
    const handleclose = () => {
        dispatch(
        )
    }

    return (
        <div>
            <Alert />
        </div>
    )
}
export default Notification
