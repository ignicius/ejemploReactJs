import { useState, useContext, createContext } from "react";

const Notification = ({ message, status}) => {
    const notificationStyle = {
        position: 'absolute',
        top: 100,
        right: 10,
        width: 'auto',
        height: 'auto',
        backgroundColor: status === 'succes' ? 'olive' : 'red',
        color: 'white',
        padding: '10px 20px 10px 20px'
    }

    if(message === '') return

    return (
        
        <div style={notificationStyle}>
            {message}
        </div>

    )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('succes')


const setNotification = (status, msg) => {
    setMessage(msg)
    setStatus(status)
    setTimeout( () => {
        setMessage('')
    }, 2500)
}

    return (

        <NotificationContext.Provider value={{ setNotification}}>
            <Notification message={ message } status = { status } />
            { children }
        </NotificationContext.Provider>
            
        )
       
    }