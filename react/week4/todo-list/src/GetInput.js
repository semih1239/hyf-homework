import React from "react";
import { InputContext } from "./inputContext";

const GetInput = () => {
    const inputContext = React.useContext(InputContext)

    return <input type='text' placeholder='Search for user' onChange={(e) => inputContext.changeSearchedWord(e.target.value)} />
}

export default GetInput;