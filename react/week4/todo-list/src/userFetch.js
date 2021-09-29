import React from "react";
import { inputContext } from './inputContext'

const FetchPart = () => {
    const [userDatas, changeUserDatas] = React.useState('')
    
    function fetchResults() {
        fetch(`https://api.github.com/search/users?q=${searchedWord}`)
            .then(res => res.json())
            .then(data => {
                if (data.items) {
                    changeUserDatas(data.items.map(data => data.login))
                }
            })
    }
}