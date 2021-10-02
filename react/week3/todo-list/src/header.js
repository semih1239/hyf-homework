import React, { useEffect } from 'react';

function GetTimer() {
    const [time, timer] = React.useState(0)
    useEffect(() => {
        setInterval(() => {
            timer(time => time + 1)
        }, 1000)
    }, [])

    const render = <div>
        <h1>Todolist</h1>
        <p>You have used {time} seconds on this website</p>
    </div>
    return render
}

export default GetTimer;