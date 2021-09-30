import React from "react";
import { InputContext } from './inputContext'
import './App.css';

const UserName = (props) => {
    return <div >{props.username}</div>
}

const UserNames = () => {
    const gitUserNames = React.useContext(InputContext)

    return <>
        <br /> {gitUserNames.loading === true ? "Loading" : " "} <br />
        <div>
            {gitUserNames.userDatas.map(data => <UserName username={ data.login ? data.login : data } key={ data.id ? data.id : 1 } />)}
        </div>
    </>
}



export default UserNames