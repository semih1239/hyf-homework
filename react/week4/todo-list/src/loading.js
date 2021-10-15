import React from 'react';
import { InputContext } from './inputContext';

const Loading = () => {
    const context = React.useContext(InputContext)

    return <><br /> {context.loading === true ? "Loading" : " "} <br /></>
}

export default Loading