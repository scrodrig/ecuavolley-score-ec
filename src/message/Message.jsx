import { useState, useEffect } from 'react'
import './message.css'

const Message = ({ variant, children, show, setShow }) => {
    // const [show, setShow] = useState(true)

    // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(false)
        }, 500)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    // If show is false the component will return null and stop here
    if (!show) {
        return null;
    }

    // If show is true this will be returned
    return (
        <div className={`absolute alert alert-${variant} dismissible`}>
            {children}
        </div>
    )
}

Message.defaultPros = {
    variant: 'info',
}

export default Message;